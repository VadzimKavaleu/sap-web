function onCreate(ev) {
    ev.preventDefault();
    var data = JSON.stringify({
        "name": String(document.getElementById('name').value),
        "description": String(document.getElementById('description').value)
    });
    fetch("http://localhost:2403/plant", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

function onRead() {

    fetch('http://localhost:2403/plant/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (plant) {
            var resultTBody = document.createElement('tbody');
            plant.map(function (nthCPU) {
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';
            console.log('success');
        })

}

function onDelete(ev) {
    ev.preventDefault();
    fetch("http://localhost:2403/plant/" + document.getElementById("id2").value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

}

function onDeleteFromForm(ev) {
    ev.preventDefault();

    fetch("http://localhost:2403/plant/" + this.parentNode.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

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

    var data = JSON.stringify({
        "name": String(document.getElementById('name1').value),
        "description": String(document.getElementById('description1').value)
    });


    fetch("http://localhost:2403/plant/" + document.getElementById("id1").value, {
            method: 'PUT',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

(function () {
    document.getElementById('btn1').addEventListener('click', onCreate);
    document.getElementById('btn33').addEventListener('click', onRead);
    document.getElementById('btn2').addEventListener('click', onUpdate);
    document.getElementById('btn3').addEventListener('click', onDelete);
})();