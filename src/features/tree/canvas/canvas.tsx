/*
import s from './canvas.module.scss';
import { CanvasHTMLAttributes, DetailedHTMLProps, useEffect, useRef } from "react";
import {CardForTree} from "../cardForTree/cardForTree.tsx";

type Props = {
    draw?: (context: CanvasRenderingContext2D) => void;
    onMoreClick: () => void;
} & DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

export const Canvas = ({ draw, onMoreClick, ...rest }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null); // Реф для кастомного блока

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = parentRef.current;
        const card = cardRef.current;

        if (!canvas || !parent || !card) {
            return;
        }

        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        const setCanvasSize = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;

            // Вызываем функцию draw, если она передана
            draw && draw(context);

            // Создание изображения из кастомного блока
            const dataURL = card.toDataURL();
            const img = new Image();
            img.src = dataURL;
            img.onload = () => {
                context.drawImage(img, 50, 50); // Рисуем кастомный блок на канвасе
            };
        };

        setCanvasSize();

        window.addEventListener('resize', setCanvasSize);
        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [draw, onMoreClick]);

    return (
        <div ref={parentRef} className={s.canvasContainer}>
            <canvas ref={canvasRef} {...rest} />
            <div ref={cardRef} style={{ position: 'absolute', opacity: 0 }}>
                <CardForTree onMoreClick={onMoreClick} /> {/!* Передаем обработчик клика *!/}
            </div>
        </div>
    );
};*/
