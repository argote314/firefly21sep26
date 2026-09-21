
const imagenes = [

    "imagenes/foto1.png",

    "imagenes/foto2.png",

    "imagenes/foto3.png",

    "imagenes/foto4.png",
    
    "imagenes/foto5.png"

];

let indice = 0;


const foto1 =
    document.getElementById("foto1");


const foto2 =
    document.getElementById("foto2");


let capaActual = foto1;

let capaSiguiente = foto2;


imagenes.forEach((src) => {

    const imagen = new Image();

    imagen.src = src;

});

foto1.style.backgroundImage =
    `url("${imagenes[0]}")`;

function cambiarFoto() {

    indice++;


    if (indice >= imagenes.length) {

        indice = 0;

    }


    capaSiguiente.style.backgroundImage =
        `url("${imagenes[indice]}")`;


    capaSiguiente.classList.add("activa");

    capaActual.classList.remove("activa");

    const temporal =
        capaActual;

    capaActual =
        capaSiguiente;

    capaSiguiente =
        temporal;

}


setInterval(
    cambiarFoto,
    4000
);

const musica =
    document.getElementById("musica");


const playPausa =
    document.getElementById("playPausa");


const segundo46 =
    document.getElementById("segundo46");

playPausa.addEventListener(
    "click",
    () => {

        if (musica.paused) {

            musica.play()
                .then(() => {

                    playPausa.classList.add(
                        "reproduciendo"
                    );


                    playPausa.setAttribute(
                        "aria-label",
                        "Pausar música"
                    );

                })
                .catch((error) => {

                    console.log(
                        "No se pudo reproducir:",
                        error
                    );

                });

        }

        else {

            musica.pause();

            playPausa.classList.remove(
                "reproduciendo"
            );


            playPausa.setAttribute(
                "aria-label",
                "Reproducir música"
            );

        }

    }
);


segundo46.addEventListener(
    "click",
    () => {


        musica.currentTime = 47;

        musica.play()
            .then(() => {

                playPausa.classList.add(
                    "reproduciendo"
                );


                playPausa.setAttribute(
                    "aria-label",
                    "Pausar música"
                );

            })
            .catch((error) => {

                console.log(
                    "No se pudo reproducir:",
                    error
                );

            });

    }
);


// ==========================================
// SI LA MÚSICA SE PAUSA
// ACTUALIZAR EL BOTÓN
// ==========================================

musica.addEventListener(
    "pause",
    () => {

        playPausa.classList.remove(
            "reproduciendo"
        );


        playPausa.setAttribute(
            "aria-label",
            "Reproducir música"
        );

    }
);