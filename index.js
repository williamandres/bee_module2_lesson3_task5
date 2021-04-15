var data = [
    { name: "william", age: 18, math: 30, spanish: 30, lireture: 30 },
    { name: "santiago", age: 18, math: 50, spanish: 30, lireture: 30 },
    { name: "Alejandra", age: 18, math: 30, spanish: 30, lireture: 30 },
    { name: "sandra", age: 18, math: 30, spanish: 50, lireture: 30 },
    { name: "david", age: 18, math: 30, spanish: 30, lireture: 30 }
];
for (var i = 0; i < data.length; i++) {
    if (data[i].math + data[i].spanish + data[i].lireture == 90) {
        console.log(data[i].name);
    }
    ;
}
