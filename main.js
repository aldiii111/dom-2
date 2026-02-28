const body = document.body
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')

const divResult = document.getElementById('divResult')
const pResult = document.getElementById('pResult')

const alert1 = document.getElementById('alertProduk')

const card = document.createElement('div')
card.id = "carddiv"
card.style.boxShadow = "0 2px 5px 2px rgb(0, 0, 0, 0.2)"
card.style.padding = "10px"
card.style.display = "flex"
card.style.flexDirection = "column"
card.style.gap = "10px"
  
const namaProduk = document.createElement('b')
namaProduk.id = "produk"

const harga = document.createElement('b')
harga.id = "harga"

const buttonEdit = document.createElement('button')
buttonEdit.id = "buttonEdit"

const buttonReset = document.createElement('button')
buttonReset.id = "buttonReset"

let infoUser = []

form1.addEventListener("submit", function(event){
    event.preventDefault();

    const inputProduk = document.getElementById('inputProduk').value
    const inputHarga = document.getElementById('inputHarga').value
    let result;
    let result2;

    if(inputProduk === "" || inputHarga === "") {
        alert1.textContent = "harap di isi"
        alert1.style.color = "red"
    }else if(inputProduk !== "" || inputHarga !== "") {
        alert1.textContent = ""
        result = "nama barang: " + inputProduk
        result2 = "harga nya: " + inputHarga
        infoUser.push(result, result2)
        alert(infoUser)
    }
})