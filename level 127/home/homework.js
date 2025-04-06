async function enhancedFetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const status = res.status;

    const statusMessage = document.createElement('div');
    statusMessage.textContent = `Status: ${status}`;

    if (status === 200) {
      statusMessage.style.color = 'green';
    } else if ([301, 302, 304].includes(status)) {
      statusMessage.style.color = 'blue';
    } else {
      statusMessage.style.color = 'red';
    }

    document.body.appendChild(statusMessage);

    const users = await res.json();
    users.forEach(user => {
      const div = document.createElement('div');
      div.textContent = user.name;
      document.body.appendChild(div);
    });
  } catch (err) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = `Error: ${err.message}`;
    errorDiv.style.color = 'red';
    document.body.appendChild(errorDiv);
  }
}
