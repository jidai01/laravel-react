import { SVGAttributes } from 'react';

interface AppLogoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
}

export default function AppLogoIcon({ src = "/images/bebek_fix.png", ...props }: AppLogoImageProps) {
    return (
        <img
            src={src}
            alt="App Logo"
            {...props}
            className={`rounded-md object-cover ${props.className || ""}`}
        />
    );
}
