<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>IF-project</title>
        <link rel="stylesheet" href="/css/Main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>
    <body>
        <div class="menu">
            <a href="http://127.0.0.1:8000/" class = "btn btn-info" role = "button">Pagrindinis</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 1</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 2</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 3</a>
            <a href="http://127.0.0.1:8000/" class = "btn btn-info" role = "button">Apie</a>
            <div>
                <button class = "btn btn-info" onclick="Dropdown()">Komanda <i class="fa fa-caret-down"></i></button>
            <div id="drop">
                <a href ="http://127.0.0.1:8000/">Arenijus</a>
                <a href = "http://127.0.0.1:8000/">Neda</a>
                <a href ="http://127.0.0.1:8000/">Paulius</a>
            </div>
            </div>
        </div>
        <div class="background-video">
            <video autoplay muted loop>
                <source src="/pictures-videos/BinaryCode.mp4" type="video/mp4">
            </video>
            <div class="overlay">
                <h1>IF Projektas</h1>
            </div>
        </div>
    <script>
        function Dropdown()
        {
            document.getElementById("drop").classList.toggle("show");
        }
        window.onclick = function(e) {
            if (!e.target.matches('.btn btn-info')) {
                var myDropdown = document.getElementById("drop");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                }
            }
        }
    </script>
    </body>
</html>
