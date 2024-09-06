function nada(fr) {
    const audio = new ( window.AudioContext || window.webkitAudioContext )();
    const osc =  audio.createOscillator();
    const volume = audio.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(fr, audio.currentTime);
    // volume.gain.setValueAtTime(0, audio.currentTime);

    osc.connect(volume);
    volume.connect(audio.destination);
    
    // osc.start();
    // volume.gain.linearRampToValueAtTime(1, audio.currentTime + 0.01);
    // volume.gain.linearRampToValueAtTime(0, audio.currentTime + 1.2);
    // osc.stop(audio.currentTime + 1.2);
    
    return {
        aktif : true,
        start : function () { osc.start(); },
        // stop  : function () { try{osc.stop(audio.currentTime + 1);}catch{} },
        stop  : function () {null},
        vnaik : function () { null },
        // vnaik : function () { volume.gain.linearRampToValueAtTime(1, audio.currentTime + 0.1); },
        // vturun: function () { volume.gain.linearRampToValueAtTime(0, audio.currentTime + 1); },
        vturun: function () {
            let stopsmooth = setInterval(() => {
                let vol = volume.gain.value;
                if (vol > 0.01) { // 0.01
                    volume.gain.setValueAtTime(vol-stopinter, audio.currentTime);
                }
                else {
                    clearInterval(stopsmooth);
                    try{
                        osc.stop();
                    } catch{}
                    audio.close();
                }
            }, 1);
        },
        end   : function () { 
            null
            // setTimeout(() => {
            //     audio.close();
            // }, 1000);
        }
    };
}



////////// FREKUENSI //////////
// OKTAF 1
const c2  = 65.41;
const cm2 = 69.30;
const d2  = 73.42;
const dm2 = 77.78;
const e2  = 82.41;
const f2  = 87.31;
const fm2 = 92.50;
const g2  = 98.00;
const gm2 = 103.83;
const a2  = 110.00;
const am2 = 116.54;
const b2  = 123.47;

// OKTAF 2
const c3  = 130.81;
const cm3 = 138.59;
const d3  = 146.83;
const dm3 = 155.56;
const e3  = 164.81;
const f3  = 174.61;
const fm3 = 185.00;
const g3  = 196.00;
const gm3 = 207.65;
const a3  = 220.00;
const am3 = 233.08;
const b3  = 246.94;

// OKTAF 3
const c4  = 261.63;
const cm4 = 277.18;
const d4  = 293.66;
const dm4 = 311.13;
const e4  = 329.63;
const f4  = 349.23;
const fm4 = 369.99;
const g4  = 392.00;
const gm4 = 415.30;
const a4  = 440.00;
const am4 = 466.16;
const b4  = 493.88;

// OKTAF 4
const c5  = 523.25;
const cm5 = 554.37;
const d5  = 587.33;
const dm5 = 622.25;
const e5  = 659.25;
const f5  = 698.46;
const fm5 = 739.99;
const g5  = 783.99;
const gm5 = 830.61;
const a5  = 880.00;
const am5 = 932.33;
const b5  = 987.77;



////////// INIT NADA //////////
// OKTAF 1
let C2  = nada(c2);
let CM2 = nada(cm2);
let D2  = nada(d2);
let DM2 = nada(dm2);
let E2  = nada(e2);
let F2  = nada(f2);
let FM2 = nada(fm2);
let G2  = nada(g2);
let GM2 = nada(gm2);
let A2  = nada(a2);
let AM2 = nada(am2);
let B2  = nada(b2);
// OKTAF 2
let C3  = nada(c3);
let CM3 = nada(cm3);
let D3  = nada(d3);
let DM3 = nada(dm3);
let E3  = nada(e3);
let F3  = nada(f3);
let FM3 = nada(fm3);
let G3  = nada(g3);
let GM3 = nada(gm3);
let A3  = nada(a3);
let AM3 = nada(am3);
let B3  = nada(b3);
// OKTAF 3
let C4  = nada(c4);
let CM4 = nada(cm4);
let D4  = nada(d4);
let DM4 = nada(dm4);
let E4  = nada(e4);
let F4  = nada(f4);
let FM4 = nada(fm4);
let G4  = nada(g4);
let GM4 = nada(gm4);
let A4  = nada(a4);
let AM4 = nada(am4);
let B4  = nada(b4);
// OKTAF 4
let C5  = nada(c5);
let CM5 = nada(cm5);
let D5  = nada(d5);
let DM5 = nada(dm5);
let E5  = nada(e5);
let F5  = nada(f5);
let FM5 = nada(fm5);
let G5  = nada(g5);
let GM5 = nada(gm5);
let A5  = nada(a5);
let AM5 = nada(am5);
let B5  = nada(b5);






minor = null;
c2_dipencet = null;
d2_dipencet = null;
e2_dipencet = null;
f2_dipencet = null;
g2_dipencet = null;
a2_dipencet = null;
b2_dipencet = null;
c3_dipencet = null;
d3_dipencet = null;
e3_dipencet = null;
f3_dipencet = null;
g3_dipencet = null;
a3_dipencet = null;
b3_dipencet = null;
c4_dipencet = null;
d4_dipencet = null;
e4_dipencet = null;
f4_dipencet = null;
g4_dipencet = null;
a4_dipencet = null;
b4_dipencet = null;
c5_dipencet = null;
d5_dipencet = null;
e5_dipencet = null;
f5_dipencet = null;
g5_dipencet = null;
a5_dipencet = null;
b5_dipencet = null;
function setkey(e, status) {
    /////  KEY  //////
    if (e.code == 'Space') { minor = status; }
    if (e.key.toLowerCase() == 'z') { c2_dipencet = status }
    if (e.key.toLowerCase() == 'x') { d2_dipencet = status }
    if (e.key.toLowerCase() == 'c') { e2_dipencet = status }
    if (e.key.toLowerCase() == 'v') { f2_dipencet = status }
    if (e.key.toLowerCase() == 'b') { g2_dipencet = status }
    if (e.key.toLowerCase() == 'n') { a2_dipencet = status }
    if (e.key.toLowerCase() == 'm') { b2_dipencet = status }
    if (e.key.toLowerCase() == 'a') { c3_dipencet = status }
    if (e.key.toLowerCase() == 's') { d3_dipencet = status }
    if (e.key.toLowerCase() == 'd') { e3_dipencet = status }
    if (e.key.toLowerCase() == 'f') { f3_dipencet = status }
    if (e.key.toLowerCase() == 'g') { g3_dipencet = status }
    if (e.key.toLowerCase() == 'h') { a3_dipencet = status }
    if (e.key.toLowerCase() == 'j') { b3_dipencet = status }
    if (e.key.toLowerCase() == 'q') { c4_dipencet = status }
    if (e.key.toLowerCase() == 'w') { d4_dipencet = status }
    if (e.key.toLowerCase() == 'e') { e4_dipencet = status }
    if (e.key.toLowerCase() == 'r') { f4_dipencet = status }
    if (e.key.toLowerCase() == 't') { g4_dipencet = status }
    if (e.key.toLowerCase() == 'y') { a4_dipencet = status }
    if (e.key.toLowerCase() == 'u') { b4_dipencet = status }
    if (e.key.toLowerCase() == '1') { c5_dipencet = status }
    if (e.key.toLowerCase() == '2') { d5_dipencet = status }
    if (e.key.toLowerCase() == '3') { e5_dipencet = status }
    if (e.key.toLowerCase() == '4') { f5_dipencet = status }
    if (e.key.toLowerCase() == '5') { g5_dipencet = status }
    if (e.key.toLowerCase() == '6') { a5_dipencet = status }
    if (e.key.toLowerCase() == '7') { b5_dipencet = status }
}






function play(nada) { nada.start(); nada.vnaik(); nada.aktif = false; }
function unplay(n,fr) { n.vturun(); n.stop(); n.end(); return nada(fr); }





/////  MAIN KONTROL  /////
$(document).
keydown(function (e) {
    /////  KEY  /////
    setkey(e, true);

    /////  MAYOR  /////
    // OKTAF 1
    if (c2_dipencet && C2.aktif && !minor) { play(C2); CM2 = unplay(CM2,cm2); }
    if (d2_dipencet && D2.aktif && !minor) { play(D2); DM2 = unplay(DM2,dm2); }
    if (e2_dipencet && E2.aktif          ) { play(E2);                        }
    if (f2_dipencet && F2.aktif && !minor) { play(F2); FM2 = unplay(FM2,fm2); }
    if (g2_dipencet && G2.aktif && !minor) { play(G2); GM2 = unplay(GM2,gm2); }
    if (a2_dipencet && A2.aktif && !minor) { play(A2); AM2 = unplay(AM2,am2); }
    if (b2_dipencet && B2.aktif          ) { play(B2);                        }
    // OKTAF 2
    if (c3_dipencet && C3.aktif && !minor) { play(C3); CM3 = unplay(CM3,cm3); }
    if (d3_dipencet && D3.aktif && !minor) { play(D3); DM3 = unplay(DM3,dm3); }
    if (e3_dipencet && E3.aktif          ) { play(E3);                        }
    if (f3_dipencet && F3.aktif && !minor) { play(F3); FM3 = unplay(FM3,fm3); }
    if (g3_dipencet && G3.aktif && !minor) { play(G3); GM3 = unplay(GM3,gm3); }
    if (a3_dipencet && A3.aktif && !minor) { play(A3); AM3 = unplay(AM3,am3); }
    if (b3_dipencet && B3.aktif          ) { play(B3);                        }
    // OKTAF 3
    if (c4_dipencet && C4.aktif && !minor) { play(C4); CM4 = unplay(CM4,cm4); }
    if (d4_dipencet && D4.aktif && !minor) { play(D4); DM4 = unplay(DM4,dm4); }
    if (e4_dipencet && E4.aktif          ) { play(E4);                        }
    if (f4_dipencet && F4.aktif && !minor) { play(F4); FM4 = unplay(FM4,fm4); }
    if (g4_dipencet && G4.aktif && !minor) { play(G4); GM4 = unplay(GM4,gm4); }
    if (a4_dipencet && A4.aktif && !minor) { play(A4); AM4 = unplay(AM4,am4); }
    if (b4_dipencet && B4.aktif          ) { play(B4);                        }
    // OKTAF 4
    if (c5_dipencet && C5.aktif && !minor) { play(C5); CM5 = unplay(CM5,cm5); }
    if (d5_dipencet && D5.aktif && !minor) { play(D5); DM5 = unplay(DM5,dm5); }
    if (e5_dipencet && E5.aktif          ) { play(E5);                        }
    if (f5_dipencet && F5.aktif && !minor) { play(F5); FM5 = unplay(FM5,fm5); }
    if (g5_dipencet && G5.aktif && !minor) { play(G5); GM5 = unplay(GM5,gm5); }
    if (a5_dipencet && A5.aktif && !minor) { play(A5); AM5 = unplay(AM5,am5); }
    if (b5_dipencet && B5.aktif          ) { play(B5);                        }


    /////  MINOR  /////
    // OKTAF 1
    if (minor && c2_dipencet && CM2.aktif) { play(CM2); C2 = unplay(C2,c2); }
    if (minor && d2_dipencet && DM2.aktif) { play(DM2); D2 = unplay(D2,d2); }
    if (minor && f2_dipencet && FM2.aktif) { play(FM2); F2 = unplay(F2,f2); }
    if (minor && g2_dipencet && GM2.aktif) { play(GM2); G2 = unplay(G2,g2); }
    if (minor && a2_dipencet && AM2.aktif) { play(AM2); A2 = unplay(A2,a2); }
    // OKTAF 2
    if (minor && c3_dipencet && CM3.aktif) { play(CM3); C3 = unplay(C3,c3); }
    if (minor && d3_dipencet && DM3.aktif) { play(DM3); D3 = unplay(D3,d3); }
    if (minor && f3_dipencet && FM3.aktif) { play(FM3); F3 = unplay(F3,f3); }
    if (minor && g3_dipencet && GM3.aktif) { play(GM3); G3 = unplay(G3,g3); }
    if (minor && a3_dipencet && AM3.aktif) { play(AM3); A3 = unplay(A3,a3); }
    // OKTAF 3
    if (minor && c4_dipencet && CM4.aktif) { play(CM4); C4 = unplay(C4,c4); }
    if (minor && d4_dipencet && DM4.aktif) { play(DM4); D4 = unplay(D4,d4); }
    if (minor && f4_dipencet && FM4.aktif) { play(FM4); F4 = unplay(F4,f4); }
    if (minor && g4_dipencet && GM4.aktif) { play(GM4); G4 = unplay(G4,g4); }
    if (minor && a4_dipencet && AM4.aktif) { play(AM4); A4 = unplay(A4,a4); }
    // OKTAF 4
    if (minor && c5_dipencet && CM5.aktif) { play(CM5); C5 = unplay(C5,c5); }
    if (minor && d5_dipencet && DM5.aktif) { play(DM5); D5 = unplay(D5,d5); }
    if (minor && f5_dipencet && FM5.aktif) { play(FM5); F5 = unplay(F5,f5); }
    if (minor && g5_dipencet && GM5.aktif) { play(GM5); G5 = unplay(G5,g5); }
    if (minor && a5_dipencet && AM5.aktif) { play(AM5); A5 = unplay(A5,a5); }
});
$(document).
keyup(function (e) {
    /////  MAYOR  /////
    // OKTAF 1
    if (e.key.toLowerCase() == 'z') { C2 = unplay(C2,c2); CM2 = unplay(CM2,cm2); }
    if (e.key.toLowerCase() == 'x') { D2 = unplay(D2,d2); DM2 = unplay(DM2,dm2); }
    if (e.key.toLowerCase() == 'c') { E2 = unplay(E2,e2);                        }
    if (e.key.toLowerCase() == 'v') { F2 = unplay(F2,f2); FM2 = unplay(FM2,fm2); }
    if (e.key.toLowerCase() == 'b') { G2 = unplay(G2,g2); GM2 = unplay(GM2,gm2); }
    if (e.key.toLowerCase() == 'n') { A2 = unplay(A2,a2); AM2 = unplay(AM2,am2); }
    if (e.key.toLowerCase() == 'm') { B2 = unplay(B2,b2);                        }
    // OKTAF 2
    if (e.key.toLowerCase() == 'a') { C3 = unplay(C3,c3); CM3 = unplay(CM3,cm3); }
    if (e.key.toLowerCase() == 's') { D3 = unplay(D3,d3); DM3 = unplay(DM3,dm3); }
    if (e.key.toLowerCase() == 'd') { E3 = unplay(E3,e3);                        }
    if (e.key.toLowerCase() == 'f') { F3 = unplay(F3,f3); FM3 = unplay(FM3,fm3); }
    if (e.key.toLowerCase() == 'g') { G3 = unplay(G3,g3); GM3 = unplay(GM3,gm3); }
    if (e.key.toLowerCase() == 'h') { A3 = unplay(A3,a3); AM3 = unplay(AM3,am3); }
    if (e.key.toLowerCase() == 'j') { B3 = unplay(B3,b3);                        }
    // OKTAF 3
    if (e.key.toLowerCase() == 'q') { C4 = unplay(C4,c4); CM4 = unplay(CM4,cm4); }
    if (e.key.toLowerCase() == 'w') { D4 = unplay(D4,d4); DM4 = unplay(DM4,dm4); }
    if (e.key.toLowerCase() == 'e') { E4 = unplay(E4,e4);                        }
    if (e.key.toLowerCase() == 'r') { F4 = unplay(F4,f4); FM4 = unplay(FM4,fm4); }
    if (e.key.toLowerCase() == 't') { G4 = unplay(G4,g4); GM4 = unplay(GM4,gm4); }
    if (e.key.toLowerCase() == 'y') { A4 = unplay(A4,a4); AM4 = unplay(AM4,am4); }
    if (e.key.toLowerCase() == 'u') { B4 = unplay(B4,b4);                        }
    // OKTAF 4
    if (e.key.toLowerCase() == '1') { C5 = unplay(C5,c5); CM5 = unplay(CM5,cm5); }
    if (e.key.toLowerCase() == '2') { D5 = unplay(D5,d5); DM5 = unplay(DM5,dm5); }
    if (e.key.toLowerCase() == '3') { E5 = unplay(E5,e5);                        }
    if (e.key.toLowerCase() == '4') { F5 = unplay(F5,f5); FM5 = unplay(FM5,fm5); }
    if (e.key.toLowerCase() == '5') { G5 = unplay(G5,g5); GM5 = unplay(GM5,gm5); }
    if (e.key.toLowerCase() == '6') { A5 = unplay(A5,a5); AM5 = unplay(AM5,am5); }
    if (e.key.toLowerCase() == '7') { B5 = unplay(B5,b5);                        }


    /////  MINOR  /////
    // OKTAF 1
    // OKTAF 2
    // OKTAF 3
    // OKTAF 4

    
    /////  KEY  //////
    setkey(e, false);
});













/////  TOUCH KONTROL  /////
function pencet(key) {
    const code = key == ' ' ? 'Space' : `Key${key.toUpperCase()}`;
    const event = new KeyboardEvent('keydown', {
        key        : key,
        code       : code,
        keyCode    : key.charCodeAt(0),
        bubbles    : true,
        cancelable : true,
    });
    document.dispatchEvent(event);
}
function lepas(key) {
    const code = key == ' ' ? 'Space' : `Key${key.toUpperCase()}`;
    const event = new KeyboardEvent('keyup', {
        key        : key,
        code       : code,
        keyCode    : key.charCodeAt(0),
        bubbles    : true,
        cancelable : true,
    });
    document.dispatchEvent(event);
}




let target;
$('.piano').on('touchstart', function (e) {
    e.preventDefault();
    target = e.target.tagName === 'DIV' ? e.target : e.target.parentElement;
    if (target.id == 'c2') { pencet('z'); }
    if (target.id == 'd2') { pencet('x'); }
    if (target.id == 'e2') { pencet('c'); }
    if (target.id == 'f2') { pencet('v'); }
    if (target.id == 'g2') { pencet('b'); }
    if (target.id == 'a2') { pencet('n'); }
    if (target.id == 'b2') { pencet('m'); }
    if (target.id == 'c3') { pencet('a'); }
    if (target.id == 'd3') { pencet('s'); }
    if (target.id == 'e3') { pencet('d'); }
    if (target.id == 'f3') { pencet('f'); }
    if (target.id == 'g3') { pencet('g'); }
    if (target.id == 'a3') { pencet('h'); }
    if (target.id == 'b3') { pencet('j'); }
    if (target.id == 'c4') { pencet('q'); }
    if (target.id == 'd4') { pencet('w'); }
    if (target.id == 'e4') { pencet('e'); }
    if (target.id == 'f4') { pencet('r'); }
    if (target.id == 'g4') { pencet('t'); }
    if (target.id == 'a4') { pencet('y'); }
    if (target.id == 'b4') { pencet('u'); }
    if (target.id == 'c5') { pencet('1'); }
    if (target.id == 'd5') { pencet('2'); }
    if (target.id == 'e5') { pencet('3'); }
    if (target.id == 'f5') { pencet('4'); }
    if (target.id == 'g5') { pencet('5'); }
    if (target.id == 'a5') { pencet('6'); }
    if (target.id == 'b5') { pencet('7'); }

    // MINOR
    if (target.id == 'cm2' ) { pencet('z'); pencet(' '); }
    if (target.id == 'dm2' ) { pencet('x'); pencet(' '); }
    if (target.id == 'fm2' ) { pencet('v'); pencet(' '); }
    if (target.id == 'gm2' ) { pencet('b'); pencet(' '); }
    if (target.id == 'am2' ) { pencet('n'); pencet(' '); }
    if (target.id == 'cm3' ) { pencet('a'); pencet(' '); }
    if (target.id == 'dm3' ) { pencet('s'); pencet(' '); }
    if (target.id == 'fm3' ) { pencet('f'); pencet(' '); }
    if (target.id == 'gm3' ) { pencet('g'); pencet(' '); }
    if (target.id == 'am3' ) { pencet('h'); pencet(' '); }
    if (target.id == 'cm4' ) { pencet('q'); pencet(' '); }
    if (target.id == 'dm4' ) { pencet('w'); pencet(' '); }
    if (target.id == 'fm4' ) { pencet('r'); pencet(' '); }
    if (target.id == 'gm4' ) { pencet('t'); pencet(' '); }
    if (target.id == 'am4' ) { pencet('y'); pencet(' '); }
    if (target.id == 'cm5' ) { pencet('1'); pencet(' '); }
    if (target.id == 'dm5' ) { pencet('2'); pencet(' '); }
    if (target.id == 'fm5' ) { pencet('4'); pencet(' '); }
    if (target.id == 'gm5' ) { pencet('5'); pencet(' '); }
    if (target.id == 'am5' ) { pencet('6'); pencet(' '); }
    
});
$('.piano').on('touchend', function (e) {
    e.preventDefault();
    target = e.target.tagName === 'DIV' ? e.target : e.target.parentElement;
    if (target.id == 'c2') { lepas('z'); }
    if (target.id == 'd2') { lepas('x'); }
    if (target.id == 'e2') { lepas('c'); }
    if (target.id == 'f2') { lepas('v'); }
    if (target.id == 'g2') { lepas('b'); }
    if (target.id == 'a2') { lepas('n'); }
    if (target.id == 'b2') { lepas('m'); }
    if (target.id == 'c3') { lepas('a'); }
    if (target.id == 'd3') { lepas('s'); }
    if (target.id == 'e3') { lepas('d'); }
    if (target.id == 'f3') { lepas('f'); }
    if (target.id == 'g3') { lepas('g'); }
    if (target.id == 'a3') { lepas('h'); }
    if (target.id == 'b3') { lepas('j'); }
    if (target.id == 'c4') { lepas('q'); }
    if (target.id == 'd4') { lepas('w'); }
    if (target.id == 'e4') { lepas('e'); }
    if (target.id == 'f4') { lepas('r'); }
    if (target.id == 'g4') { lepas('t'); }
    if (target.id == 'a4') { lepas('y'); }
    if (target.id == 'b4') { lepas('u'); }
    if (target.id == 'c5') { lepas('1'); }
    if (target.id == 'd5') { lepas('2'); }
    if (target.id == 'e5') { lepas('3'); }
    if (target.id == 'f5') { lepas('4'); }
    if (target.id == 'g5') { lepas('5'); }
    if (target.id == 'a5') { lepas('6'); }
    if (target.id == 'b5') { lepas('7'); }

    // MINOR
    if (target.id == 'cm2' ) { lepas('z'); lepas(' ');}
    if (target.id == 'dm2' ) { lepas('x'); lepas(' ');}
    if (target.id == 'fm2' ) { lepas('v'); lepas(' ');}
    if (target.id == 'gm2' ) { lepas('b'); lepas(' ');}
    if (target.id == 'am2' ) { lepas('n'); lepas(' ');}
    if (target.id == 'cm3' ) { lepas('a'); lepas(' ');}
    if (target.id == 'dm3' ) { lepas('s'); lepas(' ');}
    if (target.id == 'fm3' ) { lepas('f'); lepas(' ');}
    if (target.id == 'gm3' ) { lepas('g'); lepas(' ');}
    if (target.id == 'am3' ) { lepas('h'); lepas(' ');}
    if (target.id == 'cm4' ) { lepas('q'); lepas(' ');}
    if (target.id == 'dm4' ) { lepas('w'); lepas(' ');}
    if (target.id == 'fm4' ) { lepas('r'); lepas(' ');}
    if (target.id == 'gm4' ) { lepas('t'); lepas(' ');}
    if (target.id == 'am4' ) { lepas('y'); lepas(' ');}
    if (target.id == 'cm5' ) { lepas('1'); lepas(' ');}
    if (target.id == 'dm5' ) { lepas('2'); lepas(' ');}
    if (target.id == 'fm5' ) { lepas('4'); lepas(' ');}
    if (target.id == 'gm5' ) { lepas('5'); lepas(' ');}
    if (target.id == 'am5' ) { lepas('6'); lepas(' ');}

});




$(document).keydown(function (e) { 
    console.log(e.key);
});
$(document).keyup(function (e) { 
    console.log(e.key);
});








// document.addEventListener('touchmove', function (e) {
//     // console.log(e.changedTouches[0])
//     console.log(e.touches)
// })


// $('.piano').on('touchmove', function (e) {
//     const kord = e.changedTouches[0];
//     console.log(document.elementFromPoint(kord.clientX, kord.clientY));
// });


