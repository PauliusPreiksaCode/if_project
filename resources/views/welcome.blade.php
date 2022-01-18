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
            <a href="game.blade.php" class = "btn btn-info" role = "button">Pagrindinis</a>
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
