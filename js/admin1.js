function isOnline() {
  return window.navigator.onLine;
}

window.addEventListener("online", () => {
  console.log("я тут");

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach((message) => {
    const photoInput = message.img;
    const messageTitle = message.text;
    const messageText = message.text;

    let messageElement = document.createElement('div');
    messageElement.innerHTML = `
      <div class="card">
        <img src="${photoInput}" alt="News Photo">
        <div class="card-container">
          <h4>${messageTitle}</h4>
          <p>${messageText}</p>
        </div>
      </div>
      <hr class="divider">
    `;

    document.getElementById('newsNew').prepend(messageElement);
  });

  // Очищення локального сховища після виведення повідомлень
  localStorage.removeItem("messages");
});
