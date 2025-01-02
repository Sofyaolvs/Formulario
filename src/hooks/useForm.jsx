import { useState } from "react";

export function useForm(steps){

    //state etapa atual 0
    const [currentStep, setCurrentStep]= useState(0)

    function changeStep(i,e){
        if(e) e.preventDefault()
//verifica se está dentro dos limites do array
        if(i< 0 || i>= steps.length) return

        setCurrentStep(i)
    }


    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false, //verifica se é a ultima etapa
        isFirstStep:currentStep === 0 ? true : false, //verifica se é a 1°
    }
}