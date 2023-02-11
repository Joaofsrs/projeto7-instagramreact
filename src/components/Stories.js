import Story from './Story'

export default function Stories() {
    return (
        <div class="stories">
            {storyObjeto.map((elemento) => <Story img={elemento.img} usuario={elemento.usuario} />)}            

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

const storyObjeto = [
    {img: "assets/img/9gag.svg", usuario: "9gag"},
    {img: "assets/img/meowed.svg", usuario: "meowed"},
    {img: "assets/img/barked.svg", usuario: "barked"},
    {img: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {img: "assets/img/respondeai.svg", usuario: "respondeai"},
    {img: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
]