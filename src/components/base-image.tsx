import * as path from "path"
import type IClassProps from "../interfaces/class-props"

export interface IImageProps extends IClassProps {
  src: string
  alt: string
  size?: number[]
  sizes?: number[]
  decoding?: "sync" | "async" | "auto"
  loading?: "lazy" | "eager"
  root?: string
}

export default function BaseImage({
  src,
  alt,
  size = [640, 640],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  className,
  style,
}: IImageProps) {
  if (sizes.length === 0) {
    sizes = [size[0] / 8, size[0] / 4, size[0] / 2, size[0]]
  }

  const p = path.parse(src)
  const dir = p.dir
  const name = p.name
  const ext = p.ext

  const srcset = sizes
    .map(s => `${dir}/imgopt/${name}-${s}${ext} ${s}w`)
    .join(", ")

  //const _sizes = sizes.map(s => `(min-width: ${s}px) ${s}px`).join(", ") //+ `, ${sizes[sizes.length - 1]}px`

  return (
    <picture>
      <img
        src={`${dir}/imgopt/${name}-${size[0]}${ext}`}
        srcSet={srcset}
        sizes={`(min-width: ${size[0]}px) ${size[0]}px, 100vw`}
        width={size[0]}
        height={size[1]}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        alt={alt}
      />
    </picture>
  )
}
