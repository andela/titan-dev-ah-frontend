import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  type,
  id,
  placeholder,
  value,
  onChange,
  ...props
}) => (
  <input
    {...props}
    name={name}
    type={type}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
TextInput.defaultProps = {
  value: "",
  id: ""
};

export default TextInput;