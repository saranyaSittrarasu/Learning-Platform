import {buttonProps} from '../types/inputType'
import {StyledButton}  from '../styled-component/styledInput'
export const NormalButton = ({ type = 'button', className = 'btn-primary', label = '', onClick = () => { } }:buttonProps) => {

  
    return (
        <StyledButton type={type} onClick={onClick} className={`btn ${className}`}>{label}</StyledButton>
    )
}