export type Response = Promise<
  | {
      success: {
        code: number;
        message: string;
        data?: unknown;
      };
      error?: never;
    }
  | {
      success?: never;
      error: {
        code: number;
        message: string;
      };
    }
>;

export type Mod = {
  name: string;
  path: string;
  local_path: string;
  dependencies?: string[];
  tags?: string[];
  picture?: string;
  remote_file_id?: string;
  supported_version?: string;
};
