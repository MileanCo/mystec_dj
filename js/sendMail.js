
function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("firstname").value;
    document.location.href = "mailto:joelm.sten@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
