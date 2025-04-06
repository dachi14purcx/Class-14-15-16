async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const filtered = users.filter(user => {
    const firstChar = user.name[0].toLowerCase();
    return firstChar >= 'a' && firstChar <= 'h';
  });
  filtered.forEach(user => console.log(user.name));
}

// Dog photo fetcher
async function fetchDogImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  document.getElementById('dog-image').src = data.message;
}