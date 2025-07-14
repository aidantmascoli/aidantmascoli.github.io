import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import {useRef, useState} from "react";
import Image from "next/image";
import AMButton from "@/app/_components/button";

export default function Projects({ container }) {
    const [ animateCursor, setAnimateCursor ] = useState(false);

    const title = useRef();

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const { contextSafe } = useGSAP(() => {
        gsap.from(title.current, {
            text: '',
            scrollTrigger: {
                trigger: title.current,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart pause resume reset',
                onToggle: (self) => {
                    setAnimateCursor(!self.isActive);
                },
            },
            duration: 5,
            onComplete: () => {
                setAnimateCursor(true);
            }
        })
    }, {scope: container});

    return <section id={'projects'} className={'w-full py-36 flex flex-col justify-center items-center px-4 sm:px-8 pt-20 text-green-600 gap-4'}>
        <h2 ref={title}
            className={'font-mono text-left relative cursor text-[6vw]' + (animateCursor ? ' animate' : '')}>PROJECTS:<span
            className={'text-transparent'}>|</span></h2>
        <div className={'w-full text-center flex flex-col gap-4'}>
            <h5>Take a closer look at some of the work I have done.</h5>
            <div className={'flex w-full justify-center gap-2'}>
                <AMButton color="green" shade={600} href="/projects">Learn More</AMButton>
            </div>
        </div>
    </section>
}