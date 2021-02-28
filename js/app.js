document.addEventListener('DOMContentLoaded',()=>{
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then( (datos) => {
        let html = '';

        datos.portafolio.forEach(portafolio =>{
            
            //creamos nustro template
            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;
        });


        //Inyectar al HTML codigo js
        document.querySelector('#listado').innerHTML = html;
    })
}   