import React from 'react'

export default function Usuario(){
    const [nomeUsuario, setNome] = React.useState("catanacomics");
    const [fotoUsuario, setFoto] = React.useState("assets/img/catanacomics.svg");

    function mudaNome(){
        const novoNome = prompt("Digite um novo nome");
        if(novoNome !== ""){
            setNome(novoNome);
        }
    }

    function mudaFoto(){
        const novaFoto = prompt("Digite a URL da foto");
        if(novaFoto !== ""){
            setFoto(novaFoto);
        }
    }

    return (
        <div class="usuario">
            <img src={fotoUsuario} alt="imagem de perfil" onClick={mudaFoto} />
            <div class="texto">
                <span>
                    <strong>{nomeUsuario}</strong>
                    <ion-icon name="pencil" onClick={mudaNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}