import { useEffect } from "react";
import toast from "react-hot-toast";

const useError = (message: string, clearError: () => void) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
      clearError();
    }

    // eslint-disable-next-line
  }, [message]);
};

export default useError;
