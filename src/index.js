import React from 'react';
import ReactDOM from 'react-dom';
const nombres = ["Dami","Pedro","Juana","Arturo","Iris","Barry","Albert"];
const Componente =()=> nombres.map((nombre,i)=><li key={i}>{i} - {nombre} ({nombre.length})</li>)
ReactDOM.render(<ul><Componente /></ul>, document.getElementById('root'));