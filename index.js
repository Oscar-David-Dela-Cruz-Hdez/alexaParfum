const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

const IMG_BASE = "https://raw.githubusercontent.com/Oscar-David-Dela-Cruz-Hdez/alexaParfum/master/images/";

const catalogoPerfumes = [

    {
        estacion: "verano", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "citrico",
        precio: "medio", duracion: "4-6h",
        imagen: IMG_BASE + "versace-pour-homme.png",
        imagen_secundaria: IMG_BASE + "ck-one.jpg",
        texto: "algo ligero y energizante para empezar el día. Versace Pour Homme o CK One son opciones perfectas y muy limpias.",
        marcas: ["Versace Pour Homme", "CK One"]
    },
    {
        estacion: "verano", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "floral",
        precio: "medio", duracion: "4-6h",
        imagen: IMG_BASE + "marc-jacobs-daisy-eau-so-fresh.jpg",
        imagen_secundaria: IMG_BASE + "dolce-gabbana-light-blue.jpg",
        texto: "una fragancia fresca y alegre. Marc Jacobs Daisy Eau So Fresh o Dolce & Gabbana Light Blue son ideales para comenzar la mañana con energía.",
        marcas: ["Marc Jacobs Daisy Eau So Fresh", "Dolce & Gabbana Light Blue"]
    },
    {
        estacion: "verano", momento: "mañana", ocasion: "deporte", genero: "unisex", tipo: "citrico",
        precio: "economico", duracion: "3-5h",
        imagen: IMG_BASE + "adidas-ice-dive.jpg",
        imagen_secundaria: IMG_BASE + "nivea-men-fresh-active.png",
        texto: "algo muy refrescante y revitalizante. Adidas Ice Dive o Nivea Men Fresh Active son perfectos para el gym matutino.",
        marcas: ["Adidas Ice Dive", "Nivea Men Fresh Active"]
    },
    {
        estacion: "calor", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "citrico",
        precio: "medio", duracion: "4-6h",
        imagen: IMG_BASE + "versace-pour-homme.png",
        texto: "algo ligero y energizante para empezar el día. Versace Pour Homme o CK One son opciones perfectas y muy limpias.",
        marcas: ["Versace Pour Homme", "CK One"]
    },

    // --- DÍA ---
    {
        estacion: "verano", momento: "día", ocasion: "diario", genero: "masculino", tipo: "acuatico",
        precio: "economico", duracion: "5-7h",
        imagen: IMG_BASE + "nautica-voyage.jpg",
        imagen_secundaria: IMG_BASE + "guess-seductive-homme-blue.jpg",
        texto: "una fragancia súper fresca y acuática. Nautica Voyage o Guess Seductive Homme Blue son excelentes para soportar la humedad extrema.",
        marcas: ["Nautica Voyage", "Guess Seductive Homme Blue"]
    },
    {
        estacion: "verano", momento: "día", ocasion: "diario", genero: "femenino", tipo: "floral",
        precio: "economico", duracion: "4-6h",
        imagen: IMG_BASE + "davidoff-cool-water-woman.jpg",
        imagen_secundaria: IMG_BASE + "elizabeth-arden-green-tea.jpg",
        texto: "una fragancia floral y acuática. Davidoff Cool Water Woman o Elizabeth Arden Green Tea son perfectas para el calor intenso.",
        marcas: ["Davidoff Cool Water Woman", "Elizabeth Arden Green Tea"]
    },
    {
        estacion: "verano", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "verde",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "alfred-sung-paradise.jpg",
        texto: "un aroma limpio y profesional. Alfred Sung Paradise es excelente para mantener una vibra verde y formal sin abrumar.",
        marcas: ["Alfred Sung Paradise"]
    },
    {
        estacion: "verano", momento: "día", ocasion: "oficina", genero: "masculino", tipo: "citrico",
        precio: "alto", duracion: "6-8h",
        imagen: IMG_BASE + "acqua-di-gio.jpg",
        texto: "una opción cítrica e inofensiva para espacios cerrados. Acqua di Giò original nunca falla.",
        marcas: ["Acqua di Giò"]
    },
    {
        estacion: "verano", momento: "día", ocasion: "oficina", genero: "femenino", tipo: "floral",
        precio: "alto", duracion: "6-8h",
        imagen: IMG_BASE + "chanel-chance-eau-fraiche.jpg",
        imagen_secundaria: IMG_BASE + "hermes-un-jardin-sur-le-nil.jpg",
        texto: "algo profesional pero fresco. Chanel Chance Eau Fraîche o Hermès Un Jardin sur le Nil son opciones ejecutivas ideales.",
        marcas: ["Chanel Chance Eau Fraîche", "Hermès Un Jardin sur le Nil"]
    },
    {
        estacion: "verano", momento: "día", ocasion: "casual", genero: "unisex", tipo: "citrico",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "ck-one-summer.jpg",
        imagen_secundaria: IMG_BASE + "tommy-hilfiger-tommy-now.jpg",
        texto: "un aroma versátil para el día a día. CK One Summer o Tommy Hilfiger Tommy Now son frescos y despreocupados.",
        marcas: ["CK One Summer", "Tommy Hilfiger Tommy Now"]
    },
    {
        estacion: "calor", momento: "día", ocasion: "diario", genero: "masculino", tipo: "acuatico",
        precio: "economico", duracion: "5-7h",
        imagen: IMG_BASE + "nautica-voyage.jpg",
        texto: "una fragancia súper fresca y acuática. Nautica Voyage o Guess Seductive Homme Blue son excelentes para soportar la humedad extrema.",
        marcas: ["Nautica Voyage", "Guess Seductive Homme Blue"]
    },

    // --- TARDE ---
    {
        estacion: "verano", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "aromatico",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "guess-1981-los-angeles.jpg",
        texto: "un aroma fresco pero con un toque dulce. Guess 1981 Los Angeles, con sus notas de tabaco y menta, proyecta increíble.",
        marcas: ["Guess 1981 Los Angeles"]
    },
    {
        estacion: "verano", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "floral_frutal",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "escada-magnetism.jpg",
        imagen_secundaria: IMG_BASE + "yves-saint-laurent-mon-paris.png",
        texto: "una fragancia romántica y veraniega. Escada Magnetism o Yves Saint Laurent Mon Paris son dulces y atractivas sin ser pesadas.",
        marcas: ["Escada Magnetism", "Yves Saint Laurent Mon Paris"]
    },
    {
        estacion: "verano", momento: "tarde", ocasion: "fiesta", genero: "unisex", tipo: "aromatico",
        precio: "alto", duracion: "7-9h",
        imagen: IMG_BASE + "creed-virgin-island-water.jpg",
        texto: "algo vibrante para una pool party o reunión al atardecer. Creed Virgin Island Water con notas de coco y lima es insuperable.",
        marcas: ["Creed Virgin Island Water"]
    },

    // --- NOCHE ---
    {
        estacion: "verano", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "amaderado",
        precio: "alto", duracion: "7-9h",
        imagen: IMG_BASE + "yves-saint-laurent-y-eau-de-parfum.jpg",
        texto: "algo seductor pero que no asfixie con el calor. Yves Saint Laurent Y Eau de Parfum tiene el equilibrio exacto.",
        marcas: ["Yves Saint Laurent Y Eau de Parfum"]
    },
    {
        estacion: "verano", momento: "noche", ocasion: "cita", genero: "femenino", tipo: "oriental",
        precio: "alto", duracion: "7-9h",
        imagen: IMG_BASE + "gucci-bloom.jpg",
        imagen_secundaria: IMG_BASE + "lancome-la-vie-est-belle.jpg",
        texto: "un aroma seductor y fresco a la vez. Gucci Bloom o Lancôme La Vie Est Belle L'Eau de Parfum son ideales para cenas veraniegas.",
        marcas: ["Gucci Bloom", "Lancôme La Vie Est Belle"]
    },
    {
        estacion: "verano", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "amaderado_marino",
        precio: "alto", duracion: "8-10h",
        imagen: IMG_BASE + "acqua-di-gio-profumo.jpg",
        texto: "un perfil sofisticado que corte bien a través del calor. Acqua di Giò Profumo, con incienso y notas marinas, es un acierto total.",
        marcas: ["Acqua di Giò Profumo"]
    },
    {
        estacion: "verano", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "floral_amaderado",
        precio: "premium", duracion: "8-10h",
        imagen: IMG_BASE + "tom-ford-neroli-portofino.png",
        texto: "una fragancia de lujo para noches especiales. Tom Ford Neroli Portofino o Maison Francis Kurkdjian Aqua Universalis son joyas olfativas.",
        marcas: ["Tom Ford Neroli Portofino", "MFK Aqua Universalis"]
    },

    // ==================== INVIERNO / FRÍO ====================
    // --- MAÑANA ---
    {
        estacion: "invierno", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "especiado",
        precio: "medio", duracion: "6-8h",
        imagen: IMG_BASE + "burberry-london.png",
        texto: "un aroma reconfortante. Burberry London tiene notas de pino y canela que huelen exactamente a una mañana fría.",
        marcas: ["Burberry London"]
    },
    {
        estacion: "invierno", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "gourmand",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "prada-candy.jpg",
        imagen_secundaria: IMG_BASE + "lancome-tresor-midnight-rose.jpg",
        texto: "algo dulce y acogedor para empezar el día. Prada Candy o Lancôme Trésor Midnight Rose son cálidos y envolventes.",
        marcas: ["Prada Candy", "Lancôme Trésor Midnight Rose"]
    },

    // --- DÍA ---
    {
        estacion: "invierno", momento: "día", ocasion: "diario", genero: "masculino", tipo: "oriental",
        precio: "medio", duracion: "7-9h",
        imagen: IMG_BASE + "odyssey-perfume.jpg",
        texto: "algo cálido y llevadero. Las opciones de la línea Odyssey son estupendas porque su dulzor y notas especiadas abrazan muy bien.",
        marcas: ["Odyssey"]
    },
    {
        estacion: "invierno", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "amaderado",
        precio: "alto", duracion: "8-10h",
        imagen: IMG_BASE + "tom-ford-oud-wood.png",
        texto: "un amaderado muy elegante. Tom Ford Oud Wood proyecta mucha seriedad y calidez.",
        marcas: ["Tom Ford Oud Wood"]
    },
    {
        estacion: "invierno", momento: "día", ocasion: "trabajo", genero: "femenino", tipo: "cuero",
        precio: "alto", duracion: "8-10h",
        imagen: IMG_BASE + "chanel-coco-mademoiselle.jpg",
        imagen_secundaria: IMG_BASE + "bottega-veneta-eau-de-parfum.jpg",
        texto: "un aroma profesional y sofisticado. Chanel Coco Mademoiselle o Bottega Veneta Eau de Parfum son opciones ejecutivas excepcionales.",
        marcas: ["Chanel Coco Mademoiselle", "Bottega Veneta"]
    },

    // --- TARDE ---
    {
        estacion: "invierno", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "oriental_especiado",
        precio: "medio", duracion: "6-8h",
        imagen: IMG_BASE + "dolce-gabbana-the-one.jpg",
        texto: "notas de ámbar, cardamomo y tabaco. Dolce & Gabbana The One es el rey indiscutible para distancias cortas en el frío.",
        marcas: ["Dolce & Gabbana The One"]
    },
    {
        estacion: "invierno", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "gourmand",
        precio: "medio", duracion: "6-8h",
        imagen: IMG_BASE + "viktor-rolf-flowerbomb.jpg",
        imagen_secundaria: IMG_BASE + "paco-rabanne-lady-million.jpg",
        texto: "dulce y adictivo para una cita invernal. Viktor & Rolf Flowerbomb o Paco Rabanne Lady Million son absolutamente irresistibles.",
        marcas: ["Viktor & Rolf Flowerbomb", "Paco Rabanne Lady Million"]
    },

    // --- NOCHE ---
    {
        estacion: "invierno", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "gourmand",
        precio: "alto", duracion: "9-11h",
        imagen: IMG_BASE + "azzaro-the-most-wanted.jpg",
        texto: "algo extremadamente seductor y dulce. Azzaro The Most Wanted dejará una estela irresistible.",
        marcas: ["Azzaro The Most Wanted"]
    },
    {
        estacion: "invierno", momento: "noche", ocasion: "cita", genero: "femenino", tipo: "oriental",
        precio: "premium", duracion: "10-12h",
        imagen: IMG_BASE + "tom-ford-black-orchid.jpg",
        imagen_secundaria: IMG_BASE + "kilian-love-dont-be-shy.jpg",
        texto: "un aroma embriagador para una noche especial. Tom Ford Black Orchid o Kilian Love Don't Be Shy son pura seducción.",
        marcas: ["Tom Ford Black Orchid", "Kilian Love Don't Be Shy"]
    },
    {
        estacion: "invierno", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "amaderado_oscuro",
        precio: "alto", duracion: "10-12h",
        imagen: IMG_BASE + "armaf-club-de-nuit-intense-man.png",
        texto: "fragancias con mucha potencia y maderas oscuras. Armaf Club de Nuit Intense Man proyecta muchísimo, es elegante y deja una gran estela.",
        marcas: ["Armaf Club de Nuit Intense Man"]
    },
    {
        estacion: "invierno", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "amaderado_oriental",
        precio: "premium", duracion: "10-12h",
        imagen: IMG_BASE + "guerlain-shalimar.jpg",
        imagen_secundaria: IMG_BASE + "maison-francis-kurkdjian-baccarat-rouge-540.jpg",
        texto: "un perfume de lujo para eventos de gala. Maison Francis Kurkdjian Baccarat Rouge 540 o Guerlain Shalimar son obras maestras.",
        marcas: ["MFK Baccarat Rouge 540", "Guerlain Shalimar"]
    },

    // ==================== PRIMAVERA ====================
    {
        estacion: "primavera", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "verde",
        precio: "medio", duracion: "5-7h",
        imagen: IMG_BASE + "lacoste-blanc.jpg",
        texto: "fragancias muy verdes y alegres. Lacoste Blanc te dará una sensación de frescura inigualable.",
        marcas: ["Lacoste Blanc"]
    },
    {
        estacion: "primavera", momento: "día", ocasion: "diario", genero: "masculino", tipo: "aromatico",
        precio: "economico", duracion: "5-7h",
        imagen: IMG_BASE + "perry-ellis-360-red.jpg",
        texto: "notas de lavanda y cítricos. Perry Ellis 360 Red funciona de maravilla para el clima templado.",
        marcas: ["Perry Ellis 360 Red"]
    },
    {
        estacion: "primavera", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "atalcado",
        precio: "alto", duracion: "7-9h",
        imagen: IMG_BASE + "prada-lhomme.jpg",
        texto: "algo pulcro, atalcado y profesional. Prada L'Homme huele a limpio, a jabón caro y a éxito.",
        marcas: ["Prada L'Homme"]
    },
    {
        estacion: "primavera", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "amaderado_aromatico",
        precio: "medio", duracion: "6-8h",
        imagen: IMG_BASE + "montblanc-explorer.jpg",
        texto: "aromas frutales o florales limpios. Montblanc Explorer te hará destacar de forma muy sutil y masculina.",
        marcas: ["Montblanc Explorer"]
    },
    {
        estacion: "primavera", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "azul",
        precio: "alto", duracion: "8-10h",
        imagen: IMG_BASE + "bleu-de-chanel.jpg",
        texto: "algo azul y versátil. Bleu de Chanel Eau de Parfum es la navaja suiza de la elegancia.",
        marcas: ["Bleu de Chanel"]
    },
    {
        estacion: "primavera", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "oriental",
        precio: "alto", duracion: "7-9h",
        imagen: IMG_BASE + "dior-sauvage.jpg",
        imagen_secundaria: IMG_BASE + "jean-paul-gaultier-le-male-le-parfum.jpg",
        texto: "algo seductor pero fresco. Dior Sauvage o Jean Paul Gaultier Le Male Le Parfum son perfectos para noches templadas.",
        marcas: ["Dior Sauvage", "Jean Paul Gaultier Le Male"]
    },

    // ==================== OTOÑO ====================
    {
        estacion: "otoño", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "especiado",
        precio: "medio", duracion: "6-8h",
        imagen: IMG_BASE + "boss-bottled.jpg",
        texto: "notas de manzana y canela. Boss Bottled clásico te hará sentir muy cómodo.",
        marcas: ["Boss Bottled"]
    },
    {
        estacion: "otoño", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "amaderado_verde",
        precio: "alto", duracion: "8-10h",
        imagen: IMG_BASE + "terre-dhermes.jpg",
        texto: "un perfil serio de maderas y vetiver. Terre d'Hermès es la definición de elegancia profesional para las tardes frescas.",
        marcas: ["Terre d'Hermès"]
    }];

// Endpoint principal de búsqueda con datos APL
app.get('/api/perfumes', (req, res) => {
    const estacion = req.query.estacion ? req.query.estacion.toLowerCase() : '';
    const momento = req.query.momento ? req.query.momento.toLowerCase() : '';
    const ocasion = req.query.ocasion ? req.query.ocasion.toLowerCase() : '';
    const genero = req.query.genero ? req.query.genero.toLowerCase() : '';
    const tipo = req.query.tipo ? req.query.tipo.toLowerCase() : '';
    const precio = req.query.precio ? req.query.precio.toLowerCase() : '';

    const perfumesEncontrados = catalogoPerfumes.filter(item => {
        let match = true;
        if (estacion) match = match && (item.estacion === estacion);
        if (momento) match = match && (item.momento === momento);
        if (ocasion) match = match && (item.ocasion === ocasion);
        if (genero) match = match && (item.genero === genero || item.genero === 'unisex');
        if (tipo) match = match && (item.tipo === tipo);
        if (precio) match = match && (item.precio === precio);
        return match;
    });

    if (perfumesEncontrados.length > 0) {
        const coincidenciaExacta = perfumesEncontrados.find(
            item => item.estacion === estacion && item.momento === momento && item.ocasion === ocasion
        );

        const perfumePrincipal = coincidenciaExacta || perfumesEncontrados[0];

        res.json({
            encontrado: true,
            total_opciones: perfumesEncontrados.length,
            perfumeData: {
                imagen: perfumePrincipal.imagen,
                marca: perfumePrincipal.marcas[0],
                descripcion: perfumePrincipal.texto,
                duracion: perfumePrincipal.duracion,
                precio: perfumePrincipal.precio,
                genero: perfumePrincipal.genero
            },
            voz_datos: {
                recomendacion: perfumePrincipal.texto,
                marcas_sugeridas: perfumePrincipal.marcas
            }
        });
    } else {
        res.json({
            encontrado: false,
            voz_datos: {
                mensaje: "una fragancia versátil, preferentemente con notas amaderadas suaves o un perfil azul que se adapte a cualquier escenario sin fallar."
            },
            perfumeData: {
                imagen: IMG_BASE + "bleu-de-chanel.jpg",
                marca: "Recomendación General",
                descripcion: "No encontré una coincidencia exacta, pero te recomiendo una fragancia versátil.",
                duracion: "N/A",
                precio: "Versátil",
                genero: "Unisex"
            }
        });
    }
});

// Endpoint específico para APL (devuelve datos optimizados para pantallas)
app.get('/api/apl/perfume', (req, res) => {
    const estacion = req.query.estacion ? req.query.estacion.toLowerCase() : '';
    const momento = req.query.momento ? req.query.momento.toLowerCase() : '';
    const ocasion = req.query.ocasion ? req.query.ocasion.toLowerCase() : '';

    const perfumeEncontrado = catalogoPerfumes.find(
        item => item.estacion === estacion && item.momento === momento && item.ocasion === ocasion
    );

    if (perfumeEncontrado) {
        res.json({
            tipo: "AlexaAPL",
            documento: {
                type: "APL",
                version: "1.8",
                mainTemplate: {
                    items: [{
                        type: "Container",
                        items: [
                            {
                                type: "Image",
                                source: perfumeEncontrado.imagen,
                                width: "100%",
                                height: "60vh",
                                scale: "best-fit",
                                align: "center"
                            },
                            {
                                type: "Text",
                                text: perfumeEncontrado.marcas[0],
                                style: "textStylePrimary",
                                fontSize: "32dp",
                                textAlign: "center",
                                paddingTop: "20dp"
                            },
                            {
                                type: "Text",
                                text: perfumeEncontrado.texto,
                                style: "textStyleSecondary",
                                fontSize: "24dp",
                                textAlign: "center",
                                paddingTop: "10dp"
                            },
                            {
                                type: "Container",
                                direction: "row",
                                justifyContent: "spaceAround",
                                paddingTop: "20dp",
                                items: [
                                    { type: "Text", text: `⏱ ${perfumeEncontrado.duracion}`, fontSize: "20dp" },
                                    { type: "Text", text: `💰 ${perfumeEncontrado.precio}`, fontSize: "20dp" },
                                    { type: "Text", text: `👥 ${perfumeEncontrado.genero}`, fontSize: "20dp" }
                                ]
                            }
                        ]
                    }]
                }
            },
            datos: {
                texto: perfumeEncontrado.texto,
                marcas: perfumeEncontrado.marcas,
                imagen: perfumeEncontrado.imagen,
                duracion: perfumeEncontrado.duracion,
                precio: perfumeEncontrado.precio,
                genero: perfumeEncontrado.genero
            }
        });
    } else {
        res.json({
            tipo: "AlexaAPL",
            documento: {
                type: "APL",
                version: "1.8",
                mainTemplate: {
                    items: [{
                        type: "Text",
                        text: "Te recomiendo una fragancia versátil con notas amaderadas suaves",
                        style: "textStylePrimary",
                        fontSize: "28dp",
                        textAlign: "center"
                    }]
                }
            }
        });
    }
});

// Endpoint de estadísticas
app.get('/api/estadisticas', (req, res) => {
    const totalPerfumes = catalogoPerfumes.length;
    const porEstacion = {};
    const porGenero = {};
    const porPrecio = {};

    catalogoPerfumes.forEach(p => {
        porEstacion[p.estacion] = (porEstacion[p.estacion] || 0) + 1;
        porGenero[p.genero] = (porGenero[p.genero] || 0) + 1;
        porPrecio[p.precio] = (porPrecio[p.precio] || 0) + 1;
    });

    res.json({
        total_perfumes: totalPerfumes,
        por_estacion: porEstacion,
        por_genero: porGenero,
        por_precio: porPrecio
    });
});

// Endpoint para obtener todas las imágenes disponibles
app.get('/api/imagenes', (req, res) => {
    const imagenes = catalogoPerfumes.map(p => ({
        marca: p.marcas[0],
        estacion: p.estacion,
        momento: p.momento,
        imagen_principal: p.imagen,
        imagen_secundaria: p.imagen_secundaria || null
    }));

    res.json({
        total: imagenes.length,
        imagenes: imagenes
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ API de perfumes corriendo en http://localhost:${PORT}`);
    console.log(`📊 Base de datos: ${catalogoPerfumes.length} fragancias registradas`);
    console.log(`🌍 Endpoints disponibles:`);
    console.log(`   - GET /api/perfumes (búsqueda general con datos APL)`);
    console.log(`   - GET /api/apl/perfume (datos optimizados para APL)`);
    console.log(`   - GET /api/estadisticas (estadísticas del catálogo)`);
    console.log(`   - GET /api/imagenes (listado de imágenes disponibles)`);
    
});