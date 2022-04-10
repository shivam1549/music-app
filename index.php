<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/mycss.css" >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Spotify Clone</title>
  </head>
  <body>

  <nav>
      <ul>
          <li class="brand"><img class="logo-s" src="logo.png" alt=""><span>Spotify</span></li>
          <li>Home</li>
          <li>About</li>
      </ul>
  </nav>

  <div class="container">
     
     <div class="songList">
        <h1>Best Of NCS - No Copright Sounds</h1>
        <div class="songItemcontainer">
            <div class="songItem">
                <img  alt="">
                <span class="songName">Let me love you</span>
                <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="fa-solid songitemplay fa-circle-play"></i></span> </span>

            </div>
            <div class="songItem">
                <img  alt="">
                <span class="songName">Let me love you</span>
                <span class="songlistplay"><span class="timestamp">05:34 <i id="1" class="fa-solid songitemplay fa-circle-play"></i></span> </span>

            </div>
            <div class="songItem">
                <img  alt="">
                <span class="songName">Let me love you</span>
                <span class="songlistplay"><span class="timestamp">05:34 <i id="2" class="fa-solid songitemplay fa-circle-play"></i></span> </span>

            </div>
            <div class="songItem">
                <img  alt="">
                <span class="songName">Let me love you</span>
                <span class="songlistplay"><span class="timestamp">05:34 <i id="3" class="fa-solid songitemplay fa-circle-play"></i></span> </span>

            </div>
            <div class="songItem">
                <img  alt="">
                <span class="songName">Let me love you</span>
                <span class="songlistplay"><span class="timestamp">05:34 <i id="4" class="fa-solid songitemplay fa-circle-play"></i></span> </span>

            </div>
        </div>
     </div>
     <div class="songBanner"></div>
  </div>

  <div class="bottom">
      <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
      <div class="icons">
        <i id="previous" class="fa-solid fa-3x fa-backward-step"></i>
        <i class="fa-solid fa-3x fa-circle-play" id="masterPlay"></i>
        <i id="next" class="fa-solid fa-3x fa-forward-step"></i>

          <!-- fontawesome icons-->
      </div>
      <div class="song-info">
          <div class="songInfo">
              <img src="playing.gif" width="44px" id="gif" alt=""><span id="mastersongname">Salam-e</span> 
          </div>
      </div>
  </div>
<script src="assets/script.js"></script>
  </body>
</html>