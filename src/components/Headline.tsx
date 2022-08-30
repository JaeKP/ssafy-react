import * as React from 'react';

interface HeadlineProps<T extends React.ElementType> {
  as?: T;
  children: React.ReactNode;
}

export function Headline<T extends React.ElementType = 'h2'>({
  as,
  children,
  ...restProps
}: HeadlineProps<T> &
  Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof HeadlineProps<T>
  >): JSX.Element {
  // `as` prop → 컴포넌트 이름 설정
  const ComponentName = as ?? 'h2';

  return <ComponentName {...restProps}>{children}</ComponentName>;
}
