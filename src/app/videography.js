'use client'

import {useEffect, useRef, useState} from "react";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import Image from "next/image";
import AMButton from "@/app/_components/button";
import InstagramEmbed from "@/app/_components/instagram";

export default function Videography({ container }) {
    const path = useRef();
    const title = useRef();

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    useGSAP(() => {
        gsap.fromTo(path.current, {drawSVG: '0% 0%'}, {
            drawSVG: '0% 100%',
            scrollTrigger: {
                trigger: title.current,
                start: 'bottom bottom',
                end: 'top 5rem',
                scrub: 1,
            }
        })
    }, { scope: container });

    const [width, setWidth] = useState(1920);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <section id={'videography'} className={'w-full min-h-screen pb-4 sm:pb-8 pt-20 sm:pt-24 text-yellow-600'}>
        <div ref={title} className={'w-full overflow-hidden flex flex-row justify-center col-span-3 row-start-1'}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox={`${-0.246753 * width + 493.766} 0 ${0.509481 * width + 888.597} 220`}>
                <path ref={path} className="draw"
                      d="M6,137.634c151.082-61.377,367.399,29.779,468.507,6.909,111.808-25.29,131.21-104.693,133.793-120.178-1.638,33.316-3.277,66.631-4.915,99.947-.511,10.382.333,23.183,9.717,27.654,12.111,5.771,23.991-8.009,30.406-19.792,17.609-32.341,35.218-64.682,52.828-97.022-13.235,22.175-23.608,46.056-30.779,70.864-2.861,9.897-4.886,21.607,1.57,29.636,8.046,10.007,25.07,7.407,33.989-1.831,8.919-9.238,11.869-22.543,14.449-35.122-6.348,13.171-9.833,33.789,4.116,38.168,13.064,4.101,22.313-12.39,26.722-25.354s16.731-28.439,28.455-21.366c-11.212,4.888-23.261,10.959-28.023,22.225s4.003,27.788,15.939,25.116c9.021-2.02,12.856-12.554,14.819-21.587,5.755-26.482,8.533-53.609,8.264-80.707-1.198,34.001-2.395,68.002-3.593,102.004,25.896-2.842,47.751-26.816,48.191-52.863-14.727,1.527-25.848,18.172-21.622,32.361s22.641,22.039,35.804,15.26c10.905-5.616,16.154-18.027,24.301-27.196,8.148-9.169,24.595-14.307,31.624-4.254,9.428,12.042,1.179,33.027-13.926,35.424-15.105,2.397-29.446-15.003-24.209-29.372s27.411-18.46,37.431-6.906c8.705,10.743,25.708,3.948,38.048-2.289,12.34-6.237,32.138-8.043,35.528,5.361,8.711,13.538-2.026,34.731-18.094,35.715s-29.311-18.74-22.318-33.24c6.993-14.5,30.674-16.415,39.907-3.228,20.066,28.935,18.524,71.051-3.604,98.441-7.643,9.46-21.971,17.328-31.22,9.432-6.214-5.306-6.154-15.339-2.317-22.553,3.837-7.214,10.509-12.396,16.649-17.787,25.654-22.526,44.78-52.402,54.497-85.13,11.794,7.684,29.442,4.204,37.435-7.383-6.739,6.12-13.732,12.616-16.704,21.22-2.972,8.604-.303,19.891,8.079,23.443,9.449,4.004,19.952-3.604,25.471-12.257,5.518-8.652,8.851-19.045,16.717-25.637s22.903-5.907,25.475,4.028c-7.326-14.046-31.228-13.988-38.783-.063-7.555,13.925,4.889,33.793,20.727,33.42,15.838-.373,27.389-20.254,20.185-34.363-7.04,8.883-.149,23.709,10.826,26.537,10.976,2.828,22.726-4.062,28.558-13.78s6.842-21.571,6.439-32.898c-2.408,41.429-.628,83.1,5.305,124.172-4.466-29.57-5.485-59.659-3.029-89.464,1.22-14.798,6.556-33.062,21.254-35.17,15.163-2.174,25.957,18.734,18.478,32.102-7.479,13.368-25.82,17.355-40.488,12.94,26.636,6.02,56.385-5.579,71.916-28.04,15.531-22.461,15.88-54.389.844-77.184.633,39.561,1.267,79.123,1.9,118.684-2.604-12.517-5.061-26.225.894-37.538,5.955-11.313,24.25-16.208,31.343-5.571,3.838,5.755,3.114,13.862,7.574,19.149,6.441,7.637,19.957,3.986,25.434-4.369,5.477-8.356,5.27-19.075,4.87-29.057-9.575,7.571-7.337,24.679,3.041,31.106s25.159,2.428,32.629-7.226c7.47-9.654,8.202-23.402,3.939-34.839,7.368,41.899,8.899,84.821,4.535,127.138-.8,7.756-1.925,15.839-6.401,22.224-4.476,6.385-13.352,10.371-20.321,6.874-7.781-3.905-9.267-14.35-8.485-23.02,3.059-33.946,27.086-65.116,59.135-76.715,17.765-6.429,61.274-24.408,157.627-11.549,51.361,6.854,162.022,27.533,245.993,8.648,82.054-18.454,164.325-12.752,200.881,0"/>
            </svg>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-3 px-4 sm:px-8 gap-4'}>
            <h5 className={'w-full row-start-1 md:col-span-3'}>I have a lot of experience creating and editing videos, my
                main areas of expertise
                being promotional videos and video essays.</h5>
            <div className={'md:col-span-2 row-start-2 col-start-1 flex flex-col justify-center gap-2'}>
                <h3>Promotional Videos</h3>
                <p>Recently, I created the promotional video for the main-stage play at DramaTech theatre, She Kills
                    Monsters. I was the lead in all aspects of this video&apos;s production, including design, writing,
                    filming, and editing.</p>
                <div className={'flex w-full justify-center gap-2'}>
                    <AMButton color="yellow" shade={500}
                              href="https://www.instagram.com/reel/DCXLso-vszc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                              target="_blank"
                              rel="noopener noreferrer">View Post</AMButton>
                    <AMButton color="yellow" shade={500} href="/videography">See More</AMButton>
                </div>
            </div>
            <div className={'row-start-3 md:col-start-3 md:row-start-2 md:row-span-2 p-2 flex items-center'}>
                <InstagramEmbed/>
            </div>
            <div className={'col-start-1 row-start-5 md:row-start-3 flex items-center'}>
                <iframe
                    className={'aspect-video w-full'}
                    src="https://www.youtube.com/embed/A-q--o95iUE?si=HhpJb3BN-UmXtgLh"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
            <div className={'flex flex-col gap-2 justify-center'}>
                <h3>Video Essays</h3>
                <p>Video essays are another medium I have worked with a lot. Here is a video essay on Language and
                    Diaspora I did for my English Composition II class at Tech.</p>
                <div className={'flex w-full justify-center gap-2'}>
                    <AMButton color="yellow" shade={500}
                              href="https://youtu.be/A-q--o95iUE"
                              target="_blank"
                              rel="noopener noreferrer">View Post</AMButton>
                    <AMButton color="yellow" shade={500} href="/videography">See More</AMButton>
                </div>
            </div>
        </div>
    </section>
}