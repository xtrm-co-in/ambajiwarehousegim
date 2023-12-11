function sendmail() {
    // alert("function called");
    var name = $("#name").val();
    var email = $("#email").val();
    var no = $("#no").val();
    // var subject = $("#subject").val();
    var message = $("#message").val();
    var Body =
        "Name: " +
        name +
        "<br>Email: " +
        email +
        "<br>Phone: " +
        no +
        "<br>Message: " +
        message;

    Email.send({
        Host: "smtp.sendgrid.net",
        Port: 25,
        Username: "apikey",
        Password: "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",
        To: "prashant.sharma@ambajigroup.in",
        From: "ambajiwarehouse@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body,
    }).then((message) => {
        if (message == "OK") {
        new swal(
            "Thank You For Message Us!",
            "We will contact you as soon as possible!",
            "success"
        );
        document.getElementById("contact_form").reset();
        } else {
        console.error(message);
        // return new Swal(
        new swal(
            "Oops!",
            "Something went wrong, please try again!",
            "error"
        );
        document.getElementById("contact_form").reset();
        }
    });
}