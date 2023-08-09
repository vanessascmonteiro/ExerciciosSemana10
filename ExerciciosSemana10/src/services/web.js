const Url_API = 'http://localhost:3000';


// EXERCICIO03
export async function getAll (){
    const response = await fetch (`${Url_API}/noticias`);
    const formatado = await response.json();
    return formatado;
}

// EXERCICIO04
export async function getOne (id) {
    const response = await fetch (`${Url_API}/noticias`);
    const noticias = await response.json();
    const noticia = noticias.find(noticia=>noticia.id === id);
    return noticia;
}

export async function loginAPI (email, password){
    const response = await fetch (`${Url_API}/usuarios`);
    const usuarios = await response.json();
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.password === password)
    return usuario;
}