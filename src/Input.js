import React from 'react'
import PropTypes from "prop-types"; 
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    let val = e.target.value
    let { onChange, maxLength } = this.props;
    val = val.slice(0, maxLength);
    onChange(val);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    let { value, readOnly, placeholder } = this.props;
    return (
      <>
        <input
          value={value}
          defaultValue={value}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}
Input.defaultProps = {
  maxLength: 10
};
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
};