const btn = document.getElementById(2).addEventListener("click", getStudent(), onclick)
const url = "https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students"

function getStudent() {
    let codigo = document.getElementById(0).textContent
    let contra = document.getElementById(0).textContent
    if (contra == 1234) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ codigo }) 
        };

        fetch(url, options)
            .then(response => response.json()) 
            .then(data => {
                if (data.hasOwnProperty('clave')) { 
                    console.log('Valor de clave:', data.clave); 
                } else {
                    console.error('Atributo clave no encontrado en la respuesta');
                }
            })
            .catch(error => document.getElementById(4).textContent="codigo o contraseña invalidos");
    }
    document.getElementById(4).textContent="codigo o contraseña invalidos"
}


