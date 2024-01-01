function formatDateTime() {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
  const formattedDate = new Date().toLocaleDateString('uk-UA', options);
  return formattedDate;
}
function isOnline() {
  return window.navigator.onLine;
}
document.getElementById('fanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const messageText = document.getElementById('fanText').value.trim();
  const formattedDate = formatDateTime();
  const fanName = "Фанат";

  if (!messageText) {
    alert("Будь-ласка, введіть повідомлення.");
    return;
  }

  let messageElement = document.createElement('article');
  messageElement.innerHTML = `
    <p>${messageText}</p>
    <div class="date-name">
      <p class="date">${formattedDate}</p>
      <p class="name">${fanName}</p>
    </div>
    <hr class="divider">`;

  // document.getElementById('messages').prepend(messageElement);
  // alert("Ваше повідомлення опубліковане.");

  document.getElementById('fanText').value = '';

  if (isOnline()){
    document.getElementById('messages').prepend(messageElement);
    alert("Ваше повідомлення опубліковане.");
  } else {
    // save message to local storage
    const message = {
      text: messageText,
      date: formattedDate,
      name: fanName
    };

    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));

    alert("Ваше повідомлення збережена в локальному сховищі.");
  }
  });
