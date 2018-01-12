const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');

request.send();

request.addEventListener('load', () => {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    setData(response);
  };
});