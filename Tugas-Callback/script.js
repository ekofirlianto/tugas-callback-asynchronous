$body = $('body');
$body.addClass('loading');

function getDataUsers(url, callback) {
  let eko = new XMLHttpRequest();

  eko.onreadystatechange = function () {
    if (eko.readyState === 4) {
      if (eko.status === 200) {
        callback(eko.response);
      }
    }
  };

  eko.open('get', url);
  eko.send();
}

setTimeout(function () {
  getDataUsers('https://jsonplaceholder.typicode.com/users', (result) => {
    const data = JSON.parse(result);
    printtabel = '';
    data.forEach((a) => {
      printtabel += `<tr>
            <td>${a.id}</td>
            <td>${a.name}</td>
            <td>${a.username}</td>
            <td>${a.email}</td>
            <td>${a.address.street}, ${a.address.suit}, ${a.address.city}</td>
            <td>${a.company.name}</td>
            <tr/>`;
    });

    $body.removeClass('loading');

    document.getElementsByTagName('table')[0].innerHTML += printtabel;
  });
}, 1000);
