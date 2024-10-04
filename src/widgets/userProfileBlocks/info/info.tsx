import s from './info.module.scss'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {ArrowForward} from "../../../shared/decorators/arrowForward/arrowForward.tsx";
import {Separator} from "../../../shared/decorators/separator/separator.tsx";

export const Info = () => {
    return (
        <div className={s.infoContainer}>
            <Typography as='span' variant={'head1'}>Инфо</Typography>
            <div className={s.contactUs}>
                <Typography as='span' variant={'body1'}>Поддержка</Typography>
                <ArrowForward/>
            </div>
            <div className={s.content}>
                <div className={s.contentBlock}>
                <Typography className={s.contentBlockTitle} as='span' variant={'head1'}>О приложении</Typography>
                <Typography variant={'subhead'}>1. ...</Typography>
                </div>
                <Separator className={s.separator}/>
                <div className={s.contentBlock}>
                    <Typography className={s.contentBlockTitle} as='span' variant={'head1'}>AGB</Typography>
                    <Typography variant={'subhead'}>1. ...</Typography>
                </div>
                <Separator className={s.separator}/>
                <div className={s.contentBlock}>
                    <Typography className={s.contentBlockTitle} as='span' variant={'head1'}>Datenschutz</Typography>
                    <Typography variant={'subhead'}>1. ...</Typography>
                </div>
            </div>
        </div>
    );
};

