import "./Alert.css"
const Alert = ({ message, type, onClose }) => {
    const alertType = {
      success: "bg-green-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500"
    };
  
    return (
      <div className={`alert right-14 md:right-1/2 ${alertType[type]} text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between`} role="alert">
        <span>{message}</span>
        <button onClick={onClose} className="text-xl font-bold">&times;</button>
      </div>
    );
  };
export default Alert  