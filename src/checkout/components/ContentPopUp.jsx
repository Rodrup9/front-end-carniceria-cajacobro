import { ButtonClose } from "./ButtonClose"

export const ContentPopUp = ({ elements }) => {

    return (
        <div className="contentPopUp">
            <div className="contentPopUpBody">
                <div className="contentPopUpHeader"> { /*// TODO: Flex*/}
                    <h1>Clientes confiables</h1>
                    <input type="search" placeholder="Buscar" /> { /*// TODO: Component, estilos, funcionalidad*/}
                    <ButtonClose />
                </div>
                <div className="contentPopUpMain">
                    {
                        elements.map(element => <h2 key={element.id} >{JSON.stringify(element)}</h2>)
                        // TODO: Component, toggle, urlParametros del cliente seleccionado
                    }
                </div>
            </div>
        </div>
    )
}
