import s from "./phoneHeader.module.scss";
import {Icon} from "../../components/ui/icon/icon.tsx";

type PhoneHeaderType = {
    headerText: string
}
export const PhoneHeader = ({headerText}:PhoneHeaderType) => {
    return (
        <div className={s.phoneHeaderWrapper}>
            <div className={s.arrow}>
                <Icon iconId={'arrow_back'} width={'19px'} height={'19px'} viewBox={'6 5 14 14'}/>
            </div>
            <span className={s.headerText}>{headerText}</span>
        </div>
    );
};

