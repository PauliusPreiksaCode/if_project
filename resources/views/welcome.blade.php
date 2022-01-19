<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>IF-project</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="/css/Main.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="menu">
            <div class="w3-show-inline-block">
            <a href="http://127.0.0.1:8000/" class = "btn btn-info" role = "button">Pagrindinis</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 1</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 2</a>
            <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 3</a>
            <a href="http://127.0.0.1:8000/" class = "btn btn-info" role = "button">Apie</a>
            </div>
            <div class="w3-show-inline-block">
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" style="background-color: #5bc0de;border-color: #46b8da;" type="button" data-toggle="dropdown" >Komanda
                    <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li><a href="http://127.0.0.1:8000/">Paulius Preikša</a></li>
                    <li><a href="#">Arenijus Juraška</a></li>
                    <li><a href="#">Neda Ramanauskaitė</a></li>
                </ul>
            </div>
            </div>
            <div class="w3-show-inline-block">
                <img src="https://w7.pngwing.com/pngs/495/472/png-transparent-computer-icons-user-profile-password-login-end-user-blue-computer-network-silhouette-thumbnail.png" alt="User">
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
    </body>
</html>
