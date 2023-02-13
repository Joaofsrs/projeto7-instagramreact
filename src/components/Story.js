export default function Story(prop) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={prop.img} alt={prop.usuario} />
            </div>
            <div className="usuario">
                {prop.usuario}
            </div>
        </div>
    );
}