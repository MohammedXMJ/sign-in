

function check() {
    const username = document.querySelector(".input1").value;
    const password = document.querySelector(".input2").value;
    const delet = document.querySelector(".next1");

    if (username === "Mohammed" && password === "Mohammed@1997") {
        delet.remove();
        document.querySelector(".next2").innerHTML = "NICE! , how you do it ? ";
        window.setTimeout(function(){ document.location.reload(true); }, 5000);
    } else {
        document.querySelector(".next1").innerHTML = "Wrong password. Try again later";
        window.setTimeout(function(){ document.location.reload(true); }, 5000);
    }
}