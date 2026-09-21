// ===============================
// DATA PEMAIN
// ===============================

let karakterPemain = [
    "player1.png",
    "player2.png",
    "player3.png",
    "player4.png",
    "player5.png",
    "player6.png"
];

let pion = [];

// ===============================
// MEMBUAT PION
// ===============================

function buatPion(){
    pion=[];

    for(let i=0;i<pemain.length;i++){
        pion.push(i);
    }

    tampilkanPion();
}

// ===============================
// MENAMPILKAN PION DI PAPAN
// ===============================

function tampilkanPion(){
    // Bersihkan pion dan container lama supaya DOM tidak menumpuk.
    document.querySelectorAll(".pion-container").forEach(function(e){
        e.remove();
    });

    for(let i=0;i<pemain.length;i++){
        const posisiPemain = posisi[i];
        const nomorKotak = posisiPemain === 0 ? 1 : posisiPemain;
        const kotak = document.getElementById("box" + nomorKotak);

        if(!kotak) continue;

        const img = document.createElement("img");
        img.className = "player";
        img.src = "asset/" + karakterPemain[i];
        img.alt = "Pion " + pemain[i];
        img.dataset.playerIndex = i;
        img.title = pemain[i];

        let container = kotak.querySelector(".pion-container");
        if(!container){
            container = document.createElement("div");
            container.className = "pion-container";
            kotak.appendChild(container);
        }

        container.appendChild(img);
    }
}

// ===============================
// ANIMASI PION
// ===============================

function animasiPion(indexPemain, jenis){
    const img = document.querySelector('.player[data-player-index="' + indexPemain + '"]');
    if(!img) return;

    const kelas = jenis === "tangga"
        ? "pion-naik"
        : jenis === "ular"
            ? "pion-turun"
            : "pion-langkah";

    img.classList.remove("pion-langkah", "pion-naik", "pion-turun");
    void img.offsetWidth;
    img.classList.add(kelas);
}
