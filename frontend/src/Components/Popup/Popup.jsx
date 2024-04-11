import React, { useState, useEffect } from "react";
import "./Popup.css"; // Import CSS file for styling

const Popup = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("popupShown");

    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true); // Display the popup after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Clean up timer on component unmount
    } else {
      setShowPopup(false); // Close the popup if it has been shown before
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
    onClose(); // Call onClose function provided by parent component
    localStorage.setItem("popupShown", true); // Set a flag in local storage to indicate that the popup has been shown
  };

  return (
    showPopup && (
      <div className="popup-container">
        <div className="popup-content">
          <button className="close-button" onClick={handleClosePopup}>
            X
          </button>
          <h2>Welcome!</h2>
          <p>Please select your role:</p>
          <div className="button-container">
            <a
              href="http://localhost:3000/"
              rel="noopener noreferrer"
              className="user-button"
            >
              User
            </a>
            <a
              href="http://localhost:5173/"
              rel="noopener noreferrer"
              className="shopkeeper-button"
            >
              Shopkeeper
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
