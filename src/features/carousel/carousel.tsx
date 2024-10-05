import {useState} from "react";
import s from './carousel.module.scss'
import {Typography} from "../../shared/ui/typography/typography.tsx";
import {Icon} from "../../shared/ui/icon/icon.tsx";


export const Carousel = () => {
    const items = [
        {id: 1, color: '#D5A52B'},
        {id: 2, color: '#FFEE50'},
        {id: 3, color: null},
        {id: 4, color: '#28C301'},
        {id: 5, color: '#007AFF'},
        {id: 6, color: '#3616B8'},
        {id: 7, color: '#6F02DB'},
        {id: 8, color: '#FF54E4'},
        {id: 9, color: '#FF3B30'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className={s.carousel}>
            <div className={s.carouselTrack}
                 style={{transform: `translateX(-${(currentIndex * 220)}px)`}}>
                {items.map((item) => (
                    <div key={item.id} className={s.carouselItem}
                         style={item.color ? {borderColor: item.color} : {border: 'none'}}>
                    </div>
                ))}
            </div>
            <div className={s.arrows}>
                <span onClick={handlePrev} className={`${s.arrow} ${s.leftArrow}`}/>
                <span onClick={handleNext} className={`${s.arrow} ${s.rightArrow}`}/>
            </div>
            <div className={s.imgWrapper}>
                <Icon iconId={'image'}
                      height={'43'}
                      width={'43'}
                      viewBox={'0 0 70 70'}
                      className={s.svg}
                />
                <Typography className={s.imgText} variant={"subhead"}>Перетяните фото для загрузки</Typography>
            </div>
        </div>
    );
};

