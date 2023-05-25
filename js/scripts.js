//mengambil element
let hitungLuasElement = document.getElementById("hitung-luas");
let sisiLuasElement = document.getElementById("sisi-luas");
let hitungKelilingElement = document.getElementById("hitung-keliling");
let sisiKelilingElement = document.getElementById("sisi-keliling");

// menggunakan event listener submit ke form hitung luas
hitungLuasElement.addEventListener("submit", (e) => {
  // mengambil value angka sisi luas
  let sisiLuas = sisiLuasElement.value;
  // mencegah page untuk refresh
  e.preventDefault();
  // if statement untuk validasi bahwa sisi memiliki value
  if (sisiLuas > 0 && parseInt(sisiLuas)) {
    document.getElementById("error-luas").innerText = "";
    document.getElementById("rumus-luas").innerText = "L = S x S";
    document.getElementById("cara-luas").innerText = `L = ${sisiLuas} x ${sisiLuas}`;
    document.getElementById("output-luas").innerText = `L = ${sisiLuas * sisiLuas}`;
  }
  // jika tidak memilki value maka reset hasil (jika ada) dan memberikan error message
  else {
    resetLuas();
    document.getElementById("error-luas").innerText = "Mohon isi input dengan angka";
  }
});

// fungsi untuk reset hasil dan mengkosongkan input
function resetLuas() {
  sisiLuasElement.value = "";
  document.getElementById("error-luas").innerText = "";
  document.getElementById("rumus-luas").innerText = "";
  document.getElementById("cara-luas").innerText = "";
  document.getElementById("output-luas").innerText = "";
}

// menggunakan event listener submit ke form hitung keliling
hitungKelilingElement.addEventListener("submit", (e) => {
  // mengambil value angka sisi keliling
  let sisiKeliling = sisiKelilingElement.value;
  // mencegah page untuk refresh
  e.preventDefault();
  // if statement untuk validasi bahwa sisi memiliki value
  if (sisiKeliling > 0 && parseInt(sisiKeliling)) {
    document.getElementById("error-keliling").innerText = "";
    document.getElementById("rumus-keliling").innerText = "L = 4 x S";
    document.getElementById("cara-keliling").innerText = `L = 4 x ${sisiKeliling}`;
    document.getElementById("output-keliling").innerText = `L = ${4 * sisiKeliling}`;
  }
  // jika tidak memilki value maka reset hasil (jika ada) dan memberikan error message
  else {
    resetKeliling();
    document.getElementById("error-keliling").innerText = "Mohon isi input dengan angka";
  }
});

// fungsi untuk reset hasil dan mengkosongkan input
function resetKeliling() {
  sisiKelilingElement.value = "";
  document.getElementById("error-keliling").innerText = "";
  document.getElementById("rumus-keliling").innerText = "";
  document.getElementById("cara-keliling").innerText = "";
  document.getElementById("output-keliling").innerText = "";
}
