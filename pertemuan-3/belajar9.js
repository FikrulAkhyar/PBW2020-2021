// Menggunakan length untuk menghitung panjang kalimat.
var kalimat = "saya belajar javascript di www.malasngoding.com";
document.getElementById("contoh").innerHTML = kalimat.length;


// Menggunakan indexOf untuk menemukan letak string
var kalimat = "Selamat datang di tutorial string javascript";
var temukan = kalimat.indexOf("tutorial");
document.getElementById("contoh1").innerHTML = temukan;

// Menggunakan search untuk mencari string di dalam string
var kalimat = "belajar javascript di www.malasngoding.com";
var cari = kalimat.search("javascript");
document.getElementById("contoh2").innerHTML = cari;

// Menggunakan slice untuk melakukan filter.
var kalimat = "belajar javascript di www.malasngoding.com";   
var filter = kalimat.slice(22, 42);
document.getElementById("contoh3").innerHTML = filter;    


// Menggunakan replace
var kalimat = "belajar javascript di www.malasngoding.com";   
var ganti = kalimat.replace('javascript', 'pemrograman');
document.getElementById("contoh4").innerHTML = ganti;

// Menggunakan Uppercase dan Lowercase.
var kalimat = "Belajar JAVASCRIPT di www.malasngoding.com";   
// mengubah ke huruf besar
var a = kalimat.toUpperCase();  
// mengubah ke huruf kecil
var b = kalimat.toLowerCase();
document.getElementById("besar").innerHTML = a;
document.getElementById("kecil").innerHTML = b;


// Menggunakan concat untuk menggabungkan string
var a = "Fikrul";    
var b = "Akhyar";   
		  
// menggabungkan string
var gabung = a.concat(" ",b);  
document.getElementById("contoh5").innerHTML = gabung;

// Menggunakan split untuk convert string ke array
var huruf = "a,b,c";    
// string jadi array
var convert = huruf.split(",");  
document.getElementById("contoh5").innerHTML = convert[0];