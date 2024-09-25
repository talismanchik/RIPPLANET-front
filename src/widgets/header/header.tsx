import s from './header.module.scss'
import {Icon} from "../../shared/ui/icon/icon.tsx";

export const Header = () => {
    return (
        <header className={s.headerContainer}>
            <img className={s.logo} alt={'logo'} src={'https://ripplanet.com/static/media/logo.a280d3cdbe34e42e3536.png'}/>
            <div className={s.searcherContainer}>
                <input className={s.searchInput} placeholder={'Поиск по RIPPLANET'}/>
                <div className={s.searchSettings}>
                    <div className={s.search}>
                        <Icon className={s.svg} viewBox={'-1 -1 34 34'} iconId={"search"}/>
                    </div>
                    <div className={s.filters}>
                        <Icon className={s.svg} iconId={"filters"}/>

                    </div>
                </div>
            </div>
            <div className={s.userMenu}>
                <div className={s.language}><span>RU</span></div>
                <div className={s.avatar}><Icon iconId={'avatar'} width={'20'} height={'24'} viewBox={'0 0 16 19'}/></div>
            </div>
        </header>
    );
};

