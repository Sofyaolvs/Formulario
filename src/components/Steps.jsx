import "./steps.css";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      
      <div className="step">
      {/* className="step active"  olhar depois*/}
        <AiOutlineUser />
        <p>Identificação</p>
      </div>

{/* verifica se currentStep é maior q 1 e adc a classe active a div */}
      <div className={`step ${currentStep > 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>

      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};


