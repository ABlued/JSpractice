const url = 'http://localhost:3000/todos';

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
