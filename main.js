import { ageCalculator } from './counter';
import './style.scss';
ageCalculator();

// const birthDay = 20;
// const birthMonth = 2 - 1;
// const birthYear = 1993;
// let today = new Date();

// const todayYear = today.getFullYear();
// const todayMonth = today.getMonth();
// const todayDay = today.getDate();

// let ageInYears = todayYear - birthYear;
// let ageInMonths = 0;
// let ageInDays = 0;
// // mostrar años de vida
// if (
//   birthMonth > todayMonth ||
//   (birthMonth === todayMonth && birthDay > todayDay)
// ) {
//   ageInYears--;
// }
// console.log(ageInYears);
// // mostrar tus meses de vida

// if (todayDay >= birthDay) {
//   ageInMonths = todayMonth - birthMonth;
//   console.log(ageInMonths);
// } else {
//   ageInMonths = todayMonth - birthMonth - 1;
//   console.log(ageInMonths);
// }

// if (ageInMonths < 0) {
//   // ageInMonths += 12;
//   ageInMonths = ageInMonths + 12;
//   console.log(ageInMonths);
// }

// console.log(ageInMonths);

// // mostrar dias de vida
// if (todayDay >= birthDay) {
//   ageInDays = todayDay - birthDay;
// } else {
//   const daysInPrevMonth = new Date(todayYear, todayMonth - 1, 0).getDate();
//   console.log(daysInPrevMonth);
//   ageInDays = daysInPrevMonth - birthDay + todayDay;
// }
// console.log(ageInDays);
// console.log(31 - 10 + 5);
