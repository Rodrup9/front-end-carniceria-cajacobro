import { useNavigate } from "react-router-dom"

export const ButtonBack = ({ label, path }) => {

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(path);
    }


    return (
        <button className={`buttonBack btn btn-light ${label ? 'btn-text-light' : ''}`} onClick={onNavigateBack}>
            <i className='bx bx-left-arrow-alt'></i>
            {label && (<p> {label} </p>)}
        </button>
    )
}
