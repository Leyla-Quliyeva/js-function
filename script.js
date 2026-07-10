// 1. BMİ Hesablayıcı

function bmiHesablayıcı(ceki, boy) {
  let bmi = ceki / (boy * boy);
  if (bmi < 25) {
    console.log("Norma");
  } else if (bmi <= 30) {
    console.log("Artıq ceki")
  }
  else {
    console.log("Piylenme")
  }
  return bmi
}

console.log(bmiHesablayıcı(45,1.5))



// 3. Scope Eksperimenti

let reng = "qırmızı";

function boyama() {
  let reng = "mavi";
  console.log("boyama içi:", reng);

  function cercive() {
    console.log("cercive içi:", reng);
  }
  cercive();
}

boyama();
console.log("global:", reng); // boyama içi: mavi,cercive içi: mavi,global: qırmızı



// 4. ❌ Bu kodu düzəlt!

// let endirim1 = 100 * 0.9;
// let qiymeti1 = 100 - endirim1;
// console.log("Yeni qiymət:", qiymeti1);

// let endirim2 = 250 * 0.9;
// let qiymeti2 = 250 - endirim2;
// console.log("Yeni qiymət:", qiymeti2);

// let endirim3 = 75 * 0.85;
// let qiymeti3 = 75 - endirim3;
// console.log("Yeni qiymət:", qiymeti3);

const yeniQiymet = (qiymet = 0, endirimFaizi = 0) => {
  const endirim = qiymet * endirimFaizi;
  return qiymet - endirim;
};
console.log("Yeni qiymet:", yeniQiymet(100, 0.9));
console.log("Yeni qiymet:", yeniQiymet(250, 0.9));
console.log("Yeni qiymet:", yeniQiymet(75, 0.85));
