import {useEffect, useState} from "react";

export const useWindowWidth = (width: number)=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', ()=>setWindowWidth(window.innerWidth));

    }, []);

 return windowWidth > width
}