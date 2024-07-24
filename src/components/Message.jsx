import PropTypes from "prop-types";
import "../styles/Message.css";
import { auth } from "../firebaseInstance";

export function Message({ avatar, message, timestamp, userId }) {
  const msgClass =
    userId === auth.currentUser.uid ? "message-sent" : "message-received";

  return (
    <div className={msgClass}>
      <img src={avatar} alt="User avatar" />
      <p>{message}</p>
      <span>{timestamp}</span>
    </div>
  );
}

Message.propTypes = {
  avatar: PropTypes.string,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
};
