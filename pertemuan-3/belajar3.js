var bilangan1 = 6;
var bilangan2 = 2;
var kalimat = "Belajar javascript dasar di malasngoding.com";
var hewan = ["Kambing", "Bebek", "Ayam"];
var manusia = {
     nama : "malas ngoding",
     alamat : "Jakarta",
     umur : 30,
     pekerjaan  : "facebooker"
};

document.getElementById('penjumlahan').innerHTML = bilangan1 + bilangan2;
document.getElementById('pengurangan').innerHTML = bilangan1 - bilangan2;
document.getElementById('perkalian').innerHTML = bilangan1 * bilangan2;
document.getElementById('pembagian').innerHTML = bilangan1 / bilangan2;
document.getElementById('modulus').innerHTML = bilangan1 % bilangan2;
document.getElementById('string').innerHTML = kalimat;
document.getElementById('array').innerHTML = hewan[1];
document.getElementById('object').innerHTML = manusia.nama + " tinggal  di " + manusia.alamat;
