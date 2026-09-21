// ===============================
// PERGERAKAN PION + ANIMASI V4
// ===============================

function gerakkanPemain(indexPemain, jumlahLangkah, bonus){

    // Harus tepat untuk mencapai kotak 100.
    if(posisi[indexPemain] + jumlahLangkah > 100){
        if(typeof tampilkanEventPapan === "function"){
            tampilkanEventPapan(
                "info",
                "🎯 Harus Angka Tepat",
                pemain[indexPemain] + " tetap di kotak " + posisi[indexPemain] + "."
            );
        }

        if(bonus === true){
            lemparTambahan = false;
            setTimeout(gantiGiliran, 900);
        }else{
            statusGame = "QUESTION";
            setTimeout(tampilkanSoal, 900);
        }
        return;
    }

    let langkahSaatIni = 0;

    function jalanSatuKotak(){
        if(langkahSaatIni < jumlahLangkah){
            posisi[indexPemain]++;
            langkahSaatIni++;

            tampilkanPion();

            if(typeof animasiPion === "function"){
                animasiPion(indexPemain, "step");
            }

            if(typeof mainkanSuara === "function"){
                mainkanSuara("step");
            }

            setTimeout(jalanSatuKotak, 480);
        }
        else{
            // Cek ular/tangga sekaligus menentukan alur soal/giliran.
            cekUlarTangga(indexPemain, bonus);
        }
    }

    jalanSatuKotak();
}

// ===============================
// CEK ULAR DAN TANGGA
// ===============================

function cekUlarTangga(indexPemain, bonus){
    const posisiAwal = posisi[indexPemain];
    let jenis = null;
    let posisiTujuan = posisiAwal;

    if(tangga[posisiAwal]){
        jenis = "tangga";
        posisiTujuan = tangga[posisiAwal];
        posisi[indexPemain] = posisiTujuan;
    }
    else if(ular[posisiAwal]){
        jenis = "ular";
        posisiTujuan = ular[posisiAwal];
        posisi[indexPemain] = posisiTujuan;
    }

    tampilkanPion();

    if(jenis){
        if(typeof animasiPion === "function"){
            animasiPion(indexPemain, jenis);
        }

        if(typeof sorotObjekGame === "function"){
            sorotObjekGame(jenis, posisiAwal);
        }

        if(typeof mainkanSuara === "function"){
            mainkanSuara(jenis);
        }

        if(typeof tampilkanEventPapan === "function"){
            if(jenis === "tangga"){
                tampilkanEventPapan(
                    "tangga",
                    "Naik Tangga!",
                    pemain[indexPemain] + " naik dari kotak " + posisiAwal + " ke " + posisiTujuan + "."
                );
            }else{
                tampilkanEventPapan(
                    "ular",
                    "Terkena Ular!",
                    pemain[indexPemain] + " turun dari kotak " + posisiAwal + " ke " + posisiTujuan + "."
                );
            }
        }
    }

    // Pemenang dicek setelah semua perpindahan selesai.
    if(cekPemenang(indexPemain)){
        return;
    }

    const lanjutkanAlur = function(){
        simpanGame();

        if(bonus === true){
            lemparTambahan = false;
            gantiGiliran();
        }else{
            statusGame = "QUESTION";
            tampilkanSoal();
        }
    };

    if(jenis){
        setTimeout(lanjutkanAlur, 1250);
    }else{
        lanjutkanAlur();
    }
}
