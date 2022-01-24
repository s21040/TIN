function insertFunction() {
    const table = document.getElementById("table");
    const row = table.insertRow(table.rows.length);
    const result = row.insertCell(0);
    result.innerHTML = document.getElementById("input").value;
}