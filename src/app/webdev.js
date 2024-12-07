import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import {useRef, useState} from "react";
import Image from "next/image";
import AMButton from "@/app/_components/button";

export default function WebDev({ container }) {
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

    return <section id={'webDev'}
                    className={'w-full min-h-screen md:h-screen flex flex-col justify-between items-start p-4 sm:p-8 pt-20 sm:pt-24 text-orange-500 gap-4'}>
        <h2 ref={title}
            className={'font-mono text-left relative cursor' + (animateCursor ? ' animate' : '')}>--web-development:<span
            className={'text-transparent'}>|</span></h2>
        <h5 className={'w-full'}>Recently, I have been a part of many amazing development projects, encompassing both
            frontend and backend development, UI/UX design, and more!</h5>
        <div className={'flex flex-col md:flex-row items-center w-full gap-4'}>
            <div className={'grow flex flex-col gap-2 p-2 pl-0'}>
                <h3>Spotify Wrapper</h3>
                <p>This website was created as a group project for the CS 2340 class at Georgia Tech. Its purpose is to
                get stats from Spotify&apos;s API and analyze them, delivering them in a format similar to Spotify
                Wrapped, just with the ability to create and save wraps at any time of the year. I worked on this
                project as a full-stack developer, assisting with frontend design and development, as well as backend
                functionality</p>
                <Image className={'w-full md:hidden'} src={'/images/spotifyWrapper.png'} alt={'Spotify Wrapper'} width={960} height={520} />
                <div className={'flex w-full justify-center gap-2'}>
                    <AMButton color="orange" shade={500} href="https://54ijdxhtxd.execute-api.us-east-1.amazonaws.com/production" target="_blank" rel="noopener noreferrer">Visit</AMButton>
                </div>
            </div>
            <Image className={'w-2/5 shrink-0 hidden md:block'} src={'/images/spotifyWrapper.png'} alt={'Spotify Wrapper'} width={960} height={520} />
        </div>
        <div className={'flex flex-col md:flex-row items-center w-full gap-4'}>
            <Image className={'w-2/5 shrink-0 hidden md:block'} src={'/images/uBound.png'} alt={'UBound'} width={960} height={520}/>
            <div className={'grow flex flex-col gap-2 p-2 pl-0'}>
                <h3>UBound</h3>
                <p>UBound is a large, ongoing project I started together with a friend of mine. The website
                is intended to be a resource to help students with their college applicaitons. I am currently working as
                the development/technology lead, so I have worked on and coordinated both frontend and backend design
                and development for the project</p>
                <Image className={'w-full md:hidden'} src={'/images/uBound.png'} alt={'UBound'} width={960} height={520}/>
                <div className={'flex w-full justify-center gap-2'}>
                </div>
            </div>
        </div>
    </section>
}