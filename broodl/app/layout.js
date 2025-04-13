import { Fugaz_One, Open_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const opensans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const fugaz = Fugaz_One({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood, every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4 ">
      <Link href='/'>
<h1 className= {'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
      </Link>
<div className=" flex items-center justify-between ">
  Placeholder
</div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
    <p className={' text-indigo-500 ' + fugaz.className}>Created with ❤️</p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:test-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
