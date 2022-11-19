import ExportedImage from "next-image-export-optimizer"
import IClassProps from "../interfaces/class-props"
import BaseLink from "./link/base-link"

interface ImageProps extends IClassProps {
  src: any
  alt: string
  onMouseEnter?: any
  onMouseLeave?: any
  width?: number
  height?: number
  href?: string
}

export default function BaseImage({
  src,
  alt,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  width = 640,
  height = 480,
  href,
}: ImageProps) {
  function _onMouseEnter(e: any) {
    if (onMouseEnter) {
      onMouseEnter(e)
    }
  }

  function _onMouseLeave(e: any) {
    if (onMouseLeave) {
      onMouseLeave(e)
    }
  }

  const image = (
    <ExportedImage
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    />
  )

  if (href) {
    return (
      <BaseLink href={href} ariaLabel={alt}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}
