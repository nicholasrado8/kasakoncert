let quantities = {pivo33:0, pivo50:0, toceno:0, sok:0, obicna:0, kisela:0, rakija:0, pljeskavica:0, pomfrit:0};
let prices = {pivo33:2.5, pivo50:3, toceno:3, sok:2, obicna:1.5, kisela:1.5, rakija:3, pljeskavica:5, pomfrit:4};

window.onload = function() {
    let billdiv = this.document.getElementById("bill-div");
    let cancelbutton = this.document.getElementById("cancel");

    

    // Ponisti
    this.document.getElementById("cancel").addEventListener("click", function(){
        billdiv.innerHTML = '';
        quantities = {pivo33:0, pivo50:0, toceno:0, sok:0, obicna:0, kisela:0, rakija:0, pljeskavica:0, pomfrit:0};
        document.getElementById("total").innerText = `UKUPNO: 0 €`;
    });
    
    // Pivo 33cl
    this.document.getElementById("pivo33").addEventListener("click", function(){
        if (quantities.pivo33 == 0) {
            quantities.pivo33 = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pivo33");
            billdiv.appendChild(item);
        } else {
            quantities.pivo33 += 1;
        }
        update_prices();
    });

    // Pivo 50cl
    this.document.getElementById("pivo50").addEventListener("click", function(){
        if (quantities.pivo50 == 0) {
            quantities.pivo50 = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pivo50");
            billdiv.appendChild(item);
        } else {
            quantities.pivo50 += 1;
        }
        update_prices();
    });

    // toceno
    this.document.getElementById("toceno").addEventListener("click", function(){
        if (quantities.toceno == 0) {
            quantities.toceno = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-toceno");
            billdiv.appendChild(item);
        } else {
            quantities.toceno += 1;
        }
        update_prices();
    });

    // sok
    this.document.getElementById("sok").addEventListener("click", function(){
        if (quantities.sok == 0) {
            quantities.sok = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-sok");
            billdiv.appendChild(item);
        } else {
            quantities.sok += 1;
        }
        update_prices();
    });

    // obicna
    this.document.getElementById("obicna").addEventListener("click", function(){
        if (quantities.obicna == 0) {
            quantities.obicna = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-obicna");
            billdiv.appendChild(item);
        } else {
            quantities.obicna += 1;
        }
        update_prices();
    });

    // kisela
    this.document.getElementById("kisela").addEventListener("click", function(){
        if (quantities.kisela == 0) {
            quantities.kisela = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-kisela");
            billdiv.appendChild(item);
        } else {
            quantities.kisela += 1;
        }
        update_prices();
    });

    // rakija
    this.document.getElementById("rakija").addEventListener("click", function(){
        if (quantities.rakija == 0) {
            quantities.rakija = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-rakija");
            billdiv.appendChild(item);
        } else {
            quantities.rakija += 1;
        }
        update_prices();
    });

    // pljeskavica
    this.document.getElementById("pljeskavica").addEventListener("click", function(){
        if (quantities.pljeskavica == 0) {
            quantities.pljeskavica = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pljeskavica");
            billdiv.appendChild(item);
        } else {
            quantities.pljeskavica += 1;
        }
        update_prices();
    });

    // pomfrit
    this.document.getElementById("pomfrit").addEventListener("click", function(){
        if (quantities.pomfrit == 0) {
            quantities.pomfrit = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pomfrit");
            billdiv.appendChild(item);
        } else {
            quantities.pomfrit += 1;
        }
        update_prices();
    });
}

function update_prices(){
    let pivo33 = document.getElementById("item-pivo33");
    if (pivo33 != null) {
        pivo33.innerText = `Pivo 33cl: ${quantities.pivo33}.    Ukupno: ${quantities.pivo33 * prices.pivo33} €`;
    }

    let pivo50 = document.getElementById("item-pivo50");
    if (pivo50 != null) {
        pivo50.innerText = `Pivo 50cl: ${quantities.pivo50}.    Ukupno: ${quantities.pivo50 * prices.pivo50} €`;
    }

    let toceno = document.getElementById("item-toceno");
    if (toceno != null) {
        toceno.innerText = `Toceno: ${quantities.toceno}.    Ukupno: ${quantities.toceno * prices.toceno} €`;
    }

    let sok = document.getElementById("item-sok");
    if (sok != null) {
        sok.innerText = `Sok: ${quantities.sok}.    Ukupno: ${quantities.sok * prices.sok} €`;
    }

    let obicna = document.getElementById("item-obicna");
    if (obicna != null) {
        obicna.innerText = `Obicna: ${quantities.obicna}.    Ukupno: ${quantities.obicna * prices.obicna} €`;
    }

    let kisela = document.getElementById("item-kisela");
    if (kisela != null) {
        kisela.innerText = `Kisela: ${quantities.kisela}.    Ukupno: ${quantities.kisela * prices.kisela} €`;
    }

    let rakija = document.getElementById("item-rakija");
    if (rakija != null) {
        rakija.innerText = `Rakija: ${quantities.rakija}.    Ukupno: ${quantities.rakija * prices.rakija} €`;
    }

    let pljeskavica = document.getElementById("item-pljeskavica");
    if (pljeskavica != null) {
        pljeskavica.innerText = `Pljeskavica: ${quantities.pljeskavica}.    Ukupno: ${quantities.pljeskavica * prices.pljeskavica} €`;
    }

    let pomfrit = document.getElementById("item-pomfrit");
    if (pomfrit != null) {
        pomfrit.innerText = `Pomfrit: ${quantities.pomfrit}.    Ukupno: ${quantities.pomfrit * prices.pomfrit} €`;
    }

    let ukupno = 0;
    ukupno += quantities.pivo33 * prices.pivo33;
    ukupno += quantities.pivo50 * prices.pivo50;
    ukupno += quantities.toceno * prices.toceno;
    ukupno += quantities.sok * prices.sok;
    ukupno += quantities.obicna * prices.obicna;
    ukupno += quantities.kisela * prices.kisela;
    ukupno += quantities.rakija * prices.rakija;
    ukupno += quantities.pljeskavica * prices.pljeskavica;
    ukupno += quantities.pomfrit * prices.pomfrit;

    document.getElementById("total").innerText = `UKUPNO: ${ukupno} €`;

}
