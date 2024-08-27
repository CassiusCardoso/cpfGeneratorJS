import generatorCPF, { genCPF } from './modules/generatorCPF'
import './assets/css/styles.css'

function appendCpfToFront() {
    const cpfHasBeenGenerated = new genCPF()
    const cpfGenerated = document.querySelector('.result')
    cpfGenerated.innerText = cpfHasBeenGenerated.genNewCpf()
    cpfGenerated.classList.add()
}

function resultExists(){
    if (cpfGenerated) {
        cpfGenerated.innerText = cpfHasBeenGenerated.genNewCpf();
    } else {
        console.error('Elemento .result não encontrado!');
    }
}

appendCpfToFront()