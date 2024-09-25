import {Header} from "../widgets/header/header.tsx";
import {Footer} from "../widgets/footer/footer.tsx";
import s from './app.module.scss';
import {Outlet, useLocation} from "react-router-dom";
import {useWindowWidth} from "../shared/hooks/useWindowWidth.ts";
import {Navbar} from "../widgets/navbar/navbar.tsx";

function App() {
    const location = useLocation();
    const isVisible = useWindowWidth(1024)

    let showHeader = true
    if ((location.pathname == '/feelings'
        || location.pathname == '/profilesWithLike'
        || location.pathname == '/candles') && !isVisible) {
        showHeader = false
    }
    return <>
        {showHeader && <Header/>}
        <div className={s.gridContainer}>
            {/*<Navigate/>*/}
            <Navbar/>
            <main className={s.mainContainer}>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
}

export default App
