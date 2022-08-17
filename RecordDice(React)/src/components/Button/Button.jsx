import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

export class _Button extends React.Component {
  static defaultProps = {
    type: 'button',
    className: '',
  };

  render() {
    const { type, className, style, onUserEvent, ...restProps } = this.props;

    return (
      <button
        type={type}
        className={`button ${className}`.trim()}
        style={{
          background: '#111',
          color: '#fff',
          ...style,
        }}
        onClick={onUserEvent}
        {...restProps} // { children, onClick }
      />
    );
  }
}

export function Button({ type, className, style, onUserEvent, ...restProps }) {
  return (
    <button
      type={type}
      // className={`button ${className}`.trim()}
      className={classNames(styles.base, className)}
      onClick={onUserEvent}
      style={{
        background: '#111',
        color: '#fff',
        ...style,
      }}
      {...restProps} // { children }
    />
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
};

Button.propTypes = {
  // 'button' | 'reset' | 'submit'
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  // type(props, propName, componentName) {
  //   let value = props[propName];
  //   let propType = typeof value;
  //   // button, reset, submit
  //   if (propType !== 'string') {
  //     throw new TypeError(
  //       `${componentName} 컴포넌트에 전달된 ${propName} prop의 기대 타입은 string이나, 전달된 타입은 ${propType} 입니다.`
  //     );
  //   }
  // },
};
