$(document).ready(function () {

    $('#btn').click(function () {

        GetColor = document.getElementById('color').value;

        $('.print').css("color", GetColor)
        $('#print1').css("color", GetColor)

    });

});