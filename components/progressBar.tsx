type ProgressProps = {
  currentStep: number; // Indica el estado actual del progreso (1 a 5)
};

const ProgressBar: React.FC<ProgressProps> = ({ currentStep }) => {
  const steps = [1, 2, 3, 4, 5]; // Total de pasos

  return (
    <div className="flex gap-1">
      {steps.map((step) => (
        <div
          key={step}
          className={`w-4 h-4 border-2 border-lighter
            ${
              step < currentStep
                ? "bg-[#008C3A]" // Verde oscuro para pasos completados
                : step === currentStep
                ? "bg-[#5AB542]" // Verde claro para el paso actual
                : "bg-gray-300" // Gris para pasos no alcanzados
            }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
