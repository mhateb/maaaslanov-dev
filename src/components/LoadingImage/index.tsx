import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'

type LoadingImagePropsType = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  'className' | 'loading' | 'fetchPriority'
> & {
  src: string
  alt: string
}

const LoadingImage = ({ src, alt, className, loading, fetchPriority }: LoadingImagePropsType) => {
  const image = useRef<HTMLImageElement>(null)
  const [settledSource, setSettledSource] = useState<string | null>(null)

  useEffect(() => {
    if (image.current?.complete) setSettledSource(src)
  }, [src])

  return (
    <>
      {settledSource !== src && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] bg-line motion-safe:animate-pulse" />
      )}
      <img
        ref={image}
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={() => setSettledSource(src)}
        onError={() => setSettledSource(src)}
        className={className}
      />
    </>
  )
}

export default LoadingImage
