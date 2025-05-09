function setWin() {
  const datee = new Date();
  let vitoria = getStreak("Vitorias");
  if (vitoria == "") {
      vitoria = 0
  }
  vitoria = parseInt(vitoria) + 1
  document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;  
  datee.setDate(datee.getDate() + 1);
  datee.setHours(0, 0, 0, 0);
  document.cookie = `StreakAtual=1; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;
  document.cookie = `JaGanhou=1; expires=${datee.toUTCString()}; path=/; Secure; SameSite=Lax;`;  
  updatestreak()   
}
function updatestreak() {
  let streak = getStreak("Streak");
  let streakAtual = getStreak("StreakAtual");
  console.log("streak"+streak)
  console.log("streakatual"+streakAtual)
  if (streak < streakAtual || streak == 9 && streakAtual == 10){
    document.cookie = `Streak=`+streakAtual+`; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;
  }
}
function updateWin(streakkk) {
  const datee = new Date();
  datee.setDate(datee.getDate() + 1);
  datee.setHours(0, 0, 0, 0);
  document.cookie = `StreakAtual=`+streakkk+`; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;
  document.cookie = `JaGanhou=1; expires=${datee.toUTCString()}; path=/; Secure; SameSite=Lax;`;   
  updatestreak()
  let vitoria = getStreak("Vitorias");
  vitoria = parseInt(vitoria) + 1
  document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;  
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
      let streakk = getStreak("StreakAtual");
      let jaganhou = getStreak("JaGanhou");
      if (jaganhou == "") {
          jaganhou = 0
      }
      if (jaganhou == 0) {
          if (streakk == "") {
              setWin();    
          } else {
              let intStreakk = parseInt(streakk) + 1
              updateWin(intStreakk);
          }
      }
      setTimeout(function () { 
          vitoriasestreaks()
      }, 1000)
    }

function lostStreak() {
  let streakatual = getStreak("StreakAtual");
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  document.cookie = `StreakAtual=`+streakatual+`; expires=${date.toUTCString()}; path=/; Secure; SameSite=Lax`;
  document.getElementById("Streakatualdapessoa").innerText = "0"
}

function vitoriasestreaks() {
  let vitoriasdapessoa = getStreak("Vitorias");
  let streaksdapessoa = getStreak("Streak");
  let streaksatualdapessoa = getStreak("StreakAtual");
  if (streaksdapessoa == "") {
    streaksdapessoa = 0
  }
  if (vitoriasdapessoa == "") {
    vitoriasdapessoa = 0
  }
  if (streaksatualdapessoa == "") {
    streaksatualdapessoa = 0
  }
  document.getElementById("Streakdapessoa").innerText = streaksdapessoa
  document.getElementById("Streakatualdapessoa").innerText = streaksatualdapessoa
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
          getPramta("Planta"+numerodeplantas);
          numerodeplantas++
      }
    }, 1000 )
  }
}

function getPramta(cstreak) {
    let streak = cstreak + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(streak) == 0) {
        pramta = c.substring(streak.length, c.length);
        comparar(pramta)
      }
    }
    return "";
  }

function trofeeu() {
    let premio = getStreak("Premio");
    if (premio == "") {
      premio = 0
      document.cookie = `Premio=0; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
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
  let vitoriass = getStreak("Vitorias");
  let premio = getStreak("Premio");
  if (premio == "") {
      premio = 0
      document.cookie = `Premio=0; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
    }
  if ((vitoriass == 49) && (premio == 0)) {
      document.cookie = `Premio=1; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
      const audio = document.getElementById('audioPlayer');
      audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FTrofeu.m4a?alt=media&token=9a0c8a69-d620-4b1d-9b86-2e3bf11e0c52"
      setTimeout(function () { 
          document.getElementById("mensagem").innerText = "Woah! You got the Silver Sunflower Trophy for getting 50 victories! Congratulations!!"
      }, 500)
      trofeeu()
  } else if ((vitoriass == 99) && (premio == 1)) {
      document.cookie = `Premio=2; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
      const audio = document.getElementById('audioPlayer');
      audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FTrofeu.m4a?alt=media&token=9a0c8a69-d620-4b1d-9b86-2e3bf11e0c52"
      setTimeout(function () { 
        document.getElementById("mensagem").innerText = "Wooow! You got the Gold Sunflower Trophy for getting 100 victories! Well done!!"
      }, 500)
      trofeeu()
  } else if ((vitoriass == 364) && (premio == 2)) {
      document.cookie = `Premio=3; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`
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
  document.cookie = `Fundo=`+numerodofundo+`; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;    
}
