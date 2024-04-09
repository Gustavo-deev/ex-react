import React, { useState } from 'react';

function ExFour() {
    const [n, setN] = useState('');
    const [result, setResult] = useState(null);

    const calculateFibonacci = () => {
        const num = parseInt(n);
        if (isNaN(num) || num < 0) {
            setResult('Por favor, insira um número inteiro positivo.');
            return;
        }

        let fib1 = 0;
        let fib2 = 1;
        let fibN = num;

        for (let i = 2; i <= fibN; i++) {
            let temp = fib1 + fib2;
            fib1 = fib2;
            fib2 = temp;
        }

        setResult(`O ${num}º elemento da sequência de Fibonacci é ${fib2}`);
    };

    return (
        <div>
            <h2>Ex4) Implementar um aplicativo web com React JS para calcular o n-ésimo
                elemento da sequencia de Fibonacci. O valor de n é entrado pelo usuário num
                componente HTML e a ação (evento) disparado no clique de um botão.</h2>
            <h1>Calculadora de Fibonacci</h1>
            <label htmlFor="numberInput">Digite o valor de n:</label>
            <input
                id="numberInput"
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
            />
            <button onClick={calculateFibonacci}>Calcular</button>
            {result && <p>{result}</p>}
        </div>
    );
}

export default ExFour;
