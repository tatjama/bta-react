import {useRef, useLayoutEffect} from 'react';

const isBrowser = typeof window !== "undefined";

function getScrollPosition({element, useWindow}){
    if (!isBrowser){return{x: 0, y: 0}}

    const target = element? element.current: document.body
    const position = target.getBoundingClientRect()

    return useWindow
            ? {x: window.scrollX, y: window.scrollY}
            : {x: position.left, y: position.top}
}

const useScrollPosition = ( effect, deps, useWindow, element, wait) => {
   const position = useRef(getScrollPosition({useWindow}))

   let throttleTimeout = null

   const callBack = () => {
       const currPosition = getScrollPosition({ element, useWindow })
       effect({prevPos: position.current, currPosition})
       position.current = currPosition
       throttleTimeout = null
   }

   useLayoutEffect(() => {
       const handleScroll = () => {
           if(wait){
                if(throttleTimeout === null){
                    throttleTimeout = setTimeout(callBack, wait)
                }
           }else{
            callBack()
           }
       }

       window.addEventListener('scroll', handleScroll)

       return () => {
           window.removeEventListener('scroll', handleScroll)
       }
   }, deps)

}

export default useScrollPosition;