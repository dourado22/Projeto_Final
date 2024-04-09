function validarCPF(cpf) {
    cpf = cpf.replace(/[^0-9]/g, '');

    if (cpf.length !== 11) {
        console.log("CPF inválido. Deve conter 11 dígitos.");
        return false;
    }

    let array = cpf.split ('')
    console.log(array);    

    let soma1 = 0
    let k = 10
    
    for(let i = 0; i <= 8; i++) {
        soma1 += array[i] * k
        k--
    }

    let soma2 = 0
    k = 11

    for (let i = 0; i <= 9; i++) {
        soma2 += array[i] * k
        k--
    }

    let result1 = (soma1 * 10) % 11
    console.log("O resultado do primeiro digito é: " + result1.toFixed(0));
    let result2 = (soma2 * 10) % 11     
    console.log("O resultado do segundo digito é: " + result2.toFixed(0));
 
    if (Number(cpf.charAt(9)) === result1 && Number(cpf.charAt(10)) === result2) {
        console.log("CPF é válido.");
        return true;
    } else {
        console.log("CPF é inválido.");
        return false;
    }   
}

let cpf1 = "700.401.811-38"
validarCPF(cpf1);