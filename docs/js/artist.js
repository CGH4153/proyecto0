"use strict";

import { parseHTML } from "/docs/js/utils/parseHTML.js";
import { recycledjAPI_auto } from "/docs/js/api/_recycledj.js";
import { dvalentinoAPI_auto } from "/docs/js/api/_dvalentino.js";
import { rusowskyAPI_auto } from "/docs/js/api/_rusowsky.js";
import { lhaineAPI_auto } from "/docs/js/api/_lhaine.js";
import { judelineAPI_auto } from "/docs/js/api/_judeline.js";
import { hokeAPI_auto } from "/docs/js/api/_hoke.js";
import { juicybaeAPI_auto } from "/docs/js/api/_juicybae.js";
import { teolucadamoAPI_auto } from "/docs/js/api/_teolucadamo.js";
import { delaossaAPI_auto } from "/docs/js/api/_delaossa.js";
import { boncalsoAPI_auto } from "/docs/js/api/_boncalso.js";
import { stickymaAPI_auto } from "/docs/js/api/_stickyma.js";
import { diego900API_auto } from "/docs/js/api/_diego900.js";
import { albumRenderer } from "/docs/js/renderers/albums.js";

document.addEventListener("DOMContentLoaded", async () => {
    const nombreElem = document.getElementById("artist-name");

    if (nombreElem) {
        // Obtener el nombre del artista desde la URL
        const params = new URLSearchParams(window.location.search);
        const artistName = params.get("name");

        // Mostrar el nombre del artista en el h1
        document.getElementById("artist-name").textContent = artistName;

        // Mostrar info personalizada según artista
        if(artistName == "Recycled J"){
            let html = `<div class="info">
            <p>Jorge Escorial Moreno (Carabanchel, Madrid, 17 de julio de 1993), popularmente conocido por su nombre artístico Recycled J, es un artista y rapero español​ que se nutre tanto del reguetón, el R&B y el trap como de la electrónica. ​Es conocido por ser un referente dentro de la escena del rap madrileño, género del que bebe su esencia, ya que sus inicios en la música fueron a través del freestyle en distintos parques de su ciudad. De ahí, pasó a la música con el seudónimo de Cool y formó parte del grupo Prefijo91.​ Tras retirarse por un tiempo de la escena musical, volvió con un nuevo seudónimo.</p>
            <a class="link-artist" href="https://recycledj.com/"> Contactar</a>
            <div class="spotify-col-md-4"></div>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await recycledjAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "D.Valentino"){
            let html = `<div class="info">
            <p>El R&B siempre ha sido su género favorito, “junto con el pop rock español”. Quizá es por eso que desde que comenzó en 2021, D.Valentino ha hecho suya la mezcla de opuestos. Cuatro años después, el título de su último álbum, Rosa y rojo, es prueba de ello. Ahora nos regala Ciao!, un EP que ha sido producido por Sneaky Wh al completo con el que nos felicitaba por San Valentín.</p>
            <a class="link-artist" href="https://dvalentino.fanlink.tv/tour"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await dvalentinoAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "rusowsky"){
            let html = `<div class="info">
            <p>Ruslan Mediavilla (Valladolid en 1999) más conocido como Rusowsky es un cantante, compositor y productor criado en Fuenlabrada, Madrid.

            Su música explora géneros underground y vanguardistas como bedroom pop, un género que nace en la intimida de una habitación, R&B, reggaetón, techno, hip hop o incluso jazz.</p>
            <a class="link-artist" href="https://linktr.ee/rusowskyshows"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await rusowskyAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "L'Haine"){
            let html = `<div class="info">
            <p>Juan Sáenz de Cabezón Aranoa (Logroño, 29 de marzo de 1999) conocido por su nombre artístico L´haine, es un cantante y rapero español.

            Nacido en una familia profundamente vinculada a la música, L'haine creció rodeado de influencias artísticas. Su madre, Elena Aranoa, es cantante, compositora y pianista, mientras que su padre, Eduardo Sáenz de Cabezón, ha sido cuentacuentos.​ Esta atmósfera artística fomentó su interés por la música desde temprana edad. Antes de dedicarse profesionalmente a la música, L'haine estudió en el conservatorio y exploró diversas facetas artísticas, incluyendo su pasión por el cine.</p>
            <a class="link-artist" href="https://linktr.ee/lhaine.contact"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await lhaineAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Judeline"){
            let html = `<div class="info">
            <p>Lara Fernández (Jérez de la Frontera, 2003) parece que viva en el futuro, pero canta como nadie la tradición del presente. Con su proyecto Judeline entiende tan bien el pop que es capaz de estirar sus límites, tocando desde las herencias territoriales hasta la digitalización de los medios. En esta época neo-tradicionalista los pícaros cruzan Gibraltar y las tonadilleras son poliamorosas. Nadie como ella ha sabido integrar en el lugar donde tenía que estar. Criada en el edén de Caños de Meca, en una familia que entendía el valor de la música, aprendió a tararear antes que a balbucear. Hábil con el piano, la guitarra y el cuatro vernezolano, pero también sobre los ‘beats’ y con el ‘pitcheo’. Sea versionando a Lola Flores, sampleando a Antonio Carmona o trabajando con productores de la talla de Tainy o Alizzz, mantiene su pulso al tempo y con todo el nivel.

            Desde los 17 años vive en Madrid, donde visitó todas las jams sessions y estudios de grabación que se le pusieron al toque. Con su tándem de productores Tuiste y Mayo ha publicado un primer EP “de la luz” (2022) recomendado por los mismísimos popes del nuevo pop, Rosalía y Bad Bunny que, como ella, entienden la experimentación como parte del proceso a lo ‘mainstream’. Desde entonces, el ‘name-dropping’ de reconocimientos ha sido de escándalo. Es la Up Next España de agosto de 2023 en Apple Music, forma parte del programa DSCVR Artists To Watch de Vevo y es la primera artista española en aparecer en la serie Spotify Singles, versionando a Shakira, Alejandro Sanz y a Yahritza y su Esencia. Marcas como Adidas o Corte Inglés la han hecho anfitriona de sus campañas y ha protagonizado el video “Un tren de navidad” de Vogue España, celebrando su vinculación con la moda y las nuevas ‘aesthetics’.

            Después de ganarse el cielo de la audiencia con sus canciones “Canijo” y “2+1”, abre esta nueva etapa con una gira europea teloneando a J Balvin. Y, por supuesto, con su ya esperada puesta de largo, un álbum co-producido con Rob Bisel (SZA, Tate McRae…), Mayo, Tuiste y Drummie, del que ya nos ha adelantado el chill-house de “mangata”. Ahora dirán que las tradiciones solo las dicta el tiempo, pero Judeline tiene todas las cartas en su baza para ser la que lidere la actual generación.</p>
            <a class="link-artist" href="https://judeline.es/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await judelineAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Hoke"){
            let html = `<div class="info">
            <p>Hoke nació en Valencia en 1996 y, desde sus inicios en la música, ha conseguido convertirse en uno de los artistas más innovadores en la industria del rap español.

            Su carrera comenzó a despegar en 2020, cuando lanzó su primer disco BBO, una obra autoeditada junto al productor Louis Amoeba. Este álbum llamó mucho la atención por su frescura y originalidad, así que Hoke, poco a poco, se empezó a ganar un lugar destacado en la escena urbana. 

            Su estilo fusiona el rap y el trap con otros géneros musicales, y consigue un tono único y muy particular. En 2022, Hoke presentó el EP SIDNEY 00, donde nos demostró su evolución como artista y su talento innegable. </p>
            <a class="link-artist" href="https://www.instagram.com/hokebbo/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await hokeAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Juicy BAE"){
            let html = `<div class="info">
            <p>¿A qué sonaría un featuring entre Fela Kuti y Juana Cruz, la madre de Camarón? ¿Y entre Don Tolvier y la Mala Rodriguez? Si alguien es capaz de unir estás sinergías en la actualidad, ella es Cristina Vela (Sevilla, 1998) aka la Juicy BAE. Artista multidisciplinar -¡y precoz!- se formó como bailaora desde los 3 años de edad. Con una cosmología propia que pasa por la poesía jonda y la moda de calle hasta llegar a las múltiples formas de la música urbana con alcance internacional. Nadie como ella es capaz de trabajar con productores como Nadddot -responsable de instrumentales para Trippie Redd- y a la vez liderar su propia banda, Ass Music (Araceli Sound Studio), con la que se presenta su visual álbum más compacto hasta la fecha, “PTSD” (2022), producido por PMP.

            Todoterreno y terremoto, desde que debutó en 2017 con el sencillo ‘Smok wit u’ -grabado en su homemade estudio- ha publicado los epés “On my first shifts” (2018) “No more tearz 2 cry” (2019) y La “Noche ke me muera” (2020). Tanta actividad no podía pasar desapercibida a los diggers del otro lado del charco. Nada más salir, fue apadrinada por Duki y se ha convertido en una de las colaboradoras de cabecera de Taichu, Yesan y Polimá We$tcoat. Llegando a publicar “Arrepentio” junto a las grandes del panorama: Nicki Nicole, Aleesha y la misma Taichu, su alma gemela, con un videoclip grabado en Miami.

            En lo nacional ha sido la excepción, su mezcla de R&B, afrobeat, trap con tintes soul y barras aflamencadas ha generado curiosidad en todos los colectivos locales, con los que colabora sin casarse. La podemos escuchar habitualmente junto a Leïti Sene o el productor Bexnil de la Cute Mobb, también con Blackhtoven o incluso con Fabianni y Sticky M.A., miembros fundadores de Agorazein. We$t Dubai, Love Yi, Kitty110, la Joaqui e incluso Mucho Muchacho la han invitado a unirse en sus canciones. Juicy BAE es sin duda una fuera de serie tanto en materia de puesta en escena como de creación, gracias a su mezcla genuina de estilos y el arte que lleva en vena.

            Con una variedad de formatos en vivo hasta ahora insuperable, ha actuado en Sónar, Primavera Sound, Festival BAM y el Lollapalooza de Argentina, la culminación de su primera gira por LATAM. Artista de artistas, es habitual que otros popes del panorama la citen como referente o influencia. Ha demostrado que, sea arrancándose sobre una base de guitarra y palmas como en ‘Malas Lenguas’ u homenajeando al difunto del RKT, El Nova, en ‘El Perdedor’, no hay género y escenario que a la Juicy BAE le vaya grande.</p>
            <a class="link-artist" href="https://juicybae.com/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await juicybaeAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Teo Lucadamo"){
            let html = `<div class="info">
            <p>Teo Lucadamo (Alicante, 24 años) está haciendo dominadas en un andamio de Malasaña, en Madrid. Está posando, vale, pero se ve que busca divertirse y hacer reír. De eso va su música: rimas que a veces rozan el absurdo. Como en Ritmo, el tema que se viralizó en TikTok, en el que un metrónomo quiere ser cardiólogo. “Echo de menos que la gente se divierta un poco más. Que sea más mofada. Hay mucho miedo al ridículo”.
            
            Pero el proyecto de Lucadamo ha dado un paso adelante. El 20 de marzo publica El dilema del rapero blanco, su primer álbum. “Respeto el hip hop demasiado como para considerarme rapero”, explica. La idea del disco viene de una conversación entre amigos, en la que le cuestionaron si se sentía bien componiendo rap siendo blanco y de clase privilegiada. “¿Qué pasa? ¿No estoy en mi derecho de hacer lo que me dé la puta gana?”, se pregunta. La teoría la conoce: “Es una cuestión cultural y racial. El supremacismo blanco expoliando la forma de expresión de minorías marginadas. Coger el arte y convertirlo en un producto vendible. Pero vivimos en una época en la que buscamos una identidad estética. Está claro que no formo parte de esa cultura pero he sido muy influenciado por el hip hop”.
            
            Entonces, ¿cómo justifica hacer rap? “Cuento mi vida. Mi música es muy personal. Si la premisa del hip hop es keep it real, yo lo mantengo real”. Lucadamo rapea con ingenio (¿flow?) sobre situaciones que lindan entre lo surrealista, lo cotidiano y lo humorístico. No habla de drogas ni de trapichear. Ni es ni ha sido su realidad. “Sería lo menos real del mundo”, reconoce. En su álbum colabora Mucho Muchacho, uno de los referentes del rap en España. ¿El dilema se le aplica a él? “Creo que puede aplicarse a todos los blancos, pero respeto a quien piensa que es una forma de expresión universal”.</p>
            <a class="link-artist" href="https://linktr.ee/teolucadamo"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await teolucadamoAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Delaossa"){
            let html = `<div class="info">
            <p>JDaniel Martínez de la Ossa Romero, DELAOSSA, nace y crece en el emblemático barrio de El Palo, Málaga.</p>
            <a class="link-artist" href="https://delaossastore.com/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await delaossaAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Bon Calso"){
            let html = `<div class="info">
            <p>Jorge, Bon Calso, anteriormente tatuador y ahora cantante y compositor, lleva muchos trabajos a sus espaldas. Él es de Alcorcón y siempre quiso poder cantar en el escenario de las fiestas de dicho barrio de Madrid. Este año consiguió ese propósito, compartió escenarios con La Zowi. Lleva 8 años en la música, esto ha hecho que se convierta en uno de los artistas más reconocidos de lo urbano en España. Sus métricas, sus líricas sobre el amor, y su actitud potente, marcan su sello personal.</p>
            <a class="link-artist" href="https://www.instagram.com/bon.calso/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await boncalsoAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Sticky M.A."){
            let html = `<div class="info">
            <p>Manuel Fernandez, mejor conocido como Sticky M.A. es un rapero español. Perteneció al colectivo y sello independiente Agorazein (AGZ) junto con otros artistas como C. Tangana, Jerv o Fabianni. Antes conocido como Manto, cambió su nombre en la mixtape Chill Trill en 2014. En 2016, AGZ se disolvió y comenzó a hacer música en solitario. Su primer single propio fue YanoaY, con el que Sticky consiguió lanzar su propia carrera musical a finales de 2017—principios de 2018, sacando su primer álbum Las Pegajosas Aventuras de Sticky M.A., el cual fue exitoso dado a la propuesta que traía Sticky para la escena española, siendo de los primeros raperos en hacer Cloud Rap en esa época.

            2019 fue el año que situaría a Manto en el foco de atención con su álbum mejor valorado y considerado, hasta la fecha, uno de los mejores proyectos de trap en español; 5ta Dimensión, creado codeándose junto al mejor productor de trap en español de ese momento, Steve Lean. Su éxito y su influencia en la escena española es innegable y está a la vista, perfeccionando el sonido del Cloud Rap y creando canciones que siempre serán recordadas dentro del panorama, tales como “Piensa en Mí”, siendo la más exitosa del álbum junto al argentino Duki, o “Shooters”.

            En este punto ya se podía ver un patrón que el artista mantendría por el resto de su carrera, siendo este el sacar pocos singles pero contando con un nuevo álbum cada año dentro de su catálogo, como Konbanwa en 2020 y Corazón Verde en 2021. Aunque en los años 2022 y 2023 no se pudo escuchar un proyecto nuevo, se mantuvo activo sacando sencillos, para más tarde anunciar que estaba preparando su nuevo álbum, Las Pegajosas Aventuras De Sticky M.A II, el cual finalmente después de una larga espera donde se mostró totalmente inactivo en redes sociales y no se sabía nada del estado de este proyecto, volvió. Anunciando varios sencillos que formaban ya parte del álbum, hasta realizar la salida del proyecto completo el 31 de mayo de 2024, con un notable cambio de sonido al que ya nos tiene acostumbrado el artista en cada una de sus etapas.</p>
            <a class="link-artist" href="https://tienda-stickyma.com/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await stickymaAPI_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }

        if(artistName == "Diego 900"){
            let html = `<div class="info">
            <p>Diego 900, cuyo nombre real es Diego Tello Martín, es un rapero español nacido el 27 de noviembre de 1993. Se hizo conocido en la escena musical por su estilo único dentro del género de trap y rap. Originario de Madrid, España, Diego 900 ha construido una carrera musical sólida a lo largo de los años, ganando seguidores tanto por su habilidad lírica como por su capacidad para abordar temas urbanos contemporáneos con un enfoque personal y directo.

            Su debut en la escena musical fue marcado por la canción "Baby Jose", que rápidamente se convirtió en un éxito y le ayudó a establecer su nombre en el panorama del rap español. Posteriormente, canciones como "T4 Barajas" también ganaron popularidad entre los aficionados al rap, consolidando su posición como una figura relevante en el género.

            Diego 900 se distingue por su estilo vocal distintivo y por la autenticidad de sus letras, que a menudo exploran temas como la vida en la ciudad, las experiencias personales y las reflexiones sobre la sociedad contemporánea. Su música ha resonado tanto a nivel local como internacional, atrayendo a una audiencia diversa y fiel.

            A lo largo de su carrera, Diego 900 ha colaborado con otros artistas destacados y ha participado en numerosos proyectos musicales que han contribuido a expandir su reconocimiento y prestigio en la industria del rap.</p>
            <a class="link-artist" href="https://www.instagram.com/diegonovecientos/"> Contactar</a>
            </div>`;
            let info = parseHTML(html);
            document.getElementById("artist-info").appendChild(info);
            let galleryContainer = document.querySelector("div.container");
            let photos = await diego900API_auto.getAll();
            let cardGallery = albumRenderer.asCardGallery(photos);
            galleryContainer.appendChild(cardGallery);
        }
            }
});


