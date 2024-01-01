function formatDateTime() {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = new Date().toLocaleDateString('uk-UA', options);
  return formattedDate;
}

function isOnline() {
  return window.navigator.onLine;
}
window.addEventListener("online", () => {
  console.log("я тут");

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach((message) => {
    const messageText = message.text;
    const formattedDate = message.date;
    const fanName = message.name;

    let messageElement = document.createElement('article');
    messageElement.innerHTML = `
      <p>${messageText}</p>
      <div class="date-name">
        <p class="date">${formattedDate}</p>
        <p class="name">${fanName}</p>
      </div>
      <hr class="divider">`;

    document.getElementById('messages').prepend(messageElement);
  });

  // Очищення локального сховища після виведення повідомлень
  localStorage.removeItem("messages");
});
