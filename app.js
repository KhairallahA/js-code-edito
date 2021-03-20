let codes = document.getElementById('codes');
let play = document.getElementById('play');
let delet = document.getElementById('delet');
let result = document.getElementById('result');

play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT",codes.value)
}
delet.onclick = ()=>{
    result.innerHTML = "";
    codes.value = "";
    // localStorage.removeItem("RESULT");
}

onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
}