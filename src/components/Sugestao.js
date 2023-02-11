export default function Sugestao(prop) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={prop.src} alt={prop.nome} />
                <div class="texto">
                    <div class="nome">{prop.nome}</div>
                    <div class="razao">{prop.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}