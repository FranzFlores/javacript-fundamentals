$(document).ready(function () {

    if (window.location.href.indexOf('index') > 1) {
        //Slider
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slidewidth: 1200,
            responsive: true
        });

        //Posts
        var posts = [
            {
                title: "Titulo 1",
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
            },
            {
                title: "Titulo 2",
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
            },
            {
                title: "Titulo 3",
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
            },
            {
                title: "Titulo 4",
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
            },
            {
                title: "Titulo 5",
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`
            }
        ]

        console.log(posts);
        posts.forEach((item, index) => {
            var post = `<article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>`;
            $('#posts').append(post);
        });
    }

    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "./css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "./css/red.css")
    });

    $("#to-blue").click(function () {
        theme.attr("href", "./css/blue.css")
    });


    //Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login Falso
    $("#login form").submit(function () {
        var name = $('#form_name').val();
        localStorage.setItem('form_name', name);
    });

    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != "undefined") {
        var about = $('#about p');
        console.log(form_name);
        about.html(`<br><strong>Bienvenido ` + form_name + `</strong>
                    <br><a href='#' id='logout'>Cerrar Sesión</a>`);
        $('#login').hide();

        $("#logout").click(function () {
            localStorage.clear();
            //Actualizar pantalla
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > 1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > 1) {

        setInterval(function () {
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);


    }

    //Validacion
    if (window.location.href.indexOf('contact') > 1) {
        $("form imput[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        $.validate({
            errorMessagePosition:'top',
            scrollToTopOnError: true
        });
    }




});