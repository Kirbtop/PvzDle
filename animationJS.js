//ALERTA! CODIGO HORRIVEL ABAIXO!
//REPITO, CODIGO HORRIVEL ABAIXO!

var pacoteNumero = 1
var solsolsol = 1
var soissoissois = 1
var lalalala = 1
var yipe = 1
    function criar(numero6) {
        vitoria = 1
        document.getElementById("escolha").value = "";
        document.getElementById("div").style.display = "none";
        document.getElementById("escolha").disabled = true;
        document.getElementById("botaodomenu").style.cursor = "default"
        document.getElementById("botaodomenu").setAttribute( "onClick", "a" );
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
        if (SolEscolhido !== SolDoDia) {
            errou(numero6)
            corSol = "#dc3545"
        } else {
            corSol = "#198754"
        }
        if (MundoEscolhido !== MundoDoDia) {
            errou(numero6)
            if (MundoEscolhido == "Day") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldDayWrong.webp?alt=media&token=9b242bfe-64d0-44c0-be04-62fa1f492c89"
            } else if (MundoEscolhido == "Night") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldNightWrong.webp?alt=media&token=bad08b94-1982-4f85-996e-00b5c25d7738"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldPoolWrong.webp?alt=media&token=d3bf5ecf-b501-4214-8ab9-8a7f7c70983c"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldFogWrong.webp?alt=media&token=0e135916-88d9-478b-88c2-28bbdaffd54b"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldRoofWrong.webp?alt=media&token=beefe26e-f577-4b8e-8945-53f47c2a7c71"
            } else {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldShopWrong.webp?alt=media&token=ab5158f3-6c8a-470e-8142-2d5704af8bf8"
            }
        } else {
            if (MundoEscolhido == "Day") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldDay.webp?alt=media&token=e0391096-8200-437f-b5f7-ab2184397f17"
            } else if (MundoEscolhido == "Night") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldNight.webp?alt=media&token=ae2e997c-45c0-45cb-a232-ed586f0fe0de"
            } else if (MundoEscolhido == "Pool") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldPool.webp?alt=media&token=90400316-c8b1-485b-b96e-c62280306a96"
            } else if (MundoEscolhido == "Fog") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldFog.webp?alt=media&token=b84b7e72-6aef-4669-97d8-4fda383e7191"
            } else if (MundoEscolhido == "Roof") {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldRoof.webp?alt=media&token=233649d5-2dfa-4f1f-8ec7-7ab266f9e8a0"
            } else {
                Mundao = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FWorld%2FWorldShop.webp?alt=media&token=e8c1c46f-0401-4d27-b83d-075c4ebad60e"
            }   
        }
        if (CarregamentoEscolhido !== CarregamentoDoDia) {
            errou(numero6)
            if (CarregamentoEscolhido == "Fast") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FFastWrong.webp?alt=media&token=81255010-1c71-4cd2-bbc3-d7cafb6bfe8d"
            } else if (CarregamentoEscolhido == "Slow") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FSlowWrong.webp?alt=media&token=100c3e3f-6946-4dc9-8841-44bf70f97c12"
            } else if (CarregamentoEscolhido == "Very slow") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FVerySlowWrong.webp?alt=media&token=98a070d7-7434-4660-953c-0872c239a46a"
            } else {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhnWrong.webp?alt=media&token=6b2cd217-f5db-4dc4-88e4-4fcd5ef7ccdb"
            }
        } else {
            if (CarregamentoEscolhido == "Fast") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FFast.webp?alt=media&token=a71435af-21d4-4ad8-ba1d-39528f035ea7"
            } else if (CarregamentoEscolhido == "Slow") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FSlow.webp?alt=media&token=9d081a7d-5a98-4a83-b561-a382e212d14a"
            } else if (CarregamentoEscolhido == "Very slow") {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRecharge%2FVerySlow.webp?alt=media&token=78dbc2a7-d4d3-4597-8ee6-77c644bbe3bb"
            } else {
                carregou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhn.webp?alt=media&token=743ac293-e943-4483-b78f-80ea536583fd"
            }
        }
        if (AreaEscolhido !== AreaDoDia) {
            errou(numero6)
            if (AreaEscolhido == "3x3") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2F3x3Wrong.webp?alt=media&token=1404441e-1bc2-439a-9c96-bcf90a902733"
            } else if (AreaEscolhido == "All board") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FAllBoardWrong.webp?alt=media&token=5d3de4f7-fb8d-480a-9d98-5dcbbb255448"
            } else if (AreaEscolhido == "High") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FHighWrong.webp?alt=media&token=9f509da8-17a5-4f7e-948b-c0f6b0dbcb32"
            } else if (AreaEscolhido == "Medium") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FMediumWrong.webp?alt=media&token=4bad60f4-926e-491c-b1dd-71d53c586767"
            } else if (AreaEscolhido == "Short") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FShortWrong.webp?alt=media&token=97828e0d-1583-4e6a-8595-ec3f400ab7f2"
            } else if (AreaEscolhido == "Single line") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FSingleLineWrong.webp?alt=media&token=6d68d4e5-1826-4cb3-97b3-93e8cc75abdc"
            } else if (AreaEscolhido == "Very short") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FVeryShortWrong.webp?alt=media&token=88621426-81eb-4108-9e8f-b3d897759d7c"
            } else if (AreaEscolhido == "No") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNoWrong.webp?alt=media&token=e2237747-9b69-4e41-99a1-06ec108b72b1"
            } else {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhnWrong.webp?alt=media&token=6b2cd217-f5db-4dc4-88e4-4fcd5ef7ccdb"
            }
        } else {
            if (AreaEscolhido == "3x3") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2F3x3.webp?alt=media&token=55522331-f37d-4fc5-8259-5f7565e5f24d"
            } else if (AreaEscolhido == "All board") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FAllBoard.webp?alt=media&token=81f050f1-bb80-4e78-8ff5-9b197314efe6"
            } else if (AreaEscolhido == "High") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FHigh.webp?alt=media&token=6cbd9be4-b234-4397-8990-c9e05a939491"
            } else if (AreaEscolhido == "Medium") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FMedium.webp?alt=media&token=4c039d37-6e0b-494b-ab94-d508879541a4"
            } else if (AreaEscolhido == "Short") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FShort.webp?alt=media&token=3f671deb-314c-484d-bff8-7e39118b5a8f"
            } else if (AreaEscolhido == "Single line") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FSingleLine.webp?alt=media&token=9353f104-e877-4d68-b9af-0706a94d715f"
            } else if (AreaEscolhido == "Very short") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FRange%2FVeryShort.webp?alt=media&token=db684af1-8309-4deb-9565-ad2acf0a9a83"
            } else if (AreaEscolhido == "No") {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNo.webp?alt=media&token=77fa74ef-7de8-4d0b-8a9b-962ba974552b"
            } else {
                Areazinha = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhn.webp?alt=media&token=743ac293-e943-4483-b78f-80ea536583fd"
            }
        }
        if (DanoEscolhido !== DanoDoDia) {
            errou(numero6)
            if (DanoEscolhido == "Heavy") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageHeavyWrong.webp?alt=media&token=aba1ba5c-42c1-4cb9-93ca-6fcb8b66aac5"
            } else if (DanoEscolhido == "Massive") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageMassiveWrong.webp?alt=media&token=c59ebbc7-b84c-4175-aa9b-2bf19f7ef0e0"
            } else if (DanoEscolhido == "Normal") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageNormalWrong.webp?alt=media&token=075dc33c-49d7-4eb4-9bbc-a9b46a197f21"
            } else if (DanoEscolhido == "Very heavy") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageVeryHeavyWrong.webp?alt=media&token=29bffa28-7ea0-4ff7-8f74-cc9440c50e5f"
            } else if (DanoEscolhido == "Light") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageLightWrong.webp?alt=media&token=b215c7f9-2a49-4e03-b60a-7657539f0695"
            } else if (DanoEscolhido == "No") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNoWrong.webp?alt=media&token=e2237747-9b69-4e41-99a1-06ec108b72b1"
            } else {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhnWrong.webp?alt=media&token=6b2cd217-f5db-4dc4-88e4-4fcd5ef7ccdb"
            }
        } else {
            if (DanoEscolhido == "Heavy") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageHeavy.webp?alt=media&token=cbad65e6-0449-4537-a68a-5239ad2bfb76"
            } else if (DanoEscolhido == "Massive") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageMassive.webp?alt=media&token=40aff23a-fb17-466e-9b2c-75761fc8e5c2"
            } else if (DanoEscolhido == "Normal") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageNormal.webp?alt=media&token=887e2394-23d2-4001-9acf-0b729a20fcc7"
            } else if (DanoEscolhido == "Very heavy") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageVeryHeavy.webp?alt=media&token=0951a2d3-afe1-40b3-8fb0-07f402159f5c"
            } else if (DanoEscolhido == "Light") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FDamage%2FDamageLight.webp?alt=media&token=b84a49cb-7074-49fc-a809-7b3af72f9b57"
            } else if (DanoEscolhido == "No") {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNo.webp?alt=media&token=77fa74ef-7de8-4d0b-8a9b-962ba974552b"
            } else {
                Doeu = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhn.webp?alt=media&token=743ac293-e943-4483-b78f-80ea536583fd"
            }
        }
        if (specialEscolhido !== specialDoDia) {
            errou(numero6)
            if (specialEscolhido == "No") {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNoWrong.webp?alt=media&token=e2237747-9b69-4e41-99a1-06ec108b72b1"
            } else if (specialEscolhido == "Yes") {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FSpecialWrong.webp?alt=media&token=32a81d85-6272-43cb-b84e-cf675a618aba"
            } else {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhnWrong.webp?alt=media&token=6b2cd217-f5db-4dc4-88e4-4fcd5ef7ccdb"
            }
        } else {
            if (specialEscolhido == "No") {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNo.webp?alt=media&token=77fa74ef-7de8-4d0b-8a9b-962ba974552b"
            } else if (specialEscolhido == "Yes") {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FSpecial.webp?alt=media&token=e86e49b1-0906-4b4d-8932-e1a8173aedfb"
            } else {
                Legal = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FAhn.webp?alt=media&token=743ac293-e943-4483-b78f-80ea536583fd"
            }
        }
        if (UpgradeEscolhido !== UpgradeDoDia) {
            errou(numero6)
            if (UpgradeEscolhido == "No") {
                Upou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNoWrong.webp?alt=media&token=e2237747-9b69-4e41-99a1-06ec108b72b1"
            } else {
                Upou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FUpgradeWrong.webp?alt=media&token=a4fbcca8-69d0-4042-9aa1-bf9363a07b56"
            }
        } else {
            if (UpgradeEscolhido == "No") {
                Upou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FNo.webp?alt=media&token=77fa74ef-7de8-4d0b-8a9b-962ba974552b"
            } else {
                Upou = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/PvZ1%20Image%2FPacket%20Seeds%2FOther%2FUpgrade.webp?alt=media&token=edffdeba-299b-4dec-95a4-1a4b085c01df"
            }     
        }
        if (vitoria <= 0) {
           ImagemDaPlanta = Perdeu
        } else {
            ImagemDaPlanta = Ganhou
        }
        var solquant  = document.createElement("a")
        solquant.id = "solquantidade"+soissoissois
        soissoissois++
        solquant.style = "position: absolute; margin-left: 36px; margin-top: 83px; color: "+corSol+"; font-family: PvZFont2; text-align: center"
        solquant.innerText = SolEscolhido
        document.getElementById("yayay"+yipe).appendChild(solquant);
        var semente  = document.createElement("img")
        semente.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/Seed_Slots2.png?alt=media&token=7104eeba-2370-4f0c-838a-2423181334dc"
        semente.width = "680"
        semente.height = "115.8"
        semente.classList = "img-fluid"
        semente.style = "margin-top: 2px"
        document.getElementById("yayay"+yipe).appendChild(semente);
        var sol  = document.createElement("img")
        sol.src = "https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/1eda2dd3572c11df08299c94742762d0f603c295.gif?alt=media&token=6686f86d-67b1-4249-a5c0-8a07eda07378"
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
        var pacote7  = document.createElement("img")
        pacote7.src = Upou
        pacote7.style = "margin-left: 5px; position: relative"
        pacote7.classList = "pacote"
        pacote7.width = "65"
        pacote7.id = "pacote"+pacoteNumero
        pacoteNumero++
        document.getElementById("yayay"+yipe).appendChild(pacote7);
        document.getElementById("yayay"+yipe).appendChild(document.createElement("br"));
        yipe++
    }
    function clicar(numero5) {
        criar(numero5)
        gravar(numero5)
        setTimeout(function () { 
            document.getElementById("pacote"+lalalala).classList.add("animation");
            lalalala++
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
            document.getElementById("pacote"+lalalala).classList.add("animation"+lalalala);
            lalalala++
        }, 3500);
        setTimeout(function () { 
            document.getElementById("sois"+solsolsol).classList.add("animation"+solsolsol);
        }, 4000);
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
        }, 4500);
    }
