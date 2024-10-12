import {Link} from "react-router-dom";
import s from './buttonLink.module.scss'

type ButtonLinkType = {
    link: string
    title: string
    className?: string
    onClick?: ()=>void
}
export const ButtonLink = ({link, title, className, onClick}: ButtonLinkType) => {
    return (
        <Link onClick={onClick} to={link} className={`${s.link} ${className}`}>
            <div className={`${s.titleWrapper}`}>
                {title}
            </div>
        </Link>
    );
};

