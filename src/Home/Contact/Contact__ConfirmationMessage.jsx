import PropTypes from "prop-types";
import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

function Contact__ConfirmationMessage({ hideConfMsg }) {
  return (
    <div id="confirmation-msg">
      <p>
        Thanks for reaching out! I’ve received your message and will get back to you soon
      </p>

      <Butt classs="contact">
        <button className="butt-btn contact msg" onClick={hideConfMsg}>
          <Butt_inside classs="contact msg" text="Send another message" />
        </button>
      </Butt>
    </div>
  );
}

export default Contact__ConfirmationMessage;

Contact__ConfirmationMessage.propTypes = {
  hideConfMsg: PropTypes.func,
};
