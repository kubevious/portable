import { ProcessorInfo, Handler } from "../types";

export function Processor(): ProcessorBuilder {
  return new ProcessorBuilder();
}

export class ProcessorBuilder {
  private _data: ProcessorInfo = { order: 0, isDisabled: false };

  constructor() {}

  disable() {
    this._data.isDisabled = true;
    return this;
  }

  order(value: number) {
    this._data.order = value;
    return this;
  }

  handler(value: Handler) {
    this._data.handler = value;
    return this;
  }

  _export(): ProcessorInfo {
    return this._data;
  }
}
