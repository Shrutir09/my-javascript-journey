function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function() {
        let h1 = document.createElement("h1");
        h1.textContent = "Hey how are you?";
        h1.style.color = this.color;
        document.body.append(h1);
    };
}

let pencil1 = new CreatePencil("Natraj", 10, "blue", "Kokuyo");
let pencil2 = new CreatePencil("Apsara", 15, "red", "Apsara Ltd");

pencil1.write();
pencil2.write();