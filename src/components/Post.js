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
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={prop.post.imgUsuario} alt={prop.post.nomeUsuario} />
                    {prop.post.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" src={prop.post.imgPost} alt={prop.post.altPost} onDoubleClick={() => likePost("foto")} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" name={like} onClick={() => likePost("coracao")} class={(like === "heart") ? "vermelho" : ""} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={salvo} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={prop.post.imgCurtida} alt="respondeai" />
                    <div className="texto">
                        Curtido por <strong>{prop.post.usuarioCurtida}</strong> e <strong>outras <span data-test="likes-number">{numLike}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}