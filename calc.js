function clicar() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    
    var resultado = parseFloat(num1) / 12 * parseFloat(num2);
    document.querySelector(".resultado").innerHTML = resultado.toFixed(2);
}