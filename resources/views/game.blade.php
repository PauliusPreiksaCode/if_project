<!DOCTYPE html>
<html lang="lt">
    <head>
        <title>IF projektas</title>
        <meta charset="utf-8">

        <!-- <link rel="stylesheet" href="/../css/gamePage.css"> -->
        <style>

            * { /* reset margins and paddings on all elements */
                margin:0;
                padding:0;
            }

            body::before {
                content:""; /* required for ::before */
                position: fixed; /* don't scroll with page */
                z-index:-100; /* place behind elements on page */
                width:100%;
                height:100%;
                background-color:#14C2CC;
                background-image:
                    radial-gradient(circle farthest-side at top right, transparent, #0D64FF), radial-gradient(ellipse farthest-corner at 0% 100%, transparent, #FF00A0);
                animation:bg-change 10s infinite;
            }

            @keyframes bg-change {
                0%, 100% {
                    filter:hue-rotate(0deg);
                }
                50% {
                    filter:hue-rotate(-45deg);
                }
            }

            h1{
                color:red;
                text-align: center;
                font-size: 40px;
            }

            .menu{
                width: auto;
                height: 100px;
                background-color:black;
                margin: auto;
                padding-top: 25px;
            }

            .pavadinimas{
                padding: 25px;
                color: black;
                font-weight: bold;
                font-family: Arial;
            }

            .page{
                width: 80%;
                margin: auto;
            }

            p{
                font-family: Arial;
                font-size: 20px;
                text-align: justify;
                margin: 10px;
            }

            a:hover{
                color: white;
            }


        </style>
      </head>
      <body>
      <div class="menu">
          <h1>Meniu juosta</h1>
      </div>
          <div class="page">
              <h1 class="pavadinimas">Startup svajone</h1>
              <div class="gameInfo">
                  <p>Žaidimo idėja:</p>
                  <p>Norima sukurti geriausią startup kompanija. Duodama n pasirinkimų (dar sugalvoti) kurie leidžia tobulėti kompanijos įkūrėjui/kompanijai. Kiekvienas pasirinkimas turi savo indelį, kurį galima kombinuoti su kitais jau pasirinktais pasirinkimais. Žaidėjas turi surasti pasirinkimų seką kuri ir sukurs startup kompaniją.
                      Žaidimo tikslas gauti maksimalų taškų kiekį sukombinuojant pasirinkimus, kad kiekvienas pasirinkimas pasiektų maksimalų savo lygį (Su kiekvienu pasikeltu lygiu kompanijos įkūrėjui/kompanija tobulėja).
                      Įkvėpimas/pavyzdys GROW tipo žaidimai pagal kuriuos ir sugalvotas žaidimo principas, taškų/lygių sistema. <a href="https://www.crazygames.com/game/grow-island">Vienas iš GROW žaidimų.</a></p>
                      <p>Reikės grafikos elementų.</p>
                  <p><br>Žaidimo temą galima keisti, čia tik viena iš sugalvotų.</p>
              </div>
          </div>
      </body>
  </html>
