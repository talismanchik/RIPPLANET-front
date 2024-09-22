import {Header} from "../components/header/header.tsx";
import {Navigate} from "../components/navigate/navigate.tsx";
import {Footer} from "../components/footer/footer.tsx";
import s from './app.module.scss';
import {Outlet} from "react-router-dom";

function App() {

    return <>
        <Header/>
        <div className={s.gridContainer}>
            <Navigate/>
            <main className={s.mainContainer}>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
}

export default App
