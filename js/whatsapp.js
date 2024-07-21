function sendToWhatsapp() {
    var phonenumber = "+27650461935"
    var name = document.getElementById("name").value;
    var phone = document.getElementById("email").value;
    var barber = document.getElementById("message").value;
    // var service = document.getElementById("app_services").value;
    var url = "https://wa.me/" + phonenumber + "?text="; 
    + "Name: " + name + "%0a"
    + "Phone: " + email + "%0a"
    + "Email: " + message  + "%0a"
    // + "Service: " + service; 
    window.open(url, '_blank').focus();
}