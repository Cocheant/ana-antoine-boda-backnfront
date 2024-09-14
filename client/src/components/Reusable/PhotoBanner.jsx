import { Suspense } from "react";

// eslint-disable-next-line react/prop-types
function PhotoBanner({ src }) {
    return (
        <Suspense>
            <img src={src} alt="Photo of US" className="w-full object-fit-cover bg-center" />
        </Suspense>
    );

}

export default PhotoBanner
