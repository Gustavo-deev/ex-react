import React, { useState } from 'react';

function Ex0ne() {

    const [oculto, setOculto] = useState(true);
  
    function handleClique() {
      setOculto(!oculto);
    }
  
    let conteudo = [];
  
   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((val, index) => { conteudo.push(<p style={{fontSize: val * 10 + 'px'}} > {index+1} . Linha aqui!</p>)});
  
    return (
      <div className='m1'>
        <h2> Ex1) Implementar um aplicativo web com React JS onde um clique em um botão
apresenta 10 strings na tela do browser em tamanhos diferentes. </h2>
        <button className='b1' onClick={handleClique}>Clique aqui!</button>
        <p className='p1' hidden={oculto}>{conteudo}</p>
      </div>
  
    );
  }

  export default Ex0ne;