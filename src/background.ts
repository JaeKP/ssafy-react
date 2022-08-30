chrome.runtime.onInstalled.addListener(() => {
  console.log('토마토 타이머가 설치 및 구성되었습니다.');
});

chrome.storage.local.get(['timeoutOption', 'timer', 'isRunning'], (result) => {
  chrome.storage.local.set({
    timer: result.timer ?? 0,
    timeoutOption: result.timeoutOption ?? 25,
    isRunning: result.isRunning ?? false,
  });
});

chrome.alarms.create('토마토 타이머', {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === '토마토 타이머') {
    chrome.storage.local.get(
      ['timeoutOption', 'timer', 'isRunning'],
      (result) => {
        if (result.isRunning) {
          let isRunning = true;

          let timer = result.timer + 1;
          if (timer === result.timeoutOption * 60) {
            chrome.notifications.create({
              type: 'basic',
              title: '토마토 타이머',
              iconUrl: 'icon.png',
              message: `${result.timeoutOption}분이 지났어요!`,
              eventTime: Date.now(),
            });

            timer = 0;
            isRunning = false;
          }

          chrome.storage.local.set({
            timer,
            isRunning,
          });
        }
      }
    );
  }
});
