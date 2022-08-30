import './SvgIcon.css';

type SvgIconProps = {
  type: 'send' | 'stop' | 'play' | 'add' | 'reset';
  size: number;
  className?: string;
};

export function SvgIcon({ type, size, className, ...restProps }: SvgIconProps) {
  let d = '';

  switch (type) {
    case 'send':
      d =
        'M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z';
      break;
    case 'stop':
      d =
        'M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z';
      break;
    case 'play':
      d =
        'M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z';
      break;
    case 'add':
      d =
        'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z';
      break;
    case 'reset':
      d =
        'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924a7 7 0 1 0-1.852 1.266l-.975-1.755A5 5 0 1 1 17 12h-3l2.82 5.076z';
      break;
    default:
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      fill="currentColor"
      className={`svgIcon ${className}`.trim()}
      {...restProps}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d={d} />
    </svg>
  );
}

SvgIcon.defaultProps = {
  size: 24,
  className: '',
};
