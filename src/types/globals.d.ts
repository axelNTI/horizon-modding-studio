export type TauriResponse = Promise<
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
