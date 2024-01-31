var APP_DATA = {
  "scenes": [
    {
      "id": "0--fachada-exterior",
      "name": " Fachada exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.47408001237821296,
        "pitch": -0.1114641148250115,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.0402355958043596,
          "pitch": -0.06584460654337221,
          "rotation": 0,
          "target": "1--ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1--ingreso",
      "name": " Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16823770182516995,
        "pitch": -0.0034142453207905987,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.022754980471267672,
          "pitch": 0.04346600635851594,
          "rotation": 0,
          "target": "2--palier-"
        },
        {
          "yaw": -0.32025588112284,
          "pitch": -0.049928512066731656,
          "rotation": 5.497787143782138,
          "target": "4-ingreso-direccin-gabinete-y-planta-lata-"
        },
        {
          "yaw": 2.973724821415269,
          "pitch": -0.062320886707508905,
          "rotation": 0,
          "target": "0--fachada-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--palier-",
      "name": " palier ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0337667400349204,
          "pitch": -0.20325423423634348,
          "rotation": 5.497787143782138,
          "target": "4-ingreso-direccin-gabinete-y-planta-lata-"
        },
        {
          "yaw": -0.2956865119488281,
          "pitch": -0.07209144882986962,
          "rotation": 0,
          "target": "3--comedor"
        },
        {
          "yaw": 3.0119701004684067,
          "pitch": 0.03680088387803693,
          "rotation": 0,
          "target": "1--ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--comedor",
      "name": " comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0249672547487156,
          "pitch": 0.051149591099921565,
          "rotation": 0,
          "target": "2--palier-"
        },
        {
          "yaw": -0.10635456607263549,
          "pitch": 0.09751459311676136,
          "rotation": 0,
          "target": "9--patio-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ingreso-direccin-gabinete-y-planta-lata-",
      "name": "Ingreso dirección, gabinete y planta lata ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03566709895005893,
          "pitch": -0.0017142884962915161,
          "rotation": 0,
          "target": "5-hall-gabinete-direccin-aula-pb"
        },
        {
          "yaw": -1.820423318942579,
          "pitch": 0.007201068576311087,
          "rotation": 0,
          "target": "1--ingreso"
        },
        {
          "yaw": 1.8073187428152258,
          "pitch": 0.09145989247930508,
          "rotation": 0,
          "target": "3--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall-gabinete-direccin-aula-pb",
      "name": "Hall gabinete, dirección, aula PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.24042800920330087,
        "pitch": 0.1115056222602,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.2408451417059183,
          "pitch": 0.021621661791620284,
          "rotation": 0,
          "target": "8-aula-pb"
        },
        {
          "yaw": -1.9301535273004546,
          "pitch": 0.027202381047661817,
          "rotation": 0,
          "target": "7-gabinete"
        },
        {
          "yaw": -2.9137739965893985,
          "pitch": 0.07358085220952759,
          "rotation": 0,
          "target": "4-ingreso-direccin-gabinete-y-planta-lata-"
        },
        {
          "yaw": 1.7862375780140116,
          "pitch": -0.03881851303374617,
          "rotation": 0,
          "target": "6--direccin-escuela-"
        },
        {
          "yaw": -0.17122436639555616,
          "pitch": -0.3397597950530802,
          "rotation": 0,
          "target": "10-escalera-escuela-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6--direccin-escuela-",
      "name": " Dirección escuela ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0979521518976405,
        "pitch": 0.11403984094792818,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.1054206365449026,
          "pitch": 0.08683221730898083,
          "rotation": 0,
          "target": "5-hall-gabinete-direccin-aula-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gabinete",
      "name": "Gabinete",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.017932919682019488,
        "pitch": -0.0025927675858365973,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.9827302665893214,
          "pitch": 0.15676486636625064,
          "rotation": 0,
          "target": "5-hall-gabinete-direccin-aula-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-aula-pb",
      "name": "Aula PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.448216122867696,
          "pitch": 0.125540034926793,
          "rotation": 0,
          "target": "5-hall-gabinete-direccin-aula-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9--patio-",
      "name": " Patio ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1391497053284354,
          "pitch": 0.017803115722500706,
          "rotation": 0,
          "target": "3--comedor"
        },
        {
          "yaw": -0.34504364743713367,
          "pitch": -0.004514448330976251,
          "rotation": 0,
          "target": "17-ingreso-aulas-formacin-integral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-escalera-escuela-i",
      "name": "Escalera escuela I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.880874185366153,
          "pitch": 0.3152756037080131,
          "rotation": 3.141592653589793,
          "target": "5-hall-gabinete-direccin-aula-pb"
        },
        {
          "yaw": 0.1653758960716729,
          "pitch": -0.5504499764032751,
          "rotation": 0.7853981633974483,
          "target": "12-aulas-pa-escuela---frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-aula-i-pa-escuela",
      "name": "Aula I PA Escuela",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9611928933883505,
          "pitch": -0.10756100044172179,
          "rotation": 0,
          "target": "12-aulas-pa-escuela---frente"
        },
        {
          "yaw": 3.139177980311347,
          "pitch": -0.1339758298109679,
          "rotation": 0,
          "target": "15-aula-ii-pa-escuela-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-aulas-pa-escuela---frente",
      "name": "Aulas PA escuela - frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1775965519999323,
          "pitch": -0.131710915824776,
          "rotation": 3.141592653589793,
          "target": "5-hall-gabinete-direccin-aula-pb"
        },
        {
          "yaw": -0.37916134751822383,
          "pitch": -0.03682249852304409,
          "rotation": 0,
          "target": "11-aula-i-pa-escuela"
        },
        {
          "yaw": 0.3324392716140707,
          "pitch": -0.019185565916014724,
          "rotation": 0,
          "target": "15-aula-ii-pa-escuela-"
        },
        {
          "yaw": -1.3245665309815955,
          "pitch": 0.017506929756351042,
          "rotation": 0,
          "target": "29-015-bao-de-arriba"
        },
        {
          "yaw": -3.1149764508172524,
          "pitch": 0.02525747790084054,
          "rotation": 0,
          "target": "14-ingreso-aula-primaria-pa---atrs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-aula-escuela-pa---atrs",
      "name": "Aula Escuela PA - atrás",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.13891396087301366,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.939884652340737,
          "pitch": -0.09055373844780767,
          "rotation": 0,
          "target": "14-ingreso-aula-primaria-pa---atrs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ingreso-aula-primaria-pa---atrs",
      "name": "Ingreso Aula Primaria PA - atrás",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.04508990992116324,
        "pitch": 0.19425396080187696,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.0213389834726065,
          "pitch": 0.08503350248351005,
          "rotation": 0,
          "target": "12-aulas-pa-escuela---frente"
        },
        {
          "yaw": 0.37842600751895006,
          "pitch": -0.011257891325740843,
          "rotation": 0.7853981633974483,
          "target": "13-aula-escuela-pa---atrs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-aula-ii-pa-escuela-",
      "name": "Aula II PA Escuela ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15362509473598607,
        "pitch": 0.13431359044979274,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.6577707032218427,
          "pitch": -0.013435458535186129,
          "rotation": 0,
          "target": "11-aula-i-pa-escuela"
        },
        {
          "yaw": 2.6671472630015494,
          "pitch": -0.0025427117354084317,
          "rotation": 0,
          "target": "12-aulas-pa-escuela---frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bao-escuela-pa",
      "name": "Baño escuela PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.23867506948791828,
        "pitch": 0.20783250238478246,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.1808792598551605,
          "pitch": 0.0711796182196256,
          "rotation": 0,
          "target": "29-015-bao-de-arriba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ingreso-aulas-formacin-integral",
      "name": "Ingreso aulas formación integral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.5036651300690913,
          "pitch": 0.030461158450291848,
          "rotation": 0,
          "target": "30-bao-adaptado"
        },
        {
          "yaw": -0.9709506190065511,
          "pitch": -0.028407486482942446,
          "rotation": 0,
          "target": "18--escaleras--fi"
        },
        {
          "yaw": 0.4030315051807669,
          "pitch": 0.14459870852517298,
          "rotation": 0,
          "target": "20-ingreso-aulas-formacin-integral-pb"
        },
        {
          "yaw": 2.8574598883478632,
          "pitch": 0.02357666856772589,
          "rotation": 0,
          "target": "9--patio-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18--escaleras--fi",
      "name": " Escaleras  FI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.38290386650896124,
        "pitch": -0.08616867560056463,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.965843036699976,
          "pitch": 0.3493537471754671,
          "rotation": 0,
          "target": "17-ingreso-aulas-formacin-integral"
        },
        {
          "yaw": 0.4401697000478819,
          "pitch": -0.3143243516087004,
          "rotation": 0.7853981633974483,
          "target": "19-formacin-integral-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-formacin-integral-pa",
      "name": "Formación integral PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7953914373062805,
          "pitch": 0.3954699530898971,
          "rotation": 3.141592653589793,
          "target": "18--escaleras--fi"
        },
        {
          "yaw": 0.11353440633869027,
          "pitch": 0.06902536176995433,
          "rotation": 0,
          "target": "26-formacin-integral-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ingreso-aulas-formacin-integral-pb",
      "name": "Ingreso aulas formación integral PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1347330864933145,
          "pitch": -0.07650510226400264,
          "rotation": 0,
          "target": "24-taller-de--cermica-i"
        },
        {
          "yaw": 1.146247744681535,
          "pitch": 0.0655687296536378,
          "rotation": 0,
          "target": "22--carpintera-i"
        },
        {
          "yaw": 2.9961599160740224,
          "pitch": 0.2017676199579128,
          "rotation": 0,
          "target": "17-ingreso-aulas-formacin-integral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-sala-psicomotricidad",
      "name": "Sala psicomotricidad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.447227962504499,
          "pitch": 0.03389316142604848,
          "rotation": 0,
          "target": "27-ingreso-aulas-fi-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22--carpintera-i",
      "name": " Carpintería I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11728591511922737,
          "pitch": -0.026322752374811742,
          "rotation": 3.141592653589793,
          "target": "23--carpintera-ii"
        },
        {
          "yaw": -2.34607012072863,
          "pitch": 0.03924441531072986,
          "rotation": 0,
          "target": "20-ingreso-aulas-formacin-integral-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23--carpintera-ii",
      "name": " carpintería II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.31068007475857584,
          "pitch": 0.06441751164453002,
          "rotation": 0,
          "target": "22--carpintera-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-taller-de--cermica-i",
      "name": "Taller de  cerámica I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15774440607503237,
          "pitch": 0.11871193089098853,
          "rotation": 0,
          "target": "25-taller-de--cermica-ii"
        },
        {
          "yaw": 2.314078803447739,
          "pitch": 0.09723649424989134,
          "rotation": 0,
          "target": "20-ingreso-aulas-formacin-integral-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-taller-de--cermica-ii",
      "name": "Taller de  cerámica II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.987175744477386,
          "pitch": 0.11777087891779914,
          "rotation": 5.497787143782138,
          "target": "24-taller-de--cermica-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-formacin-integral-pa",
      "name": "formación integral PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4169354270720547,
          "pitch": 0.07556784571495001,
          "rotation": 0,
          "target": "19-formacin-integral-pa"
        },
        {
          "yaw": -2.0049118468438856,
          "pitch": 0.03541949998981053,
          "rotation": 0,
          "target": "27-ingreso-aulas-fi-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-ingreso-aulas-fi-pa",
      "name": "Ingreso aulas FI PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6428145678555719,
          "pitch": 0.007345904248531099,
          "rotation": 1.5707963267948966,
          "target": "28-aula-formacin-integral-i"
        },
        {
          "yaw": 0.053428446489622416,
          "pitch": 0,
          "rotation": 0,
          "target": "21-sala-psicomotricidad"
        },
        {
          "yaw": 2.2203882523243372,
          "pitch": 0.18307345936669073,
          "rotation": 0,
          "target": "26-formacin-integral-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-aula-formacin-integral-i",
      "name": "Aula formación integral I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.0035618964326431524,
        "pitch": 0.03294484294051614,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.9409757805600485,
          "pitch": -0.056349512377229516,
          "rotation": 0,
          "target": "27-ingreso-aulas-fi-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-015-bao-de-arriba",
      "name": "015 baño de arriba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.47413072629233,
          "pitch": 0.09321019140822173,
          "rotation": 0,
          "target": "16-bao-escuela-pa"
        },
        {
          "yaw": -1.1204102284393755,
          "pitch": -0.059172377731144365,
          "rotation": 0,
          "target": "12-aulas-pa-escuela---frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-bao-adaptado",
      "name": "baño adaptado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.181476653521611,
        "pitch": 0.29619578759747967,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.07409013827889233,
          "pitch": 0.04083887023135091,
          "rotation": 0,
          "target": "17-ingreso-aulas-formacin-integral"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Centro I - Yerbal 351- CABA - escuela especial",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
