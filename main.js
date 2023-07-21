// summ uchun 
var airPlaneUSD = 500;
var hotelUSD = 250;
var museumYEVRO = 120;
var SUMM =1;
USD = SUMM * 11590;
YEVRO = SUMM * 12450;
result = airPlaneUSD * USD + hotelUSD * USD + museumYEVRO * YEVRO;
confirm("Alisher pulingiz somda bolsa iashlaymiz:")
let alishersumm =prompt("how much money do you have(SUMM:)?");
console.log(`Alisherning puli(summda):${alishersumm}`);
if (Number(alishersumm) > result )
{
console.log("Oq yol Alisher");
}
else{
console.log("Alisher , Sabr qilish kerak");
}




