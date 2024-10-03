import s from './language.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Button} from "../../../shared/ui/button/button.tsx";
import {useState} from "react";

export const Language = () => {
    const [active, setActive] = useState('ru')

    return (
        <div className={s.languagesContainer}>
            <Typography as='span' variant={'head1'}>
                Язык
            </Typography>
            <div className={s.content}>
                <div onClick={()=>setActive('ru')} className={s.languageItem}>
                    <div className={s.languageWrapper}>
                        <div className={s.languageText}>
                            <Typography className={s.label} as='span' variant={'footnote'}>Русский</Typography>
                            <Typography as='span' variant={'body1'}>Русский</Typography>
                        </div>
                        {active === 'ru' && <div className={s.ok}></div>}
                    </div>
                </div>
                <div onClick={()=>setActive('en')} className={s.languageItem}>
                    <div className={s.languageWrapper}>
                        <div className={s.languageText}>
                            <Typography as='span' variant={'footnote'}>Английский</Typography>
                            <Typography as='span' variant={'body1'}>English</Typography>
                        </div>
                        {active === 'en' && <div className={s.ok}></div>}
                    </div>
                </div>
                <div onClick={()=>setActive('de')} className={s.languageItem}>
                    <div className={s.languageWrapper}>
                        <div className={s.languageText}>
                            <Typography as='span' variant={'footnote'}>Немецкий</Typography>
                            <Typography as='span' variant={'body1'}>Deutsch</Typography>
                        </div>
                        {active === 'de' && <div className={s.ok}></div>}
                    </div>
                </div>
            </div>
            <Button>
                <Typography as='span' variant={'head1'}>
                    Сохранить
                </Typography>
            </Button>
        </div>
    );
};

