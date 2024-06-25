import {inputProps} from '../types/inputType'
import {StyledInput}  from '../styled-component/styledInput'
export const NormalInput = ({ type = 'text', label = '', name = '', placeholder = '', errorMessage = '', value = '', onChange }:inputProps) => {

    return (
        <div>
            <label className="form-label">{label}</label>
            <StyledInput type={type}  name={name} placeholder={placeholder} value={value} onChange={onChange}
            />
            <div id="emailHelp" className="form-text text-danger">{errorMessage}</div>
        </div>
    )
}