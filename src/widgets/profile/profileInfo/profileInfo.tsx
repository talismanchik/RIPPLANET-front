import s from './profileInfo.module.scss'
import ava from '../../../assets/images/accaunts/perry.jpg'
import {Typography} from "../../../shared/ui/typography/typography.tsx";
import {Button} from "../../../shared/ui/button/button.tsx";
import {AddPhotoVideo} from "../../../features/addPhotoVideo/addPhotoVideo.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";
import {useState} from "react";
import {Religion} from "../../../features/profile/religion/religion.tsx";
import {Family} from "../../../features/profile/family/family.tsx";
import {Work} from "../../../features/profile/work/work.tsx";
import {Education} from "../../../features/profile/education/education.tsx";
import {Hobbies} from "../../../features/profile/hobbies/hobbies.tsx";

export const ProfileInfo = () => {
    const [activeTab, setActiveTab] = useState('religion')

    let tabWindow = <Religion/>
    switch (activeTab) {
        case 'religion':
            tabWindow = <Religion/>
            break
        case 'family':
            tabWindow = <Family/>
            break
        case 'work':
            tabWindow = <Work/>
            break
        case 'education':
            tabWindow = <Education/>
            break
        case 'hobbies':
            tabWindow = <Hobbies/>
            break
        default:
            tabWindow = <Religion/>
            break
    }

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.imgContainer}>
                <div className={s.imgWrapper}>
                    <img alt={'avatar'} src={ava}/>
                </div>
            </div>
            <Typography className={s.name} variant={'title'}>
                Свиридов Александр Александрович
            </Typography>
            <Typography className={s.age} variant={'body1'}>
                1956-2023
                <span className={s.egaSpan}> (67 лет)</span>
            </Typography>
            <Typography variant={'body1'} className={s.deathReason}>
                Причина смерти: COVID-19
            </Typography>
            <Button className={s.button}>
                <Typography variant={"head1"}>
                    За упокой
                </Typography>
            </Button>
            <Button className={s.button}>
                <Typography variant={"head1"}>
                    Тихое письмо
                </Typography>
            </Button>
            <div className={`${s.locationContainer} ${s.profileInfoBlock}`}>
                <div className={s.topBlock}>
                    <Typography variant={'head1'}>
                        Место захоронения
                    </Typography>
                    <Typography variant={'subhead'} className={s.coordinates}>
                        41.40338, 2.17403
                    </Typography>
                </div>
                <Typography variant={'body1'}>
                    Россия, г. Москва, ул. Наличная
                </Typography>
                <Button className={s.mapButton}>
                    <Typography variant={'body1'}>
                        Смотреть на карте
                    </Typography>
                </Button>
                <div className={s.locationPhotoContainer}>
                    <AddPhotoVideo/>
                </div>
            </div>
            <div className={`${s.socialNetWorksContainer} ${s.profileInfoBlock}`}>
                <Typography variant={"head1"}>
                    Профили в интернете
                </Typography>
                <div className={s.socialNetWorksWrapper}>
                    {social.map(icon => {
                        return (
                            <div key={icon.id} className={`${s.iconWrapper} ${icon.className}`}>
                                <Icon iconId={icon.id}
                                      width={icon.width}
                                      height={icon.height}
                                      viewBox={icon.viewBox}
                                      className={icon.className}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${s.galleryContainer} ${s.profileInfoBlock}`}>
                <Typography variant={"head1"}>
                    Галерея
                </Typography>
                <div className={s.locationPhotoContainer}>
                    <AddPhotoVideo/>
                </div>
            </div>
            <div className={`${s.tabsContainer} ${s.profileInfoBlock}`}>
                <ul className={s.tabsWrapper}>
                    {tabs.map(tab => {
                        return (
                            <li key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`${s.tabItem} ${tab.value === activeTab ? s.active : ''}`}>
                                <Typography variant={'body2'}>{tab.title}</Typography>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {tabWindow}
                </div>
            </div>
        </div>
    );
};

//social
const social: SocialIconType[] = [
    {id: 'instagram', width: '22', height: '22', viewBox: '0 0 22 22'},
    {id: 'tikTok', width: '44', height: '44', viewBox: '0 0 44 44'},
    {id: 'facebook', width: '44', height: '44', viewBox: '0 0 44 44'},
    {id: 'twitter', width: '44', height: '44', viewBox: '0 0 44 44', className: s.twitter},
    {id: 'vk', width: '44', height: '44', viewBox: '0 0 44 44'},
    {id: 'youTube', width: '44', height: '44', viewBox: '0 0 44 44'},
    {id: 'classmates', width: '44', height: '44', viewBox: '0 0 44 44'},
    {id: 'wikipedia', width: '44', height: '44', viewBox: '0 0 44 44'},
]

type SocialIconType = {
    width?: string
    height?: string
    viewBox?: string
    className?: string
    id: | 'instagram'
        | 'tikTok'
        | 'facebook'
        | 'twitter'
        | 'vk'
        | 'youTube'
        | 'classmates'
        | 'wikipedia'
}
const tabs: TabType[] = [
    {title: 'Религия', value: 'religion', link: 'religion'},
    {title: 'Семья', value: 'family', link: 'family'},
    {title: 'Работа', value: 'work', link: 'work'},
    {title: 'Образование', value: 'education', link: 'education'},
    {title: 'Увлечения', value: 'hobbies', link: 'hobbies'},
]
export type TabType = {
    title: string
    value: string
    link: string
}