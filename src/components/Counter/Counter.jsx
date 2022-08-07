import {
  shape,
  exact,
  string,
  bool,
  number,
  oneOfType,
  func,
  object,
} from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'contexts';
import CountDisplay from './CountDisplay';
import CountButton from './CountButton';
import CountContainer from './CountContainer';

/* ----------------------------------------------------------------------- */

export function Counter({
  id,
  buttonProps: { plus, minus },
  onUpdate,
  min,
  max,
  step,
  current,
  style,
  ...restProps
}) {
  const {
    theme: {
      value: { forground, background },
    },
  } = useTheme();

  const [count, setCount] = useState(current);

  useEffect(() => {
    onUpdate?.(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + step);
  }, [step]);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - step);
  }, [step]);

  let isMinValue = count <= min;
  let isMaxValue = count >= max;

  return (
    <CountContainer
      id={id}
      style={{
        ...style,
        background: forground,
        color: background,
      }}
      {...restProps}
    >
      <CountButton
        mode="minus"
        label={minus.label}
        isMin={isMinValue}
        onClick={handleDecrement}
      />
      <CountDisplay>{count}</CountDisplay>
      <CountButton
        mode="plus"
        label={plus.label}
        isMax={isMaxValue}
        onClick={handleIncrement}
      />
    </CountContainer>
  );
}

Counter.defaultProps = {
  buttonProps: {
    minus: {
      label: '카운트 감소',
      withTitle: true,
    },
    plus: {
      label: '카운트 증가',
      withTitle: true,
    },
  },
  min: 1,
  max: 10,
  current: 1,
  step: 1,
};

const StringOrNumberType = oneOfType([number, string]);

const ButtonType = shape({
  label: string,
  withTitle: bool,
});

const ButtonPropsType = exact({
  minus: ButtonType,
  plus: ButtonType,
});

Counter.propTypes = {
  id: string.isRequired,
  buttonProps: ButtonPropsType,
  min: StringOrNumberType,
  max: StringOrNumberType,
  current: StringOrNumberType,
  step: StringOrNumberType,
  onUpdate: func,
  style: object,
};
