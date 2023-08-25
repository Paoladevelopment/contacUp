import PropTypes from 'prop-types';

export const Input = ({ type, text, value, onChange, ...otherProps }) => {
  return (
    <label>
      <span className='sr-only'>{text}</span>
      {type === 'file' ? (
        <input
          type='file'
          value={value}
          onChange={onChange}
          className='input-file hidden'
          {...otherProps}
        ></input>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          {...otherProps}
        ></input>
      )}
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
