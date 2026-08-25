type ImageProps = {
    src: string;
    alt: string;
    fadeClass: string;
    phone: boolean;
    href?: string;
}

export default function ImagePhone({ src, alt, fadeClass, phone, href }: ImageProps) {
  return (
    <div className={`${href ? "cursor-pointer" : "cursor-not-allowed"} phone-wrapper ${fadeClass}`}>
      {phone ? (
        <div className="relative rounded-[2.2rem] bg-[#1a1a1a] p-[10px] shadow-2xl shadow-black/40 w-[135px] sm:w-[200px] lg:w-[220px] xl:w-[280px]">
          <div className="absolute left-1/2 top-[10px] z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[1.6rem]">
            <img src={src} alt={alt} className="block h-auto w-full" />
          </div>
        </div>
      ) : (
        <div className="relative rounded-[1.4rem] bg-[#1a1a1a] p-[8px] shadow-2xl shadow-black/40 w-[180px] sm:w-[265px] lg:w-[295px] xl:w-[370px]">
          <div className="absolute left-1/2 top-[5px] z-10 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[0.9rem] aspect-[4/5] bg-[#1a1a1a]">
            <img src={src} alt={alt} className="block h-full w-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
