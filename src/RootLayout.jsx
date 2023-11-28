import { Outlet } from "react-router-dom"


const RootLayout = () => {
    return (
        <div>
            <h1>This is my RootLayout</h1>
            <Outlet/>
        </div>
    )
}

export default RootLayout