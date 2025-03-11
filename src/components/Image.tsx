type ImageProps = {
    src: string;
    alt: string;
    fadeClass: string;
}

export default function Image({src, alt, fadeClass} : ImageProps) {
  return (
    <img 
        src={src} 
        alt={alt}
        className={`lg:w-[30rem] sm:w-[20rem] w-[12rem] aspect-[6/5.2] rounded-2xl  cursor-pointer 
            hover:shadow-[0px_0px_1px_3px_#22d3ee] ${fadeClass}`}
    />
  )
}


