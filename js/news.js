function isOnline() {
  return window.navigator.onLine;
}
if (isOnline()){
  alert("Ваше новина опублікована.");
} else {
  // save message to local storage
  const message = {
    img: photoInput,
    text: messageTitle,
    text: messageText
  };

  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));

  alert("Ваша новина  збережина в локальному сховищі.");
}

// function isOnline() {
//   return window.navigator.onLine;
// }
// window.addEventListener("online", () => {
//   console.log("я тут");
//   let newsContainer = document.querySelector("news");

//   let messages = JSON.parse(localStorage.getItem("messages")) || [];
//   messages.forEach((message) => {
//     const photoInput = document.getElementById('photoInput');
//     const messageTitle = document.getElementById('titleText').value.trim();
//     const messageText = document.getElementById('newsText').value.trim()

//     let messageElement = document.createElement('div');
//     messageElement.innerHTML = `
//     <div class="card">
//     <img src="${photoInput}" alt="News Photo">
//     <div class="card-container">
//       <h4>${messageTitle}</h4>
//       <p>${messageText}</p>
//     </div>
//     </div>

//     <hr class="divider">`;

//     alert("Ваше повідомлення опубліковане.");
//     document.getElementById('photoInput').value = '';
//     document.getElementById('newsText').value = '';
//     document.getElementById('titleText').value = '';

//     // document.getElementByClass('news').prepend(messageElement);
//     newsContainer.insertAdjacentHTML('beforebegin', messageElement );
//   });

//   // Очищення локального сховища після виведення повідомлень
//   localStorage.removeItem("messages");
// });
