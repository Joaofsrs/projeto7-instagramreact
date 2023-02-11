import React from 'react'

export default function Post(prop) {
    const [salvo, setSalvo] = React.useState("bookmark-outline");
    const [like, setLike] = React.useState("heart-outline");
    const [numLike, setNumLike] = React.useState(prop.post.numeroCurtidas);

    function salvarPost(){
        if(salvo === "bookmark-outline"){
            setSalvo("bookmark");
        }else{
            setSalvo("bookmark-outline");
        }
    }

    function likePost(opcao){
        let aux =  Number(numLike.replace(".", ""))
        if(opcao === "coracao"){
            if(like === "heart-outline"){
                setLike("heart");
                setNumLike((aux+1).toLocaleString('pt-BR'));
            }else{
                setLike("heart-outline");
                setNumLike((aux-1).toLocaleString('pt-BR'));
            }
        }else if(opcao === "foto"){
            if(like === "heart-outline"){
                setLike("heart");
                setNumLike((aux+1).toLocaleString('pt-BR'));
            }
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={prop.post.imgUsuario} alt={prop.post.nomeUsuario} />
                    {prop.post.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={prop.post.imgPost} alt={prop.post.altPost} onClick={() => likePost("foto")} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} onClick={() => likePost("coracao")} class={(like === "heart") ? "vermelho" : ""} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={prop.post.imgCurtida} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{prop.postusuarioCurtida}</strong> e <strong>outras {numLike} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}