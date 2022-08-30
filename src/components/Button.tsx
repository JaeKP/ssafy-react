import './Button.css';
import React from 'react';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
  className?: string;
  label: string;
  [key: string]: unknown;
}

function Button({
  type,
  label,
  className,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button ${className}`}
      title={label}
      aria-label={label}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: '',
};

export const MemoButton = React.memo(Button);
