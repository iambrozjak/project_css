document.getElementById('adminForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const photoInput = document.getElementById('photoInput');
  const messageTitle = document.getElementById('titleText').value.trim();
  const messageText = document.getElementById('newsText').value.trim();

  if (!messageTitle || !messageText) {
    alert("Будь ласка, заповніть поля.");
    return;
  }
  if (!photoInput.files || !photoInput.files[0]) {
    alert("Будь ласка, оберіть фото.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const previewImage = document.createElement('img');
    previewImage.src = reader.result;

    const message = {
      img: previewImage.outerHTML,
      title: messageTitle,
      text: messageText
    };

    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));

    alert("Ваша новина збережена в локальному сховищі.");

    document.getElementById('photoInput').value = '';
    document.getElementById('newsText').value = '';
    document.getElementById('titleText').value = '';

    //  додаємо елемент зображення до контейнера
    const previewContainer = document.getElementById('previewContainer');
    if (previewContainer) {
      previewContainer.appendChild(previewImage);
    }
  };

  reader.readAsDataURL(photoInput.files[0]);
});
