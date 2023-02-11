import Post from "./Post";

export default function Posts(){
    return (
        <div class="posts">
            {postObjeto.map((elemento) => <Post post={elemento} /> )}
        </div>
    );
}

const postObjeto = [
    {imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imgPost: "assets/img/gatoatotoo.jpeg", altPost: "fato-estranho", imgCurtida: "assets/img/respondeai.svg", usuarioCurtida: "respondeai", numeroCurtidas: "523"},
    {imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imgPost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", imgCurtida: "assets/img/respondeai.svg", usuarioCurtida: "respondeai", numeroCurtidas: "101.523"},
    {imgUsuario: "assets/img/barked.svg", nomeUsuario: "barked", imgPost: "assets/img/dog.svg", altPost: "dog", imgCurtida: "assets/img/adorable_animals.svg", usuarioCurtida: "adorable_animals", numeroCurtidas: "99.159"}
]