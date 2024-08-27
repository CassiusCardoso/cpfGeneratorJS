import Cpf from './classCPF';

export class genCPF {
    random(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min + 1) + min))
    }

    genNewCpf() {
        const cpfNoDigits = this.random();
        const cpfInstance = new Cpf(cpfNoDigits)
        const cpfDigito1 = cpfInstance.firstNumberVerify(cpfNoDigits);
        const cpfDigito2 = cpfInstance.secondNumberVerify(cpfNoDigits + 1);
        const newCpf = cpfNoDigits + cpfDigito1 + cpfDigito2
        return this.editCpf(newCpf)
    }

    editCpf(cpf) {
            return cpf.slice(0, 3) + '.' +
                cpf.slice(3, 6) + '.' +
                cpf.slice(6, 9) + '-' +
                cpf.slice(9, 11);


        }
    }