$(function() {
    $("#contact .button").click(function() {
        var name = $("#form_name").val();
        var email = $("#form_email").val();
        var text = $("#msg_text").val();
        var dataString = 'name='+ name + '&email=' + email + '&text=' + text;

        $.ajax({
            type: "POST",
            url: "sendMail.php",
            data: dataString,
            success: function(){
                $('.success').fadeIn(1000);
            }
        });

        return false;
    });
});