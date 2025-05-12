import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import FeaturesSection from '../components/FeaturesSection';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-nogutter surface-0 text-800 ">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
        <section className="w-full">
          <span className="block text-6xl font-bold mb-1">Manos Conectadas</span>
          <div className="text-6xl font-bold mb-3" style={{ color: '#4f46e5' }}>
            Traductor de Lengua de Señas a Texto en Tiempo Real
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Sistema innovador para la detección en tiempo real de señas mediante visión artificial.
            Utiliza tu cámara web para interactuar con la aplicación.
          </p>

          <Button
            label="Probar Demo"
            icon="pi pi-camera"
            className="p-button-raised"
            onClick={() => navigate('/practica')}
          />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img
          src="/assets/hand.jpg"
          alt="hero-1"
          className="md:ml-auto block"
          style={{
            clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <FeaturesSection />
    </div>
  );
};

export default HomePage;