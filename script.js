
const firebaseConfig = {
    apiKey: "AIzaSyA5HCI6AVqMPmtwdxFryYCjipG-OA3apwM",
    authDomain: "jogo-e8689.firebaseapp.com",
    databaseURL: "https://jogo-e8689-default-rtdb.firebaseio.com",
    projectId: "jogo-e8689",
    storageBucket: "jogo-e8689.appspot.com",
    messagingSenderId: "788628385271",
    appId: "1:788628385271:web:19fdb6d300924d329652f2",
    measurementId: "G-2TT416CTCN"
};

firebase.initializeApp(firebaseConfig);

var numero = 0;
var numero2 = 0;
var vitoria = 1;
var derrota = 0;
var totalplantas = 49;
var som = 0;
var lista = [];
var trofeu = "";
var numerodocookie = 0;
var date = "";
var pause = 0;
var awsd = 0;
var qnttentativas = 6;
var quadrado = 0;
var numeroquadrado = 2;
var numeroquadradodois = 3;

let streaksatuaisdapessoa = getStreak("StreakAtual");
if (streaksatuaisdapessoa >= 50) {
    var lalelilo = 4
    var lalelilu = 3
} else if (streaksatuaisdapessoa >= 25) {
    var lalelilo = 3
    var lalelilu = 2
} else if (streaksatuaisdapessoa >= 10) {
    var lalelilo = 2
    var lalelilu = 1
} else {
    var lalelilo = 1
    var lalelilu = 0
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("numerodetentativas").innerText = qnttentativas - lalelilu
    document.getElementById("escolha").value = ""
    var tocador = document.createElement("audio")
    tocador.id = "audioPlayer"
    tocador.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FGrasswalk%20(In-Game).webm?alt=media&token=cdfd67b8-c14e-423b-9ef8-d8585a851ceb"
    tocador.controls = true
    tocador.style = "display: none"
    document.getElementById("naoseinomeparabotarnestadiv").appendChild(tocador);
    document.getElementById('escolha').disabled = true
    document.getElementById("botaodomenu").setAttribute("onClick", "");
    mudancas()
    updatestreak()
});

while (numero < totalplantas) {
    var dbRef = firebase.database().ref().child('Plantas/PvZ1/' + numero);
    dbRef.on('value', snapshot => {
        var div = document.createElement("div");
        div.id = numero2
        div.className = snapshot.val().Name
        div.style.cursor = "pointer"
        div.style.display = "none"
        div.onclick = function () { comparar(div.id); };
        document.getElementById("div").appendChild(div);
        var imagemteste = document.createElement("img")
        imagemteste.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FOther%2Fcadaplanta2.png?alt=media&token=200ba8f7-6550-4e07-8375-ecd7c6117dbf")
        imagemteste.setAttribute("style", "position: absolute; z-index: -1;")
        document.getElementById(numero2).appendChild(imagemteste);
        var imagem = document.createElement("img");
        imagem.setAttribute("src", snapshot.val().Image);
        imagem.setAttribute("height", "50");
        imagem.setAttribute("width", "50");
        imagem.setAttribute("id", "imagem" + numero2)
        imagem.setAttribute("style", "margin-top: 12.5px; margin-bottom: 12.5px; margin-left: 7px")
        document.getElementById(numero2).appendChild(imagem);
        var mundo = document.createElement("a");
        mundo.innerText = snapshot.val().World;
        mundo.setAttribute("id", "mundo" + numero2)
        mundo.style = "box-sizing: content-box; display: inline-block; width: 65px; text-align: center;"
        document.getElementById(numero2).appendChild(mundo);
        var sol = document.createElement("a");
        sol.innerText = snapshot.val().Sun;
        sol.setAttribute("id", "sol" + numero2)
        sol.style = "box-sizing: content-box; display: inline-block; width: 25px; text-align: center;"
        document.getElementById(numero2).appendChild(sol);
        var carregar = document.createElement("a");
        carregar.innerText = snapshot.val().Recharge;
        carregar.setAttribute("id", "carregar" + numero2)
        carregar.style = "box-sizing: content-box; display: inline-block; width: 85px; text-align: center;"
        document.getElementById(numero2).appendChild(carregar);
        var area = document.createElement("a");
        area.innerText = snapshot.val().Range;
        area.setAttribute("id", "area" + numero2)
        area.style = "box-sizing: content-box; display: inline-block; width: 55px; text-align: center"
        if (area.innerText == "Very short" || area.innerText == "All board") {
            area.style = "box-sizing: content-box; display: inline-block; width: 55px; text-align: center;; font-size: 15px;"
        }
        if (area.innerText == "Very short") {
            area.innerText = "V. short"
        }
        if (area.innerText == "Single line") {
            area.innerText = "Single"
        }
        document.getElementById(numero2).appendChild(area);
        var dano = document.createElement("a");
        dano.innerText = snapshot.val().Damage;
        dano.setAttribute("id", "dano" + numero2)
        dano.style = "box-sizing: content-box; display: inline-block; width: 75px; text-align: center;"
        document.getElementById(numero2).appendChild(dano);
        var special = document.createElement("a");
        special.innerText = snapshot.val().Special;
        special.setAttribute("id", "special" + numero2)
        special.style = "box-sizing: content-box; display: inline-block; width: 60px; text-align: center;"
        document.getElementById(numero2).appendChild(special);
        var upgrade = document.createElement("a");
        upgrade.innerText = snapshot.val().Upgrade;
        upgrade.setAttribute("id", "upgrade" + numero2)
        upgrade.style = "box-sizing: content-box; display: inline-block; width: 70px; text-align: center; display: none"
        document.getElementById(numero2).appendChild(upgrade);
        lista.push(snapshot.val().Name);
        numero2++
    });
    numero++
}

var dia = new Date().getDate()
var mes = (new Date().getMonth()) + 1
var semana = (new Date().getDay()) + 1

if (semana == 3) {
    semana = 10
} else if (semana % 2 == 0) {
    semana = 20
} else {
    semana = 1
}

var PlantaDoDia = ((dia + mes) * semana) - 2

if (PlantaDoDia == 7) {
    PlantaDoDia = 43
}
if (PlantaDoDia == 198) {
    PlantaDoDia = 22
}

while (PlantaDoDia > totalplantas - 1) {
    PlantaDoDia = PlantaDoDia - ((mes * semana) + (dia + semana) + 1)
    if (PlantaDoDia <= 0) {
        PlantaDoDia = PlantaDoDia * (-1)
    }
    if (PlantaDoDia == 7) {
        PlantaDoDia = 43
    }
    if (PlantaDoDia == 198) {
        PlantaDoDia = 22
    }
}

var SolDoDia, UpgradeDoDia, MundoDoDia, AreaDoDia, DanoDoDia, CarregamentoDoDia, specialDoDia, NomeDoDia;
var dbRef2 = firebase.database().ref().child('Plantas/PvZ1/' + PlantaDoDia)
dbRef2.on('value', snapshot => {
    SolDoDia = snapshot.val().Sun;
    SolDoDia = SolDoDia.toString();
    UpgradeDoDia = snapshot.val().Upgrade;
    MundoDoDia = snapshot.val().World;
    AreaDoDia = snapshot.val().Range;
    DanoDoDia = snapshot.val().Damage;
    CarregamentoDoDia = snapshot.val().Recharge;
    specialDoDia = snapshot.val().Special;
    NomeDoDia = snapshot.val().Name;
    ImagemDoDia = snapshot.val().Image;
});

function comparar(numero3) {
    document.getElementById("naoseiqualnomedar").style.opacity = "1"
    clicar(numero3)
    seraqueperdeu = qnttentativas - lalelilo
    if (vitoria == 1) {
        var ganho = document.createElement("a");
        ganho.innerText = "ganho!";
        document.getElementById("escolha").disabled = true
        let jaganhou = getStreak("JaGanhou");
        if (jaganhou == "") {
            jaganhou = 0
        }
        if (jaganhou == 0) {
            const audio = document.getElementById('audioPlayer');
            audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FVictory.webm?alt=media&token=68a664fe-c09c-42ac-926e-e93beb6c62a5"
            trofeeeu()
            audio.play();
        }
        derrota = parseInt(derrota)
        derrota = derrota + 1
        var comemoracao = ""
        var emoji = ""
        var eaivei = ""
        if (derrota == 1) {
            derrota = "*FIRST*"
            comemoracao = "Good job! You are really lucky, aren't you?"
            emoji = "\n1️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "1"
        } else if (derrota == 2) {
            derrota = "second"
            emoji = "\n2️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "2"
        } else if (derrota == 3) {
            derrota = "third"
            emoji = "\n3️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "3"
        } else if (derrota == 4) {
            derrota = "fourth"
            emoji = "\n4️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "4"
        } else if (derrota == 5) {
            derrota = "fifth"
            emoji = "\n5️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "5"
        } else {
            derrota = "sixth"
            emoji = "\n6️⃣🟩🟩🟩🟩🟩🟩🟩"
            eaivei = "6"
        }
        document.getElementById("mensagem").innerText = "Victory! You won at the " + derrota + " try! " + comemoracao
        document.getElementById("some").innerText = ""
        document.getElementById("tentativas").style.display = "none"
        document.getElementById("numerodetentativas").style.display = "none"
        document.getElementById("coisadesom").classList.remove("animation")
        document.getElementById("coisadesom").onclick = ""
        document.getElementById("coisadesom").style.cursor = ""
        document.getElementById("compartilharmensagem" + eaivei).innerText = emoji
        winStreak()
        setTimeout(function () {
            document.getElementById("myModal").style.display = "block"
            document.getElementsByClassName("modal-content")[0].classList.add("animacao");
        }, 4500);
    } else if (derrota == seraqueperdeu) {
        let jaganhou = getStreak("JaGanhou");
        if (jaganhou == "") {
            jaganhou = 0
        }
        if (jaganhou == 0) {
            const audio = document.getElementById('audioPlayer');
            audio.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2Flosemusic.ogg?alt=media&token=1867864d-ba33-4e32-9fbf-498e88e3fb73"
            audio.play();
        }
        document.getElementById("mensagem").innerText = "You lose! The today's Plant was: " + NomeDoDia.charAt(0).toUpperCase() + NomeDoDia.slice(1) + "!"
        document.getElementById("some").innerText = ""
        document.getElementById("escolha").disabled = true
        document.getElementById("tentativas").style.display = "none"
        document.getElementById("numerodetentativas").style.display = "none"
        var fotodaplanta = document.createElement("img")
        fotodaplanta.src = ImagemDoDia
        fotodaplanta.height = "25"
        fotodaplanta.width = "25"
        document.getElementById("lalalali").appendChild(fotodaplanta);
        document.getElementById("coisadesom").classList.remove("animation")
        document.getElementById("coisadesom").onclick = ""
        document.getElementById("coisadesom").style.cursor = ""
        lostStreak()
        setTimeout(function () {
            document.getElementById("myModal").style.display = "block"
            document.getElementsByClassName("modal-content")[0].classList.add("animacao");
        }, 4500);
    }
    derrota++
    document.getElementById("tentativas").innerText = derrota
}

function errou(numero4) {
    vitoria--
    document.getElementById(numero4).classList.add("nao");
}

function ver() {
    const input = (document.getElementById("escolha").value).toLowerCase()

    if (input == "") {
        document.getElementById("div").style.display = "none"
    } else {

        lista.forEach((word, index) => {
            if (word.startsWith(input)) {
                document.getElementById("div").style.display = "block"
                document.getElementById(index).style.display = "block"
            } else {
                document.getElementById(index).style.display = "none"
            }
        });
    }
}

function musiquinha() {
    if (som == 0) {
        const audio = document.getElementById('audioPlayer');
        audio.play();
        som++
        document.getElementById("coisadesom").classList.add("animation")
    } else if (som == 1) {
        const audio = document.getElementById('audioPlayer');
        audio.pause();
        audio.currentTime = 0
        som--
        document.getElementById("coisadesom").classList.remove("animation")
    }
}

function verfundo() {
    let fundinhoo = getStreak("Fundo");
    if (fundinhoo == "") {
        fundinhoo = 1
    }
    let fundinhooo = "fundo" + fundinhoo
    window[fundinhooo]();
    testecookie()
}

function fundo1() {
    if (isMobile()) {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FFrontyardMobile.webp?alt=media&token=a65eceb2-79ab-43c6-8f0c-d231c22e6127"
    } else {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FFrontyard.webp?alt=media&token=41b6e4b9-3fff-447d-bd63-d6290e1d7371"
    }
    document.getElementById("audioPlayer").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FGrasswalk%20(In-Game).webm?alt=media&token=cdfd67b8-c14e-423b-9ef8-d8585a851ceb"
    gravarfundo(1)
    tocarnovamente()
}

function fundo2() {
    if (isMobile()) {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2F1.png?alt=media&token=1bbdce18-84cd-42ff-8caf-3e63c1b9bbc2"
    } else {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FNightfrontyard.webp?alt=media&token=75637d1f-8fa6-4c4a-b995-d0674eb676f8"
    }
    document.getElementById("audioPlayer").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FMoongrains%20(In-Game).webm?alt=media&token=c4631c6c-9d72-4668-957e-b870c9927e28"
    gravarfundo(2)
    tocarnovamente()
}

function fundo3() {
    if (isMobile()) {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2F2.png?alt=media&token=9de304d2-022f-4363-b9e6-996b6585bae3"
    } else {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FBackground3.webp?alt=media&token=e98b26e7-9793-4ec1-ac9d-4040f7e3b676"
    }
    document.getElementById("audioPlayer").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FWatery%20Graves%20(In-Game).webm?alt=media&token=5322e7b7-565f-4fdf-bc90-486966b4df73"
    gravarfundo(3)
    tocarnovamente()
}

function fundo4() {
    if (isMobile()) {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2F3.png?alt=media&token=2838ce9e-53b2-4fe9-8b80-d92dbd4cba4e"
    } else {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FBackground4.webp?alt=media&token=b5277b7c-e20a-42cb-9284-1d15e05888ed"
    }
    document.getElementById("audioPlayer").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FRigor%20Mormist%20(In-Game).webm?alt=media&token=40fdd9b8-7e3e-453c-98a4-1d2c53440fc3"
    gravarfundo(4)
    tocarnovamente()
}

function fundo5() {
    if (isMobile()) {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2F4.png?alt=media&token=c6396236-a779-4cda-be0d-8595da6c07f4"
    } else {
        document.getElementById("fundinho").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FWorld%2FRoof_(New).webp?alt=media&token=1d2f96c1-85c8-4430-acfb-fe4eda193acd"
    }
    document.getElementById("audioPlayer").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FMusic%2FGraze%20the%20Roof%20(In-Game).webm?alt=media&token=7cde5dd1-f9d7-42d3-9070-f0dbb450da1f"
    gravarfundo(5)
    tocarnovamente()
}

function tocarnovamente() {
    if (som == 1) {
        document.getElementById("coisadesom").classList.remove("animation")
        const audio = document.getElementById('audioPlayer');
        audio.pause();
        audio.currentTime = 0
        setTimeout(function () {
            audio.play();
            document.getElementById("coisadesom").classList.add("animation")
        }, 2500)
    }
}

function menupause() {
    if (isMobile()) {
        apareceu()
    }
    if (pause == 0) {
        document.getElementById("pause").style.display = "block"
        document.getElementById("escolha").disabled = true
        document.getElementById("botaodomenu").style.cursor = "default"
        document.getElementById("botaodomenu").setAttribute("onClick", "");
        document.getElementById("div").style.display = "none"
        if (quadrado == 0 && document.getElementById("myModal").style.display == "block") {
            descerquadrado()
        }
        pause++
    } else {
        document.getElementById("pause").style.display = "none"
        let jaganhou = getStreak("JaGanhou");
        if (jaganhou != 1) {
            document.getElementById("escolha").disabled = false
        }
        if (derrota == 6) {
            document.getElementById("escolha").disabled = true
        }
        document.getElementById("botaodomenu").style.cursor = "pointer"
        document.getElementById("botaodomenu").setAttribute("onClick", "menupause()");
        pause--
    }
}

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

function apareceu() {
    if (awsd == 1) {
        document.getElementById("divdasfields").classList.add("animation2")
        document.getElementById("divdasfields").classList.remove("animation")
        awsd--
    } else {
        document.getElementById("divdasfields").classList.add("animation")
        document.getElementById("divdasfields").classList.remove("animation2")
        awsd++
    }
}

function mudancas() {
    if (isMobile()) {
        numeroquadrado = 4
        numeroquadradodois = 5
        document.getElementById("separamento2").style.marginTop = "120px"
        document.getElementById("gugugu").style.marginTop = "-30px"
        document.getElementById("divdasfields").style.marginLeft = "-280px"
        document.getElementById("plaquinha").style.marginTop = "auto"
        document.getElementById("botaodomenu").style.marginLeft = "10%"
        document.getElementById("pause").style.marginLeft = "-75px"
        document.getElementById("div").style.marginLeft = "265px"
        document.getElementById("fundo2").src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FOther%2Fpartedecima2.png?alt=media&token=fdb67bcc-7e5a-4b80-b222-c5e2d6fbf3c8"
    } else {
        document.getElementById("naoseinomeparabotarnestadiv").style.fontSize = "1vw"
    }
}

var countDownDate = new Date()
countDownDate.setDate(countDownDate.getDate() + 1)
countDownDate.setHours(countDownDate.getHours() - countDownDate.getHours())
countDownDate.setMinutes(countDownDate.getMinutes() - countDownDate.getMinutes())
countDownDate.setSeconds(countDownDate.getSeconds() - countDownDate.getSeconds())

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "0h 0m 0s";
    }
}, 1000)

function compartilharMensagem() {
    var mensagemcopiada = "oi"
    if (vitoria == 1) {
        mensagemcopiada = "I won the Today's Pvzdle! Yay!!" + document.getElementById("compartilharmensagem6").innerText + "" + document.getElementById("compartilharmensagem5").innerText + "" + document.getElementById("compartilharmensagem4").innerText + "" + document.getElementById("compartilharmensagem3").innerText + "" + document.getElementById("compartilharmensagem2").innerText + "" + document.getElementById("compartilharmensagem1").innerText + "\nPlay Pvzdle Here:\nhttps://kirbtop.github.io/PvzDle/";
    } else {
        mensagemcopiada = "I lost 😕😕" + document.getElementById("compartilharmensagem6").innerText + "" + document.getElementById("compartilharmensagem5").innerText + "" + document.getElementById("compartilharmensagem4").innerText + "" + document.getElementById("compartilharmensagem3").innerText + "" + document.getElementById("compartilharmensagem2").innerText + "" + document.getElementById("compartilharmensagem1").innerText + "\nPlay Pvzdle Here:\nhttps://kirbtop.github.io/PvzDle/";
    }
    navigator.clipboard.writeText(mensagemcopiada)
    document.getElementById("mensagemcopiadaaviso").classList.add("animacao")
    setTimeout(function () {
        document.getElementById("mensagemcopiadaaviso").classList.remove("animacao")
    }, 5000)
}

function NAOVAIJOGARNAO() {
    let jajogouhj = getStreak("Planta1");
    if (jajogouhj !== "") {
        document.getElementById('escolha').disabled = true
        document.getElementById("botaodomenu").setAttribute("onClick", "");
    } else {
        document.getElementById('escolha').disabled = false
        document.getElementById("botaodomenu").style.cursor = "pointer"
        document.getElementById("botaodomenu").setAttribute("onClick", "menupause()");
    }
}

function descerquadrado() {
    document.getElementById("modal-content").classList.remove("animacao");
    if (quadrado == 0) {
        document.getElementById("modal-content").classList.remove("animacao" + numeroquadradodois);
        document.getElementById("modal-content").classList.add("animacao" + numeroquadrado);
        document.getElementById("botaodomenu").style.cursor = "pointer"
        document.getElementById("botaodomenu").setAttribute("onClick", "menupause()");
        document.getElementById("modal-content").style.background = "url('https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FOther%2Fplacar.png?alt=media&token=d7a66250-fecb-49fc-8b2f-a54bb6353a51')"
        quadrado++
    } else {
        document.getElementById("modal-content").classList.remove("animacao" + numeroquadrado);
        document.getElementById("modal-content").classList.add("animacao" + numeroquadradodois);
        document.getElementById("modal-content").style.background = "url('https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FOther%2Fplacar2.png?alt=media&token=bda45814-5e71-4dbe-9168-795799059a35')"
        if (pause == 1) {
            menupause()
        }
        quadrado--
    }
}