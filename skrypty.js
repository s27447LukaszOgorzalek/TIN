// CZĘŚĆ A

function zadanie1(a, b, c) {
    console.log("Zadanie 1: Trójka pitagorejska");
    let numbers = [a, b, c].sort((a, b) => a - b);
    return Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2);
}

function zadanie2(a, b, c) {
    console.log("Zadanie 2: Wypisywanie liczb z przedziału a-b podzielnych przez c");
    for(let i = a; i <= b; i++) {
        if(i % c === 0) {
            console.log(i);
        }
    }
}

function zadanie3(n) {
    console.log("Zadanie 3: Tabliczka mnożenia NxN");
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= n; j++) {
            row += (i * j) + ' ';
        }
        console.log(row);
    }
}

function zadanie4(n) {
    console.log("Zadanie 4: Ciąg Fibonacciego");
    if(n <= 0) {
        console.log([]);
        return;
    }
    if(n === 1) {
        console.log([0]);
        return;
    }
    let fibonacci = [0, 1];
    for(let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(fibonacci);
}

function zadanie5(h) {
    console.log("Zadanie 5: Choinka");
    for(let i = 0; i < h; i++) {
        let row = '';
        for(let j = 0; j < h - i - 1; j++) {
            row += ' ';
        }
        for(let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

function zadanie6(h) {
    console.log("Zadanie 6: Choinka nocą");
    let tree = '';
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < h - i - 1; j++) {
            tree += '*';
        }
        for(let k = 0; k < 2 * i + 1; k++) {
            tree += ' ';
        }
        for(let j = 0; j < h - i - 1; j++) {
            tree += '*';
        }
        tree += '\n';
    }
    tree += '*'.repeat(2 * h - 1);
    console.log(tree);
}

// funkcje do zad. 7

function areaRectangle(length, width) {
    return length * width;
}

function areaTrapezoid(base1, base2, height) {
    return ((base1 + base2) / 2) * height;
}

function areaParallelogram(base, height) {
    return base * height;
}

function areaTriangle(base, height) {
    return (base * height) / 2;
}

function zadanie7(shape, dimensions) {
    console.log("Zadanie 7: Obliczanie pola figur");
    switch (shape) {
        case 'rectangle':
            console.log("Pole prostokąta wynosi:");
            return areaRectangle(dimensions.length, dimensions.width);
        case 'trapezoid':
            console.log("Pole trapezu wynosi:");
            return areaTrapezoid(dimensions.base1, dimensions.base2, dimensions.height);
        case 'parallelogram':
            console.log("Pole równoległoboku wynosi:");
            return areaParallelogram(dimensions.base, dimensions.height);
        case 'triangle':
            console.log("Pole trójkąta wynosi:");
            return areaTriangle(dimensions.base, dimensions.height);
        default:
            return "Invalid shape";
        }
}

// obiekt mapujący nazwy figur na funkcje obliczające ich pola do zad. 8

const areaCalculators = {
    rectangle: (dimensions) => dimensions.length * dimensions.width,
    trapezoid: (dimensions) => ((dimensions.base1 + dimensions.base2) / 2) * dimensions.height,
    parallelogram: (dimensions) => dimensions.base * dimensions.height,
    triangle: (dimensions) => (dimensions.base * dimensions.height) / 2
};
    
function zadanie8(shape, dimensions, callback) {
    console.log("Zadanie 8: Obliczanie pola figur (funkcje anonimowe i callback):");
    const areaCalculator = areaCalculators[shape];
    if (areaCalculator) {
        const area = areaCalculator(dimensions);
        callback(area);
    } else {
        console.log("Invalid shape");
    }
}

/* 
Examples:

zadabue8('rectangle', { length: 5, width: 4 }, (area) => {
    console.log('Pole prostokąta wynosi:', area);
});

zadanie8('trapezoid', { base1: 10, base2: 6, height: 4 }, (area) => {
    console.log('Pole trapezu wynosi:', area);
});
*/

function zadanie9(height) {
    console.log("Zadanie 9: Trójkąt Pascala");
    let triangle = [];

    for (let row = 0; row < height; row++) {
        triangle[row] = new Array(row + 1);
        triangle[row][0] = triangle[row][row] = 1;

        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }
    }

    for (let row = 0; row < triangle.length; row++) {
        console.log(triangle[row].join(' '));
    }
}

function zadanie10(forbiddenWords, sentence) {
    console.log("Zadanie 10: Funkcja cenzurująca:");
    forbiddenWords.forEach(function(word) {
        var pattern = new RegExp(word, 'gi');
        sentence = sentence.replace(pattern, '*');
    });
    return sentence;
}

// CZĘŚĆ B

// zadanie 11 i 11.1

const auto = {
    rok: 2020,
    przebieg: 50000,
    cena_wyjsciowa: 30000,
    cena_koncowa: 30000,

    zwiekszCeneWyjsciowa: function() {
        this.cena_wyjsciowa += 1000;
        this.aktualizujCeneKoncowa();
    },

    obnizCeneKoncowaZaWiek: function() {
        var obecnyRok = new Date().getFullYear();
        var wiek = obecnyRok - this.rok;
        this.cena_koncowa -= 1000 * wiek;
    },

    obnizCeneKoncowaZaPrzebieg: function() {
        var obnizkaZaPrzebieg = Math.floor(this.przebieg / 100000) * 10000;
        this.cena_koncowa -= obnizkaZaPrzebieg;
    },

    aktualizujCeneKoncowa: function() {
        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizCeneKoncowaZaWiek();
        this.obnizCeneKoncowaZaPrzebieg();
    },

    dopiszPrzebiegiIRok: function(rok, przebieg) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.aktualizujCeneKoncowa();
    }
};

/* 
Examples:

auto.zwiekszCeneWyjsciowa();
console.log("Cena wyjściowa: " + auto.cena_wyjsciowa + " Cena końcowa: " + auto.cena_koncowa);

auto.dopiszPrzebiegiIRok(2018, 150000);
console.log("Rocznik: " + auto.rok + " Przebieg: " + auto.przebieg + " Cena końcowa: " + auto.cena_koncowa);
*/

// zadanie 11.2

class Car {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }
}

const cars = [
    new Car(2018, 50000, 15000),
    new Car(2019, 30000, 20000),
    new Car(2020, 10000, 25000)
];

function addCar(car) {
    if (car.cena_wyjsciowa > 10000) {
        cars.push(car);
    }
}

/* 
Example:

addCar(new Car(2021, 5000, 30000));
*/

function increaseYearForAll() {
    cars.forEach(function(car) {
        car.rok += 1;
    });
}

function displayCars() {
    cars.forEach(function(car, index) {
        console.log(index + 1 + '. Rok: ' + car.rok + ', Przebieg: ' + car.przebieg + ' km, Cena Wyjściowa: ' + car.cena_wyjsciowa + ' PLN, Cena Końcowa: ' + car.cena_koncowa + ' PLN');
    });
}

// zadanie 12.1

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

// zadanie 12.2, 12.3, 12.4

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = []; 
        this.sredniaOcen = 0;
    }

    set ocena(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);
            this.przeliczSrednia();
        }
    }

    get oceny() {
        return this._oceny.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
    }

    przeliczSrednia() {
        if (this._oceny.length === 0) {
            this.sredniaOcen = 0;
            return;
        }
        let suma = this._oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
        this.sredniaOcen = suma / this._oceny.length;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen.toFixed(2)}.`;
    }
}

/*
Examples:
let s = new Student('Jan', 'Kowalski');
console.log(s.hello());

let g = new Student('Łukasz', 'Ogorzałek');
g.ocena = new Ocena("WPR", 4);
g.ocena = new Ocena("TIN", 3);
console.log(g.oceny);
console.log(g.hello());
*/
