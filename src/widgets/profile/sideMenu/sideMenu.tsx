import s from './sideMenu.module.scss'
import {Icon} from "../../../shared/ui/icon/icon.tsx";

export const SideMenu = () => {
    return (
        <div className={s.sideMenuContainer}>
            <div className={s.iconContainer}>
                <div className={s.iconWrapper}>
                    <Icon iconId={'like'}
                          height={'30'}
                          width={'30'}
                          viewBox={'0 -5 40 40'}
                          className={s.like}
                    />
                </div>
                <div className={s.iconWrapper}>
                    <Icon iconId={'more'}
                          height={'30'}
                          width={'30'}
                          viewBox={'1.5 0 20 20'}
                    />
                </div>
                <div className={s.iconWrapper}>
                    <Icon iconId={'share'}
                          height={'30'}
                          width={'30'}
                          viewBox={'4 11 25 25'}
                    />
                </div>
            </div>
        </div>
    );
};

