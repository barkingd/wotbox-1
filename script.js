$(document).load(function () {
    $('#confirm').click(function () {
            if (typeof (Storage) !== "undefined") {
                //set IP Address
                console.log("adding values!");
                var vIP = $('#ip').val();
                var vPhone = $('#phone').val();
                var vEmail = $('#email').val();
                localStorage.setItem("ipAddress", vIP);
                localStorage.setItem("phone", vPhone);
                localStorage.setItem("email", vEmail);
            } else {
                console.warn("Your browser does not support Web Storage!");
                alert("Your browser does not support Web Storage!");
            }
    });
});



