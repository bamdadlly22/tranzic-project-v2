import axios from "axios";
import { useState } from "react";

const Step = ({stepInfo, setStep}) => {
    const [selectboxValue, setSelectboxValue] = useState('');
    const [yadak, setYadak] = useState(1);
    const [year, setYear] = useState([]);


    const handleSelect = async (value, id) => {
        if(id === "307.12197") {
            setYadak(value)
        };
        if(id === "307.12082") {
            const jsonInfo = stepInfo.Inputs[0].OptionsDependency[0];
            const values = {
                ChildId: jsonInfo.InputId,
                ChildLabel: jsonInfo.InputLabel,
                Parents: [
                    {
                        ParentId: jsonInfo.ParentInputs[0].InputId,
                        ParentLabel: jsonInfo.ParentInputs[0].InputLabel,
                        ValueId: value
                    }
                ]
            };
            try {
                const resApi = await axios.post("https://farabimeh.bimehma.com/api/api/SubmitOrder/Insurance/DependentValues", values, {headers:{'Content-Type': 'application/json'}})
                setYear(resApi.data.messageItems[0].data.Options);
            } catch(err) {
                console.log(err)
            }

        }
        setSelectboxValue(value);
    }


    return(
        <>
        <div className="grid grid-cols-2 items-center">
         {stepInfo.Inputs.map((input) => (
             <div className={input.Id === "307.12516" && yadak != 2 ? 'hidden' : 'content mt-10 me-10' } key={input.Id}>
                <label for="test">{input.Label}: </label>   
                <select name="test" className="selectbox w-full mt-4" defaultValue='' onChange={(e) => handleSelect(e.target.value, input.Id)}>
                    <option value=''>انتخاب کنید...</option>
                    {input.Id === "307.12083" ? (
                    (year && year.map((y) => (
                      <option key={y.key} value={y.Key}>{y.Value}</option>
                     )))
                    ) : 
                    (input.Options && input.Options.map((option) => (
                        <option key={option.key} value={option.Key}>{option.Value}</option>
                     )))
                    }
                </select>
             </div>
         ))}
        </div>
        {stepInfo.StepNo != 1 && (<button className="btn border mt-8" onClick={() => setStep(1)}>قبلی</button>)}
        <button className="btn btn-primary mt-8" onClick={() => setStep(2)} disabled={selectboxValue == ''}>بعدی</button>
        </>
    )
}

export default Step;