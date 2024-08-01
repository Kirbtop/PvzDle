function setWin() {
  const date = new Date();
  const datee = new Date();
  date.setDate(date.getDate() + 2);
  date.setHours(0, 0, 0, 0);
  datee.setDate(datee.getDate() + 1);
  datee.setHours(0, 0, 0, 0);
  document.cookie = `Streak=1; expires=${date.toUTCString()}; path=/; Secure; SameSite=Lax;`;   
  document.cookie = `JaGanhou=1; expires=${datee.toUTCString()}; path=/; Secure; SameSite=Lax;`;   
  let vitoria = getStreak("Vitorias");
  if (vitoria == "") {
      vitoria = 0
  }
  vitoria = parseInt(vitoria) + 1
  document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;    
}

function updateWin(streakk) {
  const date = new Date();
  const datee = new Date();
  date.setDate(date.getDate() + 2);
  date.setHours(0, 0, 0, 0);
  datee.setDate(datee.getDate() + 1);
  datee.setHours(0, 0, 0, 0);
  document.cookie = `Streak=`+streakk+`; expires=${date.toUTCString()} path=/;Secure; SameSite=Lax;`;
  document.cookie = `JaGanhou=1; expires=${datee.toUTCString()}; path=/; Secure; SameSite=Lax;`;   
  let vitoria = getStreak("Vitorias");
  vitoria = parseInt(vitoria) + 1
  document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;  
}

function getStreak(cstreak) {
      let streak = cstreak + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(streak) == 0) {
          return c.substring(streak.length, c.length);
        }
      }
      return "";
    }

function winStreak() {
      let streak = getStreak("Streak");
      let jaganhou = getStreak("JaGanhou");
      if (jaganhou == "") {
          jaganhou = 0
      }
      if (jaganhou == 0) {
          if (streak == "") {
              setWin();    
          } else {
              let intStreak = parseInt(streak) + 1
              updateWin(intStreak);
          }
      }
      setTimeout(function () { 
          vitoriasestreaks()
      }, 1000)
    }

function lostStreak() {
  document.cookie = `Streak=0; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax`;
  document.getElementById("Streakdapessoa").innerText = "0"
}

function vitoriasestreaks() {
  let vitoriasdapessoa = getStreak("Vitorias");
  let streaksdapessoa = getStreak("Streak");
  if (streaksdapessoa == "") {
    streaksdapessoa = 0
  }
  if (vitoriasdapessoa == "") {
    vitoriasdapessoa = 0
  }
  document.getElementById("Streakdapessoa").innerText = streaksdapessoa
  document.getElementById("Vitoriasdapessoa").innerText = vitoriasdapessoa
}

function testecookie() {
  trofeeu()
  vitoriasestreaks()
  var numerodeplantas = 1
  let tentativaa = getStreak("Tentativa");
  let tentativa = parseInt(tentativaa) + 1
  if ((tentativa >= 2) || (tentativa <= 7)) {
    setTimeout(function () { 
      while (numerodeplantas != tentativa) {
          let Planta = getStreak("Planta"+numerodeplantas);
          comparar(Planta)
          numerodeplantas++
      }
    }, 1000 )
  }
}

function trofeeu() {
    let premio = getStreak("Premio");
    if (premio == "") {
      premio = 0
      document.cookie = `Premio=0; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
    }
    if (premio == 3) {
      trofeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FTrophy%2Fplantsvsmaple_bluesunflower.png?alt=media&token=675ed7b1-accd-49fe-8084-8235d761d11e"
    } else if (premio == 2) {
      trofeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FTrophy%2FGold_Sunflower_Trophy.webp?alt=media&token=b62491fa-3fb7-4059-bb20-03e0b0f988f9"
    } else if (premio == 1) {
      trofeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FTrophy%2FSilversunflowertrophy.webp?alt=media&token=79c336c9-cb61-4fe5-87ad-efde5041108e"
    }
    if (premio >= 1) {
      var trofeuu = document.createElement("img");
      trofeuu.src = trofeu
      trofeuu.style.marginLeft = "12%"
      trofeuu.style.marginTop = "13%"
      trofeuu.height = "350"
      trofeuu.style.position = "fixed"
      document.getElementById("vitoria").appendChild(trofeuu);
    }
}

function trofeeeu() {
  let vitorias = getStreak("Vitorias");
  let premio = getStreak("Premio");
  if (premio == "") {
      premio = 0
      document.cookie = `Premio=0; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
    }
  if ((vitorias == 49) && (premio == 0)) {
      document.cookie = `Premio=1; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
      const audio = document.getElementById('audioPlayer');
      audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FTrofeu.m4a?alt=media&token=9a0c8a69-d620-4b1d-9b86-2e3bf11e0c52"
      setTimeout(function () { 
          document.getElementById("mensagem").innerText = "Woah! You got the Silver Sunflower Trophy for getting 50 victories! Congratulations!!"
      }, 500)
      trofeeu()
  } else if ((vitorias == 99) && (premio == 1)) {
      document.cookie = `Premio=2; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
      const audio = document.getElementById('audioPlayer');
      audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FTrofeu.m4a?alt=media&token=9a0c8a69-d620-4b1d-9b86-2e3bf11e0c52"
      setTimeout(function () { 
        document.getElementById("mensagem").innerText = "Wooow! You got the Gold Sunflower Trophy for getting 100 victories! Well done!!"
      }, 500)
      trofeeu()
  } else if ((vitorias == 364) && (premio == 2)) {
      document.cookie = `Premio=3; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
      const audio = document.getElementById('audioPlayer');
      audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FTrofeu.m4a?alt=media&token=9a0c8a69-d620-4b1d-9b86-2e3bf11e0c52"
      setTimeout(function () { 
        document.getElementById("mensagem").innerText = "Oh my! You got the *DIAMOND SUNFLOWER TROPHY* for getting 365 victories! I've never think that someone could do that! Congratulations and well done!!!"
      }, 500)
      trofeeu()
  }
}

function gravar(numero7) {
  numerodocookie = numerodocookie + 1
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  document.cookie = `Planta`+numerodocookie+`=`+numero7+`; expires=${date.toUTCString()}; path=/; Secure; SameSite=Lax;`; 
  document.cookie = `Tentativa=`+numerodocookie+`; expires=${date.toUTCString()}; path=/; Secure; SameSite=Lax;`; 
}

function gravarfundo(numerodofundo) {
  document.cookie = `Fundo=`+numerodofundo+`; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;    
}
