const arr = [1, 2, 3, 4, 5, 6];

// 1.1 Utilizar el método map de los arreglos para duplicar cada elemento 

function duplicate(arr) {
    return arr.map((elemento)=>
        elemento*2
    );
};

let newArr = duplicate(arr);
console.log(newArr);


// 1.2 Utilizar el método filter para filtrar los números pares de arr

function even(arr) {
    return arr.filter((elemento)=>
        elemento%2 === 0
    );
};

let evenArr = even(arr);
console.log(evenArr);

// 1.3 Utilizar el método reduce para sumar todos los elementos

function add(arr){
    return arr.reduce((acum,curr)=>
        acum + curr, 0
    );
};

let suma = add(arr);
console.log(suma);
