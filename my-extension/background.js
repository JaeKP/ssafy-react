chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarms) => {
  chrome.storage.local.get(['timer', 'isRunning'], (response) => {
    let time = response.timer ?? 0;
    let isRunning = response.isRunning ?? true;

    if (!isRunning) return;

    chrome.storage.local.set({ timer: time + 1 });
    chrome.action.setBadgeText({ text: `${time + 1}` });

    chrome.storage.sync.get(['interval'], (response) => {
      let interval = response.interval ?? 1000;
      if (time % interval === 0 && time > 0) {
        // this === ServiceWorkerRegistration
        this.registration.showNotification('타이머 알림!', {
          body: `${interval}초마다 알림이 표시됩니다.`,
          icon: 'assets/timer.png',
        });
      }
    });
  });
});
