const key = document.getElementsByClassName("key")[0];

window.addEventListener("keydown", (e) => {
    key.innerHTML = 
    `<table>
        <tr>
            <th>Key</th>
            <th>Keycode</th> 
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td> 
            <td>${e.code}</td>
        </tr>
    </table>`;
});