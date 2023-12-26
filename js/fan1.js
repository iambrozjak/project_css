// function formatDateTime() {
//   const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
//   const formattedDate = new Date().toLocaleDateString('uk-UA', options);
//   return formattedDate;
// }

// document.getElementById('fanForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const messageText = document.getElementById('fanText').value.trim();
//   const formattedDate = formatDateTime();
//   const fanName = "Фанат";

//   if (!messageText) {
//     alert("Будь-ласка, введіть повідомлення.");
//     return;
//   }

//   let messageElement = document.createElement('article');
//   messageElement.innerHTML = `
//     <p>${messageText}</p>
//     <div class="date-name">
//       <p class="date">${formattedDate}</p>
//       <p class="name">${fanName}</p>
//     </div>
//     <hr class="divider">`;

//     function isOnline() {
//       return window.navigator.onLine;
//     }

//     if (isOnline()) {
//       localStorage.getItem('content', messageElement);
//       alert('повідомлення опубліковано');
//     } else {
//       localStorage.setItem('content', messageElement);
//     }

//     // parentElement.insertAdjacentHTML('afterbegin',
//     //   `<article>
//     //   <p>${messageText}</p>
//     //   <div class="date-name">
//     //     <p class="date">${formattedDate}</p>
//     //     <p class="name">${fanName}</p>
//     //   </div>
//     //   <hr class="divider">`)
//     // document.getElementById('messages').prepend(messageElement);
//     document.getElementById('messages').prepend(messageElement);

//   document.getElementById('fanText').value = '';
// });



function formatDateTime() {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = new Date().toLocaleDateString('uk-UA', options);
  return formattedDate;
}

function isOnline() {
  return window.navigator.onLine;
}
  const messageText = document.getElementById('fanText').value.trim();
  const formattedDate = formatDateTime();
  const fanName = "Фанат";

document.addEventListener('DOMContentLoaded', function () {
  const messagesContainer = document.getElementById('messages');
  let messages = [];

  if (isOnline()) {
    messages = JSON.parse(localStorage.getItem('messages')) || [];
  } else {
    messages = JSON.parse(localStorage.setItem('messages')) || [];
  }

  messages.forEach((message) => {
    const { messageText, formattedDate, fanName } = message;

    let messageElement = document.createElement('article');
    messageElement.innerHTML = `
      <p>${messageText}</p>
      <div class="date-name">
        <p class="date">${formattedDate}</p>
        <p class="name">${fanName}</p>
      </div>
      <hr class="divider">`;

    messagesContainer.prepend(messageElement);
  });
});
