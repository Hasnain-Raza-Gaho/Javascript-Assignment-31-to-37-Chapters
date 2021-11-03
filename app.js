// ---------------Assignment # 3 (Chapters 31 to 37) Startssss 







// Chapters 31 to 34 START -------->>>






// task 1
// var currenDate = new Date();
// document.write(currenDate);





// task 2
// var currenDate = new Date();
// var currentMonth = currenDate.getMonth()
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// alert('Current month: ' + months[currentMonth]);




// task 3
// var currenDate = new Date();
// var currentday = currenDate.getDay()
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// alert('Today is '+days[currentday]);





// task 4
// var currenDate = new Date();
// var currentday = currenDate.getDay()
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

// if(currentday == 0 || currentday == 6){
// alert('It\'s Fun day');
// }

// else{
// alert('It\'s '+days[currentday]);
// }






// task 5
// var todayDate = new Date();
// var currentdate = todayDate.getDate()

// if(currentdate < 16 ){
// alert('First fifteen days of the month');
// }
// else{
//     alert('Last days of the month');
// }






// task 6
// var newDate = new Date();
// var earlierDate = newDate.getTime()
// var eDMin = earlierDate /(1000 * 60 * 60);

// document.write('Current Date: '+newDate + '.<br>')
// document.write('Elapsed milliseconds since January 1, 1970: ' + earlierDate + '.<br>')
// document.write('Elapsed minutes since January 1, 1970: '+eDMin + '.<br>')




// task 7
// var newDate = new Date();
// var hours = newDate.getHours()
// if (hours < 12 ) {
//     document.write('Its AM')
// }
// else{
//     document.write('Its PM')
// }






// task 8
// var laterDate = new Date('Dec 31, 2021');
// document.write(laterDate)




// task 9
// var newDate = new Date();
// var laterDate = new Date('June 18, 2015');
// var timeElapsed1 = laterDate.getTime();
// var timeElapsed2 = newDate.getTime();
// var totalTime = timeElapsed2 - timeElapsed1;
// var daysElapsed = totalTime /(1000 * 60 * 60 * 24);
// document.write(Math.round(daysElapsed) + ' days have passed since 1st Ramadan, 2015<br>');




// task 10
// var newDate = new Date();
// var laterDate = new Date('Jan 1, 2015');
// var timeElapsed1 = laterDate.getTime();
// var timeElapsed2 = newDate.getTime();
// var totalTime = timeElapsed2 - timeElapsed1;
// var daysElapsed = totalTime /1000;
// document.write('On reference date '+ newDate + ',<br>');
// document.write(Math.round(daysElapsed) + ' seconds had passed since beginning of 2015<br>');





// task 11

// var currentDate = new Date()
// var newDate = new Date();
// newDate.setHours(newDate.getHours() -1)
// document.write('current date: ' + currentDate + '<br>')
// document.write('1 hour ago, it was ' + newDate + '<br>')





// task 12

// var currentDate = new Date()
// var newDate = new Date();
// newDate.setFullYear(newDate.getFullYear() -100)
// document.write('current date: ' + currentDate + '<br>')
// document.write('100 years back, it was ' + newDate + '<br>')





// task 13
// var newDate = new Date();
// var age = +prompt('What is your age?')
// var dobYear = newDate.getFullYear() - age; 
// document.write('Your age is : ' + age + '<br>')
// document.write('Your birth year is : ' + dobYear + '<br>')





// task 14

// var newDate = new Date();
// var custName = 'ABC Customer';
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// var month = newDate.getMonth();
// var numOfUnits = 410;
// var chargeperUnits = 16;
// var latePay = 350;

// document.write('<h1>K-Electric Bill</h1>')
// document.write('<br>')
// document.write('Custome Name: ' + '<b>' + custName + '</b><br>')
// document.write('Month: ' + '<b>' + months[month] + '</b><br>')
// document.write('Number of units: ' + '<b>' + numOfUnits + '</b><br>')
// document.write('Charges per unit: ' + '<b>' + chargeperUnits + '</b><br>')
// document.write('<br>')
// document.write('Net Amount Payable (within Due Date): ' + '<b>' + numOfUnits*chargeperUnits + '</b><br>')
// document.write('Late payment surchage: ' + '<b>' + latePay + '</b><br>')
// document.write('Gross Amount Payable (after Due Date): ' + '<b>' + (numOfUnits*chargeperUnits + latePay) + '</b><br>')






// Chapters 31 to 34 Completed -------->>>








// Chapters 35 to 37 Startssss-------->>>





// task 1
// function newDate() {
// return new Date();
// }
// document.write(newDate())




// task 2
// function fullName() {
//     return 'Welcome Here ' + prompt('Enter Your First Name ?') + ' ' + prompt('Enter Your Second Name ?');
// }
// alert(fullName());





// task 3
// function adding() {
//     return +prompt('Enter first Number') + +prompt('Enter Second Number')
// }
// document.write(adding())




// task 4;
// function Calculator() {
//     a = +prompt('Enter first Number')
//     sign = prompt('Enter Operation Sign?\nLike + , - , * , / ')
//     b = +prompt('Enter Second Number')
//     if (sign == '+') {
//         return a + b;
//     }
//     else if (sign == '-'){
//         return a - b;
//     }
//     else if (sign == '*'){
//         return a * b;
//     }
//     else if (sign == '/'){
//         return a / b;
//     }
//     else{
//         alert('Enter Correct Operator Please!')
//     }
// }

// document.write(Calculator())





// task 5

// function square(a) {
// return a*a
// }
// document.write(square(4))






// task 6

// function factorial() {
//     b= prompt('Enter a number to find Factorial.')
//     if (b == 0) {
//         b = 1
//     }
//     else{
//         for ( a = b-1; a >= 1; a--) { 
//             b = a * b;
//     }
//     }
//     return b;
//  }

// document.write(factorial())
 




// task 7

// function countings() {
//     a = prompt('Enter Start Number of Counting.')
//     b = prompt('Enter End Number of Counting.')
    
//     if (+a > +b) {
//         alert('You Entered wrong numbers')
//     }
//     else{
//     for (let c = +a; c <= +b; c++) {
//         document.write(c + ' ')
//     }
// }
// }
// countings()






// task 8
// function calculateHypotenuse() {
//     var base = prompt('Enter Base of a triangele')
//     var perp = prompt('Enter Perpendicular of a triangele')
//     var hyp = calculateSquare(base) + calculateSquare(perp);
//     return Math.sqrt(hyp)
//     function calculateSquare(a){
//     return a * a;
//     }
// }
// document.write(calculateHypotenuse())





// task 9
// function area(width,height) {
//     return width * height;
// }
// width = 20;
// height = 2;

// // i. arguments as value
// area(2,2)

// // ii. arguments as variables
// area(width,height)





// task 10

// function palindrome(word) {
//     word = prompt('Enter a word to check either it is palindrome word or not!');
//     b = '';
//     for (a = word.length - 1; a >= 0; a--) {
//         b = b + word[a];   
//     if (word == b) {
//         flg = true
//     }
//     else{
//         flg = false;
//     }
// }
// if (flg == true) {
//     alert('Yes its palindrome word')
// }
// else{
//     alert('No.. its not palindrome word')
// }
// }
// palindrome()






// task 11
// function upperCaseString(words) {
// words = words.toLowerCase();
// words = words.split(' ');
// for (a=0; a<words.length; a++) {
// c = (words[a].slice(0,1).toUpperCase() + words[a].slice(1).toLowerCase())
// document.write(c + ' ')
// }
// if(words == ''){
// alert('Please enter any sentence')
// }
// }
// upperCaseString('the quick brown fox')

    

  




// task 12

// function longestWord(str) {
//     str = 'Web Development Tutorial'
//     str = str.split(' ')
//     longestWord = ''
//     for(let word of str){
//     if (word.length > longestWord.length) {
//         longestWord = word    
//     }
//     }
//     return longestWord;
// }

// document.write(longestWord())






// task 13
// function matchLetter(str,a) {
//     c=0
//     for (b = 0; b < str.length; b++) {
//      if(str.charAt(b) == a){
//         c= c+1
//      }  
//     }
//     return c;
// }
// document.write(matchLetter('JSResourceS.com', 'o'))








// task 14

// function calcCircumference(r) {
// return document.write('The circumference is ' +(2*Math.PI*r).toFixed(2)  + '<br>');    
// }

// function calcArea(r) {
// return document.write('The area is ' + (Math.PI*r*r).toFixed(2) + '<br>');    
// }

// calcArea(4)
// calcCircumference(4)




// CHAPTERS COMPLETED 35 to 37


// 3rd Assignment COMPLETED