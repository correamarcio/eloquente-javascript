
// Mínimo
var minValue = function(valueA, valueB){
    if (valueA > valueB) {
        return valueB
    } else if(valueA < valueB){
        return valueA
    }else{
        return 'Valores iguais!'
    }
}
// console.log(minValue(5,1));

//Recursão
var isEven = function(n,p = 2){
    if (n % p === 0 || n % p === -0) {
        return true
    } else if (n % p === 1 || n % p === -1) {
        return false
    }else{
        isEven(n,-2)
    }
}

// console.log(
//     isEven(-1)
// );

// contando feijões

var countBs = function (string, caracter = "B") {
    count = 0
    for (let i = 0; i < string.length; i++) {
     if(string.charAt(i)==caracter){
        count++
     }
    }
    return count
}

console.log(
    countBs("BabBB", 'a')
)

