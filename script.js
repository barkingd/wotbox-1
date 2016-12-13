$(document).load(function () {
    $('#confirm').click(storeSettings());

    function storeSettings() {
        if (typeof (Storage) !== "undefined") {
            //set IP Address
            var vIP = $('#ip').val();
            var vPhone = $('#phone').val();
            var vEmail = $('#email').val();
            localStorage.setItem("ipAddress", vIP);
            localStorage.setItem("phone", vPhone);
            localStorage.setItem("email", vEmail);
        } else {
            alert("Your browser does not support Web Storage!");
        }
    }
});



