import {useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import AMButton from "@/app/_components/button";

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

    return <section id={'music'}
                    className={'w-full min-h-screen flex flex-col justify-start items-stretch p-4 sm:p-8 pt-20 sm:pt-24 text-green-500 gap-4'}>
        <h1 className={'text-center'} ref={title}>Music & Performance</h1>
        <h5 className={'w-full'}>I also love to make music and perform. I have been acting in musical theatre since the
            age of seven, and playing instruments and singing since even before that.</h5>
        <div className={'flex flex-col md:flex-row items-center w-full gap-4'}>
            <iframe
                className={'aspect-video w-1/3 shrink-0 hidden md:block'}
                src="https://www.youtube.com/embed/PyATdsVy3VM?si=su_UENwJ1qWAdbsE"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className={'grow flex flex-col gap-2 p-2 pl-0'}>
                <h3>Musical Theatre Performance</h3>
                <p>I have performed in over 15 shows since I started when I was 6. Here is a clip from the most recent
                    production I acted in, Ride the Cyclone at DramaTech theatre last spring. I am currently taking
                    a break from acting though, and have actually been working on technical theatre. This fall, I was
                    the lighting designer for DramaTech&apos;s She Kills Monsters.</p>
                <iframe
                    className={'aspect-video w-full md:hidden'}
                    src="https://www.youtube.com/embed/PyATdsVy3VM?si=su_UENwJ1qWAdbsE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <div className={'flex w-full justify-center gap-2'}>
                    <AMButton color="green" shade={500} href="https://youtu.be/PyATdsVy3VM" target="_blank" rel="noopener noreferrer">Watch Video</AMButton>
                </div>
            </div>
        </div>
        <div className={'flex flex-col md:flex-row items-center w-full gap-4'}>
            <div className={'grow flex flex-col gap-2 p-2 pl-0'}>
                <h3>Guitar, Vocals, Music Production and More</h3>
                <p>I know how to play a lot of instruments, like piano and bass, to name a few, but the one I have
                studied most is guitar, which I have only been playing for around 3 years. Vocals, however, I have years
                of formal training in, and I have been singing since just about when I first learned to talk.
                Additionally, I have also been learning music production, and working on making original music.</p>
                <iframe
                    className={'aspect-video w-full md:hidden'}
                    src="https://www.youtube.com/embed/K15HKgA4kco?si=cbd0nMl7y0hWUjNY"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <div className={'flex w-full justify-center gap-2'}>
                    <AMButton color="green" shade={500} href="https://youtu.be/K15HKgA4kco" target="_blank" rel="noopener noreferrer">Watch Video</AMButton>
                </div>
            </div>
            <iframe
                className={'aspect-video w-1/3 shrink-0 hidden md:block'}
                src="https://www.youtube.com/embed/K15HKgA4kco?si=cbd0nMl7y0hWUjNY"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    </section>
}