import {Link} from "react-router-dom";
import s from './buttonLink.module.scss'

type ButtonLinkType = {
    link: string
    title: string
    className?: string
}
export const ButtonLink = ({link, title, className}: ButtonLinkType) => {
    return (
        <Link to={link} className={`${s.link} ${className}`}>
            <div className={`${s.titleWrapper}`}>
                {title}
            </div>
        </Link>
    );
};

