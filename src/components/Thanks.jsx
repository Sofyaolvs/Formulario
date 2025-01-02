import './thanks.css'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

//emojis
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>Sua opnião é muito importante, em breve você recebrá no seu e-mail um 
        cupom de 10% de desconto para usar na sua próxima compra! </p>
        <p>Para concluir a avaliação clique no botão <span>Enviar</span> abaixo</p>
        <h3>Aqui está o resumo da sua avalição</h3>

        <p className="review-data">
          <span>Satisfação com o produto:</span>

          {/* att a satisfação com o emoji selecionado */}
          {emojiData[data.review]}
        </p>

        <p className="review-data">
          <span>Comentário: {data.comment}</span>
        </p>
    </div>
  )
}

