import React from 'react';

function Select ({
                     options,
                     id,
                     value,
                     labelText,
                     defaultOptionLabel ='Please select an option',
                     onChange,
                     labelClassName = '',
                     selectClassName = ''
                 }){
    return(
        <div>
            <label htmlFor={id} className={labelClassName}>{labelText}</label>
            <select name={id} id={id} value={value} onChange={onChange} className={selectClassName}>
                <option value={undefined}>{defaultOptionLabel}</option>
                {options.length >0 && options
                    .map(({label, value:optionValue}) =>
                        <option value={optionValue} key={optionValue}>{label}</option>)}

            </select>
        </div>
    )
}

function InputText ({error, ...rest}) {
    return(
        <div style={{position: 'relative'}}>
            <input
                type="text"
                {...rest}
            />
            {error && <p style={{color:'red', margin:0, textAlign: 'start', paddingLeft:27}}>{error}</p>}
        </div>

    )
}
function RadioInput (props){
    return(
        <>
            <input
                type='radio'
                {...props}
            />
            <label htmlFor={props.name}>{props.value}</label>
        </>

    )
}
export { Select, InputText,RadioInput  }