import axios from "axios";
import { useState } from "react";

const Step = ({stepInfo, setStep}) => {
    const [selectboxValue, setSelectboxValue] = useState('');
    const [yadak, setYadak] = useState(1);
    const [Visibility, setVisibility] = useState(false);
    const [year, setYear] = useState([]);

    const handleSelect = async (value, OptionsDependency, DispalyDependency) => {
        if(DispalyDependency.length !== 0) {
            setYadak(value);
        };
        if(OptionsDependency.length !== 0) {
            const values = {
                ChildId: OptionsDependency[0].InputId,
                ChildLabel: OptionsDependency[0].InputLabel,
                Parents: [
                    {
                        ParentId: OptionsDependency[0].ParentInputs[0].InputId,
                        ParentLabel: OptionsDependency[0].ParentInputs[0].InputLabel,
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
             <div key={input.Id} className={input.IsVisibility == Visibility && yadak != 2 ? 'hidden' : 'content mt-10 me-10' }>
                <label for="test">{input.Label}: </label>   
                <select name="test" className="selectbox w-full mt-4" defaultValue='' onChange={(e) => handleSelect(e.target.value, input.OptionsDependency, input.DispalyDependency)}>
                    <option value=''>انتخاب کنید...</option>
                    {input.Options.length === 0 ? (
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