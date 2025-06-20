import PropTypes from "prop-types";

function Contact__Input({ id, label, value, handleChange, errors }) {
  return (
    <>
      <div className="form_group">
        <input
          className="field"
          placeholder=""
          name={id}
          id={id}
          onChange={handleChange}
          value={value}
        />
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
      <div className="input_error">{errors}</div>
    </>
  );
}

export default Contact__Input;

Contact__Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  errors: PropTypes.string,
};
