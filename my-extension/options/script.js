const saveButton = document.querySelector('.button--save');
const optionsForm = document.getElementById('optionsForm');

saveButton.addEventListener('click', () => {
  const formData = new FormData(optionsForm);
  let name = formData.get('name');
  let interval = formData.get('interval');

  chrome.storage.sync.set(
    {
      name,
      interval,
    },
    () => {
      console.log(`Chrome 스토리지 저장: name: ${name}, interval: ${interval}`);
    }
  );
});

chrome.storage.sync.get(['name', 'interval'], ({ name, interval }) => {
  optionsForm.querySelector('#name').value = name ?? '???';
  optionsForm.querySelector('#interval').value = interval ?? 1000;
});
