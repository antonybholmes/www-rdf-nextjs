import cn from "../lib/class-names"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

type Props = {
  title: string
  src: string
  slug?: string
  width?: number
  height?: number
}

export default function CoverImage({
  title,
  src,
  slug,
  width = 640,
  height = 480,
}: Props) {
  const image = (
    <ExportedImage
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn()}
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
