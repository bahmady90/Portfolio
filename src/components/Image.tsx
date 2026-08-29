import { useEffect, useState } from "react";

type ImageProps = {
    src: string;
    alt: string;
    fadeClass: string;
    phone: boolean;
}

const BREAKPOINTS = { xl: 1280, lg: 1024, sm: 640 };
const TABLET_SCREEN_WIDTHS = { base: 180, sm: 265, lg: 295, xl: 370 };
// Phones are naturally much taller than they are wide (~19.5:9), so the
// same widths as the tablet would make the phone mockup way too tall -
// keeping it narrower shrinks its footprint while keeping the shape intact.
const PHONE_SCREEN_WIDTHS = { base: 135, sm: 200, lg: 220, xl: 280 };

function getScreenWidth(widths: typeof TABLET_SCREEN_WIDTHS) {
  if (typeof window === "undefined") return widths.base;
  if (window.innerWidth >= BREAKPOINTS.xl) return widths.xl;
  if (window.innerWidth >= BREAKPOINTS.lg) return widths.lg;
  if (window.innerWidth >= BREAKPOINTS.sm) return widths.sm;
  return widths.base;
}

function useResponsiveScreenWidth(phone: boolean) {
  const widths = phone ? PHONE_SCREEN_WIDTHS : TABLET_SCREEN_WIDTHS;
  const [screenWidth, setScreenWidth] = useState(() => getScreenWidth(widths));

  useEffect(() => {
    const onResize = () => setScreenWidth(getScreenWidth(widths));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);

  return screenWidth;
}


export default function ImagePhone({ src, alt, fadeClass, phone }: ImageProps) {
  const screenWidth = useResponsiveScreenWidth(phone);

  return (
    <div className={`cursor-pointer phone-wrapper ${fadeClass}`}>
      {phone ? (
        <div
          className="relative rounded-[2.2rem] bg-[#1a1a1a] p-[10px] shadow-2xl shadow-black/40"
          style={{ width: screenWidth }}
        >
          <div className="absolute left-1/2 top-[10px] z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[1.6rem]">
            <img src={src} alt={alt} className="block h-auto w-full" />
          </div>
        </div>
      ) : (
        <div
          className="relative rounded-[1.4rem] bg-[#1a1a1a] p-[8px] shadow-2xl shadow-black/40"
          style={{ width: screenWidth }}
        >
          <div className="absolute left-1/2 top-[5px] z-10 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[0.9rem]">
            <img src={src} alt={alt} className="block h-auto w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
