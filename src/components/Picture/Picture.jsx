export default function Picture ({ className, srcMobile, srcDesktop, alt, width, height, lazy = true }) {
  return (
    <picture className={className}>
      <source srcSet={srcMobile} media='(max-width: 768px)' />
      <img src={srcDesktop} alt={alt} width={width} height={height} {...(lazy ? { loading: 'lazy' } : {})} />
    </picture>
  )
}
