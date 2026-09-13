// GENERADO por armar.js (datos.js + motor.js) — no editar a mano.
// Los datos vienen de tools/html_a_figma.py; el dibujo, de motor.js.
// GENERADO por tools/html_a_figma.py desde figma/*.html — no editar a mano.
const DATOS = {
 "paleta": {
  "bg": "#F5F8FC",
  "surface1": "#E8EFF7",
  "surface2": "#D7E2EE",
  "fg": "#111A22",
  "muted": "#4D5B68",
  "accent": "#14507F",
  "signal": "#2F6E96",
  "done": "#27292C",
  "onSolid": "#FFFFFF",
  "signalTint": "#B9CDDD",
  "signalInk": "#14364C",
  "accentStrong": "#0D3B60"
 },
 "pantallas": [
  {
   "id": "entrega-estudiante",
   "archivo": "01-entrega-estudiante.html",
   "titulo": "Entrega · estudiante",
   "rol": "estudiante",
   "pestana": "entrega",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Entrega de la unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Escribes y guardas sin señal. El sistema sube solo cuando vuelva la conexión.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Tarea: reseña de la Lectura 2",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Tiempo de trabajo disponible: ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "3 h 40 m de 6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "caja": [
        {
         "texto": "La lectura plantea que un texto académico se lee en tres pasadas: primero para saber de qué habla, después para encontrar la idea que sostiene el resto, y al final para discutirla. La segunda pasada es la que más me costó: tuve que volver al párrafo tres porque la idea principal no estaba al principio.",
         "mono": false,
         "negrita": false
        }
       ],
       "nota": [
        {
         "texto": "Texto de ejemplo para explorar el prototipo: cámbialo o bórralo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "conmutador": [
        {
         "runs": [
          {
           "texto": "Con señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": true,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "si"
         }
        },
        {
         "runs": [
          {
           "texto": "Sin señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": false,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "no"
         }
        }
       ]
      },
      {
       "t": "boton",
       "k": "primary",
       "runs": [
        {
         "texto": "Guardar entrega",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "guardar",
        "data-foco": "guardar"
       }
      },
      {
       "t": "texto",
       "estilo": "answer",
       "runs": [
        {
         "texto": "Todavía no has guardado nada.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Registros de esta unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "El mismo registro lo ve tu docente.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Sin registros todavía. Guarda una entrega para verlos.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": []
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "«Sin subir» es «se hizo y no se pudo subir». «Falta» es «no se hizo»: son dos cosas distintas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "entrega-docente",
   "archivo": "02-entrega-docente.html",
   "titulo": "Entrega · docente",
   "rol": "docente",
   "pestana": "entrega",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Entregas recibidas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Ves lo mismo que ve cada estudiante: las dos marcas, sin ninguna columna extra.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Grupo de ejemplo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Nombres inventados para el prototipo: no hay datos personales reales.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "grupo",
       "filas": [
        {
         "nombre": [
          {
           "texto": "Yuliana R.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Entregado sin conexión",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "hecho 8:40 p.m. · subido 7:12 a.m.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Deivis M.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Entregado",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "hecho 9 sep, 4:05 p.m. · subido 9 sep, 4:06 p.m.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Nubia C.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "wait",
           "runs": [
            {
             "texto": "Sin subir ",
             "mono": false,
             "negrita": false
            },
            {
             "texto": "hecho 6:20 p.m.",
             "mono": true,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Se guardó sin señal a las 6:20 p.m. Se subirá solo cuando vuelva la señal.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Ernesto P.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Sin registros todavía en esta unidad.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Lo que se escribió sin conexión aparece cuando llega, no antes. Nunca aparece como «no entregó».",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "curso-estudiante",
   "archivo": "03-curso-estudiante.html",
   "titulo": "Curso · estudiante",
   "rol": "estudiante",
   "pestana": "curso",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Estado del curso",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Cada ítem lleva su palabra. Lo bloqueado no se esconde: se explica.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "ruta",
       "items": [
        {
         "num": [
          {
           "texto": "Ítem 1",
           "mono": false,
           "negrita": false
          }
         ],
         "titulo": [
          {
           "texto": "Lectura 1: leer un texto académico",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "nota": [
          {
           "texto": "Hecha el martes 9 a las 6:10 p.m.",
           "mono": false,
           "negrita": false
          }
         ],
         "bloqueado": false,
         "motivo": []
        },
        {
         "num": [
          {
           "texto": "Ítem 2",
           "mono": false,
           "negrita": false
          }
         ],
         "titulo": [
          {
           "texto": "Lectura 2: la idea que sostiene el texto",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "nota": [
          {
           "texto": "Se marca hecha cuando guardas la reseña.",
           "mono": false,
           "negrita": false
          }
         ],
         "bloqueado": false,
         "motivo": []
        },
        {
         "num": [
          {
           "texto": "Ítem 3",
           "mono": false,
           "negrita": false
          }
         ],
         "titulo": [
          {
           "texto": "Cuestionario de la unidad",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "nota": [
          {
           "texto": "Se abre cuando quieras. El tiempo corre solo dentro de la unidad.",
           "mono": false,
           "negrita": false
          }
         ],
         "bloqueado": false,
         "motivo": []
        },
        {
         "num": [
          {
           "texto": "Ítem 4",
           "mono": false,
           "negrita": false
          }
         ],
         "titulo": [
          {
           "texto": "Foro de la unidad",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "blocked",
           "runs": [
            {
             "texto": "▪",
             "mono": true,
             "negrita": false
            },
            {
             "texto": "Bloqueado",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "nota": [],
         "bloqueado": true,
         "motivo": []
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Tu expediente, tal como está hoy",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "hechos",
       "items": [
        {
         "dt": [
          {
           "texto": "Última conexión registrada",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "hoy, 8:12 p.m.",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": false
        },
        {
         "dt": [
          {
           "texto": "Actividad registrada en la unidad",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "todavía sin entregas guardadas",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": false
        },
        {
         "dt": [
          {
           "texto": "Marcas automáticas",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "Ninguna. Si el sistema hiciera una estimación sobre ti, aparecería aquí, en tus palabras y con qué hacer.",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": true
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Este expediente lo ve tu docente exactamente así.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "curso-docente",
   "archivo": "04-curso-docente.html",
   "titulo": "Curso · docente",
   "rol": "docente",
   "pestana": "curso",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Estado del grupo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "El mismo dato, en versión de grupo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "p",
       "runs": [
        {
         "texto": "Sin predicción opaca. El sistema informa, no clasifica.",
         "mono": false,
         "negrita": true
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Los cuatro ítems, por estudiante",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "grupo",
       "filas": [
        {
         "nombre": [
          {
           "texto": "Yuliana R.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "3 hechos",
             "mono": false,
             "negrita": false
            }
           ]
          },
          {
           "k": "todo",
           "runs": [
            {
             "texto": "1 falta",
             "mono": false,
             "negrita": false
            }
           ]
          },
          {
           "k": "blocked",
           "runs": [
            {
             "texto": "▪",
             "mono": true,
             "negrita": false
            },
            {
             "texto": "1 bloqueado",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Le falta el cuestionario. El foro sigue bloqueado: le falta un ítem hecho.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Deivis M.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "4 hechos",
             "mono": false,
             "negrita": false
            }
           ]
          },
          {
           "k": "todo",
           "runs": [
            {
             "texto": "0 faltan",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Los cuatro ítems hechos, incluido el foro.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Nubia C.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "2 hechos",
             "mono": false,
             "negrita": false
            }
           ]
          },
          {
           "k": "wait",
           "runs": [
            {
             "texto": "Sin subir ",
             "mono": false,
             "negrita": false
            },
            {
             "texto": "hecho 6:20 p.m.",
             "mono": true,
             "negrita": false
            }
           ]
          },
          {
           "k": "blocked",
           "runs": [
            {
             "texto": "▪",
             "mono": true,
             "negrita": false
            },
            {
             "texto": "1 bloqueado",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Tiene una entrega sin subir: se hizo a las 6:20 p.m. y todavía no hay señal.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Ernesto P.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "1 hecho",
             "mono": false,
             "negrita": false
            }
           ]
          },
          {
           "k": "todo",
           "runs": [
            {
             "texto": "3 faltan",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Sigue en la Lectura 1. Sin registros de entrega todavía.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "No hay columna de riesgo, ni de estimación, ni de probabilidad: no existen en este sistema.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Expediente de Yuliana R., el mismo que ella ve",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "hechos",
       "items": [
        {
         "dt": [
          {
           "texto": "Última conexión registrada",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "hoy, 7:12 a.m.",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": false
        },
        {
         "dt": [
          {
           "texto": "Actividad registrada en la unidad",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "3 ítems hechos · 1 entrega con dos marcas",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": false
        },
        {
         "dt": [
          {
           "texto": "Marcas automáticas",
           "mono": false,
           "negrita": false
          }
         ],
         "dd": [
          {
           "texto": "Ninguna. Si el sistema hiciera una estimación sobre ti, aparecería aquí, en tus palabras y con qué hacer.",
           "mono": false,
           "negrita": false
          }
         ],
         "plano": true
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Ves el mismo expediente que ve cada persona, con las mismas palabras. No hay una versión privada para el docente.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-estudiante",
   "archivo": "05-tiempo-estudiante.html",
   "titulo": "Tiempo · estudiante",
   "rol": "estudiante",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Tiempo disponible",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "No es una fecha límite: es un presupuesto de trabajo que se gasta mientras trabajas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "time-figure",
       "runs": [
        {
         "texto": "Te quedan ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "3 h 40 m",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " de ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "barra",
       "pct": 61.11,
       "baja": false
      },
      {
       "t": "texto",
       "estilo": "time-state",
       "runs": [
        {
         "texto": "●",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " El tiempo está corriendo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Se descuenta solo mientras estás dentro de la unidad. Fuera de línea no corre.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "En este prototipo 1 segundo equivale a 1 minuto de trabajo, para que se vea cómo corre. La conexión se cambia en la pantalla «Entrega».",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "boton",
       "k": "secondary",
       "runs": [
        {
         "texto": "Solicitar más tiempo",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "motivos"
       }
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Solicitudes registradas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [],
         "notas": [
          [
           {
            "texto": "Todavía no has solicitado más tiempo.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-docente",
   "archivo": "06-tiempo-docente.html",
   "titulo": "Tiempo · docente",
   "rol": "docente",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Solicitudes de tiempo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Los motivos de conexión no pasan por ti: el sistema los resuelve en el momento.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Grupo de ejemplo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "grupo",
       "filas": [
        {
         "nombre": [
          {
           "texto": "Yuliana R. · ",
           "mono": false,
           "negrita": false
          },
          {
           "texto": "No tuve señal",
           "mono": true,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Resuelta al instante",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Se sumaron 2 días en el momento. Queda registrado el motivo, no una justificación.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Deivis M. · ",
           "mono": false,
           "negrita": false
          },
          {
           "texto": "Trabajo o cuidado",
           "mono": true,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "wait",
           "runs": [
            {
             "texto": "Espera tu respuesta ",
             "mono": false,
             "negrita": false
            },
            {
             "texto": "solicitada hoy, 6:40 p.m.",
             "mono": true,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "El motivo no es de conexión, así que la decisión es tuya.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": [
          {
           "t": "boton",
           "k": "secondary",
           "runs": [
            {
             "texto": "Sumar 2 días",
             "mono": false,
             "negrita": false
            }
           ],
           "acciones": {
            "data-action": "sumar-docente",
            "data-solicitud": "ej-2",
            "data-foco": "sumar-ej-2"
           }
          }
         ]
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Una solicitud de conexión llega resuelta y con su motivo. Nunca te llega como culpa de nadie.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "flujo-estudiante",
   "archivo": "07-flujo-estudiante.html",
   "titulo": "Flujo · estudiante",
   "rol": "estudiante",
   "pestana": "flujo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Cómo se guarda y se sube",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Cuatro pasos encadenados. Lo que cambia es cuándo llega, no si lo hiciste.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "pasos",
       "items": [
        {
         "indice": "1",
         "titulo": [
          {
           "texto": "Escribes",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Con o sin señal. Nada se pierde por estar sin conexión.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "todo"
        },
        {
         "indice": "2",
         "titulo": [
          {
           "texto": "Se guarda en este teléfono",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Al guardar queda aquí, con la hora de tu reloj.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "todo"
        },
        {
         "indice": "3",
         "titulo": [
          {
           "texto": "Vuelve la señal y se sube sola",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "No hay que volver a guardar ni buscar señal.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "todo"
        },
        {
         "indice": "4",
         "titulo": [
          {
           "texto": "Queda registrado con dos marcas",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "La hora en que lo hiciste y la hora en que llegó.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "todo"
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Las dos marcas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "record-marks",
       "runs": [
        {
         "texto": "Todavía sin marcas. Cuando guardes una entrega aparecerán aquí.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "p",
       "runs": [
        {
         "texto": "Si nunca hubo señal, el sistema informa \"no se pudo subir\", no \"no entregó\".",
         "mono": false,
         "negrita": true
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "flujo-docente",
   "archivo": "08-flujo-docente.html",
   "titulo": "Flujo · docente",
   "rol": "docente",
   "pestana": "flujo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "La entrega diferida, del lado del docente",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Lo que llega, llega con sus dos marcas. No hay una columna de «no entregó».",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "pasos",
       "items": [
        {
         "indice": "1",
         "titulo": [
          {
           "texto": "Se escribe cuando se puede",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Con señal o sin señal: el trabajo no depende de la red.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [],
         "marca": "todo"
        },
        {
         "indice": "2",
         "titulo": [
          {
           "texto": "Se guarda en el teléfono",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Con la hora local, aunque no haya con quién hablar.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [],
         "marca": "todo"
        },
        {
         "indice": "3",
         "titulo": [
          {
           "texto": "Llega cuando vuelve la señal",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Sin que nadie tenga que volver a guardar ni avisar.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [],
         "marca": "todo"
        },
        {
         "indice": "4",
         "titulo": [
          {
           "texto": "Tú ves las dos horas",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Cuándo se hizo y cuándo llegó. Con eso puedes leer el contexto, no solo el retraso.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [],
         "marca": "todo"
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "p",
       "runs": [
        {
         "texto": "Si nunca hubo señal, el sistema informa \"no se pudo subir\", no \"no entregó\".",
         "mono": false,
         "negrita": true
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Cuando el motivo es de conexión, el sistema lo resuelve y a ti te llega con el motivo. Cuando no lo es, te llega la solicitud con el motivo elegido, sin justificación escrita: responsable, no culpable.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  }
 ],
 "estados": [
  {
   "id": "entrega-estudiante-guardado-sin-senal",
   "archivo": "entrega-estudiante-guardado-sin-senal.html",
   "titulo": "Entrega · estudiante · guardado sin señal",
   "rol": "estudiante",
   "pestana": "entrega",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Entrega de la unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Escribes y guardas sin señal. El sistema sube solo cuando vuelva la conexión.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Tarea: reseña de la Lectura 2",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Tiempo de trabajo disponible: ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "3 h 40 m de 6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "caja": [
        {
         "texto": "La lectura plantea que un texto académico se lee en tres pasadas: primero para saber de qué habla, después para encontrar la idea que sostiene el resto, y al final para discutirla. La segunda pasada es la que más me costó: tuve que volver al párrafo tres porque la idea principal no estaba al principio.",
         "mono": false,
         "negrita": false
        }
       ],
       "nota": [
        {
         "texto": "Texto de ejemplo para explorar el prototipo: cámbialo o bórralo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "conmutador": [
        {
         "runs": [
          {
           "texto": "Con señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": false,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "si"
         }
        },
        {
         "runs": [
          {
           "texto": "Sin señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": true,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "no"
         }
        }
       ]
      },
      {
       "t": "boton",
       "k": "primary",
       "runs": [
        {
         "texto": "Guardar en este dispositivo",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "guardar",
        "data-foco": "guardar"
       }
      },
      {
       "t": "texto",
       "estilo": "answer",
       "runs": [
        {
         "texto": "Guardado en este teléfono a las 8:40 p.m. Se subirá solo cuando vuelva la señal.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Registros de esta unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "El mismo registro lo ve tu docente.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [
          {
           "k": "wait",
           "runs": [
            {
             "texto": "Sin subir ",
             "mono": false,
             "negrita": false
            },
            {
             "texto": "hecho 8:40 p.m.",
             "mono": true,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Se guardó sin señal a las 8:40 p.m. Se subirá solo cuando vuelva la señal.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "«Sin subir» es «se hizo y no se pudo subir». «Falta» es «no se hizo»: son dos cosas distintas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "entrega-estudiante-entregado-dos-marcas",
   "archivo": "entrega-estudiante-entregado-dos-marcas.html",
   "titulo": "Entrega · estudiante · entregado con las dos marcas",
   "rol": "estudiante",
   "pestana": "entrega",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Entrega de la unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Escribes y guardas sin señal. El sistema sube solo cuando vuelva la conexión.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Tarea: reseña de la Lectura 2",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Tiempo de trabajo disponible: ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "3 h 40 m de 6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "caja": [
        {
         "texto": "La lectura plantea que un texto académico se lee en tres pasadas: primero para saber de qué habla, después para encontrar la idea que sostiene el resto, y al final para discutirla. La segunda pasada es la que más me costó: tuve que volver al párrafo tres porque la idea principal no estaba al principio.",
         "mono": false,
         "negrita": false
        }
       ],
       "nota": [
        {
         "texto": "Texto de ejemplo para explorar el prototipo: cámbialo o bórralo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "campo",
       "conmutador": [
        {
         "runs": [
          {
           "texto": "Con señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": true,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "si"
         }
        },
        {
         "runs": [
          {
           "texto": "Sin señal",
           "mono": false,
           "negrita": false
          }
         ],
         "activo": false,
         "acciones": {
          "data-action": "conexion",
          "data-en-linea": "no"
         }
        }
       ]
      },
      {
       "t": "boton",
       "k": "primary",
       "runs": [
        {
         "texto": "Guardar entrega",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "guardar",
        "data-foco": "guardar"
       }
      },
      {
       "t": "texto",
       "estilo": "answer",
       "runs": [
        {
         "texto": "Subido a las 7:12 a.m. El registro quedó con las dos marcas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Registros de esta unidad",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "El mismo registro lo ve tu docente.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Entregado sin conexión",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "hecho ayer, 8:40 p.m. · subido hoy, 7:12 a.m.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "«Sin subir» es «se hizo y no se pudo subir». «Falta» es «no se hizo»: son dos cosas distintas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-estudiante-motivos-abierto",
   "archivo": "tiempo-estudiante-motivos-abierto.html",
   "titulo": "Tiempo · estudiante · pedir más tiempo",
   "rol": "estudiante",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Tiempo disponible",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "No es una fecha límite: es un presupuesto de trabajo que se gasta mientras trabajas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "time-figure",
       "runs": [
        {
         "texto": "Te quedan ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "3 h 40 m",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " de ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "barra",
       "pct": 61.11,
       "baja": false
      },
      {
       "t": "texto",
       "estilo": "time-state",
       "runs": [
        {
         "texto": "●",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " El tiempo está corriendo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Se descuenta solo mientras estás dentro de la unidad. Fuera de línea no corre.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "En este prototipo 1 segundo equivale a 1 minuto de trabajo, para que se vea cómo corre. La conexión se cambia en la pantalla «Entrega».",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "boton",
       "k": "secondary",
       "runs": [
        {
         "texto": "Solicitar más tiempo",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "motivos"
       }
      },
      {
       "t": "banda",
       "id": "panel-motivos",
       "respuesta": false,
       "hijos": [
        {
         "t": "texto",
         "estilo": "field-title",
         "runs": [
          {
           "texto": "¿Por qué necesitas más tiempo? Elige el motivo.",
           "mono": false,
           "negrita": false
          }
         ]
        },
        {
         "t": "boton",
         "k": "option",
         "runs": [
          {
           "texto": "No tuve señal",
           "mono": false,
           "negrita": false
          }
         ],
         "acciones": {
          "data-action": "motivo",
          "data-motivo": "conexion"
         }
        },
        {
         "t": "boton",
         "k": "option",
         "runs": [
          {
           "texto": "Se cayó la conexión",
           "mono": false,
           "negrita": false
          }
         ],
         "acciones": {
          "data-action": "motivo",
          "data-motivo": "conexion"
         }
        },
        {
         "t": "boton",
         "k": "option",
         "runs": [
          {
           "texto": "Trabajo o cuidado",
           "mono": false,
           "negrita": false
          }
         ],
         "acciones": {
          "data-action": "motivo",
          "data-motivo": "docente"
         }
        },
        {
         "t": "boton",
         "k": "option",
         "runs": [
          {
           "texto": "Otro motivo",
           "mono": false,
           "negrita": false
          }
         ],
         "acciones": {
          "data-action": "motivo",
          "data-motivo": "docente"
         }
        },
        {
         "t": "texto",
         "estilo": "note",
         "runs": [
          {
           "texto": "Un clic. No hay campo de texto ni explicación que escribir.",
           "mono": false,
           "negrita": false
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Solicitudes registradas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [],
         "notas": [
          [
           {
            "texto": "Todavía no has solicitado más tiempo.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-estudiante-solicitud-resuelta",
   "archivo": "tiempo-estudiante-solicitud-resuelta.html",
   "titulo": "Tiempo · estudiante · resuelta al instante",
   "rol": "estudiante",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Tiempo disponible",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "No es una fecha límite: es un presupuesto de trabajo que se gasta mientras trabajas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "time-figure",
       "runs": [
        {
         "texto": "Te quedan ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "2 días 3 h 40 m",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " de ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "2 días 6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "barra",
       "pct": 95.68,
       "baja": false
      },
      {
       "t": "texto",
       "estilo": "time-state",
       "runs": [
        {
         "texto": "●",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " El tiempo está corriendo.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Se descuenta solo mientras estás dentro de la unidad. Fuera de línea no corre.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "En este prototipo 1 segundo equivale a 1 minuto de trabajo, para que se vea cómo corre. La conexión se cambia en la pantalla «Entrega».",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "boton",
       "k": "secondary",
       "runs": [
        {
         "texto": "Solicitar más tiempo",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "motivos"
       }
      },
      {
       "t": "banda",
       "id": "respuesta",
       "respuesta": true,
       "hijos": [
        {
         "t": "marcas",
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Tiempo sumado",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ]
        },
        {
         "t": "texto",
         "estilo": "p",
         "runs": [
          {
           "texto": "Sumamos 2 días a tu tiempo de trabajo. Los motivos de conexión se resuelven en el momento, sin aprobación y sin pedir explicaciones. Queda registrado el motivo, no una justificación.",
           "mono": false,
           "negrita": false
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Solicitudes registradas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Resuelta al instante",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "No tuve señal · Se sumaron 2 días a tu tiempo de trabajo. Queda registrado el motivo, no una justificación.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-estudiante-tiempo-agotado",
   "archivo": "tiempo-estudiante-tiempo-agotado.html",
   "titulo": "Tiempo · estudiante · sin tiempo",
   "rol": "estudiante",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Tiempo disponible",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "No es una fecha límite: es un presupuesto de trabajo que se gasta mientras trabajas.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "time-figure",
       "runs": [
        {
         "texto": "Te quedan ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "0 m",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " de ",
         "mono": false,
         "negrita": false
        },
        {
         "texto": "6 h",
         "mono": true,
         "negrita": false
        },
        {
         "texto": ".",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "barra",
       "pct": 0.0,
       "baja": true
      },
      {
       "t": "texto",
       "estilo": "time-state-pausado",
       "runs": [
        {
         "texto": "■",
         "mono": true,
         "negrita": false
        },
        {
         "texto": " Se acabó el tiempo de trabajo de esta unidad. Puedes pedir más sin explicar por qué.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Se descuenta solo mientras estás dentro de la unidad. Fuera de línea no corre.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "En este prototipo 1 segundo equivale a 1 minuto de trabajo, para que se vea cómo corre. La conexión se cambia en la pantalla «Entrega».",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "boton",
       "k": "secondary",
       "runs": [
        {
         "texto": "Solicitar más tiempo",
         "mono": false,
         "negrita": false
        }
       ],
       "acciones": {
        "data-action": "motivos"
       }
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Solicitudes registradas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "registros",
       "items": [
        {
         "badges": [],
         "notas": [
          [
           {
            "texto": "Todavía no has solicitado más tiempo.",
            "mono": false,
            "negrita": false
           }
          ]
         ]
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "flujo-estudiante-guardado-sin-subir",
   "archivo": "flujo-estudiante-guardado-sin-subir.html",
   "titulo": "Flujo · estudiante · guardado sin subir",
   "rol": "estudiante",
   "pestana": "flujo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Cómo se guarda y se sube",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Cuatro pasos encadenados. Lo que cambia es cuándo llega, no si lo hiciste.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "pasos",
       "items": [
        {
         "indice": "1",
         "titulo": [
          {
           "texto": "Escribes",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Con o sin señal. Nada se pierde por estar sin conexión.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        },
        {
         "indice": "2",
         "titulo": [
          {
           "texto": "Se guarda en este teléfono",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Guardada en este teléfono ayer, 8:40 p.m.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        },
        {
         "indice": "3",
         "titulo": [
          {
           "texto": "Vuelve la señal y se sube sola",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "No hay que volver a guardar ni buscar señal.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "wait",
           "runs": [
            {
             "texto": "Sin subir ",
             "mono": false,
             "negrita": false
            },
            {
             "texto": "hecho 8:40 p.m.",
             "mono": true,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "wait"
        },
        {
         "indice": "4",
         "titulo": [
          {
           "texto": "Queda registrado con dos marcas",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "La hora en que lo hiciste y la hora en que llegó.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "todo",
           "runs": [
            {
             "texto": "Falta",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "todo"
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Las dos marcas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "record-marks",
       "runs": [
        {
         "texto": "hecho ayer, 8:40 p.m. · la segunda marca llega cuando vuelva la señal.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "p",
       "runs": [
        {
         "texto": "Si nunca hubo señal, el sistema informa \"no se pudo subir\", no \"no entregó\".",
         "mono": false,
         "negrita": true
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "flujo-estudiante-subido",
   "archivo": "flujo-estudiante-subido.html",
   "titulo": "Flujo · estudiante · las dos marcas",
   "rol": "estudiante",
   "pestana": "flujo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Cómo se guarda y se sube",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Cuatro pasos encadenados. Lo que cambia es cuándo llega, no si lo hiciste.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "pasos",
       "items": [
        {
         "indice": "1",
         "titulo": [
          {
           "texto": "Escribes",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Con o sin señal. Nada se pierde por estar sin conexión.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        },
        {
         "indice": "2",
         "titulo": [
          {
           "texto": "Se guarda en este teléfono",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "Guardada en este teléfono ayer, 8:40 p.m.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        },
        {
         "indice": "3",
         "titulo": [
          {
           "texto": "Vuelve la señal y se sube sola",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "No hay que volver a guardar ni buscar señal.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        },
        {
         "indice": "4",
         "titulo": [
          {
           "texto": "Queda registrado con dos marcas",
           "mono": false,
           "negrita": false
          }
         ],
         "nota": [
          {
           "texto": "La hora en que lo hiciste y la hora en que llegó.",
           "mono": false,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Hecho",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "marca": "done"
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Las dos marcas",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "record-marks",
       "runs": [
        {
         "texto": "hecho ayer, 8:40 p.m. · subido hoy, 7:12 a.m.",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "p",
       "runs": [
        {
         "texto": "Si nunca hubo señal, el sistema informa \"no se pudo subir\", no \"no entregó\".",
         "mono": false,
         "negrita": true
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  },
  {
   "id": "tiempo-docente-solicitud-resuelta",
   "archivo": "tiempo-docente-solicitud-resuelta.html",
   "titulo": "Tiempo · docente · resuelta por ti",
   "rol": "docente",
   "pestana": "tiempo",
   "contenido": [
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h1",
       "runs": [
        {
         "texto": "Solicitudes de tiempo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "lead",
       "runs": [
        {
         "texto": "Los motivos de conexión no pasan por ti: el sistema los resuelve en el momento.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    },
    {
     "t": "capa",
     "hijos": [
      {
       "t": "texto",
       "estilo": "h2",
       "runs": [
        {
         "texto": "Grupo de ejemplo",
         "mono": false,
         "negrita": false
        }
       ]
      },
      {
       "t": "grupo",
       "filas": [
        {
         "nombre": [
          {
           "texto": "Yuliana R. · ",
           "mono": false,
           "negrita": false
          },
          {
           "texto": "No tuve señal",
           "mono": true,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Resuelta al instante",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Se sumaron 2 días en el momento. Queda registrado el motivo, no una justificación.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        },
        {
         "nombre": [
          {
           "texto": "Deivis M. · ",
           "mono": false,
           "negrita": false
          },
          {
           "texto": "Trabajo o cuidado",
           "mono": true,
           "negrita": false
          }
         ],
         "badges": [
          {
           "k": "done",
           "runs": [
            {
             "texto": "Resuelta por ti",
             "mono": false,
             "negrita": false
            }
           ]
          }
         ],
         "notas": [
          [
           {
            "texto": "Sumaste 2 días a su tiempo de trabajo. Queda registrado el motivo, no una justificación.",
            "mono": false,
            "negrita": false
           }
          ]
         ],
         "propia": false,
         "botones": []
        }
       ]
      },
      {
       "t": "texto",
       "estilo": "note",
       "runs": [
        {
         "texto": "Una solicitud de conexión llega resuelta y con su motivo. Nunca te llega como culpa de nadie.",
         "mono": false,
         "negrita": false
        }
       ]
      }
     ]
    }
   ],
   "cabecera": {
    "marca": [
     {
      "texto": "Ruta",
      "mono": false,
      "negrita": false
     }
    ],
    "meta": [
     {
      "texto": "Unidad 2 · Lengua y escritura académica",
      "mono": false,
      "negrita": false
     }
    ],
    "roles": [
     {
      "runs": [
       {
        "texto": "Estudiante",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": false,
      "acciones": {
       "data-action": "rol",
       "data-rol": "estudiante"
      }
     },
     {
      "runs": [
       {
        "texto": "Docente",
        "mono": false,
        "negrita": false
       }
      ],
      "activo": true,
      "acciones": {
       "data-action": "rol",
       "data-rol": "docente"
      }
     }
    ]
   },
   "tabs": [
    {
     "runs": [
      {
       "texto": "Entrega",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "entrega"
     }
    },
    {
     "runs": [
      {
       "texto": "Curso",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "curso"
     }
    },
    {
     "runs": [
      {
       "texto": "Tiempo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": true,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "tiempo"
     }
    },
    {
     "runs": [
      {
       "texto": "Flujo",
       "mono": false,
       "negrita": false
      }
     ],
     "activo": false,
     "acciones": {
      "data-action": "pantalla",
      "data-pantalla": "flujo"
     }
    }
   ],
   "pie": {
    "nota": [
     {
      "texto": "Prototipo de investigación sobre la exigencia de conexión en la plataforma del curso. Datos de ejemplo guardados solo en este navegador: sin telemetría y sin datos personales reales.",
      "mono": false,
      "negrita": false
     }
    ],
    "boton": null
   }
  }
 ]
};

// @ts-check
/* motor.js — arma el prototipo «Ruta» dentro de Figma.
 *
 * Se une con datos.js para producir code.js, que es lo que Figma carga:
 *   node armar.js        (o npm run armar)
 *
 * Lo que hace: un cuadro editable por pantalla y por estado, con auto-layout,
 * los textos y colores del prototipo, estilos locales (Ruta/…) y las
 * interacciones conectadas — pestañas, cambio de rol, guardar la entrega, pedir
 * más tiempo, resolver una solicitud desde el lado del docente.
 *
 * Lo que no hace: no es una captura del HTML. Reconstruye el diseño con piezas
 * nativas de Figma, así que hay diferencias —las bandas no llegan a los bordes,
 * ni hay sombras ni degradados— y no crea componentes.
 *
 * Regla de oro del auto-layout: primero se añade el nodo al marco y solo
 * después se le puede pedir que ocupe el ancho (FILL). Al revés, Figma lanza un
 * error. Por eso todo pasa por `meter()`.
 */

(async function () {
  'use strict';

  /** @type {any} */
  var datos = DATOS;
  var PALETA = /** @type {Record<string, string>} */ (datos.paleta);

  var PAGINA = 'Ruta · prototipo';
  var ANCHO = 500;   // --shell del prototipo
  var PAD = 16;      // --sp-4

  var PESOS = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];

  var ESTILOS = {
    'h1': { sz: 34, peso: 'SemiBold', lh: 1.2, color: 'fg', ls: -0.5 },
    'h2': { sz: 21, peso: 'SemiBold', lh: 1.3, color: 'fg', ls: -0.5 },
    'h3': { sz: 18, peso: 'Medium', lh: 1.35, color: 'fg', ls: -0.5 },
    'p': { sz: 18, peso: 'Regular', lh: 1.6, color: 'fg' },
    'lead': { sz: 18, peso: 'Regular', lh: 1.6, color: 'muted' },
    'note': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted' },
    'answer': { sz: 20, peso: 'Medium', lh: 1.45, color: 'fg' },
    'brand': { sz: 22, peso: 'SemiBold', lh: 1.3, color: 'fg', ls: -0.5 },
    'brand-meta': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'meta': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'num': { sz: 18, peso: 'Regular', lh: 1.5, color: 'fg', mono: true },
    'record-marks': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'route-num': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'step-index': { sz: 15, peso: 'Regular', lh: 1.75, color: 'muted', mono: true },
    'group-name': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'fg' },
    'field-title': { sz: 15, peso: 'SemiBold', lh: 1.5, color: 'fg' },
    'time-figure': { sz: 30, peso: 'Light', lh: 1.25, color: 'fg', ls: -0.5 },
    'time-state': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'fg' },
    'time-state-pausado': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'signalInk' },
    'plain': { sz: 18, peso: 'Regular', lh: 1.6, color: 'fg' },
  };

  var BADGES = {
    done: { fill: 'done', color: 'onSolid', radius: 999, padH: 12, sz: 15, peso: 'Bold' },
    wait: { fill: 'signalTint', color: 'signalInk', radius: 999, padH: 12, sz: 15, peso: 'Bold' },
    blocked: { fill: 'surface2', color: 'fg', radius: 4, padH: 8, sz: 15, peso: 'Bold' },
    todo: { fill: null, color: 'muted', radius: 0, padH: 0, sz: 15, peso: 'Bold' },
  };

  var BOTONES = {
    primary: { fill: 'accent', color: 'onSolid', peso: 'Bold', radio: 8, alto: 52, padH: 24, centrado: true },
    secondary: { fill: 'surface2', color: 'fg', peso: 'Bold', radio: 8, alto: 52, padH: 24, centrado: true },
    option: { fill: null, color: 'fg', peso: 'Medium', radio: 8, alto: 52, padH: 12, centrado: false },
    quiet: { fill: null, color: 'fg', peso: 'Medium', radio: 8, alto: 40, padH: 8, centrado: false },
    switch: { fill: null, color: 'muted', peso: 'Medium', radio: 0, alto: 52, padH: 0, centrado: false },
    tab: { fill: null, color: 'muted', peso: 'Medium', radio: 0, alto: 52, padH: 0, centrado: true },
  };

  // ── fuentes ─────────────────────────────────────────────────────────────

  var fuentesCuerpo = /** @type {Record<string, FontName>} */ ({});
  var fuenteMono = /** @type {FontName|null} */ (null);
  var familiaUsada = '';

  async function cargarPeso(familia, peso) {
    var fuente = { family: familia, style: peso };
    await figma.loadFontAsync(fuente);
    return fuente;
  }

  async function prepararFuentes() {
    var candidatas = ['Oswald', 'Inter'];
    for (var i = 0; i < candidatas.length; i++) {
      var cargadas = /** @type {Record<string, FontName>} */ ({});
      var fallo = false;
      for (var j = 0; j < PESOS.length; j++) {
        try {
          cargadas[PESOS[j]] = await cargarPeso(candidatas[i], PESOS[j]);
        } catch (e) {
          fallo = true;
          break;
        }
      }
      if (!fallo) {
        fuentesCuerpo = cargadas;
        familiaUsada = candidatas[i];
        break;
      }
    }
    if (!fuentesCuerpo.Regular) {
      fuentesCuerpo = { Regular: await cargarPeso('Inter', 'Regular') };
      familiaUsada = 'Inter';
    }
    PESOS.forEach(function (peso) {
      if (!fuentesCuerpo[peso]) { fuentesCuerpo[peso] = fuentesCuerpo.Regular; }
    });

    var monos = ['Roboto Mono', 'JetBrains Mono', 'Source Code Pro', 'Cascadia Mono', 'Inter'];
    for (var k = 0; k < monos.length; k++) {
      try {
        fuenteMono = await cargarPeso(monos[k], 'Regular');
        break;
      } catch (e) { /* se prueba la siguiente */ }
    }
  }

  /** @param {string} peso @param {boolean} [mono] */
  function fuenteDe(peso, mono) {
    if (mono && fuenteMono) { return fuenteMono; }
    return fuentesCuerpo[peso] || fuentesCuerpo.Regular;
  }

  // ── color ───────────────────────────────────────────────────────────────

  function hexARgb(hex) {
    var limpio = String(hex).replace('#', '');
    return {
      r: parseInt(limpio.substring(0, 2), 16) / 255,
      g: parseInt(limpio.substring(2, 4), 16) / 255,
      b: parseInt(limpio.substring(4, 6), 16) / 255,
    };
  }

  /** @returns {Paint[]} */
  function relleno(color) {
    return [{ type: 'SOLID', color: hexARgb(PALETA[color] || color) }];
  }

  /** @param {any[]} runs */
  function textoPlano(runs) {
    return (runs || []).map(function (r) { return r.texto; }).join('');
  }

  // ── piezas base ─────────────────────────────────────────────────────────

  /**
   * Añade un nodo a un marco y, si el marco apila en vertical, le pide que ocupe
   * el ancho. Siempre en ese orden: Figma no deja pedir FILL antes de tener
   * padre con auto-layout.
   * @param {any} padre @param {any} nodo @param {'fill'|'hug'} [ancho]
   */
  function meter(padre, nodo, ancho) {
    padre.appendChild(nodo);
    var vertical = padre.type === 'FRAME' && padre.layoutMode === 'VERTICAL';
    if (vertical && ancho !== 'hug') {
      try {
        if (nodo.type === 'TEXT' || nodo.type === 'FRAME') {
          nodo.layoutSizingHorizontal = 'FILL';
        }
      } catch (e) { /* se queda con su ancho natural */ }
    }
    return nodo;
  }

  /**
   * @param {{dir?: 'VERTICAL'|'HORIZONTAL', gap?: number, pad?: number|number[],
   *          fill?: string|null, radius?: number, ancho?: number,
   *          entreExtremos?: boolean, centrar?: boolean, envolver?: boolean}} opciones
   */
  function marco(opciones) {
    var o = opciones || {};
    var f = figma.createFrame();
    f.layoutMode = o.dir || 'VERTICAL';
    f.primaryAxisSizingMode = 'AUTO';
    f.counterAxisSizingMode = 'FIXED';
    f.itemSpacing = typeof o.gap === 'number' ? o.gap : 0;
    if (typeof o.pad === 'number') {
      f.paddingTop = f.paddingBottom = f.paddingLeft = f.paddingRight = o.pad;
    } else if (Array.isArray(o.pad)) {
      f.paddingTop = o.pad[0]; f.paddingRight = o.pad[1];
      f.paddingBottom = o.pad[2]; f.paddingLeft = o.pad[3];
    }
    if (o.entreExtremos && f.layoutMode === 'HORIZONTAL') {
      f.primaryAxisAlignItems = 'SPACE_BETWEEN';
    }
    if (o.centrar) { f.counterAxisAlignItems = 'CENTER'; }
    if (o.envolver && f.layoutMode === 'HORIZONTAL') { f.layoutWrap = 'WRAP'; }
    f.fills = o.fill === null || o.fill === undefined ? [] : relleno(o.fill);
    f.cornerRadius = typeof o.radius === 'number' ? o.radius : 0;
    f.clipsContent = false;
    if (typeof o.ancho === 'number') { f.counterAxisSizingMode = 'FIXED'; f.resize(o.ancho, f.height); }
    return f;
  }

  /** Aplica los tramos monoespaciados y en negrita que trae el HTML. */
  function marcarTramos(nodo, runs) {
    var desde = 0;
    (runs || []).forEach(function (r) {
      var hasta = desde + r.texto.length;
      if (r.mono && fuenteMono) { nodo.setRangeFontName(desde, hasta, fuenteMono); }
      if (r.negrita) { nodo.setRangeFontName(desde, hasta, fuenteDe('Bold', false)); }
      desde = hasta;
    });
  }

  /**
   * @param {any[]} runs @param {string} estilo
   * @param {{mono?: boolean, color?: string, alineado?: 'LEFT'|'CENTER', peso?: string}} [extra]
   */
  function texto(runs, estilo, extra) {
    var e = extra || {};
    var def = ESTILOS[estilo] || ESTILOS['p'];
    var mono = e.mono || def.mono || false;
    var nodo = figma.createText();
    nodo.fontName = fuenteDe(e.peso || def.peso, mono);
    nodo.characters = textoPlano(runs) || ' ';
    nodo.fontSize = def.sz;
    nodo.lineHeight = { unit: 'PERCENT', value: def.lh * 100 };
    if (def.ls) { nodo.letterSpacing = { unit: 'PERCENT', value: def.ls }; }
    nodo.fills = relleno(e.color || def.color);
    nodo.textAutoResize = 'HEIGHT';
    if (e.alineado) { nodo.textAlignHorizontal = e.alineado; }
    marcarTramos(nodo, runs);
    return nodo;
  }

  function subrayar(nodo) {
    var largo = nodo.characters.length;
    nodo.setRangeTextDecoration(0, largo, 'UNDERLINE');
    nodo.setRangeTextDecorationThickness(0, largo, { value: 3, unit: 'PIXELS' });
    nodo.setRangeTextDecorationOffset(0, largo, { value: 6, unit: 'PIXELS' });
    nodo.setRangeTextDecorationColor(0, largo, nodo.fills[0]);
  }

  function badge(b) {
    var def = BADGES[b.k] || BADGES.todo;
    var caja = marco({ dir: 'HORIZONTAL', fill: def.fill, radius: def.radius,
                       centrar: true });
    caja.paddingLeft = caja.paddingRight = def.padH;
    caja.paddingTop = caja.paddingBottom = 3;
    var etiqueta = texto(b.runs, 'note', { color: def.color, peso: def.peso });
    etiqueta.fontSize = def.sz;
    caja.appendChild(etiqueta);
    return caja;
  }

  /** Fila de marcas, con salto de línea si no caben. */
  function filaMarcas(padre, lista, ancho) {
    var fila = marco({ dir: 'HORIZONTAL', gap: 8, centrar: true, envolver: true });
    meter(padre, fila, ancho);
    (lista || []).forEach(function (x) { fila.appendChild(badge(x)); });
    return fila;
  }

  /** Un botón o un control. Se registra solo, para conectar sus acciones luego. */
  function boton(b) {
    var def = BOTONES[b.k] || BOTONES.option;
    var caja = marco({ dir: 'HORIZONTAL', fill: def.fill, radius: def.radio,
                       centrar: true });
    caja.counterAxisSizingMode = 'FIXED';
    caja.paddingLeft = caja.paddingRight = def.padH;
    caja.resize(caja.width, def.alto);
    var activo = !!b.activo;
    var color = activo ? 'fg' : def.color;
    var etiqueta = texto(b.runs, b.k === 'tab' ? 'note' : 'p', {
      color: color,
      peso: activo ? 'SemiBold' : def.peso,
      alineado: def.centrado ? 'CENTER' : 'LEFT',
    });
    etiqueta.fontSize = b.k === 'tab' ? 15 : 18;
    etiqueta.lineHeight = { unit: 'PERCENT', value: (b.k === 'tab' ? 1.5 : 1.6) * 100 };
    if (activo || b.k === 'quiet') { subrayar(etiqueta); }
    caja.appendChild(etiqueta);
    registrar(caja, b.acciones);
    return caja;
  }

  // ── dibujo de bloques ───────────────────────────────────────────────────

  /** @param {any} padre @param {any} b */
  function dibujar(padre, b) {
    if (b.t === 'texto') {
      meter(padre, texto(b.runs, b.estilo));
      return;
    }

    if (b.t === 'marcas') {
      filaMarcas(padre, b.badges, 'fill');
      return;
    }

    if (b.t === 'boton') {
      meter(padre, boton(b), b.k === 'quiet' ? 'hug' : 'fill');
      return;
    }

    if (b.t === 'campo') {
      var campo = marco({ dir: 'VERTICAL', gap: 8 });
      meter(padre, campo, 'fill');
      if (b.runs && b.runs.length) { meter(campo, texto(b.runs, 'field-title')); }
      if (b.caja) {
        var caja = marco({ dir: 'VERTICAL', fill: 'surface1', radius: 8 });
        caja.paddingLeft = caja.paddingRight = 16;
        caja.paddingTop = caja.paddingBottom = 12;
        meter(campo, caja, 'fill');
        // el alto del campo de la reseña viene del prototipo (min-height 220 px)
        caja.minHeight = textoPlano(b.caja).length > 40 ? 220 : 52;
        if (textoPlano(b.caja).length) {
          meter(caja, texto(b.caja, 'p'));
        }
      }
      if (b.nota && b.nota.length) { meter(campo, texto(b.nota, 'note')); }
      if (b.conmutador && b.conmutador.length) {
        var grupo = marco({ dir: 'HORIZONTAL', gap: 24 });
        meter(campo, grupo, 'fill');
        b.conmutador.forEach(function (o) {
          grupo.appendChild(boton({ k: 'switch', runs: o.runs, activo: o.activo,
                                    acciones: o.acciones }));
        });
      }
      return;
    }

    if (b.t === 'barra') {
      var barra = marco({ dir: 'HORIZONTAL', fill: 'surface2', radius: 999 });
      barra.counterAxisSizingMode = 'FIXED';
      meter(padre, barra, 'fill');
      barra.resize(ANCHO - PAD * 2, 14);
      var avance = marco({ dir: 'HORIZONTAL', fill: b.baja ? 'signal' : 'fg', radius: 999 });
      avance.counterAxisSizingMode = 'FIXED';
      avance.resize(Math.max(2, (ANCHO - PAD * 2) * b.pct / 100), 14);
      barra.appendChild(avance);
      return;
    }

    if (b.t === 'capa' || b.t === 'banda') {
      var esBanda = b.t === 'banda';
      var caja2 = marco({
        dir: 'VERTICAL',
        gap: esBanda ? 12 : 12,
        fill: esBanda ? 'surface1' : null,
        pad: esBanda ? 16 : 0,
      });
      meter(padre, caja2, 'fill');
      (b.hijos || []).forEach(function (hijo) { dibujar(caja2, hijo); });
      return;
    }

    if (b.t === 'ruta') {
      var ruta = marco({ dir: 'VERTICAL', gap: 32 });
      meter(padre, ruta, 'fill');
      (b.items || []).forEach(function (item) {
        var caja3 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(ruta, caja3, 'fill');
        if (item.bloqueado) {
          caja3.fills = relleno('surface1');
          caja3.paddingTop = caja3.paddingBottom = 16;
          caja3.paddingLeft = caja3.paddingRight = 16;
        }
        var cabeza = marco({ dir: 'HORIZONTAL', gap: 12, entreExtremos: true });
        meter(caja3, cabeza, 'fill');
        var izquierda = marco({ dir: 'VERTICAL', gap: 4 });
        cabeza.appendChild(izquierda);
        meter(izquierda, texto(item.num, 'route-num'));
        meter(izquierda, texto(item.titulo, 'h3'));
        if (item.badges && item.badges.length) {
          filaMarcas(cabeza, item.badges, 'hug');
        }
        if (item.nota && item.nota.length) { meter(caja3, texto(item.nota, 'note')); }
        if (item.motivo && item.motivo.length) { meter(caja3, texto(item.motivo, 'p')); }
      });
      return;
    }

    if (b.t === 'grupo') {
      var grupo2 = marco({ dir: 'VERTICAL', gap: 24 });
      meter(padre, grupo2, 'fill');
      (b.filas || []).forEach(function (fila) {
        var caja4 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(grupo2, caja4, 'fill');
        if (fila.propia) {
          caja4.fills = relleno('surface1');
          caja4.paddingTop = caja4.paddingBottom = 12;
          caja4.paddingLeft = caja4.paddingRight = 16;
        }
        if (fila.nombre && fila.nombre.length) {
          meter(caja4, texto(fila.nombre, 'group-name'));
        }
        if (fila.badges && fila.badges.length) { filaMarcas(caja4, fila.badges, 'fill'); }
        (fila.notas || []).forEach(function (nota) {
          meter(caja4, texto(nota, 'record-marks'));
        });
        (fila.botones || []).forEach(function (btn) {
          meter(caja4, boton(btn), 'fill');
        });
      });
      return;
    }

    if (b.t === 'pasos') {
      var pasos = marco({ dir: 'VERTICAL', gap: 32 });
      meter(padre, pasos, 'fill');
      (b.items || []).forEach(function (item) {
        var fila2 = marco({ dir: 'HORIZONTAL', gap: 16 });
        meter(pasos, fila2, 'fill');
        var indice = marco({ dir: 'VERTICAL' });
        indice.resize(24, indice.height);
        fila2.appendChild(indice);
        meter(indice, texto([{ texto: item.indice, mono: true }], 'step-index'));
        var cuerpo = marco({ dir: 'VERTICAL', gap: 8 });
        meter(fila2, cuerpo, 'fill');
        meter(cuerpo, texto(item.titulo, 'h2'));
        if (item.nota && item.nota.length) { meter(cuerpo, texto(item.nota, 'note')); }
        if (item.badges && item.badges.length) { filaMarcas(cuerpo, item.badges, 'fill'); }
      });
      return;
    }

    if (b.t === 'registros') {
      var registros = marco({ dir: 'VERTICAL', gap: 24 });
      meter(padre, registros, 'fill');
      (b.items || []).forEach(function (item) {
        var caja5 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(registros, caja5, 'fill');
        if (item.badges && item.badges.length) { filaMarcas(caja5, item.badges, 'fill'); }
        (item.notas || []).forEach(function (nota) {
          meter(caja5, texto(nota, 'record-marks'));
        });
      });
      return;
    }

    if (b.t === 'hechos') {
      var hechos = marco({ dir: 'VERTICAL', gap: 16 });
      meter(padre, hechos, 'fill');
      (b.items || []).forEach(function (item) {
        var caja6 = marco({ dir: 'VERTICAL', gap: 4 });
        meter(hechos, caja6, 'fill');
        meter(caja6, texto(item.dt, 'field-title'));
        meter(caja6, texto(item.dd, item.plano ? 'plain' : 'record-marks'));
      });
      return;
    }

    meter(padre, texto([{ texto: '[bloque sin dibujar: ' + b.t + ']' }], 'note'));
  }

  // ── interacciones ───────────────────────────────────────────────────────

  /** @type {Record<string, any>} */ var marcos = {};
  /** @type {Record<string, any[]>} */ var conectables = {};
  /** @type {Record<string, string>} */ var porPestanaYrol = {};
  /** @type {any[]} */ var pendientes = [];

  /** @param {any} nodo @param {any} acciones */
  function registrar(nodo, acciones) {
    if (acciones && Object.keys(acciones).length) {
      pendientes.push({ nodo: nodo, acciones: acciones });
    }
  }

  function porPestana(pestana, rol) {
    return porPestanaYrol[pestana + '|' + rol] || null;
  }

  /** El conmutador de conexión dice si el teléfono tiene señal en esta pantalla. */
  function estadoConexion(p) {
    var enLinea = true;
    (function recorrer(bloques) {
      (bloques || []).forEach(function (b) {
        (b.conmutador || []).forEach(function (o) {
          var acc = o.acciones || {};
          if (acc['data-action'] === 'conexion' && o.activo) {
            enLinea = acc['data-en-linea'] === 'si';
          }
        });
        if (b.hijos) { recorrer(b.hijos); }
      });
    })(p.contenido);
    return enLinea;
  }

  /** A dónde lleva cada acción del prototipo. */
  function destino(p, acc, enLinea) {
    if (!acc) { return null; }
    var accion = acc['data-action'];
    if (accion === 'pantalla') {
      return porPestana(acc['data-pantalla'], p.rol) || porPestana(acc['data-pantalla'], 'estudiante');
    }
    if (accion === 'rol') { return porPestana(p.pestana, acc['data-rol']); }
    if (accion === 'conexion') {
      if (acc['data-en-linea'] === 'si') {
        return p.id === 'entrega-estudiante-guardado-sin-senal'
          ? 'entrega-estudiante-entregado-dos-marcas'
          : p.id;
      }
      return 'entrega-estudiante-guardado-sin-senal';
    }
    if (accion === 'guardar') {
      if (p.id === 'entrega-estudiante-guardado-sin-senal') {
        return 'entrega-estudiante-entregado-dos-marcas';
      }
      return enLinea ? 'entrega-estudiante-entregado-dos-marcas'
                     : 'entrega-estudiante-guardado-sin-senal';
    }
    if (accion === 'motivos') { return 'tiempo-estudiante-motivos-abierto'; }
    if (accion === 'motivo') {
      return acc['data-motivo'] === 'conexion'
        ? 'tiempo-estudiante-solicitud-resuelta'
        : 'tiempo-docente';
    }
    if (accion === 'sumar-docente') { return 'tiempo-docente-solicitud-resuelta'; }
    if (accion === 'reiniciar') { return 'entrega-estudiante'; }
    return null;
  }

  // ── una pantalla completa ───────────────────────────────────────────────

  function construir(p) {
    pendientes = [];
    var raiz = marco({ dir: 'VERTICAL', fill: 'bg', ancho: ANCHO });
    raiz.name = p.titulo;

    var cabecera = marco({ dir: 'VERTICAL', gap: 16, fill: 'bg', pad: [24, PAD, 16, PAD] });
    meter(raiz, cabecera, 'fill');
    var marcaFila = marco({ dir: 'HORIZONTAL', gap: 12, entreExtremos: true });
    meter(cabecera, marcaFila, 'fill');
    meter(marcaFila, texto(p.cabecera.marca, 'brand'), 'hug');
    meter(marcaFila, texto(p.cabecera.meta, 'brand-meta'), 'hug');
    var roles = marco({ dir: 'HORIZONTAL', gap: 24 });
    cabecera.appendChild(roles);
    (p.cabecera.roles || []).forEach(function (o) {
      roles.appendChild(boton({ k: 'switch', runs: o.runs, activo: o.activo,
                                acciones: o.acciones }));
    });

    var contenido = marco({ dir: 'VERTICAL', gap: 48, fill: 'bg', pad: [8, PAD, 64, PAD] });
    meter(raiz, contenido, 'fill');
    (p.contenido || []).forEach(function (b) { dibujar(contenido, b); });

    var tabs = marco({ dir: 'HORIZONTAL', gap: 16, fill: 'bg', pad: [12, PAD, 12, PAD] });
    meter(raiz, tabs, 'fill');
    (p.tabs || []).forEach(function (t) {
      var nodo = boton({ k: 'tab', runs: t.runs, activo: t.activo, acciones: t.acciones });
      tabs.appendChild(nodo);
      nodo.layoutSizingHorizontal = 'FILL';
      var etiqueta = nodo.children[0];
      if (etiqueta && etiqueta.type === 'TEXT') {
        etiqueta.layoutSizingHorizontal = 'FILL';
        etiqueta.textAlignHorizontal = 'CENTER';
      }
    });

    var pie = marco({ dir: 'VERTICAL', gap: 16, fill: 'bg', pad: [48, PAD, 64, PAD] });
    meter(raiz, pie, 'fill');
    if (p.pie.nota && p.pie.nota.length) { meter(pie, texto(p.pie.nota, 'note')); }
    if (p.pie.boton) { meter(pie, boton(p.pie.boton), 'hug'); }

    conectables[p.id] = pendientes.slice();
    return raiz;
  }

  // ── estilos locales del documento ───────────────────────────────────────

  async function crearEstilos() {
    try {
      var pinturas = await figma.getLocalPaintStylesAsync();
      if (!pinturas.some(function (s) { return s.name.indexOf('Ruta/color/') === 0; })) {
        Object.keys(PALETA).forEach(function (nombre) {
          var estilo = figma.createPaintStyle();
          estilo.name = 'Ruta/color/' + nombre;
          estilo.paints = relleno(nombre);
        });
      }
    } catch (e) {
      figma.notify('No pude crear los estilos de color: ' + e.message, { error: true });
    }
    try {
      var textos = await figma.getLocalTextStylesAsync();
      if (!textos.some(function (s) { return s.name.indexOf('Ruta/texto/') === 0; })) {
        Object.keys(ESTILOS).forEach(function (nombre) {
          var def = ESTILOS[nombre];
          var estilo = figma.createTextStyle();
          estilo.name = 'Ruta/texto/' + nombre;
          estilo.fontName = fuenteDe(def.peso, def.mono);
          estilo.fontSize = def.sz;
          estilo.lineHeight = { unit: 'PERCENT', value: def.lh * 100 };
        });
      }
    } catch (e) {
      figma.notify('No pude crear los estilos de texto: ' + e.message, { error: true });
    }
  }

  // ── montaje ─────────────────────────────────────────────────────────────

  function colocar(cuadros) {
    var columnas = 4;
    var x = 0;
    var y = 0;
    var alto = 0;
    cuadros.forEach(function (f, i) {
      if (i % columnas === 0) {
        x = 0;
        y = y + alto + 160;
        alto = 0;
      }
      f.x = x;
      f.y = y;
      alto = Math.max(alto, f.height);
      x = x + ANCHO + 160;
    });
  }

  async function principal() {
    await prepararFuentes();
    await crearEstilos();

    try {
      await figma.loadAllPagesAsync();
    } catch (e) { /* sin eso, igual se puede crear la página */ }
    try {
      figma.root.children
        .filter(function (p) { return p.name === PAGINA; })
        .forEach(function (p) { p.remove(); });
    } catch (e) {
      figma.notify('No pude borrar la página anterior: ' + e.message, { error: true });
    }

    var pagina = figma.createPage();
    pagina.name = PAGINA;
    await figma.setCurrentPageAsync(pagina);

    var todos = datos.pantallas.concat(datos.estados);
    datos.pantallas.forEach(function (p) {
      porPestanaYrol[p.pestana + '|' + p.rol] = p.id;
    });

    var enLinea = /** @type {Record<string, boolean>} */ ({});
    todos.forEach(function (p) {
      var marcoPantalla = construir(p);
      pagina.appendChild(marcoPantalla);
      marcos[p.id] = marcoPantalla;
      enLinea[p.id] = estadoConexion(p);
    });

    var cuadros = todos.map(function (p) { return marcos[p.id]; });
    colocar(cuadros);

    var aviso = figma.createText();
    aviso.fontName = fuenteDe('Regular');
    aviso.characters = 'Prototipo «Ruta» · ' + datos.pantallas.length + ' pantallas y '
      + datos.estados.length + ' estados.\n'
      + 'Recórrelo: selecciona el cuadro 1 y pulsa Presentar (▶). Las pestañas, el '
      + 'cambio de rol y los botones ya navegan entre cuadros.\n'
      + 'Familia tipográfica: ' + familiaUsada + '.';
    aviso.fontSize = 20;
    aviso.fills = relleno('muted');
    aviso.textAutoResize = 'WIDTH_AND_HEIGHT';
    pagina.appendChild(aviso);
    aviso.x = 0;
    aviso.y = -140;

    todos.forEach(function (p, i) {
      var etiqueta = figma.createText();
      etiqueta.fontName = fuenteDe('Regular');
      etiqueta.characters = (i + 1) + ' · ' + p.titulo;
      etiqueta.fontSize = 14;
      etiqueta.fills = relleno('muted');
      etiqueta.textAutoResize = 'WIDTH_AND_HEIGHT';
      pagina.appendChild(etiqueta);
      etiqueta.x = marcos[p.id].x;
      etiqueta.y = marcos[p.id].y - 30;
    });

    var conexiones = 0;
    var sinDestino = 0;
    todos.forEach(function (p) {
      (conectables[p.id] || []).forEach(function (registro) {
        var destinoId = destino(p, registro.acciones, enLinea[p.id]);
        var marcoDestino = destinoId ? marcos[destinoId] : null;
        if (!marcoDestino) { sinDestino = sinDestino + 1; return; }
        conexiones = conexiones + 1;
        registro.nodo.setReactionsAsync([{
          trigger: { type: 'ON_CLICK' },
          actions: [{
            type: 'NAVIGATE',
            destinationId: marcoDestino.id,
            navigation: 'NAVIGATE',
            transition: { type: 'DISSOLVE', easing: { type: 'EASE_IN_AND_OUT' }, duration: 0.2 },
            preserveScrollPosition: false,
          }],
        }]);
      });
    });

    figma.viewport.scrollAndZoomIntoView(cuadros);
    figma.notify('«Ruta» construido: ' + cuadros.length + ' cuadros, ' + conexiones
      + ' conexiones' + (sinDestino ? ' (' + sinDestino + ' sin destino)' : '')
      + '. Tipografía: ' + familiaUsada + '.');
    figma.closePlugin();
  }

  principal().catch(function (e) {
    figma.notify('No pude construir el prototipo: ' + e.message, { error: true });
    figma.closePlugin();
  });
})();
