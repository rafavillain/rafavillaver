import "./Picture.scss"

/* eslint-disable react/prop-types */
export default function Picture({ className, src_mobile, src_desktop, alt, height, width }) {
    return (
        <picture className={className}>
            <source srcSet={src_mobile} media="(max-width: 768px)" />
            <source srcSet={src_desktop} />
            <img src={src_desktop} alt={alt} loading="lazy" style={{height: height, width: width}} />
        </picture>
    );
}