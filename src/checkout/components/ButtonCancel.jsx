
export const ButtonCancel = ({label}) => {
    return (
        <button className={`buttonCancel btn ${label && 'btn-text'}`}>
            <i className='bx bx-x' ></i>
            { label && ( <p> { label } </p> ) }
        </button>
    )
}
