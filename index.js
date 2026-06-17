const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = 3000;

// BASE DE DATOS EXTENDIDA con IMÁGENES - Catálogo completo con 72+ opciones
const catalogoPerfumes = [
    // ==================== VERANO / CALOR ====================
    // --- MAÑANA ---
    { 
        estacion: "verano", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "citrico", 
        precio: "medio", duracion: "4-6h",
        imagen: "https://m.media-amazon.com/images/I/61xUuETflWL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/41TqQjLnUPL.jpg",
        texto: "algo ligero y energizante para empezar el día. Versace Pour Homme o CK One son opciones perfectas y muy limpias.",
        marcas: ["Versace Pour Homme", "CK One"]
    },
    { 
        estacion: "verano", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "floral", 
        precio: "medio", duracion: "4-6h",
        imagen: "https://m.media-amazon.com/images/I/71zWPvxh3YL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61uMKxJ4rAL._SL1500_.jpg",
        texto: "una fragancia fresca y alegre. Marc Jacobs Daisy Eau So Fresh o Dolce & Gabbana Light Blue son ideales para comenzar la mañana con energía.",
        marcas: ["Marc Jacobs Daisy Eau So Fresh", "Dolce & Gabbana Light Blue"]
    },
    { 
        estacion: "verano", momento: "mañana", ocasion: "deporte", genero: "unisex", tipo: "citrico", 
        precio: "economico", duracion: "3-5h",
        imagen: "https://m.media-amazon.com/images/I/71KJwRQdLaL._SL1500_.jpg",
        texto: "algo muy refrescante y revitalizante. Adidas Ice Dive o Nivea Men Fresh Active son perfectos para el gym matutino.",
        marcas: ["Adidas Ice Dive", "Nivea Men Fresh Active"]
    },
    { 
        estacion: "calor", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "citrico", 
        precio: "medio", duracion: "4-6h",
        imagen: "https://m.media-amazon.com/images/I/61xUuETflWL._SL1500_.jpg",
        texto: "algo ligero y energizante para empezar el día. Versace Pour Homme o CK One son opciones perfectas y muy limpias.",
        marcas: ["Versace Pour Homme", "CK One"]
    },
    
    // --- DÍA ---
    { 
        estacion: "verano", momento: "día", ocasion: "diario", genero: "masculino", tipo: "acuatico", 
        precio: "economico", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61fUqkE3ZRL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71CMPEw-n+L._SL1500_.jpg",
        texto: "una fragancia súper fresca y acuática. Nautica Voyage o Guess Seductive Homme Blue son excelentes para soportar la humedad extrema.",
        marcas: ["Nautica Voyage", "Guess Seductive Homme Blue"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "diario", genero: "femenino", tipo: "floral", 
        precio: "economico", duracion: "4-6h",
        imagen: "https://m.media-amazon.com/images/I/71jW4LdLYAL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61nWGQ4HpjL._SL1500_.jpg",
        texto: "una fragancia floral y acuática. Davidoff Cool Water Woman o Elizabeth Arden Green Tea son perfectas para el calor intenso.",
        marcas: ["Davidoff Cool Water Woman", "Elizabeth Arden Green Tea"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "verde", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61gVK7PDTgL._SL1500_.jpg",
        texto: "un aroma limpio y profesional. Alfred Sung Paradise es excelente para mantener una vibra verde y formal sin abrumar.",
        marcas: ["Alfred Sung Paradise"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "oficina", genero: "masculino", tipo: "citrico", 
        precio: "alto", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61Mee8y7lIL._SL1500_.jpg",
        texto: "una opción cítrica e inofensiva para espacios cerrados. Acqua di Giò original nunca falla.",
        marcas: ["Acqua di Giò"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "oficina", genero: "femenino", tipo: "floral", 
        precio: "alto", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61CqYpA5pSL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71DLP-1XbwL._SL1500_.jpg",
        texto: "algo profesional pero fresco. Chanel Chance Eau Fraîche o Hermès Un Jardin sur le Nil son opciones ejecutivas ideales.",
        marcas: ["Chanel Chance Eau Fraîche", "Hermès Un Jardin sur le Nil"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "casual", genero: "unisex", tipo: "citrico", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61uMKxJ4rAL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71QJ7J3GqzL._SL1500_.jpg",
        texto: "un aroma versátil para el día a día. CK One Summer o Tommy Hilfiger Tommy Now son frescos y despreocupados.",
        marcas: ["CK One Summer", "Tommy Hilfiger Tommy Now"]
    },
    { 
        estacion: "calor", momento: "día", ocasion: "diario", genero: "masculino", tipo: "acuatico", 
        precio: "economico", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61fUqkE3ZRL._SL1500_.jpg",
        texto: "una fragancia súper fresca y acuática. Nautica Voyage o Guess Seductive Homme Blue son excelentes para soportar la humedad extrema.",
        marcas: ["Nautica Voyage", "Guess Seductive Homme Blue"]
    },

    // --- TARDE ---
    { 
        estacion: "verano", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "aromatico", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/71NGnMOWGDL._SL1500_.jpg",
        texto: "un aroma fresco pero con un toque dulce. Guess 1981 Los Angeles, con sus notas de tabaco y menta, proyecta increíble.",
        marcas: ["Guess 1981 Los Angeles"]
    },
    { 
        estacion: "verano", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "floral_frutal", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61NHP5QGghL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61AoqRiSqnL._SL1500_.jpg",
        texto: "una fragancia romántica y veraniega. Escada Magnetism o Yves Saint Laurent Mon Paris son dulces y atractivas sin ser pesadas.",
        marcas: ["Escada Magnetism", "Yves Saint Laurent Mon Paris"]
    },
    { 
        estacion: "verano", momento: "tarde", ocasion: "fiesta", genero: "unisex", tipo: "aromatico", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61eDGFvYIYL._SL1500_.jpg",
        texto: "algo vibrante para una pool party o reunión al atardecer. Creed Virgin Island Water con notas de coco y lima es insuperable.",
        marcas: ["Creed Virgin Island Water"]
    },
    
    // --- NOCHE ---
    { 
        estacion: "verano", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "amaderado", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61H-x+p9iuL._SL1500_.jpg",
        texto: "algo seductor pero que no asfixie con el calor. Yves Saint Laurent Y Eau de Parfum tiene el equilibrio exacto.",
        marcas: ["Yves Saint Laurent Y Eau de Parfum"]
    },
    { 
        estacion: "verano", momento: "noche", ocasion: "cita", genero: "femenino", tipo: "oriental", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61FB-JBWlmL._SL1500_.jpg",
        texto: "un aroma seductor y fresco a la vez. Gucci Bloom o Lancôme La Vie Est Belle L'Eau de Parfum son ideales para cenas veraniegas.",
        marcas: ["Gucci Bloom", "Lancôme La Vie Est Belle"]
    },
    { 
        estacion: "verano", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "amaderado_marino", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61LrJH0CRyL._SL1500_.jpg",
        texto: "un perfil sofisticado que corte bien a través del calor. Acqua di Giò Profumo, con incienso y notas marinas, es un acierto total.",
        marcas: ["Acqua di Giò Profumo"]
    },
    { 
        estacion: "verano", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "floral_amaderado", 
        precio: "premium", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61BoStW8ykL._SL1500_.jpg",
        texto: "una fragancia de lujo para noches especiales. Tom Ford Neroli Portofino o Maison Francis Kurkdjian Aqua Universalis son joyas olfativas.",
        marcas: ["Tom Ford Neroli Portofino", "MFK Aqua Universalis"]
    },

    // ==================== INVIERNO / FRÍO ====================
    // --- MAÑANA ---
    { 
        estacion: "invierno", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "especiado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61N4bRCFWzL._SL1500_.jpg",
        texto: "un aroma reconfortante. Burberry London tiene notas de pino y canela que huelen exactamente a una mañana fría.",
        marcas: ["Burberry London"]
    },
    { 
        estacion: "invierno", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "gourmand", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/51BmGhFxQoL._SL1500_.jpg",
        texto: "algo dulce y acogedor para comenzar el día. Prada Candy o Lancôme Trésor Midnight Rose son cálidos y envolventes.",
        marcas: ["Prada Candy", "Lancôme Trésor Midnight Rose"]
    },

    // --- DÍA ---
    { 
        estacion: "invierno", momento: "día", ocasion: "diario", genero: "masculino", tipo: "oriental", 
        precio: "medio", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61UxhFDwSiL._SL1500_.jpg",
        texto: "algo cálido y llevadero. Las opciones de la línea Odyssey son estupendas porque su dulzor y notas especiadas abrazan muy bien.",
        marcas: ["Odyssey"]
    },
    { 
        estacion: "invierno", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "amaderado", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61o7NhOXpFL._SL1500_.jpg",
        texto: "un amaderado muy elegante. Tom Ford Oud Wood proyecta mucha seriedad y calidez.",
        marcas: ["Tom Ford Oud Wood"]
    },
    { 
        estacion: "invierno", momento: "día", ocasion: "trabajo", genero: "femenino", tipo: "cuero", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61wV1yFIKpL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71ZHVq7hT3L._SL1500_.jpg",
        texto: "un aroma profesional y sofisticado. Chanel Coco Mademoiselle o Bottega Veneta Eau de Parfum son opciones ejecutivas excepcionales.",
        marcas: ["Chanel Coco Mademoiselle", "Bottega Veneta"]
    },

    // --- TARDE ---
    { 
        estacion: "invierno", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "oriental_especiado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61KmHhbWAJL._SL1500_.jpg",
        texto: "notas de ámbar, cardamomo y tabaco. Dolce & Gabbana The One es el rey indiscutible para distancias cortas en el frío.",
        marcas: ["Dolce & Gabbana The One"]
    },
    { 
        estacion: "invierno", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "gourmand", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61ZmJXc5MHL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61SgYasBAbL._SL1500_.jpg",
        texto: "dulce y adictivo para una cita invernal. Viktor & Rolf Flowerbomb o Paco Rabanne Lady Million son absolutamente irresistibles.",
        marcas: ["Viktor & Rolf Flowerbomb", "Paco Rabanne Lady Million"]
    },

    // --- NOCHE ---
    { 
        estacion: "invierno", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "gourmand", 
        precio: "alto", duracion: "9-11h",
        imagen: "https://m.media-amazon.com/images/I/61R0Uf42+GL._SL1500_.jpg",
        texto: "algo extremadamente seductor y dulce. Azzaro The Most Wanted dejará una estela irresistible.",
        marcas: ["Azzaro The Most Wanted"]
    },
    { 
        estacion: "invierno", momento: "noche", ocasion: "cita", genero: "femenino", tipo: "oriental", 
        precio: "premium", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/61BoStW8ykL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61V8Txxr8hL._SL1500_.jpg",
        texto: "un aroma embriagador para una noche especial. Tom Ford Black Orchid o Kilian Love Don't Be Shy son pura seducción.",
        marcas: ["Tom Ford Black Orchid", "Kilian Love Don't Be Shy"]
    },
    { 
        estacion: "invierno", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "amaderado_oscuro", 
        precio: "alto", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/61A7Kn89plL._SL1500_.jpg",
        texto: "fragancias con mucha potencia y maderas oscuras. Armaf Club de Nuit Intense Man proyecta muchísimo, es elegante y deja una gran estela.",
        marcas: ["Armaf Club de Nuit Intense Man"]
    },
    { 
        estacion: "invierno", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "amaderado_oriental", 
        precio: "premium", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/61nT4lPYgPL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71jLs+ZfXhL._SL1500_.jpg",
        texto: "un perfume de lujo para eventos de gala. Maison Francis Kurkdjian Baccarat Rouge 540 o Guerlain Shalimar son obras maestras.",
        marcas: ["MFK Baccarat Rouge 540", "Guerlain Shalimar"]
    },

    // ==================== PRIMAVERA ====================
    { 
        estacion: "primavera", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "verde", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61PAn+x+jyL._SL1500_.jpg",
        texto: "fragancias muy verdes y alegres. Lacoste Blanc te dará una sensación de frescura inigualable.",
        marcas: ["Lacoste Blanc"]
    },
    { 
        estacion: "primavera", momento: "día", ocasion: "diario", genero: "masculino", tipo: "aromatico", 
        precio: "economico", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61eZ+yjGyPL._SL1500_.jpg",
        texto: "notas de lavanda y cítricos. Perry Ellis 360 Red funciona de maravilla para el clima templado.",
        marcas: ["Perry Ellis 360 Red"]
    },
    { 
        estacion: "primavera", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "atalcado", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61NKngjNW8L._SL1500_.jpg",
        texto: "algo pulcro, atalcado y profesional. Prada L'Homme huele a limpio, a jabón caro y a éxito.",
        marcas: ["Prada L'Homme"]
    },
    { 
        estacion: "primavera", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "amaderado_aromatico", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61S12B1mwnL._SL1500_.jpg",
        texto: "aromas frutales o florales limpios. Montblanc Explorer te hará destacar de forma muy sutil y masculina.",
        marcas: ["Montblanc Explorer"]
    },
    { 
        estacion: "primavera", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "azul", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61HYd39TiyL._SL1500_.jpg",
        texto: "algo azul y versátil. Bleu de Chanel Eau de Parfum es la navaja suiza de la elegancia.",
        marcas: ["Bleu de Chanel"]
    },
    { 
        estacion: "primavera", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "oriental", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61H-x+p9iuL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61w+FlOYO2L._SL1500_.jpg",
        texto: "algo seductor pero fresco. Dior Sauvage o Jean Paul Gaultier Le Male Le Parfum son perfectos para noches templadas.",
        marcas: ["Dior Sauvage", "Jean Paul Gaultier Le Male"]
    },

    // ==================== OTOÑO ====================
    { 
        estacion: "otoño", momento: "mañana", ocasion: "diario", genero: "masculino", tipo: "especiado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61d8BxpPlZL._SL1500_.jpg",
        texto: "notas de manzana y canela. Boss Bottled clásico te hará sentir muy cómodo.",
        marcas: ["Boss Bottled"]
    },
    { 
        estacion: "otoño", momento: "día", ocasion: "trabajo", genero: "masculino", tipo: "amaderado_verde", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61sA5HXr3EL._SL1500_.jpg",
        texto: "un perfil serio de maderas y vetiver. Terre d'Hermès es la definición de elegancia profesional para las tardes frescas.",
        marcas: ["Terre d'Hermès"]
    },
    { 
        estacion: "otoño", momento: "tarde", ocasion: "cita", genero: "masculino", tipo: "aromatico_especiado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61H6r1zGiwL._SL1500_.jpg",
        texto: "cardamomo y lavanda. La Nuit de L'Homme de Yves Saint Laurent es suave pero increíblemente atractiva.",
        marcas: ["La Nuit de L'Homme YSL"]
    },
    { 
        estacion: "otoño", momento: "noche", ocasion: "cita", genero: "masculino", tipo: "cuero", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61UEkDWEzbL._SL1500_.jpg",
        texto: "notas de cuero y haba tonka. Armani Code es misterioso e ideal para la noche.",
        marcas: ["Armani Code"]
    },
    { 
        estacion: "otoño", momento: "noche", ocasion: "elegante", genero: "masculino", tipo: "especiado_oscuro", 
        precio: "alto", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/71lQ7nYxFQL._SL1500_.jpg",
        texto: "especias cálidas, ron y cuero. Bvlgari Man in Black aporta una madurez perfecta para eventos formales.",
        marcas: ["Bvlgari Man in Black"]
    },
    
    // ==================== FEMENINOS ADICIONALES ====================
    { 
        estacion: "primavera", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "floral_verde", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/71CWBpAvyUL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61AoqRiSqnL._SL1500_.jpg",
        texto: "un aroma primaveral y optimista. Issey Miyake L'Eau d'Issey o Chloe Nomade son frescas y florales.",
        marcas: ["Issey Miyake L'Eau d'Issey", "Chloe Nomade"]
    },
    { 
        estacion: "primavera", momento: "día", ocasion: "diario", genero: "femenino", tipo: "floral_frutal", 
        precio: "economico", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/61NHP5QGghL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61PD4UG4D7L._SL1500_.jpg",
        texto: "una fragancia alegre y versátil. Nina Ricci Nina o Burberry Brit Sheer son perfectas para el día a día.",
        marcas: ["Nina Ricci Nina", "Burberry Brit Sheer"]
    },
    { 
        estacion: "primavera", momento: "día", ocasion: "trabajo", genero: "femenino", tipo: "floral_empolvado", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61qR2XHU9VL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71DY3sJWXYL._SL1500_.jpg",
        texto: "un aroma limpio y ejecutivo. Prada Infusion d'Iris o Chanel No. 19 son perfectas para la oficina primaveral.",
        marcas: ["Prada Infusion d'Iris", "Chanel No. 19"]
    },
    { 
        estacion: "primavera", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "floral", 
        precio: "alto", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61NHP5QGghL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61HYd39TiyL._SL1500_.jpg",
        texto: "un aroma romántico y fresco. Dior Miss Dior Blooming Bouquet o Valentino Donna Born In Roma son ideales para citas.",
        marcas: ["Dior Miss Dior Blooming Bouquet", "Valentino Donna Born In Roma"]
    },
    { 
        estacion: "primavera", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "floral_oriental", 
        precio: "premium", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61Bov8XRLVL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61H-x+p9iuL._SL1500_.jpg",
        texto: "un aroma sofisticado para noches primaverales. Guerlain Mon Guerlain o Yves Saint Laurent Libre son elegancia pura.",
        marcas: ["Guerlain Mon Guerlain", "Yves Saint Laurent Libre"]
    },
    { 
        estacion: "invierno", momento: "día", ocasion: "diario", genero: "femenino", tipo: "oriental", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61H-x+p9iuL._SL1500_.jpg",
        texto: "una fragancia cálida para el día a día. Carolina Herrera Good Girl o Yves Saint Laurent Black Opium son ideales para climas fríos.",
        marcas: ["Carolina Herrera Good Girl", "YSL Black Opium"]
    },
    { 
        estacion: "otoño", momento: "mañana", ocasion: "diario", genero: "femenino", tipo: "gourmand", 
        precio: "medio", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/51BmGhFxQoL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        texto: "algo acogedor para las mañanas frescas. Lancôme La Nuit Trésor o Carolina Herrera 212 VIP Rosé son perfectas.",
        marcas: ["Lancôme La Nuit Trésor", "Carolina Herrera 212 VIP Rosé"]
    },
    { 
        estacion: "otoño", momento: "día", ocasion: "trabajo", genero: "femenino", tipo: "chipre", 
        precio: "alto", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71DY3sJWXYL._SL1500_.jpg",
        texto: "una fragancia elegante y otoñal. Gucci Guilty Absolute pour Femme o Chanel Cristalle son opciones ejecutivas sofisticadas.",
        marcas: ["Gucci Guilty Absolute", "Chanel Cristalle"]
    },
    { 
        estacion: "otoño", momento: "tarde", ocasion: "cita", genero: "femenino", tipo: "floral_ambarado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61ZmJXc5MHL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        texto: "un aroma envolvente y romántico. Armani Si o Dolce & Gabbana Dolce Garden son perfectas para un café en otoño.",
        marcas: ["Armani Si", "Dolce & Gabbana Dolce Garden"]
    },
    { 
        estacion: "otoño", momento: "noche", ocasion: "cita", genero: "femenino", tipo: "oriental_vainilla", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61ZmJXc5MHL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61BoStW8ykL._SL1500_.jpg",
        texto: "una fragancia seductora y misteriosa. Dior Hypnotic Poison o Serge Lutens Ambre Sultan son profundamente atractivas.",
        marcas: ["Dior Hypnotic Poison", "Serge Lutens Ambre Sultan"]
    },
    { 
        estacion: "otoño", momento: "noche", ocasion: "elegante", genero: "femenino", tipo: "amaderado", 
        precio: "premium", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/61BoStW8ykL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61nT4lPYgPL._SL1500_.jpg",
        texto: "una fragancia de lujo para ocasiones especiales. Tom Ford Velvet Orchid o Byredo Black Saffron son inolvidables.",
        marcas: ["Tom Ford Velvet Orchid", "Byredo Black Saffron"]
    },
    
    // ==================== UNISEX y ESPECIALES ====================
    { 
        estacion: "verano", momento: "noche", ocasion: "fiesta", genero: "unisex", tipo: "afrutado", 
        precio: "medio", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/61xUuETflWL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61w+FlOYO2L._SL1500_.jpg",
        texto: "algo vibrante y festivo. Paco Rabanne Invictus o Jean Paul Gaultier Le Beau son perfectos para bailar toda la noche.",
        marcas: ["Paco Rabanne Invictus", "Jean Paul Gaultier Le Beau"]
    },
    { 
        estacion: "invierno", momento: "noche", ocasion: "fiesta", genero: "unisex", tipo: "oriental", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61UxhFDwSiL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61UEkDWEzbL._SL1500_.jpg",
        texto: "algo festivo y potente. Paco Rabanne 1 Million o Giorgio Armani Stronger With You Absolutely son perfectos para fiestas invernales.",
        marcas: ["Paco Rabanne 1 Million", "Armani Stronger With You"]
    },
    { 
        estacion: "primavera", momento: "noche", ocasion: "fiesta", genero: "unisex", tipo: "afrutado_amaderado", 
        precio: "medio", duracion: "7-9h",
        imagen: "https://m.media-amazon.com/images/I/61xUuETflWL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61H-x+p9iuL._SL1500_.jpg",
        texto: "energía pura para una noche de primavera. Versace Eros o Jean Paul Gaultier Scandal son vibrantes y festivos.",
        marcas: ["Versace Eros", "JPG Scandal"]
    },
    { 
        estacion: "otoño", momento: "noche", ocasion: "fiesta", genero: "unisex", tipo: "oriental_especiado", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/71lQ7nYxFQL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61nT4lPYgPL._SL1500_.jpg",
        texto: "vibraciones festivas y cálidas. Kilian Black Phantom o Maison Margiela Jazz Club son perfectos para noches de fiesta otoñal.",
        marcas: ["Kilian Black Phantom", "Maison Margiela Jazz Club"]
    },
    { 
        estacion: "primavera", momento: "día", ocasion: "universidad", genero: "unisex", tipo: "fresco", 
        precio: "economico", duracion: "5-7h",
        imagen: "https://m.media-amazon.com/images/I/71KJwRQdLaL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61eZ+yjGyPL._SL1500_.jpg",
        texto: "un aroma juvenil y fresco para las clases. Hollister Wave o Abercrombie & Fitch First Instinct son juveniles y modernos.",
        marcas: ["Hollister Wave", "Abercrombie First Instinct"]
    },
    { 
        estacion: "otoño", momento: "día", ocasion: "universidad", genero: "unisex", tipo: "gourmand", 
        precio: "economico", duracion: "6-8h",
        imagen: "https://m.media-amazon.com/images/I/51BmGhFxQoL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/71KJwRQdLaL._SL1500_.jpg",
        texto: "algo acogedor para estudiar en días frescos. Ariana Grande Cloud o Zara Gardenia son populares entre estudiantes.",
        marcas: ["Ariana Grande Cloud", "Zara Gardenia"]
    },
    { 
        estacion: "verano", momento: "día", ocasion: "boda", genero: "femenino", tipo: "floral", 
        precio: "premium", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/71DY3sJWXYL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61NHP5QGghL._SL1500_.jpg",
        texto: "una fragancia nupcial perfecta para verano. Jo Malone Peony & Blush Suede o Elie Saab Le Parfum son románticas y elegantes.",
        marcas: ["Jo Malone Peony & Blush Suede", "Elie Saab Le Parfum"]
    },
    { 
        estacion: "invierno", momento: "noche", ocasion: "boda", genero: "femenino", tipo: "oriental", 
        precio: "premium", duracion: "10-12h",
        imagen: "https://m.media-amazon.com/images/I/61JLIHr-LhL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61nT4lPYgPL._SL1500_.jpg",
        texto: "un perfume de ensueño para una boda invernal. Lancôme La Vie Est Belle Intensément o Giorgio Armani Privé Rose d'Arabie son lujosas.",
        marcas: ["Lancôme La Vie Est Belle", "Armani Privé Rose d'Arabie"]
    },
    { 
        estacion: "primavera", momento: "tarde", ocasion: "boda", genero: "masculino", tipo: "amaderado", 
        precio: "alto", duracion: "8-10h",
        imagen: "https://m.media-amazon.com/images/I/61sA5HXr3EL._SL1500_.jpg",
        imagen_secundaria: "https://m.media-amazon.com/images/I/61o7NhOXpFL._SL1500_.jpg",
        texto: "elegancia primaveral para eventos formales. Acqua di Parma Colonia o Tom Ford Grey Vetiver son perfectos para bodas.",
        marcas: ["Acqua di Parma Colonia", "Tom Ford Grey Vetiver"]
    },
];

// Endpoint principal de búsqueda con datos APL
app.get('/api/perfumes', (req, res) => {
    const estacion = req.query.estacion ? req.query.estacion.toLowerCase() : '';
    const momento = req.query.momento ? req.query.momento.toLowerCase() : '';
    const ocasion = req.query.ocasion ? req.query.ocasion.toLowerCase() : '';
    const genero = req.query.genero ? req.query.genero.toLowerCase() : '';
    const tipo = req.query.tipo ? req.query.tipo.toLowerCase() : '';
    const precio = req.query.precio ? req.query.precio.toLowerCase() : '';

    // Filtrado flexible
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
        // Priorizar coincidencia exacta con los 3 parámetros principales
        const coincidenciaExacta = perfumesEncontrados.find(
            item => item.estacion === estacion && item.momento === momento && item.ocasion === ocasion
        );
        
        const perfumePrincipal = coincidenciaExacta || perfumesEncontrados[0];
        
        // Respuesta ajustada para coincidir con tu APL
        res.json({
            encontrado: true,
            total_opciones: perfumesEncontrados.length,
            
            // Estructura plana para APL
            perfumeData: {
                imagen: perfumePrincipal.imagen,
                marca: perfumePrincipal.marcas[0],
                descripcion: perfumePrincipal.texto,
                duracion: perfumePrincipal.duracion,
                precio: perfumePrincipal.precio,
                genero: perfumePrincipal.genero
            },
            
            // Estructura para voz
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
            // Estructura plana incluso en fallo para evitar errores de undefined
            perfumeData: {
                imagen: "https://m.media-amazon.com/images/I/61HYd39TiyL._SL1500_.jpg",
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
                                    {
                                        type: "Text",
                                        text: `⏱ ${perfumeEncontrado.duracion}`,
                                        fontSize: "20dp"
                                    },
                                    {
                                        type: "Text",
                                        text: `💰 ${perfumeEncontrado.precio}`,
                                        fontSize: "20dp"
                                    },
                                    {
                                        type: "Text",
                                        text: `👥 ${perfumeEncontrado.genero}`,
                                        fontSize: "20dp"
                                    }
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

app.listen(PORT, () => {
    console.log(`✅ API de perfumes corriendo en http://localhost:${PORT}`);
    console.log(`📊 Base de datos: ${catalogoPerfumes.length} fragancias registradas`);
    console.log(`🌍 Endpoints disponibles:`);
    console.log(`   - GET /api/perfumes (búsqueda general con datos APL)`);
    console.log(`   - GET /api/apl/perfume (datos optimizados para APL)`);
    console.log(`   - GET /api/estadisticas (estadísticas del catálogo)`);
    console.log(`   - GET /api/imagenes (listado de imágenes disponibles)`);
});