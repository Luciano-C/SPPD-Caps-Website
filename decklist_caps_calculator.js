class Card {
    constructor(name, rarity, level) {
        this.name = name;
        this.rarity = rarity;
        this.level = level;
        this.caps = 0
    }
  
    caps_required() {
        switch(true) {
            // Legendary
            case this.rarity === "L" && this.level === 1: 
            this.caps = 0;
            break;

            case this.rarity === "L" && this.level === 2: 
            this.caps = 200;
            break;

            case this.rarity === "L" && this.level === 3: 
            this.caps = 475;
            break;

            case this.rarity === "L" && this.level === 4: 
            this.caps = 875;
            break;

            case this.rarity === "L" && this.level === 5: 
            this.caps = 1375;
            break;

            case this.rarity === "L" && this.level === 6: 
            this.caps = 1950;
            break;

            case this.rarity === "L" && this.level === 7: 
            this.caps = 2275;
            break;
            
            // Epic
            case this.rarity === "E" && this.level === 1: 
            this.caps = 0;
            break;

            case this.rarity === "E" && this.level === 2: 
            this.caps = 0;
            break;

            case this.rarity === "E" && this.level === 3: 
            this.caps = 175;
            break;

            case this.rarity === "E" && this.level === 4: 
            this.caps = 425;
            break;

            case this.rarity === "E" && this.level === 5: 
            this.caps = 800;
            break;

            case this.rarity === "E" && this.level === 6: 
            this.caps = 1275;
            break;

            case this.rarity === "E" && this.level === 7: 
            this.caps = 1825;
            break;

            // Rare
            case this.rarity === "R" && this.level === 1: 
            this.caps = 0;
            break;

            case this.rarity === "R" && this.level === 2: 
            this.caps = 0;
            break;

            case this.rarity === "R" && this.level === 3: 
            this.caps = 0;
            break;

            case this.rarity === "R" && this.level === 4: 
            this.caps = 125;
            break;

            case this.rarity === "R" && this.level === 5: 
            this.caps = 325;
            break;

            case this.rarity === "R" && this.level === 6: 
            this.caps = 650;
            break;

            case this.rarity === "R" && this.level === 7: 
            this.caps = 1075;
            break;

            // Common
            case this.rarity === "C" && this.level === 1: 
            this.caps = 0;
            break;

            case this.rarity === "C" && this.level === 2: 
            this.caps = 0;
            break;

            case this.rarity === "C" && this.level === 3: 
            this.caps = 0;
            break;

            case this.rarity === "C" && this.level === 4: 
            this.caps = 0;
            break;

            case this.rarity === "C" && this.level === 5: 
            this.caps = 100;
            break;

            case this.rarity === "C" && this.level === 6: 
            this.caps = 275;
            break;

            case this.rarity === "C" && this.level === 7: 
            this.caps = 575;
            break; 

            default:
                this.caps = NaN;
                break;
        }
        return this.caps;
    }
}

function calcular_caps() {
    var total_caps = 0;
    for (let i = 1; i <= 12; i++) {
        
        var name = document.getElementById("name" + i);
        var rarity = document.getElementById("rarity" + i);
        var rarity_corrected = rarity.value.toUpperCase();
        var level = document.getElementById("level" + i);
        var caps = document.getElementById("caps" + i);
        var next_level_caps = document.getElementById("next_caps" + i); 
        
        var card = new Card(name.value, rarity_corrected, Number(level.value));
        let nextCardLevel = Number(level.value) <= 6 ? Number(level.value) + 1 : 7; 
        var next_card = new Card(name.value, rarity_corrected, nextCardLevel);

        // Caps cada carta
        caps.innerHTML = card.caps_required()
        // Caps totales
        total_caps += card.caps_required();
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = total_caps;

        // Caps próximo nivel
        next_level_caps.innerHTML = next_card.caps_required() - card.caps_required();



        

    }
} 



var button1 = document.getElementById("button1");
button1.onclick = calcular_caps;





