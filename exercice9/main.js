let numberUser = Number.parseFloat(prompt("Saissez un nombre"));


let printable = "";

for (let i = 1; i < 11; i++) {
   printable += `${numberUser} X ${i} = ${numberUser*i}\r`
}

 alert(printable);




