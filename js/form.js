$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/andrewveremchuk@meta.ua",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    tel: $('#tel').val(),
                    vatin: $('#vatin').val(),
                    textarea: $('#textarea').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').append('<h3>Ваша форма успішно відправлена!</h3>');
            });
    });
});