
import PropTypes from 'prop-types';

export function Message({ avatar, message, timestamp, userId }) {
  return (
      <div>
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
  userId: PropTypes.string.isRequired
}