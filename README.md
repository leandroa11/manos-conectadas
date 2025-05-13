# Manos Conectadas 🌐✋

[![GitHub last commit](https://img.shields.io/github/last-commit/tu-usuario/manos-conectadas)](https://github.com/tu-usuario/manos-conectadas)
[![GitHub repo size](https://img.shields.io/github/repo-size/tu-usuario/manos-conectadas)](https://github.com/tu-usuario/manos-conectadas)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Aplicación web para traducción de lengua de señas colombiana (LSC) a texto en tiempo real usando inteligencia artificial.
![Captura de pantalla 2025-05-11 185312](https://github.com/user-attachments/assets/df57e777-f099-4445-8449-d94060b5df7c)


" alt="Captura de la aplicación" width="800"/>

## Características Principales 🚀
- 🎥 Detección de señas en tiempo real mediante webcam
- 🧠 Modelo CNN entrenado específicamente para LSC
- 📱 Interfaz responsiva y accesible
- 🎮 Modo juego interactivo para aprendizaje
- 🔍 Diccionario visual de señas
- ⚡ Procesamiento en el cliente con TensorFlow.js

## Tecnologías Utilizadas 🛠️

### Frontend
- React + TypeScript
- PrimeReact UI Library
- TensorFlow.js
- MediaDevices API
- React Router

### Backend/IA
- Python 3.11.4
- TensorFlow/Keras
- OpenCV (preprocesamiento)

### Herramientas
- Vite
- GitHub Actions (CI/CD)
- ESLint + Prettier
- Jupyter Notebook (entrenamiento)

## Instalación Local 💻

1. Clonar repositorio:
```bash
git clone https://github.com/tu-usuario/manos-conectadas.git
cd manos-conectadas
 ```

2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Iniciar la aplicación:
   ```sh
   npm run dev
   ```
## Estructura del Proyecto
```
manos-conectadas/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   ├── models/          # Modelos TF.js
│   ├── pages/           # Vistas principales
│   ├── styles/          # CSS global
│   └── utils/           # Funciones helper
└── public/  
```

## Contribuciones
Las contribuciones son bienvenidas. Para colaborar:
1. Crea un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza cambios y súbelos (`git commit -m "Descripción del cambio"`).
4. Envía un Pull Request.
