document.getElementById('generate').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerHTML = ""; // Clear previous

  const selected = [];
  if (cat.checked) selected.push(fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()).then(data => data[0].url));
  if (dog.checked) selected.push(fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => data.message));
  if (fox.checked) selected.push(fetch('https://randomfox.ca/floof/').then(res => res.json()).then(data => data.image));

  const images = await Promise.all(selected);
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.width = 300;
    output.appendChild(img);
  });
});
