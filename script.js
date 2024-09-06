
let buatDO = true, buatRE = true, buatMI = true, buatFA = true, buatSOL = true, buatLA = true, buatSI = true


// var DO = buatNada(261.63);
DO = buatNada(261.63);
RE = buatNada(293.66);
MI = buatNada(329.63);
FA = buatNada(349.63);
SOL = buatNada(392.00);
LA = buatNada(440.00);
SI = buatNada(493.88);

// setInterval(() => {
//     if (buatDO) {
//         DO = buatNada(261.63);
//         buatDO = false
//     }
//     if (buatRE) {
//         RE = buatNada(293.66);
//         buatRE = false
//     }
//     if (buatMI) {
//         MI = buatNada(329.63);
//         buatMI = false
//     }
//     if (buatFA) {
//         FA = buatNada(349.63);
//         buatFA = false
//     }
//     if (buatSOL) {
//         SOL = buatNada(392.00);
//         buatSOL = false
//     }
//     if (buatLA) {
//         LA = buatNada(440.00);
//         buatLA = false
//     }
//     if (buatSI) {
//         SI = buatNada(493.88);
//         buatSI = false
//     }
// }, 1);





$('.piano').mousedown(function (e) { 
    if (e.target == $('#c4')[0]) {
        DO.osc.start()
    }
    if (e.target == $('#d4')[0]) {
        RE.osc.start()
    }
    if (e.target == $('#e4')[0]) {
        MI.osc.start()
    }
    if (e.target == $('#f4')[0]) {
        FA.osc.start()
    }
    if (e.target == $('#g4')[0]) {
        SOL.osc.start()
    }
    if (e.target == $('#a4')[0]) {
        LA.osc.start()
    }
    if (e.target == $('#b4')[0]) {
        SI.osc.start()
    }
}).mouseup(function (e){
    if (e.target == $('#c4')[0]) {
        console.log(DO.audio);
        DO.smooth.gain.linearRampToValueAtTime(1, DO.audio.currentTime +4);
        DO.osc.stop(DO.audio.currentTime+4);
        buatDO = true;
    }
    if (e.target == $('#d4')[0]) {
        RE.osc.stop()
        buatRE = true;
    }
    if (e.target == $('#e4')[0]) {
        MI.osc.stop()
        buatMI = true;
    }
    if (e.target == $('#f4')[0]) {
        FA.osc.stop()
        buatFA = true;
    }
    if (e.target == $('#g4')[0]) {
        SOL.osc.stop()
        buatSOL = true;
    }
    if (e.target == $('#a4')[0]) {
        LA.osc.stop()
        buatLA = true;
    }
    if (e.target == $('#b4')[0]) {
        SI.osc.stop()
        buatSI = true;
    }
});


let sekaliDO = true, sekaliRE = true, sekaliMI = true, sekaliFA = true, sekaliSOL = true, sekaliLA = true, sekaliSI = true;

$(document).keydown(function (e) { 
    if (e.key.toLowerCase() == 'a' && sekaliDO) {
        $('#c4').mousedown();
        sekaliDO = false;
    }
    if (e.key.toLowerCase() == 's' && sekaliRE) {
        $('#d4').mousedown();
        sekaliRE = false;
    }
    if (e.key.toLowerCase() == 'd' && sekaliMI) {
        $('#e4').mousedown();
        sekaliMI = false;
    }
    if (e.key.toLowerCase() == 'f' && sekaliFA) {
        $('#f4').mousedown();
        sekaliFA = false;
    }
    if (e.key.toLowerCase() == 'g' && sekaliSOL) {
        $('#g4').mousedown();
        sekaliSOL = false;
    }
    if (e.key.toLowerCase() == 'h' && sekaliLA) {
        $('#a4').mousedown();
        sekaliLA = false;
    }
    if (e.key.toLowerCase() == 'j' && sekaliSI) {
        $('#b4').mousedown();
        sekaliSI = false;
    }
}).keyup(function (e) { 
    if (e.key.toLowerCase() == 'a') {
        $('#c4').mouseup();
        sekaliDO = true;
    }
    if (e.key.toLowerCase() == 's') {
        $('#d4').mouseup();
        sekaliRE = true;
    }
    if (e.key.toLowerCase() == 'd') {
        $('#e4').mouseup();
        sekaliMI = true;
    }
    if (e.key.toLowerCase() == 'f') {
        $('#f4').mouseup();
        sekaliFA = true;
    }
    if (e.key.toLowerCase() == 'g') {
        $('#g4').mouseup();
        sekaliSOL = true;
    }
    if (e.key.toLowerCase() == 'h') {
        $('#a4').mouseup();
        sekaliLA = true;
    }
    if (e.key.toLowerCase() == 'j') {
        $('#b4').mouseup();
        sekaliSI = true;
    }
});



// $('#c4').mousedown(function (e) { 
//     DO.osc.start()
// }).mouseup(function () { 
//     DO.osc.stop(DO.audio.currentTime+1)
//     buatDO = true
// });





function buatNada(freq) {
    const audio = new ( window.AudioContext || window.webkitAudioContext )();
    const osc =  audio.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audio.currentTime);
    osc.connect(audio.destination);

    const smooth = audio.createGain();
    smooth.gain.setValueAtTime(1, audio.currentTime);

    osc.connect(smooth);
    smooth.connect(audio.destination);

    return {osc:osc, audio:audio, smooth:smooth};
}













function tesnada() {
    const audio = new ( window.AudioContext || window.webkitAudioContext )();
    const osc =  audio.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(280, audio.currentTime);
    
    const volume = audio.createGain();
    volume.gain.setValueAtTime(0, audio.currentTime);

    // volume.gain.linearRampToValueAtTime(1, 0.1);
    // volume.gain.linearRampToValueAtTime(0, audio.currentTime + 8);
    
    osc.connect(volume);
    volume.connect(audio.destination);
    
    // osc.start();
    // osc.stop(audio.currentTime + 10);

    return {osc:osc, audio:audio, volume:volume};
}

kond = true;
setInterval(() => {
    if (kond) {
        tes = tesnada();
        kond = false
    }
}, 100);


$(document).keydown(function (e) { 
    if (e.key == 'z') {
        tes.osc.start();
        tes.volume.gain.linearRampToValueAtTime(1, 0.2);
    }
}).keyup(function (e) {
    if (e.key == 'z') {
        tes.volume.gain.linearRampToValueAtTime(0.0001, tes.audio.currentTime + 1);
        tes.osc.stop(tes.audio.currentTime + 1);
        kond = true;
    }
});