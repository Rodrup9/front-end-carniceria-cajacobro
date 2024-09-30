import { useNavigate } from "react-router-dom"

export const ButtonBack = ({ label }) => {

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }


    return (
        <button className={`buttonBack btn btn-light ${label ? 'btn-text-light' : ''}`} onClick={onNavigateBack}>
            <i className='bx bx-left-arrow-alt'></i>
            {label && (<p> {label} </p>)}
        </button>
    )
}
