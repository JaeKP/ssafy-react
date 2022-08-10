import React from 'react';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    type: 'button',
    className: '',
  };

  render() {
    const { type, className, style, ...restProps } = this.props;

    return (
      <button
        type={type}
        className={`button ${className}`.trim()}
        style={{
          background: '#111',
          color: '#fff',
          ...style,
        }}
        {...restProps} // { children }
      />
    );
  }
}

export function _Button({ type, className, style, ...restProps }) {
  return (
    <button
      type={type}
      className={`button ${className}`.trim()}
      style={{
        background: '#111',
        color: '#fff',
        ...style,
      }}
      {...restProps} // { children }
    />
  );
}

_Button.defaultProps = {
  type: 'button',
  className: '',
};
