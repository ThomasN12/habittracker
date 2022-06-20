import { useState, useEffect, useRef } from 'react';


const Checkbox = (props) =>{

    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {

            setChecked('');

            if (props.checkedId.includes(props.id)){
                setChecked(props.id)
                // props.onSaveChartData(props.id)
            }
        } 
        
        else {
          isMounted.current = true;
        }
      }, [props.id]);

    const [checked, setChecked] = useState('empty');
    
    const checkHandler = (boxId) => {
        if (checked === boxId){
            props.onRemoveId(boxId)
            setChecked('empty')
        }
        else{
            props.onAddId(boxId)
            setChecked(boxId);  
        }
    }

    return (
        <label className="checkbox path" key = {props.id} id = {props.id}>
            <input 
                type="checkbox" 
                onChange={() => checkHandler(props.id)} 
                checked={checked === props.id}/>
            <svg viewBox="0 0 21 21">
                <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
        </label>
    )
}

export default Checkbox;



