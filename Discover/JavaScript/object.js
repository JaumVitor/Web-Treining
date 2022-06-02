let pessoa = {
    myNname: "Jaum_boleano", 
    idade: 22, 
    sayHello : function(){
        console.log(`Hello my name is ${myName}`); 
    }
}

//Testando objects
let a = []; 
let b = []; 

console.log(a == b); 

//Testando compartilhamento de endereçamento (Array e objeto faz passagem por referencia)
let end1 = []; 
let end2 = end1; 

end2[0] = 100; 
console.log(`${end1[0]} ${end2[0]}`); 
console.log(end1[0] == end2[0]);

//Fazendo copia (Com arrays)

let c = [0,1,2]; 
let d = []; 

d = Array.from(c); //recebendo copia de c

console.log(`a = ${c}`);
console.log(`b = ${d}`);
