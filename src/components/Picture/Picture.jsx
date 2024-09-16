export default function Picture({ className, src_mobile, src_desktop, alt, width, height, lazy=true }) {
    return (
        <picture className={className}>
            <source srcSet={src_mobile} media="(max-width: 768px)" />
            <img src={src_desktop} alt={alt} width={width} height={height} {...(lazy ? {loading: 'lazy'} : {})} />
        </picture>
    );
}