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
  
const namaProduk = document.createElement('b')
namaProduk.id = "produk"

const buttonEdit = document.createElement('button')
buttonEdit.id = "buttonEdit"
buttonEdit.style.marginTop = "15px"
buttonEdit.textContent = "edit"

const buttonReset = document.createElement('button')
buttonReset.id = "buttonReset"
buttonReset.style.marginTop = "15px"
buttonReset.textContent= "hapus"

const divv = document.getElementById('carddiv')
const b1 = document.getElementById('produk')
const b2 = document.getElementById('harga')
const button1 = document.getElementById('buttonEdit')
const button2 = document.getElementById('buttonReset')

let kartu = card.append(namaProduk, buttonEdit, buttonReset)
let infoUser = [];
let total;

form1.addEventListener("submit", function(event){
    event.preventDefault();

    total + 1

    const inputProduk = document.getElementById('inputProduk').value
    const inputHarga = document.getElementById('inputHarga').value
    let result;

    if(inputProduk === "" || inputHarga === "") {
        alert1.textContent = "harap di isi"
        alert1.style.color = "red"
    }else if(inputProduk !== "" || inputHarga !== "") {
        alert1.textContent = ""
        result = "nama barang : " + inputProduk + "<br><br>" + "harga nya : " + inputHarga
        infoUser.push(result)
        divResult.append(card)
    }
})