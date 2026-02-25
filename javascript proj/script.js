/* somme des nombres de 0 a 10
var a=0;
for(var i=0 ; i>10 ; i++){

     a=i+a ;
    console.log(a) ;
}
console.log(a) ;
 */


/* algo somme des nombres saisis
var a=0;
var n;
for(var i=1 ; i<3 ; i++){
    
    n=Number( prompt ('type a number n:'+i.toString ()))
     a+=n ;
    
}
alert ('sum='+a.toString()) */

/* type pos number
 var n ;
do {
    n=prompt ('type a positive number ');
}
while (n<0);
alert ('--end--')  */

/* var n = Number(prompt ('type a number'))
while (n% 2 == 0) {
    n/=2 ;
}
alert (n) */

/* var str= prompt ('type a string')
for (var i=0 ;i< str.length ;i++ ){// classic for
    console.log (str[i]);}

for ( var i in str){// i : 0 1 2 3 4 5 
console.log (str[i]) ; }


for ( var i of str){// c :  h e l l o 
console.log (str[c]) ; } */

/* NOMBRE DE VOYELLE DANS UNE CHAINE DE CARACTERE 
 var str = prompt('type a string');
var i = 0;

for (var c of str) {
    if ('aeyuioAEYUIO'.includes(c)) {
        i += 1
    }

}
alert( 'nombre de voyelle '+ String(i)); */