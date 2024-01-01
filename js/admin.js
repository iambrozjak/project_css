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

  const message = {
    img: photoInput,
    title: messageTitle,
    text: messageText
  };

  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));

  alert("Ваша новина  збережина в локальному сховищі.");


  document.getElementById('photoInput').value = '';
  document.getElementById('newsText').value = '';
  document.getElementById('titleText').value = '';

})
