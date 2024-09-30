import { NavBar } from "../components"

export const MainLayout = ({ children }) => {
    return (
        <div className="mainLayout">

            <NavBar />

            <div className="mainLayoutContent">

                { children }

                {/* <div className="mainContent">

                </div> */}
            </div>
        </div>
    )
}
