//ALERTA! CODIGO HORRIVEL ABAIXO!
//REPITO, CODIGO HORRIVEL ABAIXO!

var pacoteNumero = 1
var solsolsol = 1
var soissoissois = 1
var lalalala = 1
var yipe = 1
var talaounaota = 1
    function criar(numero6) {
        vitoria = 1
        document.getElementById("escolha").value = "";
        document.getElementById("div").style.display = "none";
        document.getElementById("escolha").disabled = true;
        document.getElementById("botaodomenu").style.cursor = "default"
        document.getElementById("botaodomenu").setAttribute( "onClick", "" );
        document.getElementById("pause").style.display = "none"
        var SolEscolhido, UpgradeEscolhido, MundoEscolhido, AreaEscolhido, DanoEscolhido, CarregamentoEscolhido, specialEscolhido, Ganhou, Perdeu = ""
        var dbRef3 = firebase.database().ref().child('Plantas/PvZ1/'+numero6)
        dbRef3.on('value', snapshot => {
            SolEscolhido = snapshot.val().Sun;
            SolEscolhido = SolEscolhido.toString();
            UpgradeEscolhido = snapshot.val().Upgrade;
            MundoEscolhido = snapshot.val().World;
            AreaEscolhido = snapshot.val().Range;
            DanoEscolhido = snapshot.val().Damage;
            CarregamentoEscolhido = snapshot.val().Recharge;
            specialEscolhido = snapshot.val().Special;
            NomeEscolhido = snapshot.val().Name;
            Ganhou = snapshot.val().Won; 
            Perdeu = snapshot.val().Wrong; 
        });
        var certoouerrado = ""
        var solcertoouerrado = ""
        if (SolEscolhido !== SolDoDia) {
            errou(numero6)
            solcertoouerrado = solcertoouerrado + "🟥"
            corSol = "#dc3545"
        } else {
            solcertoouerrado = solcertoouerrado + "🟩"
            corSol = "#198754"
        }
        if (MundoEscolhido !== MundoDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (MundoEscolhido == "Day") {
                Mundao = "Image/Packet Seeds/Plants/WorldDayWrong.webp"
            } else if (MundoEscolhido == "Night") {
                Mundao = "Image/Packet Seeds/Plants/WorldNightWrong.webp"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "Image/Packet Seeds/Plants/WorldPoolWrong.webp"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "Image/Packet Seeds/Plants/WorldFogWrong.webp"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "Image/Packet Seeds/Plants/WorldRoofWrong.webp"
            } else {
                Mundao = "Image/Packet Seeds/Plants/WorldShopWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (MundoEscolhido == "Day") {
                Mundao = "Image/Packet Seeds/Plants/WorldDay.webp"
            } else if (MundoEscolhido == "Night") {
                Mundao = "Image/Packet Seeds/Plants/WorldNight.webp"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "Image/Packet Seeds/Plants/WorldPool.webp"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "Image/Packet Seeds/Plants/WorldFog.webp"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "Image/Packet Seeds/Plants/WorldRoof.webp"
            } else {
                Mundao = "Image/Packet Seeds/Plants/WorldShop.webp"
            }   
        }
        if (CarregamentoEscolhido !== CarregamentoDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (CarregamentoEscolhido == "Fast") {
                carregou = "Image/Packet Seeds/Plants/FastWrong.webp"
            } else if (CarregamentoEscolhido == "Slow") {
                carregou = "Image/Packet Seeds/Plants/SlowWrong.webp"
            } else if (CarregamentoEscolhido == "Very slow") {
                carregou = "Image/Packet Seeds/Plants/Very slowWrong.webp"
            } else {
                carregou = "Image/Packet Seeds/Plants/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (CarregamentoEscolhido == "Fast") {
                carregou = "Image/Packet Seeds/Plants/Fast.webp"
            } else if (CarregamentoEscolhido == "Slow") {
                carregou = "Image/Packet Seeds/Plants/Slow.webp"
            } else if (CarregamentoEscolhido == "Very slow") {
                carregou = "Image/Packet Seeds/Plants/Very slow.webp"
            } else {
                carregou = "Image/Packet Seeds/Plants/Ahn.webp"
            }
        }
        if (AreaEscolhido !== AreaDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (AreaEscolhido == "3x3") {
                Areazinha = "Image/Packet Seeds/Plants/3x3Wrong.webp"
            } else if (AreaEscolhido == "All board") {
                Areazinha = "Image/Packet Seeds/Plants/All boardWrong.webp"
            } else if (AreaEscolhido == "High") {
                Areazinha = "Image/Packet Seeds/Plants/HighWrong.webp"
            } else if (AreaEscolhido == "Medium") {
                Areazinha = "Image/Packet Seeds/Plants/MediumWrong.webp"
            } else if (AreaEscolhido == "Short") {
                Areazinha = "Image/Packet Seeds/Plants/ShortWrong.webp"
            } else if (AreaEscolhido == "Single line") {
                Areazinha = "Image/Packet Seeds/Plants/Single lineWrong.webp"
            } else if (AreaEscolhido == "Very short") {
                Areazinha = "Image/Packet Seeds/Plants/Very shortWrong.webp"
            } else if (AreaEscolhido == "No") {
                Areazinha = "Image/Packet Seeds/Plants/NoWrong.webp"
            } else {
                Areazinha = "Image/Packet Seeds/Plants/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (AreaEscolhido == "3x3") {
                Areazinha = "Image/Packet Seeds/Plants/3x3.webp"
            } else if (AreaEscolhido == "All board") {
                Areazinha = "Image/Packet Seeds/Plants/All board.webp"
            } else if (AreaEscolhido == "High") {
                Areazinha = "Image/Packet Seeds/Plants/High.webp"
            } else if (AreaEscolhido == "Medium") {
                Areazinha = "Image/Packet Seeds/Plants/Medium.webp"
            } else if (AreaEscolhido == "Short") {
                Areazinha = "Image/Packet Seeds/Plants/Short.webp"
            } else if (AreaEscolhido == "Single line") {
                Areazinha = "Image/Packet Seeds/Plants/Single line.webp"
            } else if (AreaEscolhido == "Very short") {
                Areazinha = "Image/Packet Seeds/Plants/Very short.webp"
            } else if (AreaEscolhido == "No") {
                Areazinha = "Image/Packet Seeds/Plants/No.webp"
            } else {
                Areazinha = "Image/Packet Seeds/Plants/Ahn.webp"
            }
        }
        if (DanoEscolhido !== DanoDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (DanoEscolhido == "Heavy") {
                Doeu = "Image/Packet Seeds/Plants/DamageHeavyWrong.webp"
            } else if (DanoEscolhido == "Massive") {
                Doeu = "Image/Packet Seeds/Plants/DamageMassiveWrong.webp"
            } else if (DanoEscolhido == "Normal") {
                Doeu = "Image/Packet Seeds/Plants/DamageNormalWrong.webp"
            } else if (DanoEscolhido == "Very heavy") {
                Doeu = "Image/Packet Seeds/Plants/DamageVeryHeavyWrong.webp"
            } else if (DanoEscolhido == "Light") {
                Doeu = "Image/Packet Seeds/Plants/DamageLightWrong.webp"
            } else if (DanoEscolhido == "No") {
                Doeu = "Image/Packet Seeds/Plants/NoWrong.webp"
            } else {
                Doeu = "Image/Packet Seeds/Plants/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (DanoEscolhido == "Heavy") {
                Doeu = "Image/Packet Seeds/Plants/DamageHeavy.webp"
            } else if (DanoEscolhido == "Massive") {
                Doeu = "Image/Packet Seeds/Plants/DamageMassive.webp"
            } else if (DanoEscolhido == "Normal") {
                Doeu = "Image/Packet Seeds/Plants/DamageNormal.webp"
            } else if (DanoEscolhido == "Very heavy") {
                Doeu = "Image/Packet Seeds/Plants/DamageVeryHeavy.webp"
            } else if (DanoEscolhido == "Light") {
                Doeu = "Image/Packet Seeds/Plants/DamageLight.webp"
            } else if (DanoEscolhido == "No") {
                Doeu = "Image/Packet Seeds/Plants/No.webp"
            } else {
                Doeu = "Image/Packet Seeds/Plants/Ahn.webp"
            }
        }
        if (specialEscolhido !== specialDoDia) {
            errou(numero6)
            certoouerrado = certoouerrado + "🟥"
            if (specialEscolhido == "No") {
                Legal = "Image/Packet Seeds/Plants/NoWrong.webp"
            } else if (specialEscolhido == "Yes") {
                Legal = "Image/Packet Seeds/Plants/YesWrong.webp"
            } else {
                Legal = "Image/Packet Seeds/Plants/AhnWrong.webp"
            }
        } else {
            certoouerrado = certoouerrado + "🟩"
            if (specialEscolhido == "No") {
                Legal = "Image/Packet Seeds/Plants/No.webp"
            } else if (specialEscolhido == "Yes") {
                Legal = "Image/Packet Seeds/Plants/Yes.webp"
            } else {
                Legal = "Image/Packet Seeds/Plants/Ahn.webp"
            }
        }
        if (talaounaota == 1) {
            emojinumero = "\n1️⃣"
        } else if (talaounaota == 2) {
            emojinumero = "\n2️⃣"
        } else if (talaounaota == 3) {
            emojinumero = "\n3️⃣"
        } else if (talaounaota == 4) {
            emojinumero = "\n4️⃣"
        } else if (talaounaota == 5) {
            emojinumero = "\n5️⃣"
        } else {
            emojinumero = "\n6️⃣"
        }
        if (vitoria <= 0) {
            document.getElementById("compartilharmensagem"+talaounaota).innerText = emojinumero + solcertoouerrado + "🟥" + certoouerrado
           ImagemDaPlanta = Perdeu
        } else {
            ImagemDaPlanta = Ganhou
        }
        talaounaota++
        var solquant  = document.createElement("a")
        solquant.id = "solquantidade"+soissoissois
        soissoissois++
        solquant.style = "position: absolute; margin-left: 36px; margin-top: 83px; color: "+corSol+"; font-family: PvZFont2; text-align: center"
        solquant.innerText = SolEscolhido
        document.getElementById("yayay"+yipe).appendChild(solquant);
        var semente  = document.createElement("img")
        semente.src = "Image/Windows/Seed_Slots2dnv.png"
        semente.width = "680"
        semente.height = "115.8"
        semente.classList = "img-fluid"
        semente.style = "margin-top: 2px;"
        document.getElementById("yayay"+yipe).appendChild(semente);
        var sol  = document.createElement("img")
        sol.src = "Image/Others/Sun.gif"
        sol.style = "margin-left: -540px;"
        sol.classList = "sol"
        sol.width = "60"
        sol.id = "sois"+solsolsol
        document.getElementById("yayay"+yipe).appendChild(sol);
        var pacote1  = document.createElement("img")
        pacote1.src = ImagemDaPlanta
        pacote1.style = "margin-left: -93px; position: relative"
        pacote1.classList = "pacote"
        pacote1.width = "65"
        pacote1.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote1);
        var pacote2  = document.createElement("img")
        pacote2.src = Mundao
        pacote2.style = "margin-left: 5px; position: relative"
        pacote2.classList = "pacote"
        pacote2.width = "65"
        pacote2.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote2);
        var pacote3  = document.createElement("img")
        pacote3.src = carregou
        pacote3.style = "margin-left: 5px; position: relative"
        pacote3.classList = "pacote"
        pacote3.width = "65"
        pacote3.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote3);
        var pacote4  = document.createElement("img")
        pacote4.src = Areazinha
        pacote4.style = "margin-left: 5px; position: relative"
        pacote4.classList = "pacote"
        pacote4.width = "65"
        pacote4.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote4);
        var pacote5  = document.createElement("img")
        pacote5.src = Doeu
        pacote5.style = "margin-left: 5px; position: relative"
        pacote5.classList = "pacote"
        pacote5.width = "65"
        pacote5.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote5);
        var pacote6  = document.createElement("img")
        pacote6.src = Legal
        pacote6.style = "margin-left: 5px; position: relative"
        pacote6.classList = "pacote"
        pacote6.width = "65"
        pacote6.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote6);
        document.getElementById("yayay"+yipe).appendChild(document.createElement("br"));
        yipe++
    }
    function clicar(numero5) {
        criar(numero5)
        gravar(numero5)
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation");
            lalalala++
            if (document.getElementById("solquantidade1").innerText == "undefined") {
                let jaganhou = getStreak("JaGanhou");
                if (jaganhou == "") {
                    jaganhou = 0
                }
                if (jaganhou == 0) {
                    let vitoriasdapessoa = getStreak("Vitorias");
                    let streaksdapessoa = getStreak("Streak");
                    if (streaksdapessoa == "") {
                        streaksdapessoa = 0
                    }
                   if (vitoriasdapessoa == "") {
                        vitoriasdapessoa = 0
                    }
                vitoria = parseInt(vitoriasdapessoa) - 1
                document.cookie = `Vitorias=`+vitoria+`; expires=Thu, 01 Jan 3000 12:00:00 UTC; path=/; Secure; SameSite=Lax;`;
                const date = new Date();
                date.setDate(date.getDate() + 2);
                date.setHours(0, 0, 0, 0);
                streakk = parseInt(streaksdapessoa) - 1
                document.cookie = `Streak=`+streakk+`; expires=${date.toUTCString()} path=/;Secure; SameSite=Lax;`;
                }
                document.getElementById("mensagem").innerText = "!!!"
                document.getElementById("tentativas").innerText = "!!!"
                setTimeout(function () { 
                    window.location.reload()
                }, 500)
            }
        }, 500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 1000);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 1500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 2000);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 2500);
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 3000);
        setTimeout(function () { 
            document.getElementById("sois"+solsolsol).classList.add("animation"+solsolsol);
        }, 3500);
        setTimeout(function () { 
            document.getElementById("escolha").disabled = false;
            document.getElementById("botaodomenu").style.cursor = "pointer"
            document.getElementById("botaodomenu").setAttribute( "onClick", "menupause()" );
            solsolsol++
            if ((vitoria == 1) || (derrota == 6)) {
                document.getElementById("escolha").disabled = true
            }
            document.getElementById("solquantidade1").style.opacity = "1";
            document.getElementById("solquantidade2").style.opacity = "1";
            document.getElementById("solquantidade3").style.opacity = "1";
            document.getElementById("solquantidade4").style.opacity = "1";
            document.getElementById("solquantidade5").style.opacity = "1";
            document.getElementById("solquantidade6").style.opacity = "1";
        }, 4000);
    }
