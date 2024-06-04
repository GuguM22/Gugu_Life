let number= Number (prompt('provide a number of pencils'));
let price= Number(prompt('provide price of one pencil'));
let amount = Number (prompt('amount due'));

if (numberofpencils >=25) {
    console.log('You qualify for discount');

} 


else if (numberofpencils<25) { 
    console.log('you do not qualify for discount');
} else {
    console.log('amount= amount - (amount *0,075) ');
}

