# Chrome 익스텐션 보일러플레이트 with React

Chrome 익스텐션(확장) 개발을 위한 React 보일러플레이트

## Chrome 익스텐션 프로그램 개발

1. 종속성 패키지 설치 `npm i`
1. 익스텐션 개발 프로세스 실행 명령 `npm run dev`

## Chrome 익스텐션 프로그램 로드

1. Chrome 웹 브라우저 확장 프로그램 관리 페이지 이동 `chrome://extensions`
1. "개발자 모드" 스위치 활성화 (오른쪽 상단에 위치)
1. "압축해제된 확장 프로그램을 로드합니다" 업로드 버튼 클릭
1. 빌드 프로세서에 의해 생성된 `dist` 폴더 선택 업로드

## Chrome 익스텐션 프로그램 배포

1. 프로젝트 배포를 위한 빌드 프로세스 실행 명령 `npm run build`
1. 빌드된 `dist` 폴더를 ZIP 파일로 압축 (예: `dist.zip`)
1. Chrome 웹 스토어 개발자 대시보드에 ZIP 파일을 배포
