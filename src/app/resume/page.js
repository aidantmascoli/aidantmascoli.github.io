'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AMButton from "@/app/_components/button";
import {IoArrowDownSharp} from "react-icons/io5";
import Image from "next/image";
import {Link} from "@nextui-org/react";

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
                                <h5>Expected Graduation 2028</h5>
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
                                <h5>2021&ndash;2023</h5>
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
                    <h2 className="text-yellow-500 mb-4">Experience</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-yellow-600">
                                <h4 className="">Kulite Semiconductor Products</h4>
                                <h5>May&ndash;July 2022</h5>
                            </span>
                            <ul className="list-disc pl-6">
                                <li>Accounted the company’s greenhouse gas emissions over 1 year by collecting and
                                analyzing purchasing, waste disposal, water, electrical, gas, and spending data</li>
                                <li>Completed a report and documenting the process for future calculations</li>
                                <li>Worked on improvements to the company’s photolithography database, specifically to
                                the data entry methods and procedures</li>
                            </ul>
                            <p><strong>Tools Used:</strong> Microsoft Access, Visual Basic, Excel, and Word</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="flex justify-between items-center text-yellow-600">
                                <h4 className="">Primoris Academy</h4>
                                <h5>July&ndash;August 2024</h5>
                            </span>
                            <ul className="list-disc pl-6">
                                <li>Individually created, planned, and taught a 2-week summer robotics workshop (specifically for the FIRST Lego League competition) for middle school students</li>
                            </ul>
                            <p><strong>Tools Used:</strong> LEGO&reg; Education SPIKE&trade; Prime</p>
                        </div>
                    </div>
                </div>
                <div
                    ref={el => sections.current[2] = el}
                    className="mb-16 p-8 bg-green-50"
                >
                    <h2 className="text-green-600 mb-4">Awards & Honors</h2>
                    USA Computing Olympiad (USACO):
                    Silver Qualifier (Bronze Division perfect score)	2022
                    Cornell University Programming Contest:
                    Third Place Team Nationally	2023
                    Fourth Place Team Nationally	2022
                    CyberStart America:
                    Advanced to Bronze Level	2022
                    Top 30 Highest Scores in New Jersey	2022
                    National Cyber Scholarship Candidate	2022
                    Scholastic Art and Writing Awards:
                    Science Fiction / Fantasy - Honorable Mention	2022-2023
                    Critical Essay - Silver Key 	2020-2021
                    Short Story - Gold Key	2020-2021
                    Flash Fiction - Silver Key	2020-2021

                    <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Mathematics Competitions (AMC)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Qualified for AIME</h6>
                                <p>2020-2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Scored 6 out of 15 on the AIME</h6>
                                <p>2020-2021</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Computer Science League (ACSL)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Bronze Award in National Senior Division Finals</h6>
                                <p>2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>4th Nationally in Intermediate Division Finals</h6>
                                <p>2021</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Mathematics Competitions (AMC)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Qualified for AIME</h6>
                                <p>2020-2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Scored 6 out of 15 on the AIME</h6>
                                <p>2020-2021</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Mathematics Competitions (AMC)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Qualified for AIME</h6>
                                <p>2020-2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Scored 6 out of 15 on the AIME</h6>
                                <p>2020-2021</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Mathematics Competitions (AMC)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Qualified for AIME</h6>
                                <p>2020-2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Scored 6 out of 15 on the AIME</h6>
                                <p>2020-2021</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-green-700">American Mathematics Competitions (AMC)</h4>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Qualified for AIME</h6>
                                <p>2020-2022</p>
                            </span>
                            <span className="pl-6 flex flex-row justify-between">
                                <h6>Scored 6 out of 15 on the AIME</h6>
                                <p>2020-2021</p>
                            </span>
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
                <div
                    ref={el => sections.current[5] = el}
                    className="mb-16 text-center"
                >
                    <h2 className="text-indigo-500 mb-4">Let&apos;s Connect!</h2>
                    <p className="text-default-600 mb-6">I don&apos;t have a Linkedin yet, but you can sure send me an
                        email at <Link href="mailto:aidan.mascoli@gmail.com" color="indigo">aidan.mascoli@gmail.com</Link>, or use
                        this contact form.</p>
                    <div className="flex justify-center gap-4">
                        <AMButton color="indigo" shade={500} href="/inquire">Contact Me</AMButton>
                    </div>
                </div>
            </div>
        </main>
    )
}