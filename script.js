//your JS code here. If required.
let ptag=document.createElement("p");
let now = new Date();

 ptag.textContent=now.toLocaleString();
document.body.appendChild(ptag);