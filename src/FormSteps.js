import { useState } from 'react';
import Step from './components/forms/Step';
import Step2 from './components/forms/Step2';
import stepsInfo from './test.json'

const FormSteps = () => {
    const [step, setStep] = useState(1);

    return(
        <>
        <div className="hero container mx-auto py-16 px-16 my-16 border border-[#eeebeb]"  dir="rtl">
            {stepsInfo.map(stepInfo => (
                step == stepInfo.StepNo && <Step stepInfo={stepInfo} setStep={setStep}/>
            ))}
            {}
        </div>
        </>
    )
}

export default FormSteps;