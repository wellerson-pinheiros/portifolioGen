const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 



async function getApiGithub() {
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/wellerson-pinheiros`);
        
        const perfil = await dadosPerfil.json();

        let conteudo =`<img 
            src="${perfil.avatar_url}"
            alt="foto do perfil do github - ${perfil.name}" >

            <article id="about_texto" class="flex about_content">
                <h1>Sobre min</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi a nam aperiam, unde sed cumque non doloremque commodi dicta itaque quis labore dolores reprehenderit magnam maiores maxime tempora? Nam, aliquam.</p>

                <div id="about_github" >
                    <a href="${perfil.html_url}" 
                    target="_blank" class="botao flex ">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositorio</p>
                </div>
                
            
            </article> 
            `

            sobre.innerHTML += conteudo;

    }catch(error){
        console.error(error)
    }
}

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome tem que ter no minimo 3 caracteres";
        campoNome.focus();
        return; 
    }else{
        txtNome.innerHTML = "" ;
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail= document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail valido.";
        campoEmail.focus();
        return; 
    }else{
        txtEmail.innerHTML = "" ;
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 3){
        txtAssunto.innerHTML = "O nome tem que ter no minimo 3 caracteres";
        campoAssunto.focus();
        return; 
    }else{
        txtAssunto.innerHTML = "" ;
    }

formulario.submit();

})



getApiGithub()