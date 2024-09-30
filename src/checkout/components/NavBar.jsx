import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { toggle } from "../../store/slices/navBar";

export const NavBar = () => {

    const { state } = useSelector( state => state.navBar);

    const dispatch = useDispatch();

    const onHandlestateNavbar = () => {
        dispatch( toggle() );
    }
    
    return (
        <aside className="navBar">
            <div className="contentNavBar">

                <div className="buttonActionToggleNavBar">
                    <i className={ `bx bx bxs-arrow-from-${ state ? 'right' : 'left' }` } onClick={ onHandlestateNavbar } ></i>
                </div>

                <div className="contentNavBarBox headerNavBar" 
                        to="/menú">
                    <i className='bx bxs-grid-alt'></i>
                    <h2 className={ state ? '' : 'hiddenNav' } >Menú</h2>
                </div>
                
                <div className="">
                    <NavLink className={ ({isActive}) => `contentNavBarBox ${ isActive ? 'NavBarActive' : '' }`} 
                            to="/orders">
                        <i className='bx bx-detail'></i>
                        <p className={ state ? '' : 'hiddenNav' } >Ordenes</p>
                    </NavLink>
                </div>

                <div className="">
                    <NavLink className={ ({isActive}) => `contentNavBarBox ${ isActive ? 'NavBarActive' : '' }`} 
                            to="/employees">
                        <i className='bx bx-male'></i>
                        <p className={ state ? '' : 'hiddenNav' } >Empleados</p>
                    </NavLink>
                </div>

                <div className="">
                    <NavLink className={ ({isActive}) => `contentNavBarBox ${ isActive ? 'NavBarActive' : '' }`} 
                            to="/customers">
                        <i className='bx bx-donate-heart'></i>
                        <p className={ state ? '' : 'hiddenNav' } >Clientes</p>
                    </NavLink>
                </div>
                
                <div className="">
                    <NavLink className={ ({isActive}) => `contentNavBarBox ${ isActive ? 'NavBarActive' : '' }`} 
                            to="/debts">
                        <i className='bx bx-line-chart-down'></i>
                        <p className={ state ? '' : 'hiddenNav' } >Deudas</p>
                    </NavLink>

                </div>

            </div>

        </aside>
    )
}
