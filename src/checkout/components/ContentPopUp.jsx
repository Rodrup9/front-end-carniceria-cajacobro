import { useEffect, useState } from "react";
import { useForm } from "../hooks";
import { ButtonClose } from "./ButtonClose"
import { CardClients } from "./CardClients"
import { CardProductName } from "./CardProductName";
import { FormCustomProductCustomer } from "./FormCustomProductCustomer";


export const ContentPopUp = ({ elements, type }) => {

    const { searchText, onInputChange } = useForm({
        searchText: '',
    });

    const [info, setInfo] = useState({})

    useEffect(() => {
      switch (type) {
        case 'customer':
            setInfo({
                title: 'Clientes confiables',
                component: elements.map(element => <CardClients key={element.id} {...element} />),
                classContent: 'contentPopUpMain'
            })
            break;
        case 'product':
            setInfo({
                title: 'Productos',
                component: elements.map(element => <CardProductName key={element.id} {...element} />),
                classContent: 'contentPopUpMainProduct'
            })
            break;
        case 'customProduct':
            setInfo({
                title: 'Productos',
                component: <FormCustomProductCustomer />,
                classContent: 'ContentPopUpMainCustom'
            })
            break;
        default:
            setInfo({
                title: 'Error',
                component: 'Error',
                classContent: ''
            })
            // TODO: Enviar error
            break;
      }      
    }, [])

    return (
        <div className="contentPopUp">
            <div className="contentPopUpBody">
                <div className="contentPopUpHeader">
                    <h1>{ info.title }</h1>
                    { /*<input type="search" placeholder="Buscar" value={searchText} onChange={onInputChange} /> // TODO: Component, estilos, funcionalidad*/}
                    <ButtonClose type={type} />
                </div>
                <div className={ info.classContent}>
                    {/* {
                        info.component && elements.map(element => <info.component key={element.id} {...element} />)
                    } */}
                    {info.component}
                </div>
            </div>
        </div>
    )
}
