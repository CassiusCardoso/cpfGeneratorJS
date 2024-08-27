export default class Cpf {
    constructor(cpf) {
        this._cpf = cpf.replace(/[^\d]+/g, ''); //Remove os caracteres especiais
    }

    isValid() {
        //Verifica se tem 11 dígitos
        if (!this.hasValidLength() || this.hasAllSameDigits()) return false

        const digito1 = this.firstNumberVerify();
        const digito2 = this.secondNumberVerify();

        return this.verifyNumbers(digito1, digito2)
    }

    hasValidLength() {
        return this._cpf.length === 11
    }

    hasAllSameDigits() {
        const firstNumber =this._cpf[0];

        return this._cpf.split('').every(number => number === firstNumber)
    }

    firstNumberVerify() {
        let soma = 0;

        for (let i = 0; i < 9; i++) {
            soma += parseInt(this._cpf.charAt(i) * (10 - i));
        }

        const resto = 11 - (soma % 11);
        return (resto === 10) || (resto === 11) ? 0 : resto
    }

    secondNumberVerify() {
        let soma = 0;

        for (let i = 0; i < 10; i++) {
            soma += parseInt(this._cpf.charAt(i) * (11 - i))
        }

        const resto = 11 - (soma % 11);
        return (resto === 10) || (resto === 11) ? 0 : resto
    }

    verifyNumbers(digito1, digito2) {
        return digito1 === parseInt(this._cpf.charAt(9)) && digito2 === parseInt(this._cpf.charAt(10));
    }
}

const cpfValid = new Cpf('111111111')
console.log(cpfValid)