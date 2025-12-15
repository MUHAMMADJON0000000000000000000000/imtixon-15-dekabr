// 1. Promptdan foydalanuvchi vesini so'rang, agar 90 kgdan ko'p bo'lsa, dieta qiling desin, agar 70 kgdan kam bo'lsa ko'proq ovqat yeng desin, agar boshqa variantlarda yaxshi desin.

// 2. N berilgan 1dan n gacha raqamlar orasidagi juft sonlarning yigindisini hisoblab bering.

// Masalan n=6 busa 1 + 2 + 3 + 4 + 5 qoshib 15 chiqadi.

// 3. N berilgan n gacha bo'lgan raqamlarning orasidan toqlarni kvadratini olib array yasab bering va u arrayning har bir azosini teskari tarzda, yani eng oxirgisidan boshlab, ekranga chiqaring.
//1
// let a = prompt("og'irligingizni kiriting");
// if (a >= 90) {
//   console.log("dieta qiling");
// } else if (a <= 70) {
//   console.log("kuproq ovqat yeying");
// } else {
//   console.log("yaxshi");
// }

//2
// let n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let n = 4;
// let sum = 0;
// let array;
// for (let i = 1; i <= n; i++) {
//   if (i / 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

function array(N) {
  const array = [N];
  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
      array.push(i * i);
    }
  }
}
const N = 3;
console.log(array(N));
