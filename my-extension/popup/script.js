const userName = document.querySelector('.userName p');
const timeInfo = document.querySelector('.timeZone time');
const timer = document.querySelector('.timer time');
const buttonGroup = document.querySelector('.buttonGroup');

buttonGroup.addEventListener('click', ({ target }) => {
  if (target.matches('.button--start')) {
    chrome.storage.local.set({ isRunning: true });
  }
  if (target.matches('.button--stop')) {
    chrome.storage.local.set({ isRunning: false });
  }
  if (target.matches('.button--reset')) {
    chrome.storage.local.set({ timer: 0 });
    chrome.action.setBadgeText({ text: '0' });
  }
});

function updateTimeConetents() {
  let currentTime = new Date().toLocaleTimeString();
  timeInfo.textContent = currentTime;

  chrome.storage.local.get(['timer'], (response) => {
    let time = response.timer ?? 0;
    timer.textContent = `${time}초`;
  });
}

updateTimeConetents();
setInterval(updateTimeConetents, 1000);

chrome.storage.sync.get(['name'], (response) => {
  let name = response.name ?? '???';
  userName.textContent = name;
});
