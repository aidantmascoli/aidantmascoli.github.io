'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AMButton from "@/app/_components/button";
import {IoArrowDownSharp} from "react-icons/io5";
import Image from "next/image";

export default function Resume() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const container = useRef();
    const title = useRef();
    const pdf = useRef();
    const sections = useRef([]);

    const {contextSafe} = useGSAP(() => {
        // Initial animation
        gsap.from(title.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(pdf.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.5
        })

        // Animate sections on scroll
        sections.current.forEach((section, index) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 0.5
                },
                x: index % 2 === 0 ? -160 : 160,
                opacity: 0,
                ease: "power2.out"
            });
        });
    }, { scope: container });

    const onSeeClick = contextSafe(() => {
        gsap.to(window, { duration: 1.5, scrollTo: {y: '#sections', offsetY: 96} });
    });

    return (
        <main className="min-h-screen w-full flex flex-col items-center" id="smooth-wrapper" ref={container}>
            <div className="w-full max-w-7xl px-4 sm:px-8" id="smooth-content">
                <div className="flex flex-col gap-6 items-center text-center h-screen pt-24 pb-16">
                    <div ref={title} className="text-red-400 flex flex-col gap-4">
                        <h1>Resume</h1>
                        <h5>You can view or download the one page version of my resume here, or see more details below.</h5>
                        <span className="flex justify-center">
                            <AMButton color={'red'} shade={400} onClick={onSeeClick} endContent={<IoArrowDownSharp className={'animate-bounce'}/>}>Learn More</AMButton>
                        </span>
                    </div>
                    <object ref={pdf} className="w-full grow shrink" data="/files/resume.pdf" width="800"></object>
                </div>
                <div
                    ref={el => sections.current[0] = el}
                    className="mb-16 p-8 bg-orange-50"
                    id="sections"
                >
                    <h2 className="text-orange-500 mb-4">Education</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-orange-600">
                                <h4 className="">Georgia Institute of Technology</h4>
                                <p>Expected Graduation 2028</p>
                            </span>
                            <span>
                                <h6>BS in Computational Media</h6>
                                <p>Concentration in Intelligence and Music Technology</p>
                            </span>
                            <span>
                                <h6>BS in Computer Engineering</h6>
                                <p>Concentration in Distributed Systems & Software Design and Signal & Information Processing</p>
                            </span>
                            <span><strong>GPA:</strong> 4.0 (out of 4.0 unweighted)</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-orange-600">
                                <h4 className="">Fairleigh Dickinson University</h4>
                                <p>2021 - 2023</p>
                            </span>
                            <span><strong>Dual Enrollment</strong> - Visiting Student</span>
                            <span><strong>GPA:</strong> 3.92 (out of 4.0 unweighted)</span>
                        </div>
                    </div>
                </div>
                <div
                    ref={el => sections.current[1] = el}
                    className="mb-16 p-8 bg-yellow-50"
                >
                    <h2 className="text-yellow-600 mb-4">Course Work</h2>
                    <p className="text-default-600 mb-4">In my free time, I like to either work on personal coding
                        projects, play with breadboard electronics, create and edit gaming content, play guitar, or create
                        beats, remix songs, or just play around with samples on Ableton Live. When I can I love going to
                        concerts, and travelling.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video relative">
                            <Image
                                src="/images/circuit.jpg"
                                alt="Breadboard Circuit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="aspect-video relative">
                            <Image
                                src="/images/ableton.jpg"
                                alt="Ableton Live"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div
                    ref={el => sections.current[2] = el}
                    className="mb-16 p-8 bg-green-50"
                >
                    <h2 className="text-green-700 mb-4">Awards & Honors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-green-600 mb-2">Web Development</h4>
                            <ul className="list-disc">
                                <li>7 years of experience in HTML, CSS, and Javascript</li>
                                <li>2 years of experience in React</li>
                                <li>0.5 years of experience in Next.js</li>
                                <li>Familiar with backend and deployment tools like MongoDB, Firebase, AWS, GCP</li>
                                <li>Proficient in GitHub</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-green-600 mb-2">Videography</h4>
                            <ul className="list-disc">
                                <li>4 years of experience in Adobe Premiere Pro</li>
                                <li>1 year of technical theatre experience, qualified as Lighting Designer</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-green-600 mb-2">Music & Performance</h4>
                            <ul className="list-disc">
                                <li>10 years of musical theatre performing experience</li>
                                <li>3 years of formal vocal training</li>
                                <li>3 years of formal electric and acoustic guitar training</li>
                                <li>1 year of experience in Logic Pro X and Ableton Live</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    ref={el => sections.current[3] = el}
                    className="mb-16 p-8 bg-blue-50"
                >
                    <h2 className="text-blue-600 mb-4">Leadership</h2>
                    <p className="text-default-600 mb-4">In my free time, I like to either work on personal coding
                        projects, play with breadboard electronics, create and edit gaming content, play guitar, or create
                        beats, remix songs, or just play around with samples on Ableton Live. When I can I love going to
                        concerts, and travelling.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video relative">
                            <Image
                                src="/images/circuit.jpg"
                                alt="Breadboard Circuit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="aspect-video relative">
                            <Image
                                src="/images/ableton.jpg"
                                alt="Ableton Live"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div
                    ref={el => sections.current[4] = el}
                    className="mb-16 p-8 bg-violet-50"
                >
                    <h2 className="text-violet-600 mb-4">Skills & Expertise</h2>
                    <p className="text-default-600 mb-4">In my free time, I like to either work on personal coding
                        projects, play with breadboard electronics, create and edit gaming content, play guitar, or create
                        beats, remix songs, or just play around with samples on Ableton Live. When I can I love going to
                        concerts, and travelling.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video relative">
                            <Image
                                src="/images/circuit.jpg"
                                alt="Breadboard Circuit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="aspect-video relative">
                            <Image
                                src="/images/ableton.jpg"
                                alt="Ableton Live"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}