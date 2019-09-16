function onCreate(ev) {
  ev.preventDefault();
  var data = JSON.stringify({
    "name": String(document.getElementById('name').value),
    "description": String(document.getElementById('description').value)
  });
  console.log(data);

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      alert(this.responseText);
      document.getElementById("form1").dispatchEvent(new Event('submit'));
    }
  });
  xhr.open("POST", "http://localhost:2403/plant");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function onRead() {

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      //console.log(this.response);
      result = JSON.parse(this.response);
      var resultTBody = document.createElement('tbody');
      result.map(function (nthCPU) {
        resultTBody.appendChild(parseCPUToTableRow(nthCPU));
      });

      var table = document.getElementById('rTBody').parentElement;
      table.replaceChild(resultTBody, document.getElementById('rTBody'));
      resultTBody.id = 'rTBody';
      console.log('success');
    }
  });

  xhr.open("GET", "http://localhost:2403/plant");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

function onDelete(ev) {
  ev.preventDefault();
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("DELETE", "http://localhost:2403/plant/" + document.getElementById('id2').value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();

}

function onDeleteFromForm(ev) {
  ev.preventDefault();
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("DELETE", "http://localhost:2403/plant/" + this.parentNode.id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();

}

function parseCPUToTableRow(CPUs) {
  var row = document.createElement('tr');

  id = document.createElement('th');
  id.innerText = CPUs['id'];
  row.appendChild(id);

  name1 = document.createElement('td');
  name1.innerText = CPUs['name'];
  row.appendChild(name1);

  description1 = document.createElement('td');
  description1.innerText = CPUs['description'];
  row.appendChild(description1);

  button = document.createElement('button');

  button.className = "btn btn-danger";

  button.innerHTML = 'DELETE';
  button.addEventListener('click', onDeleteFromForm);
  row.appendChild(button);

  row.id = CPUs['id'];
  return row;

}

function onUpdate(ev) {
  ev.preventDefault();
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  var data = JSON.stringify({
    "name": String(document.getElementById('name1').value),
    "description": String(document.getElementById('description1').value)
  });
  console.log(data);

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      alert(this.responseText);

    }
  });
  xhr.open("PUT", "http://localhost:2403/plant/" + document.getElementById('id1').value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

(function () {
  document.getElementById('btn1').addEventListener('click', onCreate);
  document.getElementById('btn33').addEventListener('click', onRead);
  document.getElementById('btn2').addEventListener('click', onUpdate);
  document.getElementById('btn3').addEventListener('click', onDelete);
})();