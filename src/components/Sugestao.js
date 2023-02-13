export default function Sugestao(prop) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={prop.src} alt={prop.nome} />
                <div className="texto">
                    <div className="nome">{prop.nome}</div>
                    <div className="razao">{prop.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}