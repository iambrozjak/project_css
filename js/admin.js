document.getElementById('adminForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const photoInput = document.getElementById('photoInput');
  const messageTitle = document.getElementById('titleText').value.trim();
  const messageText = document.getElementById('newsText').value.trim()

  if (!messageTitle || !messageText){
    alert("Будь-ласка, заповніть поля.");
    return;
  }
  if (!photoInput.files || !photoInput.files[0]){
    alert("Будь-ласка, оберіть фото.");
    return;
  }

  let messageElement = document.createElement('div');
  messageElement.innerHTML = `
  <div class="card">
  <img src="${photoInput}" alt="News Photo">
  <div class="card-container">
    <h4>${messageTitle}</h4>
    <p>${messageText}</p>
  </div>
  </div>

  <hr class="divider">`;

  // alert("Ваше повідомлення опубліковане.");
  document.getElementById('photoInput').value = '';
  document.getElementById('newsText').value = '';
  document.getElementById('titleText').value = '';

  function isOnline() {
    return window.navigator.onLine;
  }
  if (isOnline()){
    document.getElementById('messages').prepend(messageElement);
    alert("Ваше новина опублікована.");
  } else {
    // save message to local storage
    const message = {
      Image: photoInput,
      text: messageTitle,
      text: messageText
    };

    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));

    alert("Ваша новина  збережина в локальному сховищі.");
  }

})
