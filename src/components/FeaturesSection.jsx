import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="surface-0 text-center py-8">
      <div className="mb-5 font-bold text-3xl">
        <span className="text-900 main-color">Tecnología </span>
        <span className="text-blue-600 main-color">Inclusiva</span>
      </div>
      <div className="text-700 text-xl mb-6">Integramos lo último en IA y desarrollo web para romper barreras comunicativas</div>
      
      <div className="grid">
        {/* Reconocimiento en tiempo real */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-clock text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Detección Instantánea</div>
          <span className="text-700 line-height-3">
            Modelo CNN optimizado con TensorFlow.js para reconocimiento en tiempo real de señas LSC
          </span>
        </div>

        {/* Accesibilidad */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-unlock text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Acceso Universal</div>
          <span className="text-700 line-height-3">
            Interfaz web responsive que funciona en cualquier dispositivo con navegador moderno
          </span>
        </div>

        {/* Tecnología IA */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-microchip-ai text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Red Neuronal Avanzada</div>
          <span className="text-700 line-height-3">
            Arquitectura CNN entrenada con miles de imágenes de señas colombianas
          </span>
        </div>

        {/* Integración Web */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-camera text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Visión por Computadora</div>
          <span className="text-700 line-height-3">
            Procesamiento directo en el navegador usando MediaDevices API y Canvas
          </span>
        </div>

        {/* Open Source */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Código Abierto</div>
          <span className="text-700 line-height-3">
            Stack tecnológico basado en TensorFlow.js, React y PrimeReact disponible públicamente
          </span>
        </div>

        {/* Privacidad */}
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Privacidad Garantizada</div>
          <span className="text-700 line-height-3">
            Procesamiento local sin almacenamiento de datos personales o imágenes
          </span>
        </div>
      </div>

      <div className="mt-5">
        <Button 
          label="Probar Demo Ahora" 
          icon="pi pi-play" 
          className="p-button-raised p-button-lg" 
          onClick={() => navigate('/practica')}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;