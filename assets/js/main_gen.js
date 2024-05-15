function GenG() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var fecha = document.getElementById('fecha').value;

    var iniciales = nombres.split(' ').map(word => word[0]).join('');
    var lastname_1 = apellidos.substring(0,3);
    var lastname_2 = apellidos.slice(-2);

    var num = new Date(fecha);
    var dia = num.getDate() + 1;
    var mes = num.getMonth() + 1;
    var año = num.getFullYear().toString().slice(-2)


    var correo = iniciales.toLowerCase() + lastname_1.toLowerCase() + lastname_2.toLowerCase() + año + mes + dia + "@gmail.com";

    document.getElementById('head').innerHTML = "CORREO GENERADO"
    document.getElementById('resultado').innerText = correo;
}