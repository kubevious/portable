import { OS_LIST, ToolConfig } from "./types";

const DO_CONFIG: ToolConfig = {
  imageTag: "do",
  mappings: {
    "/root/.config/doctl/config.yaml": {
      needWrite: false,
      os: {
        [OS_LIST.OS_DEFAULT]: "~/.config/doctl/config.yaml",
        [OS_LIST.OS_MAC]: "~/Library/Application\\ Support/doctl/config.yaml",
        [OS_LIST.OS_WIN]:
          "%USERPROFILE%/AppData/Local/doctl/config/config.yaml",
      },
    },
  },
};

const GCP_CONFIG: ToolConfig = {
  imageTag: "gcp",
  mappings: {
    "/root/.config/gcloud": {
      needWrite: true,
      os: {
        [OS_LIST.OS_DEFAULT]: "~/.config/gcloud",
        [OS_LIST.OS_WIN]: "%USERPROFILE%/AppData/Roaming/gcloud",
      },
    },
  },
};

const AWS_CONFIG: ToolConfig = {
  imageTag: "aws",
  mappings: {
    "/root/.aws/credentials": {
      needWrite: false,
      os: {
        [OS_LIST.OS_DEFAULT]: "~/.aws/credentials",
        [OS_LIST.OS_WIN]: "%USERPROFILE%/.aws/credentials",
      },
    },
  },
};

export const TOOL_CONFIGS: Record<string, ToolConfig> = {
  doctl: DO_CONFIG,
  gcloud: GCP_CONFIG,
  "gcloud.cmd": GCP_CONFIG,
  aws: AWS_CONFIG,
  "aws-iam-authenticator": AWS_CONFIG,
};
