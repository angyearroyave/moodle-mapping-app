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
