var warna = "merah";

switch (warna){
 case "hitam":
 teks = "warna hitam";
 break;
 case "merah":
 teks = "Warna merah";
 break;
 case "hijau":
 teks = "Warna hijau";
 break;
 default:
     teks = "Warna tidak terdeteksi";
}

document.getElementById('hasil').innerHTML = teks;