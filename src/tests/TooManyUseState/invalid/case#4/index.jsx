import React, { useState } from 'react';

const MeuComponenteAvancado = () => {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState('');
    const [alternar, setAlternar] = useState(false);
    const [lista, setLista] = useState([]);
    const [objeto, setObjeto] = useState({});
    const [cor, setCor] = useState('blue');
    const [tamanho, setTamanho] = useState(16);
    const [mensagem, setMensagem] = useState('');
    const [animacao, setAnimacao] = useState('fadeIn');
    const [elementos, setElementos] = useState([1, 2, 3, 4, 5]);
    const [estado11, setEstado11] = useState('');
    const [estado12, setEstado12] = useState(0);
    const [estado13, setEstado13] = useState(false);
    const [estado14, setEstado14] = useState([]);
    const [estado15, setEstado15] = useState({});
    const [estado16, setEstado16] = useState(null);
    const [estado17, setEstado17] = useState('Texto Inicial');
    const [estado18, setEstado18] = useState(new Date());
    const [estado19, setEstado19] = useState(10);
    const [estado20, setEstado20] = useState(undefined);
    const [estado21, setEstado21] = useState(undefined);

    const incrementarContador = () => {
        setContador((prevContador) => prevContador + 1);
    };

    const atualizarNome = (novoNome) => {
        setNome(novoNome);
    };

    const alternarEstado = () => {
        setAlternar(!alternar);
    };

    const adicionarItemLista = (item) => {
        setLista([...lista, item]);
    };

    const atualizarObjeto = () => {
        setObjeto({ chave: 'valor' });
    };

    const mudarCor = () => {
        setCor(cor === 'blue' ? 'red' : 'blue');
    };

    const alterarTamanho = () => {
        setTamanho(tamanho === 16 ? 24 : 16);
    };

    const exibirMensagem = () => {
        setMensagem('Olá, mundo!');
    };

    const alterarAnimacao = () => {
        setAnimacao(animacao === 'fadeIn' ? 'fadeOut' : 'fadeIn');
    };

    const adicionarElemento = () => {
        setElementos((prevElementos) => [...prevElementos, prevElementos.length + 1]);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <p>Nome: {nome}</p>
            <input type="text" onChange={(e) => atualizarNome(e.target.value)} />

            <p>Alternar: {alternar ? 'Ativo' : 'Inativo'}</p>
            <button onClick={alternarEstado}>Alternar</button>

            <p>Lista: {JSON.stringify(lista)}</p>
            <button onClick={() => adicionarItemLista('Novo Item')}>Adicionar à Lista</button>

            <p>Objeto: {JSON.stringify(objeto)}</p>
            <button onClick={atualizarObjeto}>Atualizar Objeto</button>

            <p>Cor: {cor}</p>
            <button onClick={mudarCor}>Mudar Cor</button>

            <p>Tamanho: {tamanho}</p>
            <button onClick={alterarTamanho}>Alterar Tamanho</button>

            <p>Mensagem: {mensagem}</p>
            <button onClick={exibirMensagem}>Exibir Mensagem</button>

            <p>Animacao: {animacao}</p>
            <button onClick={alterarAnimacao}>Alterar Animação</button>

            <p>Elementos: {JSON.stringify(elementos)}</p>
            <button onClick={adicionarElemento}>Adicionar Elemento</button>
        </div>
    );
};

export default MeuComponenteAvancado;
