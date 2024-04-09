import React, { useState } from 'react';

function ExThree() {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const formValid = Object.values(formData).every(value => value.trim() !== '');

        if (formValid) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    };

    return (
        <div>
            <h2>Ex3) Implementar um aplicativo web com React JS que verifica se os campos
                (nome, endereço, telefone e email) em um formulário HTML foram todos
                preenchidos ou não. Dê mensagens coerentes para o usuário.</h2>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    {formSubmitted && formData.nome.trim() === '' && <span>Preencha o nome</span>}
                </div>
                <div>
                    <label>Endereço:</label>
                    <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                    {formSubmitted && formData.endereco.trim() === '' && <span>Preencha o endereço</span>}
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                    {formSubmitted && formData.telefone.trim() === '' && <span>Preencha o telefone</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formSubmitted && formData.email.trim() === '' && <span>Preencha o email</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ExThree;
