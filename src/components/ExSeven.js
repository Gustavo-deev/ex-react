import React, { useState } from 'react';

function ExSeven() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'value1') {
      setValue1(value);
    } else if (name === 'value2') {
      setValue2(value);
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleCalculate = () => {
    let evalString = `${value1}${operation}${value2}`;
    try {
      const evalResult = eval(evalString);
      setResult(evalResult);
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div className="calculatorbase">
        <h2>Ex7) Implementar uma calculadora com React JS com funcionalidade completa</h2>
      <div>
        <input
          type="text"
          name="value1"
          value={value1}
          onChange={handleInputChange}
          placeholder="Digite o primeiro valor"
        />
        <br />
        <input
          type="text"
          name="value2"
          value={value2}
          onChange={handleInputChange}
          placeholder="Digite o segundo valor"
        />
      </div>
      <div className="operations">
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="result">
        Resultado = {result}
      </div>
    </div>
  );
}

export default ExSeven;
