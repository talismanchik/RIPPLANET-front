import s from './memoryWall.module.scss'
import {Post} from "./post.tsx";
import {Icon} from "../../../shared/ui/icon/icon.tsx";

export const MemoryWall = () => {
    return (
        <div className={s.memoryWallContainer}>
            {/*<div className={s.postsContainer}>
                <div className={s.postsContainerPlaceholderWrapper}>
                    <Typography className={s.postsContainerPlaceholder} variant={"titleSpecial"}>
                        Здесь пока нет постов. Оставьте его первым!
                    </Typography>
                </div>
            </div>*/}
            <Post/>
            <div className={s.footer}>
                <div className={s.inputContainer}>
                    <input placeholder={'Добавьте пост ...'} className={s.input}/>
                    <div className={s.imageWrapper}>
                        <Icon iconId={'image'} viewBox={'-1 -1 75 75'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

