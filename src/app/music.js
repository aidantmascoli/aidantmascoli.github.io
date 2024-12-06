import {useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Music({ container }) {
    const title = useRef();

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const { contextSafe } = useGSAP(() => {
        const text = new SplitText(title.current, {type: 'chars'})

        const music = gsap.timeline({
            scrollTrigger: {
                trigger: title.current,
                start: 'top bottom',
                end: 'top 5rem',
                toggleActions: 'restart pause resume reset',
            }
        });

        music.set(text.chars, { y: 50, scale: 0.5, opacity: 0}, 0);
        music.to(text.chars, {
            x: "random(-0.5, 0.5)vw",
            y: "random(-1, 1)vw",
            scale: "random(0.8, 1.2)",
            opacity: 1,
            duration: 0.3,
            stagger: 0.075,
            ease: 'power1.out'
        })
    }, {scope: container});

    return <section id={'music'} className={'w-full h-screen flex flex-col justify-start items-stretch p-4 sm:p-8 pt-20 sm:pt-24 text-green-500'}>
        <h1 className={'text-center'} ref={title}>Music & Performance</h1>
    </section>
}