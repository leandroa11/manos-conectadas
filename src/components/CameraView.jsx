import { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';

const CameraView = ({ onDetection }) => {
    const videoRef = useRef(null);
    const [mediaStream, setMediaStream] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480 }
            });
            videoRef.current.srcObject = stream;
            setMediaStream(stream);
            setIsCameraOn(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        mediaStream?.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setIsCameraOn(false);
    };

    return (
        <div className="card p-4 h-full">
            <div className="video-container border-round border-1 surface-border">
                <video
                    ref={videoRef}
                    autoPlay
                    className="w-full"
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>

            <div className="flex justify-content-center gap-3 mt-4">
                <Button
                    label={isCameraOn ? 'Cámara Activa' : 'Iniciar Cámara'}
                    icon={`pi ${isCameraOn ? 'pi-lock' : 'pi-video'}`}
                    onClick={startCamera}
                    disabled={isCameraOn}
                    className="p-button-success"
                />
                <Button
                    label="Detener"
                    icon="pi pi-power-off"
                    onClick={stopCamera}
                    disabled={!isCameraOn}
                    className="p-button-danger"
                />
            </div>
        </div>
    );
};

export default CameraView;