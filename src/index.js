import "./styles.css";

/**
 * const, let等の変数宣言
 */

// ①上書き可能か・②再宣言可能か
// var   ①○ ②○
// let   ①○ ②×
// const ①× ②×

// ただし、constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "nakayama",
  age: 25
};

// console.log(val4);

val4.name = "wataru";
console.log(val4);

val4.address = "Yokohama";

// constで定義した配列もプロパティの変更が可能
// Reactの中では基本的にconstを使う Reactの中で動的に値が変わるものについてはStateを使う
// 処理の中で上書きが必要な変数についてはletを使う
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "nakayama";
const age = 25;

// // 「私の名前はnakayamaです。年齢は25歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いる方法 (バッククォートで書く。ダブルクォートではない)
const message2 = `私の名前は${name}です。年齢は${age}才です。`;
console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//　アロー関数の場合
// const func2 = (str) => {
//   return str;
// };

//　ブラケットとreturnを省略できる
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "nakayama",
  age: 25
};

const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(msg1);

// myProfileをいちいち書くのが面倒 → 分割代入
const { name2, age2 } = myProfile;

const msg2 = `名前は${name2}です。年齢は${age2}才です。`;
console.log(msg2);

// オブジェクトだけでなく、配列にも使用可能

const myProfileArray = ["nakayama", 25];

const message3 = `名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}さいです。`;
console.log(message3);

const [name_, age_] = myProfileArray;
const message4 = `名前は${name_}です。年齢は${age_}です。`;
console.log(message4);

/**
 * デフォルト値, 引数など
 */
const sayHello = (name) => console.log(`こんにちは!${name}さん!`);
sayHello("nakayama"); //こんにちは!nakayamaさん!
sayHello(); //こんにちは!undifinedさん!

const sayHello2 = (name = "guest") => console.log(`こんにちは!${name}さん!`); //nameの後にイコールで続けてデフォルト値を設定
sayHello2(); //こんにちは!guestさん!

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2 要素を順番に処理してくれる

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // 3
sumFunc(...arr1); // 3

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...rest] = arr2;
console.log(num1);
console.log(num2);
console.log(rest); //残りの3,4,5がrestにまとまった状態で出力される

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //arr4のコピー
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// コピーするだけならイコールで良いのでは? → 参照先(ポインタ)が引き継がれているだけなので、不具合の温床となる。(コピーではなく、参照渡し)
const arr8 = arr4;
console.log(arr8);

arr8[0] = 100;
console.log(arr4); //元の配列に意図しない影響を与えてしまう

/**
 * mapやfilterを使った配列処理
 */
const nameArr = ["nuts", "choco", "jelly"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1}番目は${nameArr[i]}です`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; //条件に一致するものだけ返す
});
console.log(newNumArr);

// 一部の名前に'さん'を付けたい

const newNameArr = nameArr.map((name) => {
  if (name === "jelly") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
//　省略

/**
 * tips:論理演算子の本当の意味を知ろう && ||
 */

// || が 'OR' で && が 'AND' ではないのか??

// || は左側がfalseなら右側を返す 左側がtrueならそのまま左側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee); // 金額未設定です

const num_ = 100;
const fee_ = num_ || "金額未設定です";
console.log(fee_); // 100

// && は 左側がtrueなら右側を返す 左側がfalseならそのまま左側を返す

const numB = 100;
const feeB = numB && "何か設定されました";
console.log(feeB); // 何か設定されました

const numB_ = null;
const feeB_ = numB_ && "何か設定されました";
console.log(feeB_); // null
