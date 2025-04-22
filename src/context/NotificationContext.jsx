import { createContext, useState } from "react";

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const showNotification = (notification, notificationType) => {
    setMessage(notification);
    setType(notificationType);
  };

  return (
    <NotificationContext.Provider
      value={{ message, type, setMessage, setType, showNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
