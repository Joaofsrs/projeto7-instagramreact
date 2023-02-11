export default function Post(prop) {
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
                <img src={prop.post.imgPost} alt={prop.post.altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={prop.post.imgCurtida} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{prop.postusuarioCurtida}</strong> e <strong>outras {prop.post.numeroCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}