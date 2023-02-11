export default function Story(prop) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={prop.img} alt={prop.usuario} />
            </div>
            <div class="usuario">
                {prop.usuario}
            </div>
        </div>
    );
}