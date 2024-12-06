'use client'

import Hero from "@/app/hero";
import WebDev from "@/app/webdev";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Videography from "@/app/videography";
import Music from "@/app/music";

export default function Home() {
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

    const container = useRef();

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.1
        });
    }, {scope: container});

    return <main className={'min-h-screen w-full flex flex-col items-center'} id={'smooth-wrapper'} ref={container}>
        <div className={'w-full'} id={'smooth-content'}>
            <Hero container={container} />
            <WebDev container={container} />
            <Videography container={container} />
            <Music container={container} />
        </div>
    </main>;
}
