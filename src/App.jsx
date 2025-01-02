import { useState } from 'react'
import './App.css'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import {UserForm} from './components/UserForm'
import {ReviewForm} from './components/ReviewForm'
import {Thanks} from './components/Thanks'

//hooks
import { useForm } from './hooks/useForm'
import { Steps } from './components/Steps'


function App() {

  //template inciial começa vazio
  const formTemplate ={
  name:"",
  email:"",
  review:"",
  comment:"",
}
//state armazenar dados do form
  const [data, setData] = useState(formTemplate)


  //func p atualizar os campos do form dinamicamente
  const updateFieldHandler=(key, value)=>{
    setData((prev)=>{

      return{...prev,[key]:value}
    })
  }

  //array com os componentes das etapas do form
  const formComponents=[
     <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
     <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
     <Thanks data={data}/>]
  
  //hook p gerencira as etapas do form
  const{
    currentStep,
    currentComponent, 
    changeStep, 
    isLastStep, 
    isFirstStep} = useForm(formComponents)
  









  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra! utilize o formulário abaixo 
          para avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentComponent={currentStep}/>
        <form onSubmit={(e)=> changeStep(currentStep+1, e)}>
        <div className="inputs-container">{currentComponent}</div>


        <div className="actions">
            {!isFirstStep && (<button
              type="button"
              //botao p voltar p etapa antiga
              onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
            {/* se nn for o ultimo continua */}
            {!isLastStep ? (
              <button type="button"
              onClick={() => changeStep(currentStep + 1)}>Avançar<GrFormNext />
              </button>
            ) : (
              //se não aparece o de btn enviar
              <button type="submit">Enviar<FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
