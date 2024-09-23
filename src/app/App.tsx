import {Header} from "../components/header/header.tsx";
import {Navigate} from "../components/navigate/navigate.tsx";
import {Footer} from "../components/footer/footer.tsx";
import s from './app.module.scss';
import {Outlet, useLocation} from "react-router-dom";
import {useWindowWidth} from "../components/hooks/useWindowWidth.ts";

function App() {
    const location = useLocation();
    /*const [isVisible, setIsVisible] = useState(false);

    const handleResize = () => {
        setIsVisible(window.innerWidth > 1024);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);*/

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
            <Navigate/>
            <main className={s.mainContainer}>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
}

export default App
