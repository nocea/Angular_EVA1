import {preguntas} from './preguntas-interface';
export const mockPreguntasRespuestas:preguntas[]=[
    {id_pregunta:1,pregunta:"¿Cómo se define TypeScript?",
    respuesta:"TypeScript es un lenguaje de programación que mejora la productividad y la calidad del código al agregar tipos estáticos y otras características a JavaScript."},
    {id_pregunta:2,pregunta:"¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?",
    respuesta:"TypeScript agrega un sistema de tipos estáticos que permite definir y verificar tipos en tiempo de compilación, lo que hace que el código sea más seguro y menos propenso a errores de tipo. "},
    {id_pregunta:3,pregunta:"Muestra la lista de tipos básicos de TypeScript.",
    respuesta:"Number,string,boolean,null,undefined,object,symbol,any,void,never,array y tuple."},
    {id_pregunta:4,pregunta:"¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?",
    respuesta:"Con interfaces, tipos y clases."},
    {id_pregunta:5,pregunta:"¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.",
    respuesta:"Puedes ejecutar TypeScript en un navegador, pero primero debes compilarlo a JavaScript para que sea comprensible por los navegadores web."},
    {id_pregunta:6,pregunta:"Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?",
    respuesta:"En el archivo \"tsconfig.json\" se debe activar la opción del sourceMap."},
    {id_pregunta:7,pregunta:"¿Para qué sirve el archivo tsconfig.json?",
    respuesta:"Es una parte fundamental de cualquier proyecto TypeScript y proporciona un medio para personalizar y configurar la compilación de código TypeScript de acuerdo con tus necesidades específicas."}
]
