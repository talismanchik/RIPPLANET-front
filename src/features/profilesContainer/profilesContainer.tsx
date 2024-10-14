import s from "./profilesContainer.module.scss";

import {ReactNode} from "react";

type ProfilesContainerType = {
    className?: string

    children: ReactNode
    isUser?: boolean
}
export const ProfilesContainer = ({children, className}: ProfilesContainerType) => {

    return (
        <div className={`${s.profilesContainer} ${className}`}>
            {children}
        </div>
    );
};
