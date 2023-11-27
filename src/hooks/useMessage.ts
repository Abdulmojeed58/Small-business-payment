import { useEffect } from "react";
import toast from "react-hot-toast";

const useMessage = (message: string, clearMessage: () => void) => {
  useEffect(() => {
    if (message) {
      toast.success(message);
      clearMessage();
    }

    // eslint-disable-next-line
  }, [message]);
};

export default useMessage;
