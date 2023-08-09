import { useNavigate } from "react-router-dom";
import { getAll, getOne } from "../../services/web";
import { useEffect, useState, useContext } from "react";
import CardNoticia from "../../components/CardNoticia/CardNoticia";
import { AuthContext } from "../../context/AuthContext/AUthContext"; 
import './styles.css';

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const {user} = useContext(AuthContext);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const getPrefixo = () =>{
    const prefixo = user.email.split("@").shift();
    setNomeUsuario(prefixo);
  }

  // EXERCICIO03
  useEffect(() => {
    async function fetchAll() {
      const data = await getAll();
      setNoticias(data);
    }
    fetchAll();
    getPrefixo();
  }, []);

  return (
    <>
    {/* EXERCICIO08 */}
      <h1>Home</h1>
      <h2>Bem vindo(a) {nomeUsuario}</h2>
      <div className="cards">
      {/* EXERCICIO05 */}
        {noticias.map((noticia) => {
          return (
            <CardNoticia
              key={noticia.id}
              titulo={noticia.titulo}
              srcImage={noticia.imagem.src}
            />
          );
        })}
      </div>
    </>
  );
}
