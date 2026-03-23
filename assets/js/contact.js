document.getElementById("contact-form").addEventListener("submit", function(e) {

    e.preventDefault();

    let formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {

        if (data === "success") {
            alert("Message Sent Successfully!");
            document.getElementById("contact-form").reset();
        } else {
            alert("Something went wrong.");
        }

    })
    .catch(err => console.log(err));

});