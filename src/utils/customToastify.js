import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendEmailToastDark = (msg) => {
  toast.info(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const SendEmailToastLight = (msg) => {
  toast.info(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
