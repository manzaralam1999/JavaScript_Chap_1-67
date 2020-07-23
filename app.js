// CHAPTER 01 (ALERTS)

// Task no 01

alert("Hello and Warmly Welcome to my website!")

// Task no 02

alert("Error! Please enter a valid password.")

// Task no 03

alert("Welcome to JS Land..." + "\r\n" + "Happy Coding!")

// Task no 04

alert("Welcome to JS Land...");
alert("Happy Coding!")

// Task no 05

alert("Hello... I can run JS through my web browser's console")

// Task no 06

// See HTML File

// Task no 07

// See HTML File

// CHAPTER 02 (VARIABLES FOR STRINGS)

// Task no 08

var username;

// Task no 09

var myname = "Muhammad Manzar Alam Ansari";

// Task no 10

var message;
message = "Hello World";
alert(message);

// Task no 11

alert("Jhone Doe")
alert("15 years old")
alert("Certified Mobile Application Development")

// Task no 12

var pizza= 'pizza';
alert(`${pizza} /n${pizza.slice(0,pizza.length-1)} /n${pizza.slice(0,pizza.length-2)} /n${pizza.slice(0,pizza.length-3)} /n${pizza.slice(0,pizza.length-4)} `)

// Task no 13

var email = "example@gmail.com";
alert("My email address is" + " " + email);

// Task no 14

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book );

// Task 15

document.write("Yah! I can write HTML content through JavaScript");

// Task no 16

var a= "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
alert(a);

// CHAPTER 03 (VARIABLES FOR NUMBERS)

// Task no 17

var age = 20
alert(age);

// Task no 18

var visit = 14;
alert(`You have Visited ${visit} times`);

// Task no 19

var birthYear = 1999
document.write("My birth Year is " + birthYear);
break;
document.write("Data type of my declared variable is number");

// Task no 20

var visitor_name = "John Doe";
var product_title = "T shirts";
var quantiy = 5;
var clothing_store= "International Shoppng Mall";
document.write(visitor_name + " " + "orders" + " " + quantiy + " " +product_title + " " + " " + "on" + " " + clothing_store);

// CHAPTER 04 (VARIABLE NAMES: LEGAL & ILLEGAL)

// Task no 21

var value,total,cost;

// Task no 22 (Legal and Illegal Variables)

var $_; 
var karachi_pakistan;
var _city;
var carName;
var x;

// var _ $;
// var app le;
// var "ali";
// var 1;
// var break;

// Task no 23

document.write("(1)A variable name can't contain any spaces.(2) A variable name can contain only letters, numbers, dollar signs, and underscores.(3) It can contains keywords.It can contain keywords. (4) WE can use capital letters but variables are case sensitive. (5) Varibles can also use camelCase naming conventions.");
document.write("Variables names can only conatins letters, numbers dollar_sign($) and underscore(_)");
document.write(" Variables must begin with a dollar_sign($), underscore(_) or letters.");
document.write("Variables names are case sensitive");
document.write("Variable names should not be JS Keywords");

// CHAPTER 05 (MATH EXPRESSIONS)

// Task no 24

var a= 3;
var b = 5;
var c = a + b;
alert("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// Task no 25

var a= 3;
var b = 5;
var c = a - b;
alert("subtraction of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a * b;
alert("Multiplication of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a / b;
alert("Division of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a % b;
alert("Modulus of " + a + " and " + b + " is " + c);

// Task no 26

//(a)
var val;
//(b)
val = 10;
document.write("Value is " + val);
//(c)
val = 5;
//(d)
document.write("Initial value is "+ val);
//(e)
val++;
//(f)
document.write("Value after Increment is " + val);
//(g)
val = val + 7;
//(h)
document.write("Value after addition is " + val);
//(i)
val--;
//(j)
document.write("Value after deccrement is " + val);
//(k)
alert( "The remainder is " + val % 3);

// Task no 27

var ticket_price = 600;
var price_of_5_tickts = ticket_price * 5;
div.innerHTML += `<p>Total cost of buy 5 tickets to a movie is ${price_of_5_tickts} </p>`;

// Task no 28

for(var i = 1; i <= 10; i++){
    div.innerHTML += `<p>4 * ${i} = ${i * 4} </br> </p>`

// Task no 29

var fahr = 70,celc= 25;
var fah_formula= (celc* 9/5)+32;
var celcius_formula = (fahr - 32) * 5/9;


div.innerHTML += `<p>${celc}C is ${fah_formula} </p>`;
div.innerHTML += `<p>${fahr}F is ${celcius_formula} </p>`;

// Task no 30

var first_item_price = 650;
var ordered_Of_First_Item = 3;
var Scnd_item_price = 100 ;
var ordered_Of_Scnd_Item = 7;
var Shipping_Charges = 100;
var total_cahrge= 2750;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p> Price of item 1 is  ${first_item_price}</p>`;
div.innerHTML += `<p> Quantity of item 1 is ${ordered_Of_First_Item} </p>`;
div.innerHTML += `<p> Price of item 2 is ${Scnd_item_price} </p>`;
div.innerHTML += `<p> Quantity of item 2 is ${ordered_Of_Scnd_Item} </p>`;
div.innerHTML += `<p> Shipping Charges is  ${Shipping_Charges} </p>`;
div.innerHTML += `<p> Total cost of your order is  ${total_cahrge} </p>`;

// Task no 31

var total_marks = 980;
var marks_obtained = 804;
var percentage = (marks_obtained/total_marks) * 100;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p>Total Marks  ${total_marks}</p> `;
div.innerHTML += `<p>Obtained marks ${marks_obtained}</p>`;
div.innerHTML += `<p> Percenyage is ${percentage}</p>`;

// Task no 32

var total_PK_Ruppee = ( (10*104.80) + (25 * 28) );
document.write("Total Currency is "+ total_PK_Ruppee);

// Task no 33

var num = 10;
num = ((num + 5) * 10) / 2;

// Task no 34

var current_year= 2020;
var birth_year = 1998;
document.write("Age calculator");
document.write("Your Age is " + current_year - birth_year);

// Task no 35

//(a)
var radius = 4;
//(b)
var circumference = 2 * radius * 3.142;
//(c)
var Area = 3.142 * radius * radius;
div.innerHTML += `<h1>The Geometrizer</h1>`;
div.innerHTML += `<p>Radius Of a Circle ${radius}</p>`;
div.innerHTML += `<p>The circumference is  ${circumference}</p>`;
div.innerHTML += `<p>The Area is ${Area}</p>`;

// Task no 36

var fav_snack= "CANDY";
var cur_age= 21;
var max_age= 65;
var per_day = 3;
var total_req= (max_age-cur_age)*per_day;
div.innerHTML += `<p> You will need ${total_req} to last you until the ripe old age of ${max_age} </p> `

// CHAPTER 06-9 (MATH EXPRESSIONS)

// Task no 37

var fir= 10;
div.innerHTML += `<p> the Value of a is: ${fir} </p> `
fir = ++fir;
div.innerHTML += `<p> the Value of ++a is: ${fir} </p> `
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir++} </p> `
fir = fir++;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${--fir} </p> `
fir = --fir;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir--} </p> `
fir = fir--;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

// Task no 38

var one=2,two= 1,result;
result = --a - --b + ++b + b--;
div.innerHTML += `<p>a is ${one}</p> `
div.innerHTML += `<p>b is ${two}</p> `
div.innerHTML += `<p>result is ${result}</p> `

// Task no 39

var greet= prompt("Enter your name? " , "Welcome");

// Task no 40 , 41

var numb = prompt("Enter a num", 5);
for(var i = 1; i <= 10; i++){
    document.write(numb + "x" + i + "=" + i * numb + "<br>");
}

// Task no 42

//(a)
var sub1 = prompt("Enter 1st_Subject name");
var sub2 = prompt("Enter 2nd_Subject name");
var sub3 = prompt("Enter 3rd_Subject name");
//(b)
var total_marks_sub1 = 100; 
var total_marks_sub2 = 100;
var total_marks_sub3 = 100;
//(c)
var sub1_obt_marks = prompt("Enter marks Obtain");
//(d)
var sub2_obt_marks = prompt("Enter marks Obtain");
var sub3_obt_marks = prompt("Enter marks Obtain");
//(e)
var sub1_obt_marks = prompt("Enter marks Obtain");
var tot = sub1_obt_marks +sub2_obt_marks+sub3_obt_marks;
var pert= tot/300*100;
div.innerHTML += `<table style="width:100%">
<tr>
  <th>Subject</th>
  <th>Total Marks</th>
  <th>Obtain Marks</th>
  <th>percentage </th>
</tr>
<tr>
  <td>English</td>
  <td>${total_marks_sub1}</td>
  <td>${sub1_obt_marks}</td>
  <td>${sub1_obt_marks/total_marks_sub1*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub2}</td>
  <td>${sub2_obt_marks}</td>
  <td>${sub2_obt_marks/total_marks_sub2*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub3}</td>
  <td>${sub3_obt_marks}</td>
  <td>${sub3_obt_marks/total_marks_sub3*100}</td>
</tr>
<tr>
  <td>Total</td>
  <td>${total_marks_sub1+total_marks_sub2+total_marks_sub3}</td>
  <td>${sub2_obt_marks+sub1_obt_marks+sub3_obt_marks}</td>
  <td>${pert}</td>
</tr>
</table>`

// CHAPTER 06-9 (USER INPUT & CONDITIONAL STATEMENT)

// Task no 43

var city = prompt("Enter your city name?");
 if (city === "Karachi") {
    alert("Welcome to the city of Light! ");
 }

 // Task no 44

 var gender = prompt("ENter Your gender");
 if (gender == "male")
    {
        alert("Goodmorning Sir!")
    }
else if (gender == "female") {
    alert("Goodmorning Ma'am");
}
else{
    alert("Incorrect Gender");
}

// Task no 45

var col = prompt("ENter color");
if (col == "Red")
   {
       alert("Must Stop!")
   }
else if (col == "Yellow") {
   alert("Ready To Move");
}
else{
   alert("Move Now");
}

// Task no 46

var user_input = prompt("Enter remaining fuel in car");
if(user_input <= 2.25){
    alert("Please refill the fuel in your car");
}

// Task no 47

//(a)
alert("Displayed")
//(b)
alert("Not Displayed ")
//(c)
alert("Condition 4 is true display");
//(d)
alert("Displayed");
//(e)
alert("True Displayed");
//(f)
alert("Displayed");

// Task no 48

var sub1 = prompt("Enter 1st_Subject marks");
var sub2 = prompt("Enter 2nd_Subject marks");
var sub3 = prompt("Enter 3rd_Subject marks");
var total_marks = 300;
document.write("Total Marks"+total_marks);
var obtain_total = sub1 +sub2 +sub3;
document.write("Marks Obtained" + obtain_total);
var Percentage = (obtain_total/total_marks) * 100;
document.write("Percentage" + Percentage);
if (Percentage >= 80){
   
    alert("A-one", "Excellent");  
}
else if(Percentage >= 70){
   
    alert("A", "Good");  
}
else if(Percentage >= 60){
   
    alert("B", "You need to improve");  
}
else if(Percentage < 60){
   
    alert("Fail" , "Sorry");  
}
else{
    alert("Invalid key");
}

// Task no 49

var sec_num = 6;
var input = prompt("Enter any num");
if(input == sec_num){
    alert("Bingo! Correct answer")
}
else if(input == sec_num+1){
    alert("Close enough to the correct answer")
}
else{
    alert("Incorrect number")
}

// Task no 50

var divisible_num = prompt("Enter a num");
if(divisible_num / 3){
    alert("It is divisible by 3");

// Task no 51

var any_num = prompt("Enter any number");
if(any_num % 2 == 0){
    alert("Even Number")
}
else{
    alert("Odd Number")
}

// Task no 52

var temp = prompt("Enter tempearature");
if (temp > 40){
    alert("It's too hot");
}
else if (temp > 30){
    alert("The Weather today is Normal");
}
else if (temp > 20){
    alert("Today's weather is cool");
}
else if (temp > 10){
    alert(" OMG! Today's weather is soo cool");
}
else{
    alert("Incorrect temperature")
}

// Task no 53

var val1 = prompt("Enter your First value")
var sign = prompt("Enter your Operator")
var val2 = prompt("Enter your Second value")

console.log(val1 + sign + val2)
if(sign === "+"){
    alert((+val1) + (+val2))
}else if(sign === "-"){
    alert(val1 - val2)
}else if(sign === "*"){
    alert(val1 * val2)
}else if(sign === "/"){
    alert(val1 / val2)
}else if(sign === "%"){
    alert(val1 / val2 * 100 + "%")
}

// CHAPTER 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// Task no 54

var m = prompt("Enter any Character")

if(m >= "A" && m <= "Z"){
    alert(m + " " + "is an Uppercase Character")
}

else if(m >= "a" && m<= "z"){
    alert(m + " " + "is a Lower Character")
}

else{
    alert(m + " " + "is a number")
}

// Task no 55

var num_1 = +prompt("Enter your First number")
var num_2 = +prompt("Enter your Second number")

if(num_1 > num_2){
    alert(num_1 + " " + "is greater than" + " " + num_2)
}

else if(num_2 > num_1){
    alert(num_2 + " " + "is greater than" + " " + num_1)
}

else if(num_1 = num_2){
    alert("Both numbers are equal")
}

else{
    alert("You put inappropriate datatype")
}

// Task no 56

var num = +prompt("Enter your number")

if(num > 0){
    alert("The number is positive")
}

else if(num < 0){
    alert("The number is negative")
}

else if(num === 0){
    alert("The number is 0")
}

else{
    alert("You put inappropriate datatype")
}

// Task no 57

var vowel_string = "aeiouAEIOU"

input = prompt("Enter a Single Character: ")
    if(input.vowel_string == 1){
        if(vowel_string.contains(input)){
            alert(input + " " + "is a vowel")
    }
}

else{
    alert("Please, Enter only a Single Character")
}

// Task no 58

var password = 12346578;
var user_paswrd = prompt("Enter your password");
if (user_paswrd == password){
    alert("Correct! The password you entered matches the original password");
}
else {
   alert("Incorrect Password");
}

// Task no 59

var greeting;

var hour = 13;

if (hour < 18){
    alert(greeting = "Good Day!")
}

else
    alert(greeting = "Good Evening!")

// Task no 60

var tim = prompt("Enter time in 24 Hour Format");
if(tim >= 0 && tim < 12 ){
    alert("Good Morning")
}
else if(tim >= 12 && tim < 17){
    alert("Good Afternoon")
}
else if(tim >= 17 && tim < 21){
    alert("Good Evening")
}
else if(tim >= 21 && tim <= 24){
    alert("Good Night")
}

// CHAPTER 14-16 (ARRAYS)

// Task no 61

var students_names = [" " , " " , " "];

// Task no 62

var std_name = {
    " " : "" ,
    " " : " " ,
    " " : " " ,
}

// Task no 63

var arr_str = ["apple" , "mango", "fruits"];

// Task no 64

var num_arr = [3,5,56,7,4];

// Task no 65

var bool_arr = ["True" , "False"];

// Task no 66

var mixed_arr = ["name", 3,"True",123];

// Task no 67

var qualification = [ "SSC" , "HSC" , "BCS", "BS" , "BCOM" , "MS" , "M. Phil", "PhD"];
document.write("Qualification");
document.write("1)" + qualification[0]);
document.write("2)" + qualification[1]);
document.write("3)" + qualification[2]);
document.write("4)" + qualification[3]);
document.write("5)" + qualification[4]);
document.write("6)" + qualification[5]);
document.write("7)" + qualification[6]);
document.write("8)" + qualification[7]);

// Task no 68

var students_names = ["Sami" , "Hashim" , "manzar"];
var score_arr = [320,230,480];
var total = 500;
var Percentage = (score_arr/total) * 100;
document.write("Score of " + students_names[0] + "is " + score_arr[0] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[1] + "is " + score_arr[1] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[2] + "is " + score_arr[2] + "." + "Percentage is " + Percentage + "%");

// Task no 69

var color_arr = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple"];
document.write(color_arr);
//(a)
var colr_inp = prompt("What color u want?");
var arr = [];
if (colr_inp == color_arr){
    alert(arr[0][color_arr[0]])


// Task no 70

var scores = [40, 100, 48, 50, 36, 88];
var assc = scores.sort(function(a, b){return a-b});
document.write("Score of Students" + scores);
document.write("Ordered Scores Of Students" + ass);

// Task no 71

cities = ["karachi","Lahore", "Islamabad", "Quetta","Peshawar"];
copy_cities = [cities[2] , cities[3]];
document.write("CIties List " + cities);
document.write("Selected citites list:" + copy_cities);

// Task no 72

var array = ["This", "is" , "my", "cat"];
var join_arr = join_arr.join(array);
document.write("Array " + array);
document.write("String "+ join_arr);

// Task no 73

var array1 = ["This", "is" , "my", "cat"];
document.write("String: "+ array1.join(' '));

// Task no 74

arr1 = ["Keyboard","Mouse","Printer","Monitor"]

// Task no 75

arr2 = ["Keyboard","Mouse","Printer","Monitor"];
rev_arr = rev_arr.reverse(arr2);
document.write("Devices" + arr2);
document.write("Reverse Array " + rev_arr);

// Task no 76

let  arr3 = ["0333333333","0333333","033333333","03333333"];
document.write(arr3.join('</br>'));

// CHAPTER 17-20 (ARRAYS AND LOOP)

// Task no 77

var arr = [[1,2],[3,4],[5,6]]
document.write(arr)

// Task no 78

let  arr5 =[[1,2,3],[4,5,6],[7,8,9]]

// Task no 79

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Task no 80

var num = +prompt("Enter Number for multiplication: " );
var j = +prompt("Enter table lenght: ");
var ans;
for(i=1 ; i<=j ; i++){
    ans = num*i;
    document.write(+num + " " + "x" + i + "=" + ans + "<br>")
}

// Task no 81

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(i = 0; i < 5; i++){
    document.write(fruits[i] + "<br>")
}

document.write("<br>")

for(i = 0; i < 5; i++){
    document.write("Element At index" + " " + i + " " +"is" + " " + fruits[i] + "<br>")
}

// Task no 82

document.write("Counting:" + "<br>" + "<br>")

for (var i = 1; i <= 15; i++){
    document.write(i + ",");
}

document.write("<br>" + "<br>" + "Reverse:" + "<br>"  + "<br>")

for(i=10;i>=1;i--)
{
    document.write(i + ",");
}

document.write("<br>" + "<br>" + "Even:" + "<br>"  + "<br>")

for (var i = 1; i <= 20; i++) {
    if(i%2 == 0)
    document.write(i , ",");
}

document.write("<br>" + "<br>" + "Odd:" + "<br>"  + "<br>")

for (var i = 1; i <= 20; i++) {
    if(i%2 ==1)
    document.write(i , ",");
}

// Task no 83

A = ["cake", "apple pie", "cookie", "chips", "patties"]
var inp = prompt("What do you want to order? ");
if(inp == A){
    alert(inp + "is available at" + inp[A])
}

// Task no 84

var arr = [24, 53, 78, 91, 12];

document.write("Array item:" + " " + arr + "<br>")

var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("The Largest Number is" + " " + largest);

// Task no 85

var arr = [24, 53, 78, 91, 12];

document.write("Array item:" + " " + arr + "<br>")

var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
        smallest = arr[i];
    }
}
document.write("The Smallest Number is" + " " + smallest);

// Task no 86

for (var i = 1; i <= 20; i++) {
    document.write(i*5 + ",")
}

                    // Chapter 21-25 (STRING METHODS)

// Task no 87

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = (firstName + " " + lastName);
alert("Hello" + "," + " " + fullName + "!");

// Task no 88

var mobileName = prompt("Enter your favourite mobile phone model:");
var displayLength = mobileName.length;
document.write("My favourite phone is" + ":" + " " + mobileName);
document.write("<br>")
document.write("Length Of string is" + ":" + " " + displayLength);

// Task no 89

var str = "Pakistani"
var indexNum = str.indexOf("n");
document.write("String" + ":" + " " + str);
document.write("<br>")
document.write("Index of 'n'" + ":" + " " +  indexNum);

// Task no 90

var str_1 = "Hello World";
var indexNum = str_1.lastIndexOf("l")
document.write("String" + ":" + " " + str_1);
document.write("<br>")
document.write("Last index of 'l" + ":" + " " + indexNum);

// Task no 91

var str_2 = "Pakistani"
var char = str_2.charAt(3);
document.write("String" + ":" + " " + str_2);
document.write("<br>")
document.write("Character at index 3" + ":" + " " + char);

// Task no 92

var firstName_1 = prompt("Enter your first name");
var LastName_2 = prompt("Enter your last name");
var fullName_1 = firstName_1.concat(" " + LastName_2)
alert("Hello" + "," + " " + fullName_1 + "!");

// Task no 93

var city = "Hyderabad";
var replacement = city.replace("Hyder", "Islam");
document.write("City" + ":" + " " + city);
document.write("<br>")
document.write("After Replacement" + ":" + " " + replacement);

// Task no 94

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacement_1 = message.replace(/and/g, "&");
document.write(replacement_1);

// Task no 95

var str_3 = "472";
var type = typeof(str_3);
document.write("Value" + ":" + " " + str_3 + "<br>");
document.write("Type" + ":" + " " + type + "<br>");
var value = Number(str_3);
document.write("Value" + ":" + " " + value + "<br>");
var type_1 = typeof (value);
document.write("Type" + ":" + " " + type_1);

// Task no 96

var inp = prompt("Enter any word:");
var capital = inp.toUpperCase();
document.write("User input" + ":" + " " + inp + "<br>");
document.write("Upper case" + ":" + " " + capital);

// Task no 97

var userInput = prompt("Enter any word ");
var copy = userInput.slice(0, 1);
var other_char = userInput.slice(1);
copy = copy.toUpperCase();
other_char = other_char.toLowerCase();
inp = copy + other_char;
document.write("User input" + ":" + " " + userInput + "<br>")
document.write("Title case" + ":" + " " + inp);

// Task no 98

var num = 35.36;
var withoutDot = num.toString().replace(".", "");
document.write("Number" + ":" + " " + num + "<br>")
document.write("Result" + ":" + " " + withoutDot)

// Task no 99

var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("Please enter a valid Username");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

// Task no 100

var sear = prompt("Enter your Choice");
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

if(A.includes(sear.toLowerCase())){
   const i = A.indexOf(sear.toLowerCase());
   alert(`${sear} is available in our bakery at index ${i}`)
}
else{
   alert("We are sorry Item is not available in our bakery")
}

// Task no 101

var pas = prompt("Enter password");
var passw=  /^[A-Za-z]\w{7,14}$/;
if(pas.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}

// Task no 102

var university = "University of Karachi";
const c = university.split('');
c.forEach(t=> alert(t));

// Task no 103

var inp = prompt("Enter user input");
var lastChar = inp.charAt(inp.length - 1);
document.write("User input" + ":" + " " + inp + "<br>");
document.write("Last character of input" + ":" + " " + lastChar);

// Task no 104

var text = "The quick brown fox jumps over the lazy dog";

function countOcurrences(str, value) {
   var regExp = new RegExp(value, "gi");
   return (str.match(regExp) || []).length;
}

document.write("Text" + ":" + " " + text + "<br>");
document.write("There are" + " " + countOcurrences(text, 'the') + " " + "occurrence(s) of word 'the'");

                    // Chapter 26-30 (MATH METHODS)

// Task no 105

// a
var num = prompt("Enter any positive number");
document.write("number" + ":" + " " + num + "<br>");

// b
document.write("round off value" + ":" + " " + Math.round(num) + "<br>");

// c
document.write("floor value" + ":" + " " + Math.floor(num) + "<br>");

// d
document.write("ciel value" + ":" + " " + Math.ceil(num));

// Task no 106

// a
var num = prompt("Enter any negative number");
document.write("number" + ":" + " " + num + "<br>");

// b
document.write("round off value" + ":" + " " + Math.round(num) + "<br>");

// c
document.write("floor value" + ":" + " " + Math.floor(num) + "<br>");

// d
document.write("ciel value" + ":" + " " + Math.ceil(num));

// Task no 107

var num_1 = prompt("Ente a number");
var abs = Math.abs(num_1);
document.write("The absolute value of" + " " + num_1 + " " + "is" + " " + abs);

// Task no 108

var diceRoll_1 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_1);
var diceRoll_2 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_2);

// Task no 109

var coin_1 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_1 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_1 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}
var coin_2 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_2 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_2 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}

// Task no 110

var b = Math.floor((Math.random() * 100) + 1);
document.write("random number between 1 and 100" + ":" + " " + b)

// Task no 111

var weight = prompt("Enter your weight in kilograms");

// a
document.write("Your weight" + ":" + " " + parseInt(weight))

// b

document.write("Your weight" + ":" + " " + weight);

// c ,d
document.write("Your weight" + ":" + " " + parseFloat(weight));

// Task no 112

var secretNum = Math.floor((Math.random() * 10) + 1);
var userNum = +prompt("Enter any number between 1 to 10");
if (userNum === secretNum) {
   alert("Congratulations! You put appropriate number")
} 
else{
    alert("Try again!")
}

                    // Chapter 31-34 (DATE METHODS)

// Task no 113

var a = new Date();
document.write(a);

// Task no 114

var monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

var d = new Date();
alert("Current month" + ":" + " " + monthNames[d.getMonth()]);

// Task no 115

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
alert("Today is" + " " + dayNames[d.getDay()]);

// Task no 116

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday == dayNames[0] || nameOfToday == dayNames[6]) {
   alert("It's Fun day")
} 
else {
    alert("It's working day");
}

// Task no 117

var now = new Date()
var theDate = now.getDate()
if(theDate >= 1 && theDate <= 15){
    alert("First fifteen days of the month")
}
else if (theDate > 15 && theDate <= 31){
    alert("Last days of the month")
}
else{
    alert("You put inappropriate Date")
}

// Task no 118

var startDate = "1970-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days      = timeDiff;
var days_1 = timeDiff / 1000;
document.write("Current date:" + " " + new Date() + "<br>")
document.write("Elapsed milliseconds since January 1, 1970:" + " " + days + "<br>")
document.write("Elapsed minutes since January 1, 1970:" + " " + days_1)

// Task no 119

var today = new Date();
if(today.getHours() == 0 || today.getHours() < 12 ) 
alert("It's AM");
else{
alert("It's PM")
}

// Task no 120

var laterDate = new Date(2020, 11, 31, 10, 33, 30, 0);
document.write("Later date" + ":" + " " + laterDate);

// Task no 121

var startDate = "2020-6-21";
var endDate   = "2020-4-25";
var timeDiff  = (new Date(startDate)) - (new Date(endDate));
var days      = timeDiff / (1000 * 60 * 60 * 24);
document.write(days + " " + "days have passed since 1st Ramadan, 2020");

// Task no 122

var startDate = "2015-1-1";
var timeDiff  = (new Date()) - (new Date(startDate));
var days_1 = timeDiff / 1000;
document.write("On reference date" + " " + new Date() + "," + "<br>" + days_1 + " " + "seconds had passed since begining of 2015")

// Task no 123

var d = new Date();
document.write( "current date" + ":" + " " + d +"<br>");
var b = d.getHours();
 d.setHours(b-1);
document.write( "1 hours ago, it was" + " " + d);

// Task no 124

var d = new Date();
document.write( "current date" + ":" + " " + d + "<br>");
var bd = d.getFullYear();
 d.setFullYear(bd-100);
document.write( "100 years back, it was" + " "  + d);

// Task no 125

var age = prompt("Enter your age:");
var currentYear = 2020;
var birthYear = currentYear - age;
document.write("Your age is" + " " + age + "<br>");
document.write("Your birth year is" + " " + birthYear);

// Task no 126

document.write("K-ELECTRIC BILL" + "<br>" + "<br>")
document.write("Customer name: Manzar" + "<br>");
var d = new Date();
document.write("Month: June" + "<br>");
var nunit = 410;
var cunits = 16;
document.write("Number of units: " + nunit + "<br>");
document.write("Charges per units: " + cunits + "<br>" + "<br>");
var net = 410*16;
var gross= net + 350;
document.write("Net Amount Payable (within Due Date): " + net + "<br>");
document.write("Late payment surcharge: 350 "  + "<br>");
document.write("Gross Amount Payable (after Due Date): " + gross);

                   // Chapter 35-38 (FUNCTION) 

// Task no 127

function date(){
    var a = new Date()
    document.write(a)
}
date()

// Task no 128

function name(){
    var firstName = prompt("Enter first Name");
var lastName = prompt("Enter last Name");
var fullName;
fullName = firstName + " " + lastName;
alert("Welcome" + "," + " " + fullName + "!");
}
name();

// Task no 129

function add(a,b){
    var z = a + b
    return z
}
var g = add(5,8)
alert(g)

// Task no 130

function cal(num1,opr,num2){
    if(opr === "+"){
        return num1 + num2
    }
    else if(opr === "-"){
        return num1 - num2
    }
    else if(opr === "*"){
        return num1 * num2
    }
    else if(opr === "/"){
        return num1 / num2
    }
    else{
        return "You Put Inappropriate Operator"
    }
}

var result = cal(5,"+",5)
var result1 = cal(5,"-",5)
var result2 = cal(5,"*",5)
var result3 = cal(5,"/",5)
var result4 = cal(5,"%",5)

document.write("Addition" + ":" + " " + result + "<br>")
document.write("Subraction" + ":" + " " + result1 + "<br>")
document.write("Multuplication" + ":" + " " + result2 + "<br>")
document.write("Division" + ":" + " " + result3 + "<br>")
document.write("Alert!" + ":" + " " + result4)

// Task no 131

function squareIt(number) {
    return Math.pow(number, 2);
 }
 alert("The square of 5 is" + " " + squareIt(5));

// Task no 132

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
 }
 
 alert("The factorial of 5 is" + " " + factorial(5));

// Task no 133

Counting(1,10);
function Counting(num1,num2){
   const ele=  document.getElementById('e');
   for(var i=num1; i<= num2; i++){
      ele.innerHTML += i;
   }
}

// Task no 134

var base = prompt("Enter  Base");
var perp = prompt("Enter Perpendicular");
alert(calculateHypotenuse(base,perp));
function calculateHypotenuse(base,perp){
   return calculateSquare(base)+calculateSquare(perp);
}

function calculateSquare(x){
   return x*x;
}

// Task no 135

const W= 2;
const H= 3;
alert(CalculateArea(W,H));
function CalculateArea(W,H){
    return W*H;
}

// Task no 136

function check_Palindrome(str_entry){
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
     var ccount = 0;
     if(cstr==="") {
        document.write("Nothing found!");
         return false;
     }
     if ((cstr.length) % 2 === 0) {
         ccount = (cstr.length) / 2;
     } else {
         if (cstr.length === 1) {
            document.write("Entry is a palindrome." + "<br>");
             return true;
         } else {
             ccount = (cstr.length - 1) / 2;
         }
     }
     for (var x = 0; x < ccount; x++) {
         if (cstr[x] != cstr.slice(-1-x)[0]) {
            document.write("Entry is not a palindrome." + "<br>");
             return false;
         }
     }
     document.write("The entry is a palindrome." + "<br>");
     return true;
 }
 check_Palindrome('madam');
 check_Palindrome('nurses run');
 check_Palindrome('fox');

// Task no 137

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// Task no 138

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word("Web Development Tutorial"));

// Task no 139

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("The number occurence of 'o' is:" + " " + char_count("JSResourceS.com", "o"));

// Task no 140

function calcCircumference(radius){
    return 2 * 3.142 * radius
 }
 var circum = calcCircumference(3);
 document.write("The circumference is" + " " + circum);
 
 
 function calcArea(radius){
    return  3.142 * radius * radius
 }
 var calcarea = calcArea(5);
 document.write("The Area is" + " " + calcarea);

                // Chapter 38-42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS)

// Task No 141

var a = +prompt("Enter Any Number For Base");
var b = +prompt("Enter Any Number For Power");
function power(a,b){
    document.write("The value of a raised to b is" + " " + Math.pow(a,b));
}

power(a,b);

// Task No 142

var year = +prompt("Enter Any For Checking Leap Year");
function leapYear(){
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      document.write(year + " " + "is leap year");
  }
  else{
      document.write(year + " " + "is not leap year");
  }
}
leapYear()

// Task No 143

function areaOftriangle(a,b,c,s){
    var area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    document.write("The Area of Triangle is" + " " + area);
    
}

function semiPerimeter(){
    var a = +prompt("Enter the First Side of Triangle");
    var b = +prompt("Enter the Second Side of Triangle");
    var c = +prompt("Enter the Third Side of Triangle");
    var s = (a + b + c)/2;
    areaOftriangle(a,b,c,s)
}
semiPerimeter()

// Task No 144

function mainFunction(){
    var inp1= prompt("Input first number")*1;
    var inp2= +prompt("Input second number");
    var inp3= +prompt("Input 3rd number");
    var avg=  calAverage(inp1,inp2,inp3);
    var per = calPercent(inp1,inp2,inp3);
    document.write("Average Marks is ${avg} <br> Percentage is ${per}");
}
const  calAverage= (inp1,inp2,inp3)=> (inp1+inp2+inp3)/3;
const  calPercent= (inp1,inp2,inp3)=> ((inp1+inp2+inp3)/300)*100;
mainFunction()

// Task No 145

function indexOf(chars,char){
    var c = chars.split("");
  
    const fun = c.map((x,i) => {
      if(x.toLowerCase()===char){
       return i
      } 
    })
       console.log(fun[0] !== undefined? fun[0]:"Value not Found");
    }
indexOf("Characters",'c')

// Task No 146

var string = prompt("Enter Any Word Of English For Removing Vowels From Word")
string = string.replace( /[aeiou]/g, '' );
document.write(string);

// Task No 147

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
document.write(findOccurrences());

// Task No 148

const calculateMeters= num=> num*1000;
const calculateCentiMeters= num=> num * 1000 * 100;
const calculateFeet= num=>  num * 3280.84;
const calculateInches= num=> num * 39370.08;
function calculateMain(){
    var num = prompt("Enter distance in kilometers: ");
    document.write('Distance in KM ' + num + "<br>" + 'In meters' + calculateMeters(num) + "<br>"  + 'In Centimeter' + calculateCentiMeters(num) + "<br>"  + 'In Feet' + calculateFeet(num) + "<br>"  + 'In Inches' + calculateInches(num))
}
calculateMain();

// Task No 149

function main()
{

    var emps = +prompt("Enter Number of Employees");
    var count = 1, working_hours, over_time;
    var over_time_pay;

    while(count<=emps)
    {
        working_hours = +prompt("Enter the working hours of employee no: "+ count);
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            console.log(`Employee No ${count} overtime pay is ${over_time_pay}`);
        }
        else
            console.log("You have to work for more than 40 hours to get over time pay\n");

        count++;
    }
}
main();

// Task No 150

function mainCurrency()
{
	var amount = +prompt("Please input amount for withdraw : ");
	//calculations
	console.log("\n\nRequired notes of Rs. 100  :  ", Math.floor(amount / 100));
	console.log("\n\nRequired notes of Rs. 50   :  ",  Math.floor((amount % 100) / 50));
	console.log("\n\nRequired notes of Rs. 10   :  ",  Math.floor((((amount % 100) % 50) / 10)));
	console.log("\n\nAmount still remaining Rs. :  ",  Math.floor((((amount % 100) % 50) % 10)));

}
mainCurrency();

                                // Chapter 43-48 (EVENTS)

// Task No 151

            // See HTML File

// Task No 152

            // See HTML File

// Task No 153

            // Also See HTML File

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// Task No 154

            // Also See HTML File

function changeImage(id,src){
    var image = document.getElementById(id);
    image.src = src
}

// Task No 155

            // Also See HTML File

var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
// }

                                // Chapter 49-52 (EVENTS)

// Task No 156

            // Also See HTML File

function testVariable() {
    var strText = document.getElementById("textOne").value;          
    var strText1 = document.getElementById("textTwo").value;
    var result = strText + ' ' + strText1;
    document.getElementById('spanResult').textContent = result;
     
}

// Task No 157

            // Also See HTML File

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// Task No 158

            // Also See HTML File

function edit_row(no){
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
                
    var name=document.getElementById("name_row"+no);
    var country=document.getElementById("country_row"+no);
    var age=document.getElementById("age_row"+no);
                
    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;
                
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}
            
function save_row(no){
    var name_val=document.getElementById("name_text"+no).value;
    var country_val=document.getElementById("country_text"+no).value;
    var age_val=document.getElementById("age_text"+no).value;
            
    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("country_row"+no).innerHTML=country_val;
    document.getElementById("age_row"+no).innerHTML=age_val;
            
    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}
            
function delete_row(no){
    document.getElementById("row"+no+"").outerHTML="";
}
            
function add_row(){

    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_age=document.getElementById("new_age").value;
                
    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
            
    document.getElementById("new_name").value="";
    document.getElementById("new_country").value="";
    document.getElementById("new_age").value="";
}

                                // Chapter 53-58 (EVENTS)

// Task No 159

            // Also See HTML File

function changeImage_1(){
    var image_1 = document.getElementById('img_1');
    image_1.style.width = '40%'
}

function changeImage_2(){
    var image_2 = document.getElementById('img_2');
    image_2.style.width = '40%'
}

function changeImage_3(){
    var image_3 = document.getElementById('img_3');
    image_3.style.width = '40%'
}

function changeImage_4(){
    var image_4 = document.getElementById('img_4');
    image_4.style.width = '40%'
}

// Task No 160

            // Also See HTML File

function zoomin() { 
    var MMAA = document.getElementById("zoom"); 
    var currWidth = MMAA.clientWidth; 
    MMAA.style.width = (currWidth + 100) + "px"; 
} 
  
function zoomout() { 
    var MMAA = document.getElementById("zoom"); 
    var currWidth = MMAA.clientWidth; 
    MMAA.style.width = (currWidth - 100) + "px"; 
}

                               // Chapter 58-67 (DOM)

// Task No 161

// (i)

var a = document.getElementById('main-content');
console.log(a)

// (ii)

var a = document.getElementById('main-content')
console.log(a.childNodes)

// (iii)

var a = document.getElementsByClassName('render')
console.log(a)

// (iv)

document.getElementById("first-name").value = "Muhammad Manzar";

// (v)

document.getElementById("last-name").value = "Alam Ansari"
document.getElementById("email").value = "manzar.alam0305@gmail.com"

// Task No 162

// (i)

var a = document.getElementById('form-content')
console.log(a.nodeType)

// (ii)

var a = document.getElementById('last-name')
console.log(a.nodeType)
console.log(a.childNodes)

// (iii)

var textnode = document.createTextNode("middleName");
var item = document.getElementById("lastName").childNodes[0];
console.log(item.replaceChild(textnode, item.childNodes[0]));

// (iv)

var a = document.getElementById('main-content')
console.log(a.firstChild)
var a = document.getElementById('main-content')
console.log(a.lastChild)

// (v)

var a = document.getElementById('lastName')
console.log(a.nextSibling)
var a = document.getElementById('lastName')
console.log(a.previousSibling)

// (vi)

var a = document.getElementById('email')
console.log(a.parentNode)
console.log(a.nodeType)