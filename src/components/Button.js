import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    const value = ev.target.value;
    this.props.handleClick(value);
  }

  render() {
    const {
      props,
    } = this;


    return (
      <React.Fragment>
        <input className="form__btn" type="submit" value={props.value} onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default Button;
