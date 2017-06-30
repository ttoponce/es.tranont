
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "abajo", "acerca", "ahí", "algunos", "alto", "ambos", "antes", "aquí", "arriba", "bajo", "cada", "como", "con", "contra", "cualquiera", "cuando", "cuya", "cuyas", "cuyo", "cuyos", "cuál", "cuáles", "cuándo", "cómo", "de", "debajo", "debe", "debería", "debía", "dentro", "desde", "después", "donde", "durante", "dónde", "e", "el", "ella", "ellos", "en", "encima", "entonces", "entre", "era", "eres", "es", "esa", "esas", "ese", "eso", "esos", "esta", "estado", "estar", "estas", "este", "esto", "estos", "está", "están", "estás", "fue", "fuera", "fueron", "habrá", "habrán", "habrás", "habría", "habríamos", "habrían", "habrías", "hace", "hacer", "haciendo", "han", "hará", "haríamos", "has", "hasta", "hay", "he", "hemos", "hizo", "la", "las", "lo", "los", "mi", "mientras", "misma", "mismo", "mismos", "mucho", "muy", "más", "mí", "nada", "ninguno", "no", "nosotros", "nuestra", "nuestras", "nuestro", "nuestros", "o", "otra", "otro", "para", "pero", "pocos", "podría", "por", "porque", "propio", "puede", "que", "quien", "quienes", "quién", "quiénes", "qué", "se", "ser", "si", "sido", "siendo", "sobre", "solamente", "solo", "somos", "son", "soy", "su", "suya", "suyo", "suyos", "tales", "también", "tener", "teniendo", "tiene", "todo", "todos", "tras", "través", "tu", "tuvo", "tuyo", "tuyos", "tú", "u", "un", "una", "unas", "uno", "unos", "usted", "vamos", "vez", "y", "yo", "él", "ésa", "ésas", "ése", "ésos", "ésta", "éste"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [     {'word': 'correo electrónico', 'stem': 'correo electrónico'},     {'word': 'javascript', 'stem': 'jquery'},     {'word': 'javascript', 'stem': 'js'}]};


// Internal strings

var tipuesearch_string_1 = 'Sin título';
var tipuesearch_string_2 = 'Mostrando resultados de';
var tipuesearch_string_3 = 'Mejor buscar';
var tipuesearch_string_4 = '1 resultado';
var tipuesearch_string_5 = 'resultados';
var tipuesearch_string_6 = 'Ant';
var tipuesearch_string_7 = 'Sig';
var tipuesearch_string_8 = 'No se encontró nada';
var tipuesearch_string_9 = 'No se hace caso de las palabras comunes';
var tipuesearch_string_10 = 'El término de búsqueda demasiado corto';
var tipuesearch_string_11 = 'Debe tener un carácter o más';
var tipuesearch_string_12 = 'Debe tener';
var tipuesearch_string_13 = 'caracteres o más';
