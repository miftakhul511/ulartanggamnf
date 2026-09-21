let pemain=[];
let posisi=[];
let giliran=0;
let lemparTambahan=false;
let sedangMenjawab=false;
let sedangBerjalan=false;
let gameSelesai=false;
let angkaDaduTerakhir=0;
let statusGame="READY";

// ===============================
// AUDIO V4 - TANPA FILE SUARA
// ===============================

let suaraAktif=true;
let audioContext=null;

function dapatkanAudioContext(){
    if(!suaraAktif) return null;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if(!AudioCtx) return null;

    if(!audioContext){
        audioContext = new AudioCtx();
    }

    if(audioContext.state === "suspended"){
        audioContext.resume();
    }

    return audioContext;
}

function bunyiNada(frekuensi, durasi, jeda=0, tipe="sine", volume=0.035){
    const ctx = dapatkanAudioContext();
    if(!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const mulai = ctx.currentTime + jeda;

    osc.type = tipe;
    osc.frequency.setValueAtTime(frekuensi, mulai);
    gain.gain.setValueAtTime(0.0001, mulai);
    gain.gain.exponentialRampToValueAtTime(volume, mulai + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, mulai + durasi);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(mulai);
    osc.stop(mulai + durasi + 0.03);
}

function mainkanSuara(jenis){
    if(!suaraAktif) return;

    if(jenis === "dice"){
        [220,280,340,410].forEach(function(nada,i){
            bunyiNada(nada,0.07,i*0.08,"square",0.018);
        });
    }
    else if(jenis === "step"){
        bunyiNada(430,0.045,0,"sine",0.012);
    }
    else if(jenis === "question"){
        bunyiNada(660,0.08,0,"sine",0.02);
        bunyiNada(820,0.10,0.09,"sine",0.018);
    }
    else if(jenis === "correct"){
        bunyiNada(523,0.11,0,"sine",0.035);
        bunyiNada(659,0.11,0.11,"sine",0.035);
        bunyiNada(784,0.20,0.22,"sine",0.04);
    }
    else if(jenis === "wrong"){
        bunyiNada(260,0.14,0,"sawtooth",0.025);
        bunyiNada(190,0.22,0.14,"sawtooth",0.025);
    }
    else if(jenis === "tangga"){
        [392,494,587,698].forEach(function(nada,i){
            bunyiNada(nada,0.12,i*0.09,"sine",0.028);
        });
    }
    else if(jenis === "ular"){
        [500,410,330,240].forEach(function(nada,i){
            bunyiNada(nada,0.12,i*0.08,"triangle",0.028);
        });
    }
    else if(jenis === "winner"){
        [523,659,784,1047,784,1047].forEach(function(nada,i){
            bunyiNada(nada,0.18,i*0.13,"sine",0.04);
        });
    }
}

function toggleSuara(){
    suaraAktif=!suaraAktif;
    const tombol=document.getElementById("soundToggle");
    if(tombol){
        tombol.textContent=suaraAktif ? "🔊 Suara ON" : "🔇 Suara OFF";
        tombol.classList.toggle("sound-off",!suaraAktif);
    }

    if(suaraAktif){
        mainkanSuara("question");
    }
}

// ===============================
// MULAI GAME
// ===============================

function mulaiGame(){
    pemain=[];
    posisi=[];
    giliran=0;
    gameSelesai=false;
    lemparTambahan=false;
    sedangMenjawab=false;
    sedangBerjalan=false;
    statusGame="READY";

    for(let i=1;i<=6;i++){
        const input=document.getElementById("player"+i);
        const nama=input ? input.value.trim() : "";

        if(nama!==""){
            pemain.push(nama);
            posisi.push(0);
        }
    }

    if(pemain.length<2){
        // Hanya validasi awal yang masih menggunakan alert sederhana.
        // Feedback jawaban tidak lagi menggunakan alert.
        alert("Minimal 2 pemain");
        return;
    }

    document.getElementById("menu").style.display="none";
    document.getElementById("game").style.display="block";

    buatPapan();
    buatPion();

    setTimeout(function(){
        tambahObjekGame();
    },100);

    tampilkanGiliran();
    simpanGame();
}

// ===============================
// TAMPIL GILIRAN
// ===============================

function tampilkanGiliran(){
    const el=document.getElementById("giliran");
    if(el && pemain.length){
        el.textContent=pemain[giliran];
        el.classList.remove("giliran-pop");
        void el.offsetWidth;
        el.classList.add("giliran-pop");
    }
}

// ===============================
// LEMPAR DADU
// ===============================

function lemparDadu(){
    if(statusGame!=="READY" || gameSelesai) return;

    statusGame="ROLLING";
    sedangBerjalan=true;

    const dadu=document.getElementById("dice");
    const rollButton=document.getElementById("rollButton");

    if(rollButton) rollButton.disabled=true;

    dadu.classList.remove("dice-land");
    dadu.classList.add("roll");
    mainkanSuara("dice");

    let putaran=0;
    const bentukDadu=["⚀","⚁","⚂","⚃","⚄","⚅"];

    const animasiCepat=setInterval(function(){
        dadu.textContent=bentukDadu[Math.floor(Math.random()*6)];
        putaran++;
        if(putaran>8) clearInterval(animasiCepat);
    },90);

    setTimeout(function(){
        clearInterval(animasiCepat);

        const angka=Math.floor(Math.random()*6)+1;
        angkaDaduTerakhir=angka;
        dadu.textContent=bentukDadu[angka-1];
        dadu.classList.remove("roll");
        dadu.classList.add("dice-land");

        const bonusSaatIni=lemparTambahan;
        lemparTambahan=false;

        statusGame="MOVING";
        gerakkanPemain(giliran,angka,bonusSaatIni);

        if(rollButton) rollButton.disabled=false;
    },1000);
}

// ===============================
// BUAT PAPAN
// ===============================

function buatPapan(){
    const board=document.getElementById("board");
    board.innerHTML="";

    let nomor=1;
    const baris=[];

    for(let i=0;i<10;i++){
        const isiBaris=[];
        for(let j=0;j<10;j++){
            isiBaris.push(nomor);
            nomor++;
        }
        if(i%2===1) isiBaris.reverse();
        baris.push(isiBaris);
    }

    for(let i=9;i>=0;i--){
        for(let j=0;j<10;j++){
            const angka=baris[i][j];
            const kotak=document.createElement("div");
            kotak.className="box";
            kotak.id="box"+angka;

            if(angka===1){
                kotak.textContent="START";
                kotak.classList.add("start");
            }
            else if(angka===100){
                kotak.textContent="FINISH";
                kotak.classList.add("finish");
            }
            else{
                kotak.textContent=angka;
            }

            kotak.classList.add((i+j)%2===0 ? "warna1" : "warna2");
            board.appendChild(kotak);
        }
    }
}

// ===============================
// SIMPAN / LOAD GAME
// ===============================

function simpanGame(){
    const dataGame={
        pemain:pemain,
        posisi:posisi,
        giliran:giliran
    };

    localStorage.setItem("ularTanggaGame",JSON.stringify(dataGame));
}

function cekGameLama(){
    const data=localStorage.getItem("ularTanggaGame");
    if(!data) return;

    const lanjut=confirm("Ada permainan sebelumnya. Lanjutkan permainan?");
    if(!lanjut) return;

    try{
        const game=JSON.parse(data);
        pemain=Array.isArray(game.pemain) ? game.pemain : [];
        posisi=Array.isArray(game.posisi) ? game.posisi : [];
        giliran=Number.isInteger(game.giliran) ? game.giliran : 0;

        if(pemain.length<2) return;

        document.getElementById("menu").style.display="none";
        document.getElementById("game").style.display="block";

        buatPapan();
        buatPion();
        tampilkanGiliran();

        setTimeout(function(){
            tambahObjekGame();
        },100);
    }
    catch(error){
        console.error("Data game lama tidak valid",error);
        localStorage.removeItem("ularTanggaGame");
    }
}

window.addEventListener("load",function(){
    cekGameLama();
});

// ===============================
// ULAR & TANGGA VISUAL
// ===============================

function tambahObjekGame(){
    const board=document.getElementById("board");
    if(!board) return;

    board.querySelectorAll(".game-object").forEach(function(el){
        el.remove();
    });

    const daftarTangga=[
        [4,25,"tangga1.png"],
        [13,46,"tangga2.png"],
        [33,49,"tangga1.png"],
        [42,63,"tangga2.png"],
        [50,69,"tangga1.png"],
        [77,83,"tangga2.png"],
        [56,66,"tangga1.png"]
    ];

    const daftarUlar=[
        [27,5,"ular1.png"],
        [40,24,"ular2.png"],
        [54,48,"ular1.png"],
        [62,41,"ular2.png"],
        [89,71,"ular1.png"],
        [85,67,"ular2.png"],
        [94,74,"ular1.png"]
    ];

    daftarTangga.forEach(function(item){
        buatGambar(item[0],item[1],item[2],"tangga");
    });

    daftarUlar.forEach(function(item){
        buatGambar(item[0],item[1],item[2],"ular");
    });
}

function buatGambar(awal,akhir,gambar,kelas){
    const kotakAwal=document.getElementById("box"+awal);
    const kotakAkhir=document.getElementById("box"+akhir);
    const board=document.getElementById("board");

    if(!kotakAwal || !kotakAkhir || !board) return;

    const img=document.createElement("img");
    img.src="asset/"+gambar;
    img.className="game-object "+kelas;
    img.dataset.awal=awal;
    img.dataset.akhir=akhir;
    img.alt=kelas+" "+awal+" ke "+akhir;
    board.appendChild(img);

    const boardPos=board.getBoundingClientRect();
    const awalPos=kotakAwal.getBoundingClientRect();
    const akhirPos=kotakAkhir.getBoundingClientRect();

    const x1=awalPos.left-boardPos.left+awalPos.width/2;
    const y1=awalPos.top-boardPos.top+awalPos.height/2;
    const x2=akhirPos.left-boardPos.left+akhirPos.width/2;
    const y2=akhirPos.top-boardPos.top+akhirPos.height/2;

    const panjang=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    img.style.height=panjang+"px";
    img.style.left=((x1+x2)/2)+"px";
    img.style.top=((y1+y2)/2)+"px";

    const sudut=Math.atan2(y2-y1,x2-x1)*180/Math.PI;

    if(kelas==="ular"){
        img.style.transform=`translate(-50%,-50%) rotate(${sudut-75}deg)`;
    }else{
        img.style.transform=`translate(-50%,-50%) rotate(${sudut+90}deg)`;
    }
}

function sorotObjekGame(jenis,awal){
    const objek=document.querySelector('.game-object.'+jenis+'[data-awal="'+awal+'"]');
    if(!objek) return;

    objek.classList.remove("object-active");
    void objek.offsetWidth;
    objek.classList.add("object-active");

    setTimeout(function(){
        objek.classList.remove("object-active");
    },1200);
}

// ===============================
// NOTIFIKASI PAPAN
// ===============================

let timerEventPapan=null;

function tampilkanEventPapan(jenis,judul,teks){
    const box=document.getElementById("boardEvent");
    const icon=document.getElementById("boardEventIcon");
    const title=document.getElementById("boardEventTitle");
    const text=document.getElementById("boardEventText");

    if(!box) return;

    box.className="board-event board-event-"+jenis;
    icon.textContent=jenis==="tangga" ? "🪜" : jenis==="ular" ? "🐍" : "🎯";
    title.textContent=judul;
    text.textContent=teks;
    box.style.display="flex";

    requestAnimationFrame(function(){
        box.classList.add("show");
    });

    if(timerEventPapan) clearTimeout(timerEventPapan);
    timerEventPapan=setTimeout(function(){
        box.classList.remove("show");
        setTimeout(function(){ box.style.display="none"; },250);
    },1100);
}

// ===============================
// SELESAI / GANTI GILIRAN
// ===============================

function selesaiGame(){
    const yakin=confirm("Apakah permainan sudah selesai? Data permainan akan dihapus.");
    if(!yakin) return;

    resetGameState();
    document.getElementById("game").style.display="none";
    document.getElementById("menu").style.display="block";
}

function gantiGiliran(){
    sedangBerjalan=false;
    sedangMenjawab=false;
    statusGame="READY";
    lemparTambahan=false;

    giliran++;
    if(giliran>=pemain.length) giliran=0;

    tampilkanGiliran();
    simpanGame();
}

// ===============================
// PEMENANG + CONFETTI
// ===============================

function cekPemenang(indexPemain){
    if(posisi[indexPemain] < 100) return false;

    gameSelesai=true;
    statusGame="FINISHED";
    sedangBerjalan=false;
    sedangMenjawab=false;

    localStorage.removeItem("ularTanggaGame");

    const namaPemenang=pemain[indexPemain];
    const nameEl=document.getElementById("winnerName");
    const overlay=document.getElementById("winnerOverlay");

    if(nameEl) nameEl.textContent=namaPemenang;
    if(overlay){
        overlay.style.display="flex";
        requestAnimationFrame(function(){ overlay.classList.add("show"); });
    }

    mainkanSuara("winner");
    buatConfetti(90);

    return true;
}

function buatConfetti(jumlah){
    const layer=document.getElementById("confettiLayer");
    if(!layer) return;

    layer.innerHTML="";

    for(let i=0;i<jumlah;i++){
        const piece=document.createElement("span");
        piece.className="confetti-piece";
        piece.style.left=(Math.random()*100)+"vw";
        piece.style.animationDelay=(Math.random()*0.8)+"s";
        piece.style.animationDuration=(2.4+Math.random()*2)+"s";
        piece.style.setProperty("--drift",((Math.random()*180)-90)+"px");
        piece.style.setProperty("--spin",(360+Math.random()*720)+"deg");
        piece.dataset.variant=String(i%6);
        layer.appendChild(piece);
    }

    setTimeout(function(){
        layer.innerHTML="";
    },5200);
}

function resetGameState(){
    gameSelesai=false;
    pemain=[];
    posisi=[];
    giliran=0;
    lemparTambahan=false;
    sedangMenjawab=false;
    sedangBerjalan=false;
    statusGame="READY";
    localStorage.removeItem("ularTanggaGame");

    const question=document.getElementById("questionBox");
    if(question){
        question.classList.remove("is-open");
        question.style.display="none";
    }

    const winner=document.getElementById("winnerOverlay");
    if(winner){
        winner.classList.remove("show");
        winner.style.display="none";
    }

    const confetti=document.getElementById("confettiLayer");
    if(confetti) confetti.innerHTML="";
}

function restartGame(){
    resetGameState();

    document.getElementById("restartButton").style.display="none";
    document.getElementById("game").style.display="none";
    document.getElementById("menu").style.display="block";

    for(let i=1;i<=6;i++){
        const input=document.getElementById("player"+i);
        if(input) input.value="";
    }
}

console.log("ULAR-TANGGA-V4-INTERAKTIF-AKTIF");
