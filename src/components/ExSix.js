import React from 'react';

function ExSix() {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateRandomNumbers = () => {
        const table = [];
        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 4; j++) {
                row.push(getRandomInt(1, 100));
            }
            table.push(row);
        }
        return table;
    };

    const randomNumbersTable = generateRandomNumbers();

    return (
        <div>
            <h2>Ex6) Implementar um aplicativo web com React JS que mostra uma tabela de 4x4
                números inteiros aleatórios.</h2>
            <h1>Tabela de Números Aleatórios</h1>
            <table>
                <tbody>
                    {randomNumbersTable.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((number, colIndex) => (
                                <td key={colIndex}>{number}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExSix;
