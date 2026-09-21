// ============================================================
// BANK SOAL ULAR TANGGA MATEMATIKA - 100 SOAL
// Sumber: SOAL.pdf
// Level PDF: 1-45 mudah, 46-79 sedang, 80-100 sulit.
// Catatan: nomor 87 tidak memiliki kunci tercetak pada PDF;
//          kunci B diisi dari hasil perhitungan agar game dapat berjalan.
// ============================================================

let daftarSoal = [
    {
        "id": 1,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Diketahui matriks \n𝐴= [2\n4\n6\n8] \n \nOrdo dari matriks A adalah ....",
        "pilihan": {
            "A": "1 × 4",
            "B": "2 × 2",
            "C": "4 × 1",
            "D": "3 × 2"
        },
        "jawaban": "B"
    },
    {
        "id": 2,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Diketahui matriks \n𝐵= [5\n7\n9] \n \nOrdo matriks B adalah ....",
        "pilihan": {
            "A": "1 × 3",
            "B": "3 × 1",
            "C": "2 × 3",
            "D": "3 × 3"
        },
        "jawaban": "A"
    },
    {
        "id": 3,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Perhatikan matriks berikut \n𝐶= [3\n6\n1\n4] \n \nNilai elemen 𝑐12adalah ....",
        "pilihan": {
            "A": "1",
            "B": "3",
            "C": "4",
            "D": "6"
        },
        "jawaban": "D"
    },
    {
        "id": 4,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Matriks yang memiliki jumlah baris dan kolom sama disebut matriks ....",
        "pilihan": {
            "A": "Baris",
            "B": "Kolom",
            "C": "Persegi",
            "D": "Nol"
        },
        "jawaban": "C"
    },
    {
        "id": 5,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Diketahui \n𝐴= [2\n3\n4\n5] \n𝐵= [1\n2\n3\n4] \n \nNilai dari 𝐴+ 𝐵adalah ....",
        "pilihan": {
            "A": "[3\n5\n7\n9]",
            "B": "[1\n1\n1\n1]",
            "C": "[2\n6\n4\n8]",
            "D": "[3\n4\n6\n8]"
        },
        "jawaban": "A"
    },
    {
        "id": 6,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Diketahui \n𝐴= [7\n5\n3\n2] \n \nElemen yang berada pada baris ke-2 kolom ke-1 adalah ....",
        "pilihan": {
            "A": "7",
            "B": "5",
            "C": "3",
            "D": "2"
        },
        "jawaban": "C"
    },
    {
        "id": 7,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Matriks berikut yang merupakan matriks identitas adalah ....",
        "pilihan": {
            "A": "[1\n0\n0\n1]",
            "B": "[0\n1\n1\n0]",
            "C": "[2\n0\n0\n2]",
            "D": "[1\n1\n1\n1]"
        },
        "jawaban": "A"
    },
    {
        "id": 8,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Hasil pengurangan matriks berikut adalah \n[8\n6\n5\n4] −[3\n2\n1\n1]",
        "pilihan": {
            "A": "[5\n4\n4\n3]",
            "B": "[11\n8\n6\n5]",
            "C": "[5\n5\n3\n3]",
            "D": "[4\n3\n2\n1]"
        },
        "jawaban": "A"
    },
    {
        "id": 9,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Matriks yang semua elemennya bernilai nol disebut matriks ....",
        "pilihan": {
            "A": "Identitas",
            "B": "Diagonal",
            "C": "Nol",
            "D": "Persegi"
        },
        "jawaban": "C"
    },
    {
        "id": 10,
        "level": "mudah",
        "topik": "Matriks dasar",
        "soal": "Diketahui \n𝐴= [4\n7\n2\n9] \n \nTranspose dari matriks A adalah ....",
        "pilihan": {
            "A": "[4\n2\n7\n9]",
            "B": "[7\n4\n9\n2]",
            "C": "[4\n7\n9\n2]",
            "D": "[2\n4\n9\n7]"
        },
        "jawaban": "A"
    },
    {
        "id": 11,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n\n𝑓(𝑥) = 2𝑥+ 3 \n \nNilai 𝑓(4)adalah ....",
        "pilihan": {
            "A": "9",
            "B": "10",
            "C": "11",
            "D": "12"
        },
        "jawaban": "C"
    },
    {
        "id": 12,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥2 −1 \n \nNilai 𝑓(3)adalah ....",
        "pilihan": {
            "A": "8",
            "B": "9",
            "C": "10",
            "D": "12"
        },
        "jawaban": "A"
    },
    {
        "id": 13,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Relasi berikut yang merupakan fungsi adalah ....",
        "pilihan": {
            "A": "Satu siswa memiliki beberapa nomor induk siswa",
            "B": "Satu nomor telepon digunakan oleh beberapa orang",
            "C": "Satu siswa memiliki satu nomor induk siswa",
            "D": "Satu orang memiliki beberapa tanggal lahir"
        },
        "jawaban": "C"
    },
    {
        "id": 14,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 3𝑥−5 \n \nNilai 𝑓(2)adalah ....",
        "pilihan": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "5"
        },
        "jawaban": "A"
    },
    {
        "id": 15,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Jika \n𝑓(𝑥) = 𝑥+ 4 \n \nmaka nilai 𝑥jika 𝑓(𝑥) = 10adalah ....",
        "pilihan": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "7"
        },
        "jawaban": "C"
    },
    {
        "id": 16,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 2𝑥2 \n \nNilai 𝑓(−3)adalah ....",
        "pilihan": {
            "A": "-18",
            "B": "-12",
            "C": "12",
            "D": "18"
        },
        "jawaban": "D"
    },
    {
        "id": 17,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 5𝑥 \n \nDomain dari fungsi tersebut adalah ....",
        "pilihan": {
            "A": "Nilai keluaran fungsi",
            "B": "Nilai masukan fungsi",
            "C": "Hasil perkalian fungsi",
            "D": "Grafik fungsi"
        },
        "jawaban": "B"
    },
    {
        "id": 18,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Jika \n𝑓(𝑥) = 𝑥2 + 2 \n \nmaka nilai 𝑓(1)adalah ....",
        "pilihan": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
        },
        "jawaban": "C"
    },
    {
        "id": 19,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 4𝑥−2 \n \nJika 𝑓(𝑎) = 14, maka nilai 𝑎adalah ....",
        "pilihan": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
        },
        "jawaban": "B"
    },
    {
        "id": 20,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 𝑥+ 2 \n \nJika domain fungsi adalah: \n{1, 2, 3} \n \nmaka range fungsi tersebut adalah ....",
        "pilihan": {
            "A": "{1, 2, 3}",
            "B": "{2, 3, 4}",
            "C": "{3, 4, 5}",
            "D": "{4, 5, 6}"
        },
        "jawaban": "C"
    },
    {
        "id": 21,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 3𝑥+ 2 \n \nNilai dari 𝑓(5)adalah ....",
        "pilihan": {
            "A": "15",
            "B": "16",
            "C": "17",
            "D": "18"
        },
        "jawaban": "C"
    },
    {
        "id": 22,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 𝑥−7 \n \nNilai dari 𝑓(10)adalah ....",
        "pilihan": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "jawaban": "B"
    },
    {
        "id": 23,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Jika \n𝑓(𝑥) = 2𝑥+ 1 \n \ndan diketahui: \n𝑓(𝑎) = 11 \n \nmaka nilai 𝑎adalah ....",
        "pilihan": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "7"
        },
        "jawaban": "B"
    },
    {
        "id": 24,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Diketahui fungsi \n𝑓(𝑥) = 𝑥2 + 3 \n \nNilai 𝑓(−2)adalah ....",
        "pilihan": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
        },
        "jawaban": "C"
    },
    {
        "id": 25,
        "level": "mudah",
        "topik": "Fungsi",
        "soal": "Suatu fungsi memiliki aturan \n𝑓(𝑥) = 4𝑥 \n \nJika domainnya adalah: \n{1, 2, 3, 4} \n \nmaka range fungsi tersebut adalah ....",
        "pilihan": {
            "A": "{1, 2, 3, 4}",
            "B": "{2, 4, 6, 8}",
            "C": "{4, 8, 12, 16}",
            "D": "{5, 6, 7, 8}"
        },
        "jawaban": "C"
    },
    {
        "id": 26,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 2𝑥+ 3 \n𝑔(𝑥) = 𝑥+ 1 \n \nNilai dari (𝑓∘𝑔)(2)adalah ....",
        "pilihan": {
            "A": "7",
            "B": "8",
            "C": "9",
            "D": "10"
        },
        "jawaban": "C"
    },
    {
        "id": 27,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥2 \n𝑔(𝑥) = 𝑥+ 2 \n \nNilai dari (𝑓∘𝑔)(3)adalah ....",
        "pilihan": {
            "A": "9",
            "B": "16",
            "C": "20",
            "D": "25"
        },
        "jawaban": "D"
    },
    {
        "id": 28,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 3𝑥−1 \n𝑔(𝑥) = 2𝑥 \n \n\nBentuk (𝑓∘𝑔)(𝑥)adalah ....",
        "pilihan": {
            "A": "6𝑥−1",
            "B": "6𝑥+ 1",
            "C": "5𝑥−1",
            "D": "3𝑥2 −1"
        },
        "jawaban": "A"
    },
    {
        "id": 29,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥+ 5 \n𝑔(𝑥) = 3𝑥 \n \nNilai dari (𝑔∘𝑓)(2)adalah ....",
        "pilihan": {
            "A": "15",
            "B": "18",
            "C": "21",
            "D": "24"
        },
        "jawaban": "C"
    },
    {
        "id": 30,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 2𝑥 \n𝑔(𝑥) = 𝑥2 + 1 \n \nNilai dari (𝑓∘𝑔)(3)adalah ....",
        "pilihan": {
            "A": "18",
            "B": "20",
            "C": "22",
            "D": "24"
        },
        "jawaban": "B"
    },
    {
        "id": 31,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥−2 \n𝑔(𝑥) = 4𝑥 \n \nBentuk (𝑓∘𝑔)(𝑥)adalah ....",
        "pilihan": {
            "A": "4𝑥−2",
            "B": "4𝑥+ 2",
            "C": "𝑥−8",
            "D": "8𝑥−2"
        },
        "jawaban": "A"
    },
    {
        "id": 32,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥+ 1 \n𝑔(𝑥) = 𝑥2 \n \nNilai dari (𝑔∘𝑓)(3)adalah ....",
        "pilihan": {
            "A": "9",
            "B": "12",
            "C": "16",
            "D": "18"
        },
        "jawaban": "C"
    },
    {
        "id": 33,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 5𝑥 \n𝑔(𝑥) = 𝑥−3 \n \nNilai dari (𝑓∘𝑔)(5)adalah ....",
        "pilihan": {
            "A": "5",
            "B": "10",
            "C": "15",
            "D": "25"
        },
        "jawaban": "B"
    },
    {
        "id": 34,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥+ 2 \n𝑔(𝑥) = 2𝑥+ 1 \n \nBentuk (𝑔∘𝑓)(𝑥)adalah ....",
        "pilihan": {
            "A": "2𝑥+ 3",
            "B": "2𝑥+ 5",
            "C": "𝑥+ 3",
            "D": "2𝑥+ 1"
        },
        "jawaban": "B"
    },
    {
        "id": 35,
        "level": "mudah",
        "topik": "Komposisi fungsi",
        "soal": "Diketahui \n𝑓(𝑥) = 𝑥2 −1 \n𝑔(𝑥) = 𝑥+ 1 \n \nNilai dari (𝑓∘𝑔)(1)adalah ....",
        "pilihan": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "jawaban": "B"
    },
    {
        "id": 36,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui matriks \n𝐴= [2\n3\n1\n4] \n \n\nNilai determinan matriks A adalah ....",
        "pilihan": {
            "A": "5",
            "B": "8",
            "C": "10",
            "D": "11"
        },
        "jawaban": "A"
    },
    {
        "id": 37,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [3\n1\n2\n5] \n \nTranspose dari matriks A adalah ....",
        "pilihan": {
            "A": "[3\n2\n1\n5]",
            "B": "[3\n1\n5\n2]",
            "C": "[1\n3\n2\n5]",
            "D": "[5\n2\n1\n3]"
        },
        "jawaban": "A"
    },
    {
        "id": 38,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n4\n3\n5] \n \nNilai dari 2𝐴adalah ....",
        "pilihan": {
            "A": "[2\n4\n3\n5]",
            "B": "[4\n8\n6\n10]",
            "C": "[4\n6\n8\n10]",
            "D": "[ 1\n2\n1,5\n2,5]"
        },
        "jawaban": "B"
    },
    {
        "id": 39,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n2\n3\n4] \n𝐵= [5\n6\n7\n8] \n \nNilai dari 𝐴+ 𝐵adalah ....",
        "pilihan": {
            "A": "[ 6\n8\n10\n12]",
            "B": "[ 5\n12\n21\n32]",
            "C": "[4\n4\n4\n4]",
            "D": "[6\n7\n9\n10]"
        },
        "jawaban": "A"
    },
    {
        "id": 40,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n1\n3\n4] \n𝐵= [1\n5\n2\n3] \n \nHasil dari perkalian matriks 𝐴𝐵adalah ....",
        "pilihan": {
            "A": "[ 4\n13\n11\n27]",
            "B": "[4\n5\n6\n12]",
            "C": "[3\n6\n5\n7]",
            "D": "[4\n8\n9\n10]"
        },
        "jawaban": "A"
    },
    {
        "id": 41,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Jika \n𝐴= [𝑥\n2\n3\n4] \n \n\ndan diketahui determinan A = 10, maka nilai x adalah ....",
        "pilihan": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "jawaban": "C"
    },
    {
        "id": 42,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [4\n7\n2\n5] \n \nInvers matriks A adalah ....",
        "pilihan": {
            "A": "1\n6 [ 5\n−7\n−2\n4 ]",
            "B": "1\n6 [4\n7\n2\n5]",
            "C": "1\n6 [5\n7\n2\n4]",
            "D": "1\n6 [−5\n7\n2\n−4]"
        },
        "jawaban": "A"
    },
    {
        "id": 43,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n2\n3\n4\n5\n6] \n \nOrdo matriks 𝐴𝑇adalah ....",
        "pilihan": {
            "A": "2 × 3",
            "B": "3 × 2",
            "C": "3 × 3",
            "D": "2 × 2"
        },
        "jawaban": "B"
    },
    {
        "id": 44,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n0\n0\n3] \n \nJenis matriks A adalah ....",
        "pilihan": {
            "A": "Matriks nol",
            "B": "Matriks identitas",
            "C": "Matriks diagonal",
            "D": "Matriks baris"
        },
        "jawaban": "C"
    },
    {
        "id": 45,
        "level": "mudah",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n2\n3\n4] \n \nNilai dari 𝐴2adalah ....",
        "pilihan": {
            "A": "[ 7\n8\n15\n20]",
            "B": "[7\n4\n9\n16]",
            "C": "[ 4\n8\n12\n16]",
            "D": "[ 7\n10\n15\n22]"
        },
        "jawaban": "D"
    },
    {
        "id": 46,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui matriks \n𝐴= [3\n2\n5\n4] \n \nNilai determinan matriks A adalah ....",
        "pilihan": {
            "A": "8",
            "B": "5",
            "C": "2",
            "D": "3"
        },
        "jawaban": "C"
    },
    {
        "id": 47,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n1\n4\n3] \n \ndan \n𝐵= [5\n2\n1\n6] \n \nNilai dari 𝐴−𝐵adalah ....",
        "pilihan": {
            "A": "[7\n3\n5\n9]",
            "B": "[−3\n−1\n3\n−3]",
            "C": "[−3\n1\n−3\n3]",
            "D": "[3\n1\n5\n3]"
        },
        "jawaban": "B"
    },
    {
        "id": 48,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n2\n3\n4] \n \nJika 𝑋= 𝐴𝑇, maka nilai X adalah ....",
        "pilihan": {
            "A": "[4\n3\n2\n1]",
            "B": "[1\n2\n3\n4]",
            "C": "[2\n1\n4\n3]",
            "D": "[1\n3\n2\n4]"
        },
        "jawaban": "D"
    },
    {
        "id": 49,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n3\n1\n4] \n\n𝐵= [1\n2\n3\n5] \n \nHasil perkalian 𝐴𝐵adalah ....",
        "pilihan": {
            "A": "[11\n11\n13\n18]",
            "B": "[11\n19\n13\n22]",
            "C": "[10\n15\n5\n20]",
            "D": "[11\n6\n3\n20]"
        },
        "jawaban": "B"
    },
    {
        "id": 50,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [𝑥\n2\n3\n5] \n \nJika determinan A = 9, maka nilai x adalah ....",
        "pilihan": {
            "A": "4",
            "B": "3",
            "C": "1",
            "D": "2"
        },
        "jawaban": "B"
    },
    {
        "id": 51,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n\n𝐴= [4\n1\n2\n3] \n \nNilai dari 3𝐴adalah ....",
        "pilihan": {
            "A": "[12\n3\n6\n9]",
            "B": "[7\n4\n5\n6]",
            "C": "[12\n3\n2\n9]",
            "D": "[12\n1\n2\n9]"
        },
        "jawaban": "A"
    },
    {
        "id": 52,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n1\n3\n4\n5\n6] \n \nElemen 𝑎23adalah ....",
        "pilihan": {
            "A": "5",
            "B": "3",
            "C": "2",
            "D": "6"
        },
        "jawaban": "D"
    },
    {
        "id": 53,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Jika \n\n[𝑥\n2\n3\n4] + [1\n3\n2\n5] = [6\n5\n5\n9] \n \nmaka nilai x adalah ....",
        "pilihan": {
            "A": "5",
            "B": "6",
            "C": "3",
            "D": "4"
        },
        "jawaban": "A"
    },
    {
        "id": 54,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n0\n0\n4] \n \nMatriks A termasuk jenis matriks ....",
        "pilihan": {
            "A": "Matriks diagonal",
            "B": "Matriks nol",
            "C": "Matriks baris",
            "D": "Matriks segitiga atas"
        },
        "jawaban": "A"
    },
    {
        "id": 55,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n3\n1\n4] \n \nNilai 𝐴−1adalah ....",
        "pilihan": {
            "A": "1\n5 [−4\n3\n1\n−2]",
            "B": "1\n5 [3\n−4\n2\n−1]",
            "C": "1\n5 [ 4\n−3\n−1\n2 ]",
            "D": "1\n5 [2\n3\n1\n4]"
        },
        "jawaban": "C"
    },
    {
        "id": 56,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [3\n2\n1\n4] \n \nNilai determinan matriks 𝐴2adalah ....",
        "pilihan": {
            "A": "100",
            "B": "121",
            "C": "169",
            "D": "225"
        },
        "jawaban": "A"
    },
    {
        "id": 57,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n1\n3\n2] \n \nJika: \n𝐴𝑋= [5\n4\n8\n7] \n \nmaka matriks X adalah ....",
        "pilihan": {
            "A": "[2\n1\n1\n2]",
            "B": "[1\n2\n2\n1]",
            "C": "[3\n1\n1\n3]",
            "D": "[2\n2\n1\n1]"
        },
        "jawaban": "A"
    },
    {
        "id": 58,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [𝑥\n2\n3\n5] \n \nJika: \n𝐴−1 = 1\n4 [ 5\n−2\n−3\n𝑥] \n \nmaka nilai x adalah ....",
        "pilihan": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
        },
        "jawaban": "B"
    },
    {
        "id": 59,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui: \n𝑨= [𝟐\n𝟏\n𝟑\n𝟐] \n \ndan: \n\n𝑨𝑿= [ 𝟕\n𝟓\n𝟏𝟏\n𝟖] \n \nMaka nilai matriks 𝑿adalah ....",
        "pilihan": {
            "A": "[𝟑\n𝟐\n𝟏\n−𝟏]",
            "B": "[𝟏\n𝟐\n𝟑\n𝟏]",
            "C": "[𝟐\n𝟏\n𝟏\n𝟐]",
            "D": "[𝟑\n𝟐\n𝟏\n𝟏]"
        },
        "jawaban": "D"
    },
    {
        "id": 60,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [2\n1\n0\n3] \n \nNilai dari 𝐴−1adalah ....",
        "pilihan": {
            "A": "[\n1\n2\n−1\n6\n0\n1\n3\n]",
            "B": "[2\n−1\n0\n3 ]",
            "C": "[\n1\n3\n−1\n2\n0\n1\n2\n]",
            "D": "[\n1\n2\n1\n6\n0\n1\n3\n]"
        },
        "jawaban": "A"
    },
    {
        "id": 61,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \nDiketahui: \n𝑨= [𝟐\n𝟏\n𝟏\n𝟏] \n \ndan: \n𝑨𝑿= [𝟓\n𝟑\n𝟑\n𝟐] \n \nNilai matriks 𝑿adalah ....",
        "pilihan": {
            "A": "[𝟏\n𝟐\n𝟏\n𝟏]",
            "B": "[𝟑\n𝟏\n𝟐\n𝟏]",
            "C": "[𝟐\n𝟏\n𝟏\n𝟏]",
            "D": "[𝟐\n𝟑\n𝟏\n𝟐]"
        },
        "jawaban": "C"
    },
    {
        "id": 62,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Jika \n𝐴= [2\n1\n1\n2] \n \nmaka nilai: \n𝐴2 −3𝐴+ 2𝐼 \n \nadalah ....",
        "pilihan": {
            "A": "[1\n1\n1\n1]",
            "B": "[0\n0\n0\n0]",
            "C": "[2\n1\n1\n2]",
            "D": "[3\n3\n3\n3]"
        },
        "jawaban": "A"
    },
    {
        "id": 63,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [4\n1\n2\n3] \n \nNilai trace matriks A adalah ....",
        "pilihan": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
        },
        "jawaban": "C"
    },
    {
        "id": 64,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n2\n3\n4] \n \nNilai: \ndet(2𝐴) \n \nadalah ....",
        "pilihan": {
            "A": "-4",
            "B": "-8",
            "C": "-12",
            "D": "-16"
        },
        "jawaban": "B"
    },
    {
        "id": 65,
        "level": "sedang",
        "topik": "Matriks lanjutan",
        "soal": "Diketahui \n𝐴= [1\n1\n1\n−1] \n \nNilai 𝐴𝑇𝐴adalah ....",
        "pilihan": {
            "A": "[1\n0\n0\n1]",
            "B": "[2\n0\n0\n2]",
            "C": "[2\n2\n2\n2]",
            "D": "[1\n1\n1\n1]"
        },
        "jawaban": "B"
    },
    {
        "id": 66,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui fungsi: \n𝑓(𝑥) = 2𝑥+ 3 \n \ndan \n𝑔(𝑥) = 𝑥2 −1 \n \nNilai dari (𝑓∘𝑔)(2)adalah ....",
        "pilihan": {
            "A": "5",
            "B": "7",
            "C": "9",
            "D": "11"
        },
        "jawaban": "C"
    },
    {
        "id": 67,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥−4 \n \ndan \n𝑔(𝑥) = 3𝑥+ 2 \n \nBentuk fungsi (𝑓∘𝑔)(𝑥)adalah ....",
        "pilihan": {
            "A": "3𝑥−2",
            "B": "3𝑥−6",
            "C": "3𝑥+ 6",
            "D": "𝑥−2"
        },
        "jawaban": "A"
    },
    {
        "id": 68,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥2 + 2𝑥 \n \ndan \n𝑔(𝑥) = 𝑥−1 \n \nNilai dari (𝑓∘𝑔)(3)adalah ....",
        "pilihan": {
            "A": "8",
            "B": "10",
            "C": "12",
            "D": "14"
        },
        "jawaban": "A"
    },
    {
        "id": 69,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = √𝑥+ 1 \n \ndan \n𝑔(𝑥) = 2𝑥+ 3 \n \nNilai dari (𝑓∘𝑔)(6)adalah ....",
        "pilihan": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
        },
        "jawaban": "B"
    },
    {
        "id": 70,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diberikan fungsi: \n𝑓(𝑥) = 3𝑥−5 \n \ndan \n𝑔(𝑥) = 𝑥+ 5\n3\n \n\n \nNilai dari (𝑓∘𝑔)(𝑥)adalah ....",
        "pilihan": {
            "A": "𝑥−5",
            "B": "𝑥",
            "C": "𝑥+ 5",
            "D": "3𝑥"
        },
        "jawaban": "B"
    },
    {
        "id": 71,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥2 −4 \n \ndan \n𝑔(𝑥) = 2𝑥+ 1 \n \nBentuk (𝑔∘𝑓)(𝑥)adalah ....",
        "pilihan": {
            "A": "2𝑥2 −7",
            "B": "2𝑥2 −8",
            "C": "2𝑥2 −6",
            "D": "𝑥2 + 2𝑥−3"
        },
        "jawaban": "A"
    },
    {
        "id": 72,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) =\n1\n𝑥+ 2 \n \ndan \n𝑔(𝑥) = 𝑥2 \n \nMaka (𝑓∘𝑔)(3)adalah ....",
        "pilihan": {
            "A": "1\n9",
            "B": "1\n10",
            "C": "1\n11",
            "D": "1\n12"
        },
        "jawaban": "C"
    },
    {
        "id": 73,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 2𝑥−1 \n \ndan \n𝑔(𝑥) = 𝑥2 + 3 \n \nJika (𝑓∘𝑔)(𝑎) = 23, maka nilai 𝑎adalah ....",
        "pilihan": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
        },
        "jawaban": "C"
    },
    {
        "id": 74,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥+ 1 \n \ndan \n𝑔(𝑥) = 𝑥−1\n2\n \n \nNilai dari (𝑔∘𝑓)(6)adalah ....",
        "pilihan": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "jawaban": "B"
    },
    {
        "id": 75,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥2 + 1 \n \ndan \n𝑔(𝑥) = 2𝑥−3 \n\n \nNilai dari (𝑓∘𝑔)(4)adalah ....",
        "pilihan": {
            "A": "24",
            "B": "26",
            "C": "28",
            "D": "30"
        },
        "jawaban": "B"
    },
    {
        "id": 76,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui fungsi: \n𝑓(𝑥) = 2𝑥+ 5 \n \nNilai dari invers fungsi 𝑓−1(𝑥)adalah ....",
        "pilihan": {
            "A": "𝑥+5\n2",
            "B": "𝑥−5\n2",
            "C": "2𝑥−5",
            "D": "2𝑥+ 5"
        },
        "jawaban": "B"
    },
    {
        "id": 77,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = 𝑥−3\n4\n \n \nMaka invers fungsi tersebut adalah ....",
        "pilihan": {
            "A": "4𝑥+ 3",
            "B": "4𝑥−3",
            "C": "𝑥+3\n4",
            "D": "𝑥−3\n4"
        },
        "jawaban": "A"
    },
    {
        "id": 78,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui fungsi: \n𝑓(𝑥) = 3𝑥+ 2\n𝑥−1  \n \nNilai invers fungsi 𝑓−1(𝑥)adalah ....",
        "pilihan": {
            "A": "𝑥+2\n𝑥−3",
            "B": "𝑥+2\n𝑥−3",
            "C": "𝑥+2\n3−𝑥",
            "D": "𝑥−2\n𝑥+3"
        },
        "jawaban": "C",
        "catatanSumber": "Pilihan A dan B sama persis pada PDF sumber."
    },
    {
        "id": 79,
        "level": "sedang",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui: \n𝑓(𝑥) = √2𝑥+ 6 \n \nMaka invers fungsi 𝑓−1(𝑥)adalah ....",
        "pilihan": {
            "A": "𝑥2−6\n2",
            "B": "𝑥2+6\n2",
            "C": "2𝑥2 −6",
            "D": "2(𝑥−6)2"
        },
        "jawaban": "A"
    },
    {
        "id": 80,
        "level": "sulit",
        "topik": "Komposisi dan invers fungsi",
        "soal": "Diketahui fungsi komposisi: \n(𝑓∘𝑔)(𝑥) = 3𝑥+ 7 \n \nJika: \n𝑔(𝑥) = 𝑥−2 \n \nMaka nilai 𝑓−1(𝑥)adalah ....",
        "pilihan": {
            "A": "𝑥−1\n3",
            "B": "𝑥+9\n3",
            "C": "𝑥−13\n3",
            "D": "3𝑥+ 1"
        },
        "jawaban": "C"
    },
    {
        "id": 81,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah perusahaan memproduksi dua jenis produk, yaitu Produk A dan Produk \nB. Jumlah produksi selama dua bulan dicatat dalam matriks: \n𝑃= [120\n150\n100\n130] \n \nBaris pertama menunjukkan produksi bulan Januari dan baris kedua menunjukkan \nproduksi bulan Februari. Kolom pertama adalah Produk A dan kolom kedua adalah \nProduk B. \nJika perusahaan meningkatkan produksi sebesar: \n𝑄= [20\n30\n15\n25] \n \nmaka jumlah produksi baru selama dua bulan adalah ....",
        "pilihan": {
            "A": "[140\n180\n115\n155]",
            "B": "[100\n120\n85\n105]",
            "C": "[240\n300\n200\n260]",
            "D": "[120\n150\n100\n130]"
        },
        "jawaban": "A"
    },
    {
        "id": 82,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah toko menjual tiga jenis barang: buku, pensil, dan penghapus. Jumlah \nbarang yang terjual selama dua hari adalah: \n𝐴= [20\n15\n10\n25\n10\n12] \n \nHarga masing-masing barang adalah: \n\n𝐵= [\n5000\n2000\n1000\n] \n \nMaka pendapatan toko pada hari pertama dan kedua adalah ....",
        "pilihan": {
            "A": "[150000\n182000]",
            "B": "[150000\n172000]",
            "C": "[160000\n182000]",
            "D": "[140000\n157000]"
        },
        "jawaban": "D"
    },
    {
        "id": 83,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Nilai ujian tiga siswa untuk dua mata pelajaran disajikan: \n𝑁= [\n80\n85\n75\n90\n88\n92\n] \n \nBaris menunjukkan siswa dan kolom menunjukkan mata pelajaran. \nJika data ingin ditampilkan dengan format mata pelajaran sebagai baris dan siswa \nsebagai kolom, maka bentuk matriks yang digunakan adalah ....",
        "pilihan": {
            "A": "[80\n75\n88\n85\n90\n92]",
            "B": "[80\n85\n88\n75\n90\n92]",
            "C": "[\n80\n75\n85\n90\n88\n92\n]",
            "D": "[92\n90\n85\n88\n75\n80]"
        },
        "jawaban": "A"
    },
    {
        "id": 84,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah perusahaan mengirim barang menggunakan dua jenis kendaraan. \nJumlah perjalanan: \n𝑋= [𝑥\n𝑦] \n \nSetiap kendaraan membawa jumlah barang tertentu sehingga: \n[2\n3\n4\n1] [𝑥\n𝑦] = [13\n11] \n \nJumlah perjalanan kendaraan pertama dan kedua adalah ....",
        "pilihan": {
            "A": "𝑥= 1, 𝑦= 3",
            "B": "𝑥= 2, 𝑦= 3",
            "C": "𝑥= 3, 𝑦= 1",
            "D": "𝑥= 4, 𝑦= 2"
        },
        "jawaban": "B"
    },
    {
        "id": 85,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Seorang analis menggunakan matriks: \n𝐴= [5\n2\n3\n4] \n \nuntuk menggambarkan perubahan investasi suatu perusahaan. \nNilai determinan matriks tersebut adalah ....",
        "pilihan": {
            "A": "10",
            "B": "12",
            "C": "14",
            "D": "16"
        },
        "jawaban": "C"
    },
    {
        "id": 86,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah toko memiliki stok barang pada dua cabang. Data stok awal ditampilkan \ndalam matriks: \n𝐴= [40\n25\n35\n30] \n \nBaris menunjukkan cabang toko, sedangkan kolom menunjukkan jenis barang (Buku \ndan Tas). \nSetelah melakukan pengadaan, stok tambahan tercatat: \n𝐵= [15\n10\n20\n5 ] \n \nJumlah stok akhir kedua cabang adalah ....",
        "pilihan": {
            "A": "[55\n35\n55\n35]",
            "B": "[25\n15\n15\n25]",
            "C": "[60\n40\n50\n45]",
            "D": "[40\n25\n35\n30]"
        },
        "jawaban": "A"
    },
    {
        "id": 87,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah pabrik memproduksi tiga jenis barang menggunakan dua mesin. \nJumlah produksi setiap mesin: \n𝐴= [30\n20\n10\n25\n15\n5 ] \n \nKeuntungan setiap produk: \n𝐵= [\n4000\n5000\n6000\n] \n \nTotal keuntungan yang diperoleh masing-masing mesin adalah ....",
        "pilihan": {
            "A": "[310000\n205000]",
            "B": "[280000\n205000]",
            "C": "[320000\n250000]",
            "D": "[300000\n220000]"
        },
        "jawaban": "B",
        "catatanKunci": "Kunci tidak tercantum pada PDF; B diperoleh dari perhitungan matriks A x B."
    },
    {
        "id": 88,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah seminar diikuti oleh peserta kategori mahasiswa dan umum. \nMisalkan: \n• \n𝑥= jumlah mahasiswa  \n• \n𝑦= jumlah peserta umum  \nData jumlah peserta memenuhi: \n[2\n1\n1\n3] [𝑥\n𝑦] = [70\n80] \n \n\nJumlah peserta mahasiswa dan umum adalah ....",
        "pilihan": {
            "A": "𝑥= 20, 𝑦= 30",
            "B": "𝑥= 25, 𝑦= 20",
            "C": "𝑥= 26, 𝑦= 18",
            "D": "𝑥= 35, 𝑦= 15"
        },
        "jawaban": "C"
    },
    {
        "id": 89,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah perusahaan menggunakan matriks: \n𝐴= [8\n3\n5\n2] \n \nuntuk menganalisis hubungan dua variabel keuangan. \nNilai determinan matriks A adalah ....",
        "pilihan": {
            "A": "16",
            "B": "9",
            "C": "4",
            "D": "1"
        },
        "jawaban": "D"
    },
    {
        "id": 90,
        "level": "sulit",
        "topik": "Aplikasi matriks",
        "soal": "Sebuah perusahaan memiliki sistem: \n𝐴𝑋= 𝐵 \n \ndengan: \n𝐴= [2\n1\n1\n1] \n \ndan: \n𝐵= [7\n5] \n \nNilai 𝑋adalah ....",
        "pilihan": {
            "A": "[2\n1]",
            "B": "[3\n2]",
            "C": "[4\n1]",
            "D": "[2\n3]"
        },
        "jawaban": "D"
    },
    {
        "id": 91,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah perusahaan jasa pengiriman menetapkan biaya pengiriman berdasarkan \nberat paket. Untuk paket dengan berat 2 kg, biaya yang dikenakan adalah \nRp18.000, sedangkan paket dengan berat 5 kg dikenakan biaya Rp30.000. \nBiaya pengiriman dianggap mengikuti fungsi linear: \n𝑓(𝑥) = 𝑎𝑥+ 𝑏 \ndengan 𝑥menyatakan berat paket (kg) dan 𝑓(𝑥)menyatakan biaya pengiriman (rupiah). \nJika seseorang mengirimkan paket dengan berat 8 kg, berapakah biaya yang harus \ndibayar?",
        "pilihan": {
            "A": "Rp36.000",
            "B": "Rp38.000",
            "C": "Rp42.000",
            "D": "Rp45.000",
            "E": "Rp48.000"
        },
        "jawaban": "C"
    },
    {
        "id": 92,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah taman berbentuk persegi panjang memiliki panjang 𝑥meter dan lebar \n(20 −𝑥)meter. Luas taman tersebut dinyatakan sebagai fungsi: \n𝐿(𝑥) = 𝑥(20 −𝑥) \n \nSeorang arsitek ingin membuat taman dengan luas maksimum. \nBerapakah ukuran panjang dan lebar taman agar luasnya maksimum?",
        "pilihan": {
            "A": "Panjang 5 m dan lebar 15 m",
            "B": "Panjang 8 m dan lebar 12 m",
            "C": "Panjang 10 m dan lebar 10 m",
            "D": "Panjang 12 m dan lebar 8 m",
            "E": "Panjang 15 m dan lebar 5 m"
        },
        "jawaban": "C"
    },
    {
        "id": 93,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah toko online memberikan sistem diskon bertahap. \nHarga awal suatu barang adalah 𝑥rupiah. \nProses pertama: \n• \nToko memberikan diskon 20%.  \nProses kedua: \n• \nSetelah diskon, dikenakan biaya layanan sebesar Rp10.000.  \nFungsi pertama dinyatakan: \n𝑓(𝑥) = 0,8𝑥 \n \nFungsi kedua: \n𝑔(𝑥) = 𝑥+ 10000 \n \nJika sebuah barang memiliki harga awal Rp250.000, harga akhir yang harus dibayar \npelanggan adalah ....",
        "pilihan": {
            "A": "Rp190.000",
            "B": "Rp200.000",
            "C": "Rp210.000",
            "D": "Rp220.000",
            "E": "Rp230.000"
        },
        "jawaban": "C"
    },
    {
        "id": 94,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Jumlah bakteri dalam sebuah penelitian meningkat mengikuti fungsi: \n𝑁(𝑡) = 500(2𝑡) \n \ndengan 𝑁(𝑡)adalah jumlah bakteri setelah 𝑡jam. \nSeorang peneliti menemukan bahwa jumlah bakteri telah mencapai 16.000 bakteri. \nBerapa lama waktu yang diperlukan agar jumlah tersebut tercapai?",
        "pilihan": {
            "A": "3 jam",
            "B": "4 jam",
            "C": "5 jam",
            "D": "6 jam",
            "E": "7 jam"
        },
        "jawaban": "C"
    },
    {
        "id": 95,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah aplikasi perjalanan mengubah jarak perjalanan menjadi biaya \nmenggunakan fungsi: \n𝑓(𝑥) = 5000𝑥+ 8000 \n \ndengan: \n• \n𝑥= jarak perjalanan (km)  \n• \n𝑓(𝑥)= biaya perjalanan (rupiah)  \nSeorang pengguna membayar biaya perjalanan sebesar Rp53.000. \nUntuk mengetahui jarak perjalanan sebenarnya, pengguna harus menggunakan fungsi \ninvers. \nBerapakah jarak perjalanan tersebut?",
        "pilihan": {
            "A": "8 km",
            "B": "9 km",
            "C": "10 km",
            "D": "11 km",
            "E": "12 km"
        },
        "jawaban": "B"
    },
    {
        "id": 96,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah perusahaan memproduksi botol minuman. Berdasarkan data produksi, \nkeuntungan perusahaan bergantung pada jumlah barang yang diproduksi. \nKeuntungan (dalam ribuan rupiah) dimodelkan dengan fungsi: \n𝐾(𝑥) = −2𝑥2 + 80𝑥−300 \n \ndengan 𝑥menyatakan jumlah produksi dalam ratusan unit. \nManajemen ingin menentukan jumlah produksi agar keuntungan yang diperoleh \nmaksimum. \nBerdasarkan model tersebut, keuntungan maksimum perusahaan terjadi saat jumlah \nproduksi sebanyak ....",
        "pilihan": {
            "A": "1.500 unit",
            "B": "2.000 unit",
            "C": "2.500 unit",
            "D": "3.000 unit",
            "E": "4.000 unit"
        },
        "jawaban": "B"
    },
    {
        "id": 97,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah perusahaan e-commerce menerapkan dua tahap perubahan harga. \nTahap pertama: \nHarga barang dinaikkan 15% karena biaya operasional. \n𝑓(𝑥) = 1,15𝑥 \n \nTahap kedua: \nToko memberikan voucher potongan tetap sebesar Rp25.000. \n𝑔(𝑥) = 𝑥−25000 \n \nSebuah pelanggan membeli barang setelah melalui kedua proses tersebut dengan \nharga akhir Rp205.000. \nBerapakah harga awal barang sebelum mengalami perubahan?",
        "pilihan": {
            "A": "Rp200.000",
            "B": "Rp210.000",
            "C": "Rp225.000",
            "D": "Rp240.000",
            "E": "Rp250.000"
        },
        "jawaban": "A"
    },
    {
        "id": 98,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah perusahaan internet menentukan biaya rata-rata pemasangan jaringan \nberdasarkan jumlah pelanggan dalam suatu wilayah. \nBiaya rata-rata dinyatakan: \n𝐶(𝑥) = 12000000\n𝑥\n+ 50000 \n \ndengan: \n• \n𝐶(𝑥)= biaya rata-rata per pelanggan (rupiah)  \n• \n𝑥= jumlah pelanggan  \n\nJika perusahaan ingin biaya rata-rata menjadi Rp80.000 per pelanggan, maka jumlah \npelanggan minimal yang harus tersedia adalah ....",
        "pilihan": {
            "A": "200 pelanggan",
            "B": "300 pelanggan",
            "C": "400 pelanggan",
            "D": "500 pelanggan",
            "E": "600 pelanggan"
        },
        "jawaban": "C"
    },
    {
        "id": 99,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Jumlah pengguna sebuah aplikasi pendidikan meningkat mengikuti model: \n𝑃(𝑡) = 5000(1, 2)𝑡 \n \ndengan: \n• \n𝑃(𝑡)= jumlah pengguna setelah 𝑡bulan  \n• \n𝑡= waktu dalam bulan  \nPerusahaan menargetkan jumlah pengguna mencapai lebih dari 12.000 orang. \nWaktu paling sedikit yang diperlukan agar target tercapai adalah ....",
        "pilihan": {
            "A": "5 bulan",
            "B": "6 bulan",
            "C": "7 bulan",
            "D": "8 bulan",
            "E": "9 bulan"
        },
        "jawaban": "B"
    },
    {
        "id": 100,
        "level": "sulit",
        "topik": "Aplikasi fungsi",
        "soal": "Sebuah alat sensor mengubah suhu asli suatu ruangan menjadi angka \npembacaan digital. \nHubungan suhu asli 𝑥(°C) dengan angka sensor 𝑦diberikan: \n𝑓(𝑥) = 3𝑥+ 6\n2\n \n \nNamun teknisi hanya dapat melihat angka sensor dan ingin mengetahui suhu \nsebenarnya. \nJika sensor menunjukkan angka 45, maka suhu ruangan sebenarnya adalah ....",
        "pilihan": {
            "A": "20°C",
            "B": "23°C",
            "C": "25°C",
            "D": "28°C",
            "E": "30°C"
        },
        "jawaban": "D"
    }
];

// Soal yang sedang aktif
let soalAktif = null;

// Menyimpan ID soal yang sudah muncul agar tidak cepat berulang.
let soalTerpakai = new Set();

function escapeHTML(teks){
    return String(teks)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function formatTeksSoal(teks){
    // Soal berasal dari bank soal internal dan dapat mengandung HTML
    // untuk menampilkan matriks, pangkat, subscript, dan pecahan.
    // Jangan escape tag HTML di sini.
    return String(teks)
        .replace(/\r/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\n/g, "<br>");
}

function tentukanLevelSoal(){
    // Tingkat soal mengikuti posisi pion di papan.
    // Kotak 1-30 = mudah, 31-65 = sedang, 66-100 = sulit.
    let posisiSekarang = 0;

    if(typeof posisi !== "undefined" && typeof giliran !== "undefined"){
        posisiSekarang = posisi[giliran] || 0;
    }

    if(posisiSekarang <= 30) return "mudah";
    if(posisiSekarang <= 65) return "sedang";
    return "sulit";
}

function ambilSoalAcak(level){
    let kandidat = daftarSoal.filter(function(item){
        return item.level === level && !soalTerpakai.has(item.id);
    });

    // Jika semua soal pada level tersebut sudah pernah muncul,
    // izinkan level itu dipakai ulang dari awal.
    if(kandidat.length === 0){
        daftarSoal
            .filter(function(item){ return item.level === level; })
            .forEach(function(item){ soalTerpakai.delete(item.id); });

        kandidat = daftarSoal.filter(function(item){
            return item.level === level;
        });
    }

    let index = Math.floor(Math.random() * kandidat.length);
    let terpilih = kandidat[index];
    soalTerpakai.add(terpilih.id);
    return terpilih;
}

function siapkanTombolPilihan(kode){
    let tombol = document.getElementById(kode);
    let options = document.getElementById("questionOptions");

    // HTML awal memiliki A-D. Tombol E dibuat otomatis jika diperlukan.
    if(!tombol){
        tombol = document.createElement("button");
        tombol.id = kode;
        tombol.onclick = function(){ jawab(kode); };
        options.appendChild(tombol);
    }

    return tombol;
}

function resetTampilanJawaban(){
    ["A", "B", "C", "D", "E"].forEach(function(kode){
        const tombol = document.getElementById(kode);
        if(!tombol) return;
        tombol.disabled = false;
        tombol.classList.remove("answer-correct", "answer-wrong", "answer-dim");
    });

    const feedback = document.getElementById("answerFeedback");
    if(feedback){
        feedback.style.display = "none";
        feedback.classList.remove("feedback-correct", "feedback-wrong");
    }
}

function tampilkanSoal(){
    let level = tentukanLevelSoal();
    soalAktif = ambilSoalAcak(level);
    sedangMenjawab = true;

    let judulLevel = level.charAt(0).toUpperCase() + level.slice(1);
    let namaPemain = (typeof pemain !== "undefined" && pemain[giliran]) ? pemain[giliran] : "Pemain";

    const questionPlayer = document.getElementById("questionPlayer");
    if(questionPlayer){
        questionPlayer.textContent = namaPemain;
    }

    document.getElementById("question").innerHTML =
        '<div class="info-soal">' +
            '<span class="badge-level level-' + level + '">Level ' + judulLevel + '</span>' +
            '<span class="nomor-soal">Soal ' + soalAktif.id + ' - ' + escapeHTML(soalAktif.topik) + '</span>' +
        '</div>' +
        '<div class="teks-soal">' + formatTeksSoal(soalAktif.soal) + '</div>';

    ["A", "B", "C", "D", "E"].forEach(function(kode){
        let tombol = siapkanTombolPilihan(kode);

        if(Object.prototype.hasOwnProperty.call(soalAktif.pilihan, kode)){
            tombol.style.display = "block";
            tombol.innerHTML =
                '<span class="answer-letter">' + kode + '</span>' +
                '<span class="answer-content">' + formatTeksSoal(soalAktif.pilihan[kode]) + '</span>';
        }
        else{
            tombol.style.display = "none";
        }
    });

    resetTampilanJawaban();

    const box = document.getElementById("questionBox");
    box.style.display = "flex";
    requestAnimationFrame(function(){
        box.classList.add("is-open");
    });

    if(typeof mainkanSuara === "function") mainkanSuara("question");
}

function tutupPopupSoal(){
    const box = document.getElementById("questionBox");
    box.classList.remove("is-open");
    setTimeout(function(){
        box.style.display = "none";
    }, 220);
}

function tampilkanFeedbackJawaban(benar, pilihan){
    const feedback = document.getElementById("answerFeedback");
    const icon = document.getElementById("feedbackIcon");
    const title = document.getElementById("feedbackTitle");
    const text = document.getElementById("feedbackText");

    feedback.classList.remove("feedback-correct", "feedback-wrong");

    if(benar){
        feedback.classList.add("feedback-correct");
        icon.textContent = "✅";
        title.textContent = "Jawaban Benar!";
        text.textContent = "Hebat! Kamu mendapat satu kesempatan melempar dadu lagi.";
    }else{
        feedback.classList.add("feedback-wrong");
        icon.textContent = "❌";
        title.textContent = "Belum Tepat";
        text.textContent = "Jawaban yang benar adalah pilihan " + soalAktif.jawaban + ". Giliran berpindah ke pemain berikutnya.";
    }

    feedback.style.display = "flex";
}

function jawab(pilihan){
    if(!soalAktif || !sedangMenjawab) return;
    sedangMenjawab = false;

    const benar = pilihan === soalAktif.jawaban;

    ["A", "B", "C", "D", "E"].forEach(function(kode){
        const tombol = document.getElementById(kode);
        if(!tombol || tombol.style.display === "none") return;

        tombol.disabled = true;

        if(kode === soalAktif.jawaban){
            tombol.classList.add("answer-correct");
        }else if(kode === pilihan && !benar){
            tombol.classList.add("answer-wrong");
        }else{
            tombol.classList.add("answer-dim");
        }
    });

    tampilkanFeedbackJawaban(benar, pilihan);

    if(benar){
        if(typeof mainkanSuara === "function") mainkanSuara("correct");

        setTimeout(function(){
            tutupPopupSoal();
            statusGame = "READY";
            lemparTambahan = true;
            sedangBerjalan = false;
        }, 1800);
    }
    else{
        if(typeof mainkanSuara === "function") mainkanSuara("wrong");

        setTimeout(function(){
            tutupPopupSoal();
            statusGame = "READY";
            gantiGiliran();
        }, 2200);
    }
}
// ============================================================
// PATCH TAMPILAN MATRIKS UNTUK BANK SOAL ULAR TANGGA
// Tempelkan file ini SETELAH soal.js, atau tempel seluruh isinya
// di bagian paling bawah soal.js.
// ============================================================

function M(rows) {
    return `<span class="matriks">
        <span class="matrix-bracket">[</span>
        <span class="matrix-body">
            ${rows.map(row => `
                <span class="matrix-row">
                    ${row.map(value => `<span class="matrix-cell">${value}</span>`).join("")}
                </span>`).join("")}
        </span>
        <span class="matrix-bracket">]</span>
    </span>`;
}

function V(values) {
    return M(values.map(v => [v]));
}

function R(values) {
    return M([values]);
}

function setSoal(id, soal, pilihan = null) {
    const q = daftarSoal.find(item => item.id === id);
    if (!q) return;
    q.soal = soal;
    if (pilihan) q.pilihan = pilihan;
}

// -------------------- LEVEL MUDAH --------------------
setSoal(1,
    `Diketahui matriks A = ${M([[2,4],[6,8]])}<br><br>Ordo dari matriks A adalah ....`
);

setSoal(2,
    `Diketahui matriks B = ${R([5,7,9])}<br><br>Ordo matriks B adalah ....`
);

setSoal(3,
    `Perhatikan matriks C = ${M([[3,6],[1,4]])}<br><br>Nilai elemen c<sub>12</sub> adalah ....`
);

setSoal(5,
    `Diketahui A = ${M([[2,3],[4,5]])} dan B = ${M([[1,2],[3,4]])}<br><br>Nilai dari A + B adalah ....`,
    {
        A: M([[3,5],[7,9]]),
        B: M([[1,1],[1,1]]),
        C: M([[2,6],[4,8]]),
        D: M([[3,4],[6,8]])
    }
);

setSoal(6,
    `Diketahui A = ${M([[7,5],[3,2]])}<br><br>Elemen yang berada pada baris ke-2 kolom ke-1 adalah ....`
);

setSoal(7,
    `Matriks berikut yang merupakan matriks identitas adalah ....`,
    {
        A: M([[1,0],[0,1]]),
        B: M([[0,1],[1,0]]),
        C: M([[2,0],[0,2]]),
        D: M([[1,1],[1,1]])
    }
);

setSoal(8,
    `Hasil pengurangan matriks berikut adalah<br><br>${M([[8,6],[5,4]])} &minus; ${M([[3,2],[1,1]])}`,
    {
        A: M([[5,4],[4,3]]),
        B: M([[11,8],[6,5]]),
        C: M([[5,5],[3,3]]),
        D: M([[4,3],[2,1]])
    }
);

setSoal(10,
    `Diketahui A = ${M([[4,7],[2,9]])}<br><br>Transpose dari matriks A adalah ....`,
    {
        A: M([[4,2],[7,9]]),
        B: M([[7,4],[9,2]]),
        C: M([[4,7],[9,2]]),
        D: M([[2,4],[9,7]])
    }
);

setSoal(36,
    `Diketahui matriks A = ${M([[2,3],[1,4]])}<br><br>Nilai determinan matriks A adalah ....`
);

setSoal(37,
    `Diketahui A = ${M([[3,1],[2,5]])}<br><br>Transpose dari matriks A adalah ....`,
    {
        A: M([[3,2],[1,5]]),
        B: M([[3,1],[5,2]]),
        C: M([[1,3],[2,5]]),
        D: M([[5,2],[1,3]])
    }
);

setSoal(38,
    `Diketahui A = ${M([[2,4],[3,5]])}<br><br>Nilai dari 2A adalah ....`,
    {
        A: M([[2,4],[3,5]]),
        B: M([[4,8],[6,10]]),
        C: M([[4,6],[8,10]]),
        D: M([[1,2],[1.5,2.5]])
    }
);

setSoal(39,
    `Diketahui A = ${M([[1,2],[3,4]])} dan B = ${M([[5,6],[7,8]])}<br><br>Nilai dari A + B adalah ....`,
    {
        A: M([[6,8],[10,12]]),
        B: M([[5,12],[21,32]]),
        C: M([[4,4],[4,4]]),
        D: M([[6,7],[9,10]])
    }
);

setSoal(40,
    `Diketahui A = ${M([[2,1],[3,4]])} dan B = ${M([[1,5],[2,3]])}<br><br>Hasil dari perkalian matriks AB adalah ....`,
    {
        A: M([[4,13],[11,27]]),
        B: M([[4,5],[6,12]]),
        C: M([[3,6],[5,7]]),
        D: M([[4,8],[9,10]])
    }
);

setSoal(41,
    `Jika A = ${M([["x",2],[3,4]])} dan diketahui determinan A = 10, maka nilai x adalah ....`
);

setSoal(42,
    `Diketahui A = ${M([[4,7],[2,5]])}<br><br>Invers matriks A adalah ....`,
    {
        A: `1/6 ${M([[5,-7],[-2,4]])}`,
        B: `1/6 ${M([[4,7],[2,5]])}`,
        C: `1/6 ${M([[5,7],[2,4]])}`,
        D: `1/6 ${M([[-5,7],[2,-4]])}`
    }
);

setSoal(43,
    `Diketahui A = ${M([[1,2,3],[4,5,6]])}<br><br>Ordo matriks A<sup>T</sup> adalah ....`
);

setSoal(44,
    `Diketahui A = ${M([[2,0],[0,3]])}<br><br>Jenis matriks A adalah ....`
);

setSoal(45,
    `Diketahui A = ${M([[1,2],[3,4]])}<br><br>Nilai dari A<sup>2</sup> adalah ....`,
    {
        A: M([[7,8],[15,20]]),
        B: M([[7,4],[9,16]]),
        C: M([[4,8],[12,16]]),
        D: M([[7,10],[15,22]])
    }
);

// -------------------- LEVEL SEDANG --------------------
setSoal(46,
    `Diketahui matriks A = ${M([[3,2],[5,4]])}<br><br>Nilai determinan matriks A adalah ....`
);

setSoal(47,
    `Diketahui A = ${M([[2,1],[4,3]])} dan B = ${M([[5,2],[1,6]])}<br><br>Nilai dari A &minus; B adalah ....`,
    {
        A: M([[7,3],[5,9]]),
        B: M([[-3,-1],[3,-3]]),
        C: M([[-3,1],[-3,3]]),
        D: M([[3,1],[5,3]])
    }
);

setSoal(48,
    `Diketahui A = ${M([[1,2],[3,4]])}. Jika X = A<sup>T</sup>, maka nilai X adalah ....`,
    {
        A: M([[4,3],[2,1]]),
        B: M([[1,2],[3,4]]),
        C: M([[2,1],[4,3]]),
        D: M([[1,3],[2,4]])
    }
);

setSoal(49,
    `Diketahui A = ${M([[2,3],[1,4]])} dan B = ${M([[1,2],[3,5]])}<br><br>Hasil perkalian AB adalah ....`,
    {
        A: M([[11,11],[13,18]]),
        B: M([[11,19],[13,22]]),
        C: M([[10,15],[5,20]]),
        D: M([[11,6],[3,20]])
    }
);

setSoal(50,
    `Diketahui A = ${M([["x",2],[3,5]])}. Jika determinan A = 9, maka nilai x adalah ....`
);

setSoal(51,
    `Diketahui A = ${M([[4,1],[2,3]])}<br><br>Nilai dari 3A adalah ....`,
    {
        A: M([[12,3],[6,9]]),
        B: M([[7,4],[5,6]]),
        C: M([[12,3],[2,9]]),
        D: M([[12,1],[2,9]])
    }
);

setSoal(52,
    `Diketahui A = ${M([[2,1,3],[4,5,6]])}<br><br>Elemen a<sub>23</sub> adalah ....`
);

setSoal(53,
    `${M([["x",2],[3,4]])} + ${M([[1,3],[2,5]])} = ${M([[6,5],[5,9]])}<br><br>Maka nilai x adalah ....`
);

setSoal(54,
    `Diketahui A = ${M([[1,0],[0,4]])}<br><br>Matriks A termasuk jenis matriks ....`
);

setSoal(55,
    `Diketahui A = ${M([[2,3],[1,4]])}<br><br>Nilai A<sup>&minus;1</sup> adalah ....`,
    {
        A: `1/5 ${M([[-4,3],[1,-2]])}`,
        B: `1/5 ${M([[3,-4],[2,-1]])}`,
        C: `1/5 ${M([[4,-3],[-1,2]])}`,
        D: `1/5 ${M([[2,3],[1,4]])}`
    }
);

setSoal(56,
    `Diketahui A = ${M([[3,2],[1,4]])}<br><br>Nilai determinan matriks A<sup>2</sup> adalah ....`
);

setSoal(57,
    `Diketahui A = ${M([[2,1],[3,2]])}. Jika AX = ${M([[5,4],[8,7]])}, maka matriks X adalah ....`,
    {
        A: M([[2,1],[1,2]]),
        B: M([[1,2],[2,1]]),
        C: M([[3,1],[1,3]]),
        D: M([[2,2],[1,1]])
    }
);

setSoal(58,
    `Diketahui A = ${M([["x",2],[3,5]])}. Jika A<sup>&minus;1</sup> = 1/4 ${M([[5,-2],[-3,"x"]])}, maka nilai x adalah ....`
);

setSoal(59,
    `Diketahui A = ${M([[2,1],[3,2]])} dan AX = ${M([[7,5],[11,8]])}. Maka nilai matriks X adalah ....`,
    {
        A: M([[3,2],[1,-1]]),
        B: M([[1,2],[3,1]]),
        C: M([[2,1],[1,2]]),
        D: M([[3,2],[1,1]])
    }
);

setSoal(60,
    `Diketahui A = ${M([[2,1],[0,3]])}<br><br>Nilai dari A<sup>&minus;1</sup> adalah ....`,
    {
        A: M([["1/2","-1/6"],[0,"1/3"]]),
        B: M([[2,-1],[0,3]]),
        C: M([["1/3","-1/2"],[0,"1/2"]]),
        D: M([["1/2","1/6"],[0,"1/3"]])
    }
);

setSoal(61,
    `Diketahui A = ${M([[2,1],[1,1]])} dan AX = ${M([[5,3],[3,2]])}. Nilai matriks X adalah ....`,
    {
        A: M([[1,2],[1,1]]),
        B: M([[3,1],[2,1]]),
        C: M([[2,1],[1,1]]),
        D: M([[2,3],[1,2]])
    }
);

setSoal(62,
    `Jika A = ${M([[2,1],[1,2]])}, maka nilai A<sup>2</sup> &minus; 3A + 2I adalah ....`,
    {
        A: M([[1,1],[1,1]]),
        B: M([[0,0],[0,0]]),
        C: M([[2,1],[1,2]]),
        D: M([[3,3],[3,3]])
    }
);

setSoal(63,
    `Diketahui A = ${M([[4,1],[2,3]])}<br><br>Nilai trace matriks A adalah ....`
);

setSoal(64,
    `Diketahui A = ${M([[1,2],[3,4]])}<br><br>Nilai det(2A) adalah ....`
);

setSoal(65,
    `Diketahui A = ${M([[1,1],[1,-1]])}<br><br>Nilai A<sup>T</sup>A adalah ....`,
    {
        A: M([[1,0],[0,1]]),
        B: M([[2,0],[0,2]]),
        C: M([[2,2],[2,2]]),
        D: M([[1,1],[1,1]])
    }
);

// -------------------- LEVEL SULIT / KONTEKSTUAL --------------------
setSoal(81,
    `Sebuah perusahaan memproduksi dua jenis produk. Jumlah produksi dua bulan dicatat dalam matriks P = ${M([[120,150],[100,130]])}. Jika peningkatan produksi adalah Q = ${M([[20,30],[15,25]])}, maka jumlah produksi baru adalah ....`,
    {
        A: M([[140,180],[115,155]]),
        B: M([[100,120],[85,105]]),
        C: M([[240,300],[200,260]]),
        D: M([[120,150],[100,130]])
    }
);

setSoal(82,
    `Sebuah toko menjual buku, pensil, dan penghapus. Jumlah barang terjual selama dua hari adalah A = ${M([[20,15,10],[25,10,12]])}. Harga masing-masing barang adalah B = ${V([5000,2000,1000])}. Maka pendapatan toko pada hari pertama dan kedua adalah ....`,
    {
        A: V([150000,182000]),
        B: V([150000,172000]),
        C: V([160000,182000]),
        D: V([140000,157000])
    }
);

setSoal(83,
    `Nilai ujian tiga siswa untuk dua mata pelajaran disajikan sebagai N = ${M([[80,85],[75,90],[88,92]])}. Jika mata pelajaran akan ditampilkan sebagai baris dan siswa sebagai kolom, maka bentuk matriksnya adalah ....`,
    {
        A: M([[80,75,88],[85,90,92]]),
        B: M([[80,85,88],[75,90,92]]),
        C: M([[80,75],[85,90],[88,92]]),
        D: M([[92,90,85],[88,75,80]])
    }
);

setSoal(84,
    `Sebuah perusahaan mengirim barang menggunakan dua jenis kendaraan. Jika X = ${V(["x","y"])} dan ${M([[2,3],[4,1]])}${V(["x","y"])} = ${V([13,11])}, jumlah perjalanan kendaraan pertama dan kedua adalah ....`
);

setSoal(85,
    `Seorang analis menggunakan matriks A = ${M([[5,2],[3,4]])} untuk menggambarkan perubahan investasi suatu perusahaan.<br><br>Nilai determinan matriks tersebut adalah ....`
);

setSoal(86,
    `Stok awal dua cabang adalah A = ${M([[40,25],[35,30]])}. Stok tambahan adalah B = ${M([[15,10],[20,5]])}. Jumlah stok akhir kedua cabang adalah ....`,
    {
        A: M([[55,35],[55,35]]),
        B: M([[25,15],[15,25]]),
        C: M([[60,40],[50,45]]),
        D: M([[40,25],[35,30]])
    }
);

setSoal(87,
    `Sebuah pabrik memproduksi tiga jenis barang menggunakan dua mesin. Jumlah produksi setiap mesin adalah A = ${M([[30,20,10],[25,15,5]])}. Keuntungan setiap produk adalah B = ${V([4000,5000,6000])}. Total keuntungan masing-masing mesin adalah ....`,
    {
        A: V([310000,205000]),
        B: V([280000,205000]),
        C: V([320000,250000]),
        D: V([300000,220000])
    }
);

setSoal(88,
    `Sebuah seminar memiliki x mahasiswa dan y peserta umum. Data memenuhi ${M([[2,1],[1,3]])}${V(["x","y"])} = ${V([70,80])}. Jumlah peserta mahasiswa dan umum adalah ....`
);

setSoal(89,
    `Sebuah perusahaan menggunakan matriks A = ${M([[8,3],[5,2]])} untuk menganalisis hubungan dua variabel keuangan.<br><br>Nilai determinan matriks A adalah ....`
);

setSoal(90,
    `Sebuah perusahaan memiliki sistem AX = B dengan A = ${M([[2,1],[1,1]])} dan B = ${V([7,5])}. Nilai X adalah ....`,
    {
        A: V([2,1]),
        B: V([3,2]),
        C: V([4,1]),
        D: V([2,3])
    }
);

// Marker versi untuk memastikan browser memuat file terbaru.
console.log("SOAL-V4-INTERAKTIF-AKTIF");
