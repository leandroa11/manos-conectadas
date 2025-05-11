const DetectionResult = ({ letter }) => {
  return (
    <div className="flex flex-column align-items-center justify-content-center h-full">
      <h2 className="text-xl mb-3">Letra Detectada</h2>
      <div className="text-8xl font-bold text-primary surface-100 p-5 border-round">
        {letter || '?'}
      </div>
      <small className="mt-3 text-500">Aparecerá aquí la detección</small>
    </div>
  );
};

export default DetectionResult;