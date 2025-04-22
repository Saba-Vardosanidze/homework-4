import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
const TriggerButtons = () => {
  const { showNotification } = useContext(NotificationContext);
  return (
    <div>
      <button onClick={() => showNotification("Success message", "success")}>
        sccses
      </button>
      <button onClick={() => showNotification("Error message", "error")}>
        error
      </button>
    </div>
  );
};

export default TriggerButtons;
