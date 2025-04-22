import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
const Notification = () => {
  const { message } = useContext(NotificationContext);
  return <div>{message}</div>;
};

export default Notification;
