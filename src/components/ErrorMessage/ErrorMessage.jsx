
import { useEffect } from "react";
import toast from "react-hot-toast";

const Error = () => {
  useEffect(() => {
    toast.error("Wrong.");
  }, []);

  return null;
};

export default Error;
