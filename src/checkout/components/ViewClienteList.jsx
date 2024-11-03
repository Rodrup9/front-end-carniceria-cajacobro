import { Link } from "react-router-dom"

export const ViewClienteList = ({ name, id, products }) => {
    return (

        <Link to={`/customers/customer?id=${id}`} className="viewClienteList">
            <div className="viewClienteListIcon">
                <i className='bx bx-user'></i>
            </div>
            <div className="viewClienteListBody">
                <div className="viewClienteListBodyInfo">
                    <p>{name}</p>
                    <p> Productos: { products.length }</p>
                </div>
                <div className="viewClienteListBodyOptions">

                </div>
            </div>
        </Link>
    )
}
