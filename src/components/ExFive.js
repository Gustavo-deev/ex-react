import React, { useState } from 'react';

function ExFive() {
    const [n, setN] = useState('');
    const [sequence, setSequence] = useState([]);

    const calculateFibonacciSequence = () => {
        const num = parseInt(n);
        if (isNaN(num) || num <= 0) {
            alert('Por favor, insira um número inteiro positivo.');
            return;
        }

        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        setSequence(fib);
    };

    return (
        <div>
            <h2>Ex5) Implementar um aplicativo web com React JS para calcular e mostrar em uma
                tabela os n elementos da sequencia de Fibonacci. O valor de n é entrado pelo
                usuário.</h2>
            <h1>Calculadora da Sequência de Fibonacci</h1>
            <label htmlFor="numberInput">Digite o valor de n:</label>
            <input
                id="numberInput"
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
            />
            <button onClick={calculateFibonacciSequence}>Calcular</button>

            <h2>Sequência de Fibonacci até o {n}º elemento:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Índice</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {sequence.map((value, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExFive;
