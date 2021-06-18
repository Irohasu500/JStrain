/*
 * const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"; //syntax warning
// console.log(val1);

// //意図しない部分での再宣言によるエラー

//ctr + /でコメントアウト

let val2 = "let変数";
console.log(val2);

//letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

//letは再宣言不可能
//let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可能
//val3  "const変数を上書き";

//const val3 = "const変数を再宣言";

const val4 = {
  name: "yumeki",
  age: 21
};
console.log(val4); //こっちも変わっている。

val4.name = "user";
console.log(val4);

//constでは、オブジェクト変数の中身を変えることができる。
//しかも、代入順序は上から順に処理される順番ではない。

//プロパティも追加できる。
val4.addres = "Hiroshima";
//console.log(val4);

//変数も変えられる。
//再宣言はできない。
//実際の開発では、constが使用される。
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";

val5.push("mokey");
