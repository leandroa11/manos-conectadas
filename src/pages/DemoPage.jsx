import { useState } from 'react';
import CameraView from '../components/CameraView';
import DetectionResult from '../components/DetectionResult';
import SignDictionary from '../components/SignDictionary';
import { Card } from 'primereact/card';

const DemoPage = () => {
    const [detectedLetter, setDetectedLetter] = useState('');

    return (
        <div className="main-content flex justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="grid p-4">
                {/* Columna Cámara */}
                <div className="col-12 md:col-4 flex justify-content-center align-items-start">
                    <div className="pr-0 md:pr-5 text-center" style={{ minHeight: '550px', width: '100%' }}>
                        <Card className="h-full" title="Visualización en Tiempo Real" style={{ minHeight: '550px' }}>
                            <CameraView onDetection={setDetectedLetter} />
                        </Card>
                    </div>
                </div>

                {/* Columna Detección */}
                <div className="col-12 md:col-4 flex justify-content-center align-items-start">
                    <div className="mt-4 md:mt-0 pl-0 md:pl-3 text-center" style={{ minHeight: '550px', width: '100%' }}>
                        <Card className="h-full" title="Resultado de Detección" style={{ minHeight: '550px' }}>
                            <DetectionResult letter={detectedLetter} />
                        </Card>
                    </div>
                </div>

                {/* Columna Diccionario */}
                <div className="col-12 md:col-4 flex justify-content-center align-items-start">
                    <div className="mt-4 md:mt-0 pl-0 md:pl-3 text-center" style={{ minHeight: '550px', width: '100%' }}>
                        <Card className="h-full" style={{ minHeight: '550px' }} title="Diccionario de Signos">
                            <SignDictionary />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;