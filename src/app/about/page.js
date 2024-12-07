'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AMButton from "@/app/_components/button";
import Image from "next/image";
import {Divider, Link} from "@nextui-org/react";

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef();
    const title = useRef();
    const mainImage = useRef();
    const sections = useRef([]);

    useGSAP(() => {
        // Initial animation
        gsap.from(title.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(mainImage.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
        });

        // Animate sections on scroll
        sections.current.forEach((section, index) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 0.5
                },
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                ease: "power2.out"
            });
        });
    }, { scope: container });

    return (
        <main className="min-h-screen w-full flex flex-col items-center" id="smooth-wrapper" ref={container}>
            <div className="w-full max-w-7xl px-4 sm:px-8" id="smooth-content">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-16 min-h-screen pt-16">
                    <div ref={title} className="w-full md:w-1/2 flex flex-col gap-4">
                        <h1 className="text-red-400">About Me</h1>
                        <p>Hi, I&apos;m Aidan, a multitalented creator specializing
                        in web development, videography, music, and performance. Driven by a deep passion for creating
                        and applying my skills, I thrive on bringing ideas to life and delivering tangible results.</p>
                        <p>With expertise across multiple fields, I pride myself on
                        understanding the big picture and contributing cohesively to projects. Whether leading the
                        charge or collaborating as part of a team, I love making meaningful, impactful work.</p>
                    </div>
                    <div ref={mainImage} className="w-full md:w-1/2 aspect-square relative">
                        <Image
                            src="/images/headshot.jpg"
                            alt="About Me"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div
                    ref={el => sections.current[0] = el}
                    className="mb-16 p-8 bg-blue-50"
                >
                    <h2 className="text-blue-500 mb-4">Education</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-blue-700">
                                <h4 className="">Georgia Institute of Technology</h4>
                                <p>Expected Graduation 2027</p>
                            </span>
                            <span>
                                <h6>BS in Computational Media</h6>
                                <p>Concentration in Intelligence and Music Technology</p>
                            </span>
                            <span>
                                <h6>BS in Computer Engineering</h6>
                                <p>Concentration in Distributed Systems and Robotics</p>
                            </span>
                            <span><strong>GPA:</strong> 4.0 (out of 4.0 unweighted)</span>
                            <h5 className="text-blue-600">Relevant Academic Courses</h5>
                            <div className="flex justify-between">
                                <span>
                                    <p>Data Structures and Algorithms</p>
                                    <p>Intro to Film</p>
                                    <p>Fundamentals of Musicianship I</p>
                                    <p>Digital System Design</p>
                                    <p>Objects and Design</p>
                                    <p>Intro to Computational Media</p>
                                </span>
                                <span className="text-right">
                                    <p>Fall 2023</p>
                                    <p>Spring 2024</p>
                                    <p>Fall 2024</p>
                                    <p>Fall 2024</p>
                                    <p>Fall 2024</p>
                                    <p>Fall 2024</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-blue-700">
                                <h4 className="">Fairleigh Dickinson University</h4>
                                <p>2021-2023</p>
                            </span>
                            <span>
                                <h6>Dual Enrollment</h6>
                                <p>Visiting Student</p>
                            </span>
                            <h5 className="text-blue-600">Relevant Academic Courses</h5>
                            <div className="flex justify-between">
                                <span>
                                    <p>Computer Game Programming (Final Grade: A+)</p>
                                    <p>Cloud Computing (Final Grade: A-)</p>
                                </span>
                                <span className="text-right">
                                    <p>Spring 2022</p>
                                    <p>Spring 2023</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={el => sections.current[1] = el}
                    className="mb-16 p-8 bg-violet-50"
                >
                    <h2 className="text-violet-700 mb-4">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-violet-600 mb-2">Web Development</h4>
                            <ul className="list-disc">
                                <li>7 years of experience in HTML, CSS, and Javascript</li>
                                <li>2 years of experience in React</li>
                                <li>0.5 years of experience in Next.js</li>
                                <li>Familiar with backend and deployment tools like MongoDB, Firebase, AWS, GCP</li>
                                <li>Proficient in GitHub</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-violet-600 mb-2">Videography</h4>
                            <ul className="list-disc">
                                <li>4 years of experience in Adobe Premiere Pro</li>
                                <li>1 year of technical theatre experience, qualified as Lighting Designer</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-violet-600 mb-2">Music & Performance</h4>
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
                    ref={el => sections.current[2] = el}
                    className="mb-16 p-8 bg-pink-50"
                >
                    <h2 className="text-pink-600 mb-4">Personal Interests</h2>
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
                    ref={el => sections.current[3] = el}
                    className="mb-16 text-center"
                >
                    <h2 className="text-indigo-500 mb-4">Let&apos;s Connect!</h2>
                    <p className="text-default-600 mb-6">I don&apos;t have a linked in yet, but you can sure send me an
                    email at <Link href="mailto:aidantm717@gmail.com" color="indigo">aidantm717@gmail.com</Link>, or use
                    this cool contact form!</p>
                    <div className="flex justify-center gap-4">
                        <AMButton color="indigo" shade={500} href="/inquire">Contact Me</AMButton>
                    </div>
                </div>
            </div>
        </main>
    );
}