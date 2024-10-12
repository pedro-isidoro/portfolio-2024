import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useLayoutEffect } from "react"

interface Props {
    triggerFather: string;
    trigger: string;
    markers: boolean;
    start: string;
    end: string;
}
export function GsapFunction(props: Props) {
    useLayoutEffect(()=>{
            gsap.registerPlugin(ScrollTrigger)
            gsap.context(() => {
                gsap.timeline({
                    scrollTrigger:{
                        trigger: props.trigger,
                        markers: props.markers,
                        scrub: true,
                        start: props.start,
                        end: props.end
                    }
                })
                .fromTo(props.trigger, {
                    opacity: 0,
                    y: 160,
                },{
                    opacity:1,
                    y: 0,
                })
            }, props.triggerFather)
    
            return ()=>{
                gsap.killTweensOf(props.triggerFather)
            }
        }, [])
}