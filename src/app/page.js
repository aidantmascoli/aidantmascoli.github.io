import Image from "next/image";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <div className={'h-screen w-full grid grid-rows-[minmax(0,1fr)_max-content] md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-0 justify-stretch align-stretch pt-16'}>
      <div className={'p-6 row-start-2 md:row-start-1 flex flex-col gap-2 justify-center'}>
        <h1>Hello!</h1>
        <h3>My name is Aidan.</h3>
        <p className={'text-large my-4'}>Welcome to my portfolio website. Here you can learn about me, and take a look at a
        bunch of different projects I&apos;ve done.</p>
        <Button color={'default'} variant={'ghost'} className={'w-max mx-auto border-default-900 text-default-900 data-[hover=true]:!text-default-50 data-[hover=true]:!bg-default-900'}>Let&apos;s See</Button>
      </div>
      <div className={'relative'}>
        <Image src={'portfolio/images/coverPhoto.jpg'} alt={'Headshot'} fill objectFit={'cover'} objectPosition={'center bottom'} />
      </div>
    </div>
  );
}
