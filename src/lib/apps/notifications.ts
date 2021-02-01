import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

const uuidParse = require("uuid-parse");
import moment from "moment";

import { Context } from "../context";
import {
  WorldviousClient,
  NotificationItem,
  FeedbackRequest,
} from "@kubevious/worldvious-client";

export class NotificationsApp {
  private context: Context;
  private _logger: ILogger;

  private _worldvious: WorldviousClient;

  private _isDictLoaded = false;
  private _allNotifications: NotificationItem[] = [];
  private _notifications: NotificationItem[] = [];
  private _snooseDict: Record<
    string,
    { isRead?: boolean; snoozeTill?: moment.Moment }
  > = {};

  constructor(context: Context) {
    this.context = context;
    this._logger = context.logger.sublogger("NotificationsApp");

    this._worldvious = this.context.worldvious;
  }

  get logger() {
    return this._logger;
  }

  get notificationItems() {
    return this._notifications;
  }

  init() {
    this._worldvious.onNotificationsChanged((notifications) => {
      this._allNotifications = notifications;
      this._decideNotifications();
    });
  }

  private _decideNotifications() {
    if (!this._isDictLoaded) {
      return;
    }
    this.logger.info(
      "Current Notifications: %s ",
      this._allNotifications.length
    );

    const now = moment();
    this._notifications = this._allNotifications.filter((x) => {
      const notif = <FeedbackRequest>x;
      const key = this._makeKey(notif.kind, notif.id);
      const snoozeInfo = this._snooseDict[key];
      if (snoozeInfo) {
        if (snoozeInfo.isRead) {
          return false;
        }
        if (now.isBefore(snoozeInfo.snoozeTill)) {
          return false;
        }
      }
      return true;
    });
    this.logger.info("Visible Notifications: %s ", this._notifications.length);

    this.context.websocket.update(
      { kind: "notifications" },
      {
        notifications: this._notifications,
      }
    );
    this.context.websocket.update(
      { kind: "notifications-info" },
      {
        count: this._notifications.length,
      }
    );
  }

  private _makeKey(kind: string, id: string) {
    return `${kind}-${id}`;
  }
}
