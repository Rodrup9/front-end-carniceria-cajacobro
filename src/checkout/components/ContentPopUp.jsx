import { ButtonClose } from "./ButtonClose"
import { CardClients } from "./CardClients"

export const ContentPopUp = ({ elements }) => {

    return (
        <div className="contentPopUp">
            <div className="contentPopUpBody">
                <div className="contentPopUpHeader">
                    <h1>Clientes confiables</h1>
                    <input type="search" placeholder="Buscar" /> { /*// TODO: Component, estilos, funcionalidad*/}
                    <ButtonClose />
                </div>
                <div className="contentPopUpMain">
                    {
                        elements.map(element => <CardClients key={element.id} {...element} />)
                    }
                </div>
            </div>
        </div>
    )
}
