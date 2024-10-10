import s from './tree.module.scss'
import {CardForTree, personInfo} from "../../features/tree/cardForTree/cardForTree.tsx";
import girl from '../../assets/images/accaunts/girl.png'
import perry from '../../assets/images/accaunts/perry.jpg'
import { useEffect, useRef, useState} from "react";
import {Icon} from "../../shared/ui/icon/icon.tsx";
import {ArrowForward} from "../../shared/decorators/arrowForward/arrowForward.tsx";

export const Tree = () => {

    const containerRef = useRef(null);
    const squareRef = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        const square = squareRef.current;

        if (container && square) {
            // @ts-ignore
            const containerWidth = container.offsetWidth;
            // @ts-ignore
            const containerHeight = container.offsetHeight;
            // @ts-ignore
            const squareWidth = square.offsetWidth;
            // @ts-ignore
            const squareHeight = square.offsetHeight;

            setPosition({
                x: (containerWidth - squareWidth) / 2,
                y: (containerHeight - squareHeight) / 2,
            });
        }
    }, []);

    const handleMouseDown = (e: any) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e: any) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);










    const [fullScreen, setFullScreen] = useState<boolean>(false)

    const onMoreClick = () => {
        console.log('click')
    }

    const [scale, setScale] = useState(0.8)





    return (
        <div  ref={containerRef} className={`${s.treeContainer} ${fullScreen ? s.fullScreen : ''}`}>
            <div onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onMouseLeave={handleMouseUp}
                 className={s.treeWrapper}
                 ref={squareRef}
                 style={{
                     scale: scale + '',
                     left: `${position.x}px`,
                     top: `${position.y}px`,
                 }}
            >
                {/* <Canvas draw={drawArt} onMoreClick={onMoreClick}/>*/}
                <div className={s.rowContainer}>
                    {grandParentProfiles.map(profile => {
                        return <CardForTree key={profile.id} onMoreClick={onMoreClick} info={profile}/>
                    })}
                </div>
                <div className={s.rowContainer}>
                    {parentProfiles.map(profile => {
                        return <CardForTree key={profile.id} onMoreClick={onMoreClick} info={profile}/>
                    })}
                </div>
                <CardForTree info={profile} onMoreClick={onMoreClick}/>
                <div className={s.rowContainer}>
                    {childrenProfiles.map(profile => {
                        return <CardForTree key={profile.id} onMoreClick={onMoreClick} info={profile}/>
                    })}
                </div>
            </div>
            <div className={`${s.settings} ${s.sideBlock}`}>
                <div className={s.block}>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'settings'} height={'19'} width={'19'} viewBox={'0 0 25 25'}/>
                    </div>
                    <div className={s.separator}></div>

                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'portrait'} height={'19'} width={'19'} viewBox={'0 0 2050 2050'}/>
                    </div>
                    <div className={s.separator}></div>

                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'share_arrow'} height={'19'} width={'19'} viewBox={'0 0 22 22'}/>
                    </div>
                </div>
                <div className={s.block}>
                    <div onClick={() => setScale(scale + 0.1)} className={`${s.blockItem} ${s.plus}`}></div>
                    <div className={s.separator}></div>
                    <div onClick={() => setScale(scale - 0.1)} className={`${s.blockItem} ${s.minus}`}></div>
                </div>
            </div>
            <div className={`${s.settings} ${s.topBlock}`}>
                <div className={s.block}>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'public_relation'} height={'19'} width={'19'} viewBox={'0 0 35 35'}/>
                    </div>
                    <div className={s.separator}></div>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'search'} height={'19'} width={'19'} viewBox={'6 6 23 23'}/>
                    </div>
                    <div className={s.separator}></div>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'list'} height={'19'} width={'19'} viewBox={'0 0 25 25'}/>
                    </div>
                    <div className={s.separator}></div>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'location'} height={'19'} width={'19'} viewBox={'-4 0 25 25'}/>
                    </div>
                    <div className={s.separator}></div>
                    <div className={`${s.blockItem} `}>
                        <Icon iconId={'download'} height={'19'} width={'19'} viewBox={'2 2 20 20'}/>
                    </div>
                </div>
            </div>
            <div className={`${s.settings} ${s.screenWrapper}`}>
                <div className={`${s.block} `}>

                    <div onClick={() => setFullScreen(!fullScreen)} className={s.blockItem}>
                        {fullScreen
                            ? <Icon iconId={'expand'} height={'19'} width={'19'} viewBox={'0 0 25 25'}/>
                            : <Icon iconId={'full_screen'} height={'19'} width={'19'} viewBox={'0 0 25 25'}/>
                        }
                    </div>
                </div>
            </div>
            <div className={`${s.settings} ${s.movement}`}>
                <div className={`${s.block}`}>
                    <ArrowForward/>
                </div>

            </div>
        </div>
    );
};

const profile: personInfo = {
    photo: perry,
    name: 'Андрей',
    surname: 'Зайцев',
    patronymic: 'Михайлович',
    birthday: '26.08.1958',
    kinship: 'Я',
    id: '1',
    female: "male",
    className: s.myProfile
}
const childrenProfiles: personInfo[] = [
    {
        photo: girl,
        name: 'Виктория',
        surname: 'Зайцева',
        patronymic: 'Андреевна',
        birthday: '26.08.1958',
        kinship: 'ДОЧЬ',
        id: '2',
        female: "female",

    },
    {
        photo: perry,
        name: 'Сергей',
        surname: 'Зайцев',
        patronymic: 'Андреевич',
        birthday: '26.08.1958',
        kinship: 'СЫН',
        id: '3',
        female: "male",
        className: s.son
    }
]

const parentProfiles: personInfo[] = [
    {
        photo: girl,
        name: 'Виктория',
        surname: 'Зайцева',
        patronymic: 'Андреевна',
        birthday: '26.08.1958',
        kinship: 'МАМА',
        id: '4',
        female: "female",
        className: s.upLeft
    },
    {
        photo: perry,
        name: 'Сергей',
        surname: 'Зайцев',
        patronymic: 'Андреевич',
        birthday: '26.08.1958',
        kinship: 'ПАПА',
        id: '5',
        female: "male",
        className: s.upRight
    }
]

const grandParentProfiles: personInfo[] = [
    {
        photo: girl,
        name: 'Виктория',
        surname: 'Зайцева',
        patronymic: 'Андреевна',
        birthday: '26.08.1958',
        kinship: 'БАБУШКА',
        id: '6',
        female: "female",
        death: true
    },
    {
        photo: perry,
        name: 'Сергей',
        surname: 'Зайцев',
        patronymic: 'Андреевич',
        birthday: '26.08.1958',
        kinship: 'ДЕДУШКА',
        id: '7',
        female: "male",
    },
    {
        photo: girl,
        name: 'Виктория',
        surname: 'Зайцева',
        patronymic: 'Андреевна',
        birthday: '26.08.1958',
        kinship: 'БАБУШКА',
        id: '8',
        female: "female",
    },
    {
        photo: perry,
        name: 'Сергей',
        surname: 'Зайцев',
        patronymic: 'Андреевич',
        birthday: '26.08.1958',
        kinship: 'ДЕДУШКА',
        id: '9',
        female: "male",
        death: true
    }
]
