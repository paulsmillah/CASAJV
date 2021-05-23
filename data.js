var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso",
      "name": "Acceso",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8555105202595232,
        "pitch": 0.0661424963755799,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.1675112061399915,
          "pitch": 0.46281125194491324,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": -0.5932368760008373,
          "pitch": 0.2626816074603724,
          "rotation": 0,
          "target": "3-estar-"
        },
        {
          "yaw": -2.200169989197125,
          "pitch": 0.3346332246965922,
          "rotation": 0,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5075998363790415,
          "pitch": 0.33084051891209754,
          "rotation": 0,
          "target": "3-estar-"
        },
        {
          "yaw": -2.9309734268257372,
          "pitch": 0.2761798118064025,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": 1.6536302211563596,
          "pitch": 0.42619222433111226,
          "rotation": 0,
          "target": "0-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comedor",
      "name": "Comedor",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5244994818051278,
          "pitch": 0.26415508392768494,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": -0.8178902881336789,
          "pitch": 0.2672134486024369,
          "rotation": 0,
          "target": "3-estar-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-estar-",
      "name": "Estar ",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3018719228961233,
          "pitch": 0.27368513207435896,
          "rotation": 0,
          "target": "0-acceso"
        },
        {
          "yaw": 2.0935233734567884,
          "pitch": 0.4758179410634149,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": 2.969094038610349,
          "pitch": 0.3735668408239441,
          "rotation": 0,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
