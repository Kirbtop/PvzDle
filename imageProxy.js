// IMAGE PROXY - reemplaza URLs de Firebase con rutas locales
// Agregar este script ANTES de animationJS.js en index.html

(function() {
    // Mapeo completo: firebase path -> local path
    const IMAGE_MAP = {
        // === PLANTAS - Image (thumbnail en dropdown) ===
        'PvZ1%20Image%2FPeashooter1.webp': 'Image/Plants/peashooter1.webp',
        'PvZ1%20Image%2FSunflower1.webp': 'Image/Plants/sunflower1.webp',
        'PvZ1%20Image%2FCherry_Bomb1.webp': 'Image/Plants/cherry bomb1.webp',
        'PvZ1%20Image%2FWall-nut1.webp': 'Image/Plants/wall-nut1.webp',
        'PvZ1%20Image%2FPotato_Mine1.webp': 'Image/Plants/potato mine1.webp',
        'PvZ1%20Image%2FSnow_Pea1.webp': 'Image/Plants/snow pea1.webp',
        'PvZ1%20Image%2FChomper1.webp': 'Image/Plants/chomper1.webp',
        'PvZ1%20Image%2FRepeater1.webp': 'Image/Plants/repeater1.webp',
        'PvZ1%20Image%2FNight%2FPuff-shroom1.webp': 'Image/Plants/puff-shroom1.webp',
        'PvZ1%20Image%2FNight%2FSun-shroom1.webp': 'Image/Plants/sun-shroom1.webp',
        'PvZ1%20Image%2FNight%2FFume-shroom1.webp': 'Image/Plants/fume-shroom1.webp',
        'PvZ1%20Image%2FNight%2FGrave_Buster1.webp': 'Image/Plants/grave buster1.webp',
        'PvZ1%20Image%2FNight%2FHypno-shroom1.webp': 'Image/Plants/hypno-shroom1.webp',
        'PvZ1%20Image%2FNight%2FScaredy-shroom1.webp': 'Image/Plants/scaredy-shroom1.webp',
        'PvZ1%20Image%2FNight%2FIce-shroom1.webp': 'Image/Plants/ice-shroom1.webp',
        'PvZ1%20Image%2FNight%2FDoom-shroom1.webp': 'Image/Plants/doom-shroom1.webp',
        'PvZ1%20Image%2FPool%2FLily_Pad1.webp': 'Image/Plants/lily pad1.webp',
        'PvZ1%20Image%2FPool%2FSquash1.webp': 'Image/Plants/squash1.webp',
        'PvZ1%20Image%2FPool%2FThreepeater1.webp': 'Image/Plants/threepeater1.webp',
        'PvZ1%20Image%2FPool%2FTangle_Kelp1.webp': 'Image/Plants/tangle kelp1.webp',
        'PvZ1%20Image%2FPool%2FJalapeno1.webp': 'Image/Plants/jalapeno1.webp',
        'PvZ1%20Image%2FPool%2FSpikeweed1.webp': 'Image/Plants/spikeweed1.webp',
        'PvZ1%20Image%2FPool%2FTorchwood1.webp': 'Image/Plants/torchwood1.webp',
        'PvZ1%20Image%2FPool%2FTall-nut1.webp': 'Image/Plants/tall-nut1.webp',
        'PvZ1%20Image%2FFog%2FSea-shroom1.webp': 'Image/Plants/sea-shroom1.webp',
        'PvZ1%20Image%2FFog%2FPlantern1.webp': 'Image/Plants/plantern1.webp',
        'PvZ1%20Image%2FFog%2FCactus1.webp': 'Image/Plants/cactus1.webp',
        'PvZ1%20Image%2FFog%2FBlover1.webp': 'Image/Plants/blover1.webp',
        'PvZ1%20Image%2FFog%2FSplit_Pea1.webp': 'Image/Plants/split pea1.webp',
        'PvZ1%20Image%2FFog%2FStarfruit1.webp': 'Image/Plants/starfruit1.webp',
        'PvZ1%20Image%2FFog%2FPumpkin1.webp': 'Image/Plants/pumpkin1.webp',
        'PvZ1%20Image%2FFog%2FMagnet-shroom1.webp': 'Image/Plants/magnet-shroom1.webp',
        'PvZ1%20Image%2FRoof%2FCabbage-pult1.webp': 'Image/Plants/cabbage-pult1.webp',
        'PvZ1%20Image%2FRoof%2FFlower_Pot1.webp': 'Image/Plants/flower-pot1.webp',
        'PvZ1%20Image%2FRoof%2FKernel-pult1.webp': 'Image/Plants/kernel-pult1.webp',
        'PvZ1%20Image%2FRoof%2FCoffee_Bean1.webp': 'Image/Plants/coffee bean1.webp',
        'PvZ1%20Image%2FRoof%2FGarlic1.webp': 'Image/Plants/garlic1.webp',
        'PvZ1%20Image%2FRoof%2FUmbrella_Leaf1.webp': 'Image/Plants/umbrella leaf1.webp',
        'PvZ1%20Image%2FRoof%2FMarigold1.webp': 'Image/Plants/marigold1.webp',
        'PvZ1%20Image%2FRoof%2FMelon-pult1.webp': 'Image/Plants/melon-pult1.webp',
        'PvZ1%20Image%2FShop%2FGatling_Pea1.webp': 'Image/Plants/gatling pea1.webp',
        'PvZ1%20Image%2FShop%2FTwin_Sunflower1.webp': 'Image/Plants/twin sunflower1.webp',
        'PvZ1%20Image%2FShop%2FGloom-shroom1.webp': 'Image/Plants/gloom-shroom1.webp',
        'PvZ1%20Image%2FShop%2FCattail1.webp': 'Image/Plants/cattail1.webp',
        'PvZ1%20Image%2FShop%2FWinter_Melon1.webp': 'Image/Plants/winter melon1.webp',
        'PvZ1%20Image%2FShop%2FGold_Magnet1.webp': 'Image/Plants/gold magnet1.webp',
        'PvZ1%20Image%2FShop%2FSpikerock1.webp': 'Image/Plants/spikerock1.webp',
        'PvZ1%20Image%2FShop%2FCob_Cannon1.webp': 'Image/Plants/cob cannon1.webp',
        'PvZ1%20Image%2FShop%2FImitater1.webp': 'Image/Plants/imitater1.webp',

        // === SEED PACKETS - Won (correct guess) ===
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F0.webp': 'Image/plantcardsrightwrong/0.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F1.webp': 'Image/plantcardsrightwrong/1.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F2.webp': 'Image/plantcardsrightwrong/2.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F3.webp': 'Image/plantcardsrightwrong/3.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F4.webp': 'Image/plantcardsrightwrong/4.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F5.webp': 'Image/plantcardsrightwrong/5.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F6.webp': 'Image/plantcardsrightwrong/6.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F7.webp': 'Image/plantcardsrightwrong/7.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F8.webp': 'Image/plantcardsrightwrong/8.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F9.webp': 'Image/plantcardsrightwrong/9.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F10.webp': 'Image/plantcardsrightwrong/10.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F11.webp': 'Image/plantcardsrightwrong/11.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F12.webp': 'Image/plantcardsrightwrong/12.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F13.webp': 'Image/plantcardsrightwrong/13.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F14.webp': 'Image/plantcardsrightwrong/14.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F15.webp': 'Image/plantcardsrightwrong/15.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F16.webp': 'Image/plantcardsrightwrong/16.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F17.webp': 'Image/plantcardsrightwrong/17.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F18.webp': 'Image/plantcardsrightwrong/18.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F19.webp': 'Image/plantcardsrightwrong/19.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F20.webp': 'Image/plantcardsrightwrong/20.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F21.webp': 'Image/plantcardsrightwrong/21.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F22.webp': 'Image/plantcardsrightwrong/22.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F23.webp': 'Image/plantcardsrightwrong/23.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F24.webp': 'Image/plantcardsrightwrong/24.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F25.webp': 'Image/plantcardsrightwrong/25.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F26.webp': 'Image/plantcardsrightwrong/26.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F27.webp': 'Image/plantcardsrightwrong/27.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F28.webp': 'Image/plantcardsrightwrong/28.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F29.webp': 'Image/plantcardsrightwrong/29.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F30.webp': 'Image/plantcardsrightwrong/30.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F31.webp': 'Image/plantcardsrightwrong/31.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F32.webp': 'Image/plantcardsrightwrong/32.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F33.webp': 'Image/plantcardsrightwrong/33.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F34.webp': 'Image/plantcardsrightwrong/34.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F35.webp': 'Image/plantcardsrightwrong/35.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F36.webp': 'Image/plantcardsrightwrong/36.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F37.webp': 'Image/plantcardsrightwrong/37.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F39.webp': 'Image/plantcardsrightwrong/39.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F38.webp': 'Image/plantcardsrightwrong/38.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F40.webp': 'Image/plantcardsrightwrong/40.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F41.webp': 'Image/plantcardsrightwrong/41.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F42.webp': 'Image/plantcardsrightwrong/42.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F43.webp': 'Image/plantcardsrightwrong/43.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F44.webp': 'Image/plantcardsrightwrong/44.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F47.webp': 'Image/plantcardsrightwrong/47.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F46.webp': 'Image/plantcardsrightwrong/46.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F45.webp': 'Image/plantcardsrightwrong/45.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F48.webp': 'Image/plantcardsrightwrong/48.webp',

        // === SEED PACKETS - Wrong (incorrect guess) ===
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F0Wrong.webp': 'Image/plantcardsrightwrong/0Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F1Wrong.webp': 'Image/plantcardsrightwrong/1Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F2Wrong.webp': 'Image/plantcardsrightwrong/2Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F3Wrong.webp': 'Image/plantcardsrightwrong/3Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F4Wrong.webp': 'Image/plantcardsrightwrong/4Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F5Wrong.webp': 'Image/plantcardsrightwrong/5Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F6Wrong.webp': 'Image/plantcardsrightwrong/6Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FDay%2F7Wrong.webp': 'Image/plantcardsrightwrong/7Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F8Wrong.webp': 'Image/plantcardsrightwrong/8Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F9Wrong.webp': 'Image/plantcardsrightwrong/9Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F10Wrong.webp': 'Image/plantcardsrightwrong/10Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F11Wrong.webp': 'Image/plantcardsrightwrong/11Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F12Wrong.webp': 'Image/plantcardsrightwrong/12Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F13Wrong.webp': 'Image/plantcardsrightwrong/13Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F14Wrong.webp': 'Image/plantcardsrightwrong/14Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FNight%2F15Wrong.webp': 'Image/plantcardsrightwrong/15Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F16Wrong.webp': 'Image/plantcardsrightwrong/16Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F17Wrong.webp': 'Image/plantcardsrightwrong/17Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F18Wrong.webp': 'Image/plantcardsrightwrong/18Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F19Wrong.webp': 'Image/plantcardsrightwrong/19Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F20Wrong.webp': 'Image/plantcardsrightwrong/20Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F21Wrong.webp': 'Image/plantcardsrightwrong/21Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F22Wrong.webp': 'Image/plantcardsrightwrong/22Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FPool%2F23Wrong.webp': 'Image/plantcardsrightwrong/23Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F24Wrong.webp': 'Image/plantcardsrightwrong/24Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F25Wrong.webp': 'Image/plantcardsrightwrong/25Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F26Wrong.webp': 'Image/plantcardsrightwrong/26Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F27Wrong.webp': 'Image/plantcardsrightwrong/27Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F28Wrong.webp': 'Image/plantcardsrightwrong/28Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F29Wrong.webp': 'Image/plantcardsrightwrong/29Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F30Wrong.webp': 'Image/plantcardsrightwrong/30Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FFog%2F31Wrong.webp': 'Image/plantcardsrightwrong/31Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F32Wrong.webp': 'Image/plantcardsrightwrong/32Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F33Wrong.webp': 'Image/plantcardsrightwrong/33Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F34Wrong.webp': 'Image/plantcardsrightwrong/34Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F35Wrong.webp': 'Image/plantcardsrightwrong/35Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F36Wrong.webp': 'Image/plantcardsrightwrong/36Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F37Wrong.webp': 'Image/plantcardsrightwrong/37Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F39Wrong.webp': 'Image/plantcardsrightwrong/39Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FRoof%2F38Wrong.webp': 'Image/plantcardsrightwrong/38Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F40Wrong.webp': 'Image/plantcardsrightwrong/40Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F41Wrong.webp': 'Image/plantcardsrightwrong/41Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F42Wrong.webp': 'Image/plantcardsrightwrong/42Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F43Wrong.webp': 'Image/plantcardsrightwrong/43Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F44Wrong.webp': 'Image/plantcardsrightwrong/44Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F47Wrong.webp': 'Image/plantcardsrightwrong/47Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F46Wrong.webp': 'Image/plantcardsrightwrong/46Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F45Wrong.webp': 'Image/plantcardsrightwrong/45Wrong.webp',
        'PvZ1%20Image%2FPacket%20Seeds%2FPlants%2FShop%2F48Wrong.webp': 'Image/plantcardsrightwrong/48Wrong.webp',
    };

    function localUrl(firebaseUrl) {
        if (!firebaseUrl || !firebaseUrl.includes('firebasestorage')) return firebaseUrl;
        const base = 'https://firebasestorage.googleapis.com/v0/b/jogo-e8689.appspot.com/o/';
        for (const [fbPath, localPath] of Object.entries(IMAGE_MAP)) {
            if (firebaseUrl.includes(fbPath)) return localPath;
        }
        return firebaseUrl; // fallback: devuelve original si no está mapeado
    }

    // Interceptar Firebase snapshot para reemplazar URLs en los datos
    const _on = firebase.database.Reference.prototype.on;
    firebase.database.Reference.prototype.on = function(event, callback, ...rest) {
        const wrappedCallback = function(snapshot) {
            const originalVal = snapshot.val.bind(snapshot);
            snapshot.val = function() {
                const data = originalVal();
                if (data && typeof data === 'object') {
                    const patched = Object.assign({}, data);
                    if (patched.Image) patched.Image = localUrl(patched.Image);
                    if (patched.Won)   patched.Won   = localUrl(patched.Won);
                    if (patched.Wrong) patched.Wrong = localUrl(patched.Wrong);
                    return patched;
                }
                return data;
            };
            callback(snapshot);
        };
        return _on.call(this, event, wrappedCallback, ...rest);
    };

    const _once = firebase.database.Reference.prototype.once;
    firebase.database.Reference.prototype.once = function(event, ...rest) {
        return _once.call(this, event, ...rest).then(snapshot => {
            const originalVal = snapshot.val.bind(snapshot);
            snapshot.val = function() {
                const data = originalVal();
                if (data && typeof data === 'object') {
                    const patched = Object.assign({}, data);
                    if (patched.Image) patched.Image = localUrl(patched.Image);
                    if (patched.Won)   patched.Won   = localUrl(patched.Won);
                    if (patched.Wrong) patched.Wrong = localUrl(patched.Wrong);
                    return patched;
                }
                return data;
            };
            return snapshot;
        });
    };
})();
