import s from './createdProfiles.module.scss'
import {Button} from "../../../shared/ui/button/button.tsx";
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Input} from "../../../shared/ui/input/input.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {ProfileType} from "../../../services/store.ts";

type Props = {
    profiles?: ProfileType[]
}
export const CreatedProfiles = ({profiles}:Props) => {
    return (
        <div className={s.createdProfiles}>
            <div className={s.header}>
                <Typography as='span' variant={'head1'}>
                    Мои профили
                </Typography>
                <div className={s.search}>
                    <Input className={s.input} variant={'searchDecoration'} placeholder={'Поиск'}/>
                    <Icon iconId={'map'} viewBox={'10 10 32 32'}/>
                </div>
            </div>
            <div className={s.content}>
                {profiles
                    ? profiles.map(profile=>{
                    return <div>{profile.name}</div>
                })
                : <Typography className={s.contentText} variant={'titleSpecial'}>
                        Здесь пока нет профилей.
                </Typography>
                }
            </div>
            <Button className={s.createProfile}>Добавить профиль</Button>
        </div>
    );
};

