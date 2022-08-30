// 백그라운드 스크립트
chrome.runtime.onInstalled.addListener(() => {
  console.log(
    'Chrome 익스텐션 프로그램이 처음 설치될 때, 익스텐션 프로그램이 새 버전으로 업데이트될 때, Chrome이 새 버전으로 업데이트될 때 실행됩니다.'
  );
});
