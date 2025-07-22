import React, { useState } from "react";
import './reminder.css';
import { auth } from "../firebase";

const Reminder = () => {
  const [reminderTime, setReminderTime] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");
  const [isReminderSet, setIsReminderSet] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSetReminder = () => {
    if (!reminderTime || !reminderMessage) {
      alert("Please provide both a time and message for the reminder.");
      return;
    }

    const reminderDate = new Date(reminderTime);
    const currentTime = new Date();

    if (reminderDate <= currentTime) {
      alert("Please select a future time for your reminder.");
      return;
    }

    const timeUntilReminder = reminderDate - currentTime;

    setTimeout(() => {
      alert(reminderMessage);
      setIsReminderSet(false); 
    }, timeUntilReminder);

    const email = auth.currentUser?.email;
    setUserEmail(email || "your registered email");
    setIsReminderSet(true);
  };

  return (
    <div className="reminder-container">
      <h2>Set Your Hydration Reminder</h2>
      {!isReminderSet ? (
        <div>
          <div className="input-group">
            <label htmlFor="reminder-time">Reminder Time:</label>
            <input
              type="datetime-local"
              id="reminder-time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="reminder-message">Reminder Message:</label>
            <input
              type="text"
              id="reminder-message"
              placeholder="What do you want to remind yourself?"
              value={reminderMessage}
              onChange={(e) => setReminderMessage(e.target.value)}
            />
          </div>
          <button className="reminder-btn" onClick={handleSetReminder}>
            Set Reminder
          </button>
        </div>
      ) : (
        <div className="reminder-set-message">
          <p>✅ Reminder is set for <strong>{new Date(reminderTime).toLocaleString()}</strong>.</p>
          <p>📧 Mail sent to <strong>{userEmail}</strong> too!</p>
        </div>
      )}
    </div>
  );
};

export default Reminder;
