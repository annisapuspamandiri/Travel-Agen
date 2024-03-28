document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
          displayMessage('Harap isi semua field!', true);
          return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open('POST', 'send-email.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.onload = () => {
          if (xhr.status === 200) {
              displayMessage('Terima kasih, pesan Anda telah dikirim!', false);
          } else {
              displayMessage('Terjadi kesalahan, coba lagi nanti!', true);
          }
      }

      xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
  });

  function displayMessage(message, isError = false) {
      const formMessage = document.getElementById('form-message');

      formMessage.textContent = message;
      formMessage.className = isError ? 'error' : 'success';
  }
});