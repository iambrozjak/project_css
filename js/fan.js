function formatDateTime() {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
  const formattedDate = new Date().toLocaleDateString('uk-UA', options);
  return formattedDate;
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

  document.getElementById('messages').prepend(messageElement);

  document.getElementById('fanText').value = '';
  showMessage("Ваше повідомлення опубліковане.");
});
