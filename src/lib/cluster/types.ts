
export enum OS_LIST {
    OS_MAC = "Mac OS X",
    OS_LINUX = "Linux",
    OS_WIN = "Windows",
    OS_DEFAULT = "default",
}
  

export interface ToolConfig {
    imageTag: string;
    mappings: Record<
      string,
      {
        needWrite: boolean;
        os: Record<string, string>;
      }
    >;
}
  
  
export interface ClusterConfig {
    name: string
    cluster: Record<string, any> | null
    user: Record<string, any> | null
    imageTag: string | null
    toolMappings: Record<string, string>
    kind: string,
    ready: boolean;
    messages: string[];
    fileMappings: Record<string, {
        needWrite: boolean,
        os: Record<string, string>
    }>
    hostOverride: string | null
};