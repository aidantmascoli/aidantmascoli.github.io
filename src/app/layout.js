import "./globals.css";
import {Divider, NextUIProvider} from "@nextui-org/react";
import AMFooter from "@/app/_components/footer";
import AMNavbar from "@/app/_components/navbar";
import {Josefin_Sans, Urbanist, Work_Sans} from "next/font/google";

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: "swap",
    variable: '--font-work'
});

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-urbanist'
});

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-josefin'
})

export const metadata = {
  title: "Aidan Mascoli",
  description: "Web Dev, Videography, Music, Performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${urbanist.variable} ${josefinSans.variable} antialiased light font-body`}>
        <NextUIProvider>
            <AMNavbar />
            <main className={'min-h-screen w-full flex flex-col items-center'}>
                {children}
            </main>
            <AMFooter />
        </NextUIProvider>
      </body>
    </html>
  );
}
