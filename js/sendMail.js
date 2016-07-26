
function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var yourEmail = document.getElementById("email").value || "";
    var subject = document.getElementById("firstname").value || "";
    if (!yourMessage) {
      alert("No message provided for email");
      return "";
    }

    $.ajax({
      type: "POST",
      url: "http://milean.co:1337/parse/functions/send_mail",
      //url: "http://localhost:1337/parse/functions/send_mail",
      headers: {
        "X-Parse-Application-Id": "g0l0c0",
      },
      data: {
        to: "mystecstudios@gmail.com",
        from: yourEmail,
        subject: "Milean.co - Site Lead from " + subject + " with email " + yourEmail + ". ",
        text: yourMessage,
        html: yourMessage,
      },
      success: function(data, textStatus, jqXHR) {
        console.log(data);
        alert("Thanks for contacting me! Will be in touch soon.");
        document.getElementById("message").value = "";
        document.getElementById("email").value = "";
        document.getElementById("firstname").value = "";
      },
      dataType: "json",
    });

    console.log("Sending mail to " + subject);

    /**
    document.location.href = "mailto:joelm.sten@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
    */
}
