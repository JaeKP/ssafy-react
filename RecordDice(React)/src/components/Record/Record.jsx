import styles from './Record.module.css';
import { Wrapper } from '@/components';
import { string, arrayOf, oneOf, exact, number } from 'prop-types';

/* List --------------------------------------------------------------------- */

function List({ caption, headers, children, ...restProps }) {
  return (
    <Wrapper className={styles.wrapper} {...restProps}>
      <table className={styles.list}>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map(({ id, scope, content }) => (
              <th key={id} scope={scope}>
                {content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Wrapper>
  );
}

List.propTypes = {
  caption: string.isRequired,
  headers: arrayOf(
    exact({
      id: string,
      scope: oneOf(['col', 'row']),
      content: string,
    }).isRequired
  ).isRequired,
};

/* Item --------------------------------------------------------------------- */

function Item({ values, ...restProps }) {
  return (
    <tr {...restProps}>
      {values.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}

Item.propTypes = {
  values: arrayOf(number),
};

export const Record = {
  List,
  Item,
};
