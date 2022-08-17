import React from 'react';
import axios from 'axios';
import styles from './App.module.css';
import reactLogo from '@/assets/react.svg';
import { Button } from '@/components';
import { arrayOf, exact, string } from 'prop-types';

export default function App({ buttons: initButtonState }) {
  // 상태 관리
  const [buttonState] = React.useState(initButtonState);

  // 사이드 이펙트
  // - 서버 데이터 통신(요청/응답)
  //    - 로딩, 오류, 데이터
  // - 실제 DOM 노드에 접근/조작 (접근성!!!!!!)
  // - 이벤트 구독/해제
  // - 오류 감지 (오류 경계)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('https://randomuser.me/api');
        // const { results } = await response.json();
        const {
          data: { results },
        } = await axios.get('https://randomuser.me/api');

        const {
          name: { first, last },
          gender,
          email,
          picture: { large: photo },
        } = results[0];

        setUser({
          name: `${first} ${last}`,
          gender,
          email,
          photo,
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    if (error) {
      console.error(error.message);
    }
  }, [error]);

  // 함수 = 기억된 값
  // const handleClickButton = () => {
  //   console.log('clicked button');
  // };

  // const memoizedHandleClickButton = React.useMemo(
  //   () => () => console.log('clicked button'),
  //   [] // 최초 1회만 계산된 값을 반환
  // );

  const memoHandleClickButton = React.useCallback(
    () => console.log('clicked button'),
    [] // 최초 1회만 계산된 값을 반환
  );

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  return (
    <div className={styles.container} lang="en">
      <h1>React + Vite</h1>
      <figure>
        <img src={reactLogo} alt="React" height={100} />
      </figure>
      <figure>
        <img src={user.photo} alt="" />
        <figcaption>
          <ul style={{ textAlign: 'left' }}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.gender}</li>
          </ul>
        </figcaption>
      </figure>
      <div className="buttonGroup" style={{ display: 'flex', gap: 4 }}>
        {buttonState.map(({ id, content, type }) => {
          return (
            <Button key={id} type={type} onUserEvent={memoHandleClickButton}>
              {content}
            </Button>
          );
        })}

        {/* <Button className="extendButton" onUserEvent={memoHandleClickButton}>
          read a document
        </Button>
        <Button type="reset" onMouseEnter={(e) => console.log(e.type)}>
          reset
        </Button> */}
      </div>
    </div>
  );
}

App.defaultProps = {
  buttons: [],
};

const ButtonType = exact({
  id: string,
  content: string,
  type: string,
});

App.propTypes = {
  buttons: arrayOf(ButtonType).isRequired,
};
