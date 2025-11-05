import type { Response } from "@/types/globals";
import { toast as sonnerToast } from "sonner";

interface ToastProps {
  promise: Response;
  loading: string;
  success: string | boolean;
}

interface ToastConfig {
  loading: string;
  error: (res: {
    code: number;
    message: string;
  }) => string;
  success?: string | ((res: { code: number; message: string }) => string);
}

/**
 * Displays a toast notification based on the promise result.
 * @param {Response} promise - The promise to handle.
 * @param {string} loading - The loading message.
 * @param {string | boolean} success - The success message or a boolean indicating whether to show the message from the promise.
 */

export const toast = ({ promise, loading, success }: ToastProps) => {
  const wrapped = promise.then((res) => {
    if (res.success) return res.success;
    return Promise.reject(res.error);
  });

  const config: ToastConfig = {
    loading,
    error: (res) => `Error ${res.code}: ${res.message}`,
  };

  if (typeof success === "string") {
    config.success = success;
  } else if (success === true) {
    config.success = (res) => res.message;
  }

  sonnerToast.promise(wrapped, config);
};
