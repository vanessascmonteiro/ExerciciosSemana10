import { useParams } from "react-router-dom";
import { getAll, getOne } from "../../services/web";

function Noticia () {
    const { noticia } = useParams()

    const noticiaToShow = `(${noticia})`

    return (

        <>
        <h1>Noticia {noticia && noticiaToShow} </h1>
        </>
    )
}

export default Noticia