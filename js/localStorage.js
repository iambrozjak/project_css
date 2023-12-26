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

  let messageElement = document.createElement('article');
  messageElement.innerHTML = `
  <div class="card">
  <img src="${photoInput}" alt="News Photo">
  <div class="card-container">
    <h4>${messageTitle}</h4>
    <p>${messageText}</p>
  </div>
  </div>

  <hr class="divider">`;

  alert("Ваше повідомлення опубліковане.");
  document.getElementById('photoInput').value = '';
  document.getElementById('newsText').value = '';
  document.getElementById('titleText').value = '';

})

function isOnline() {
  return window.navigator.onLine;
}

  //   if (isOnline()) {
      //     alert('sendind data to server');
      //   } else {
      //     localStorage.setItem('title', newTitle);
      //     localStorage.setItem('content', newContent);
      //   }

window.addEventListener('online')

if (isOnline()) {
  localStorage.setItem ()
  document.getElementsByClassName("card").appendChild(messageElement);
}
