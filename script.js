window.onload = function () {
    var form = document.querySelector("form");
    form.onsubmit = submitted.bind(form);
};

function submitted(event) {
    alert("Welcome! " + document.getElementById("searchbar").value);
    event.preventDefault();
}
