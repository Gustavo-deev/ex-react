import React, { useState } from 'react';

function ExTwo() {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleButtonClick = () => {
    const newData = [];
    for (let i = 1; i <= parseInt(number); i++) {
      newData.push({ index: i, content: text });
    }
    setTableData(newData);
  };

  return (
    <div>
       <h2> Ex2) Implementar um aplicativo web com React JS onde o usuário digita um
número n em um campo e uma linha de texto em outro campo. Após um clique em
um botão é mostrado uma tabela com n linhas e 2 colunas sendo que cada linha
tem o índice numa coluna e o conteúdo digitado no campo texto na outra coluna. </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Digite um número"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto"
      />
      <button onClick={handleButtonClick}>Gerar Tabela</button>

      <table>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.index}</td>
              <td>{row.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExTwo;
