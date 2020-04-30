///////////////////////////////////////////////// A soma de um intervalo

var range = function (start, end, increment = 1) {
  var array = [];
  for (; start <= end; start += increment) {
    array.push(start);
  }
  return array;
};

var sum = function (array) {
  var result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

console
  .log
  // range(1,10),
  // sum(range(1,10))
  ();

///////////////////////////////////////////////// Invertende um array

var carros = ["HB20", "OPALA", "Fusca", "MAREA"];

var reverseArray = function (array) {
  var reverse = [];
  for (let i = 0; i < array.length; i++) {
    reverse.unshift(array[i]);
  }
  return reverse;
};
console
  .log
  // reverseArray(carros)
  ();
var numbers = [1, 2, 3, 4, 5, 6];
var reverseArrayInPlace = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (i < Math.floor(array.length / 2)) {
      var invert = array.length - i - 1;
      var temp = array[i];
      array[i] = array[invert];
      array[invert] = temp;
    }
  }
  return array;
};
console
  .log
  // sum(reverseArrayInPlace(reverseArray(range(1,30))))
  ();

///////////////////////////////////////////////// A lista

var arrayToList = function (array) {
  reverseArrayInPlace(array);
  for (let i = 0; i < array.length; i++) {
    var list = { value: array[i], rest: list };
  }
  return list;
};

console
  .table
  // arrayToList(reverseArrayInPlace(reverseArray(range(1,3))))
  ();

var listToArray = function (list) {
  var array = [];
  for (var node = list; node != null; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

console
  .log
  // listToArray(arrayToList([10,20,30]))
  ();

var prepend = function (value, list) {
  return {
    value,
    rest: {
      list,
    },
  };
};

console
  .log
  // prepend(10,prepend(20,null))
  ();

var nth = function (list, number) {
  let cont = 0;
  for (var node = list; node != null; node = node.rest) {
    if (cont === number) {
      return node.value;
    } else {
      cont++;
    }
  }
  if (cont != number) {
    return "tem nao";
  }
};

console.log(
  // nth(arrayToList([10,20,30]),1)

)

///////////////////////////////////////////////// dcomparação profunda

var obj = {here: {is: "an"},   object: 2,
object1: 2,
object2: 2,
object3: 2,};
var obj1 = {here: {is: "an"},   object: 2,
object1: 3,
object2: 2,
object3: 2,};

var deepEqual = function (v1, v2, howMuthTrue = 0) {
  // console.log(typeof v1, typeof v2);
  var contagem = howMuthTrue
  if (!(typeof v1 == 'object' && v1 !== null)) {
    return v1 === v2
  }else{
    var contV1 = 0
    var contV2 = 0
    for (const {} in v1){contV1++}
    for (const {} in v2){contV2++}
    if (contV1 != contV2) {
      return false
    }else {
      for (const key in v1) {
        if (!v2.hasOwnProperty(key)) {
         return false
        }else{
          if (!(v1[key] === v2[key])) {
          if(!(deepEqual(v1[key], v2[key]))){
            return false
          }
          }
        }
      }
    }
  return true 
    
  }

}

console.log(
deepEqual(obj, obj1),
deepEqual({nome: 'a'},{nome: 'a'}),
deepEqual([1,2], [1,2]),
deepEqual(null, null),
deepEqual(undefined, undefined),
deepEqual(true, true),
deepEqual(1, 2),
deepEqual('1', '1')
)
