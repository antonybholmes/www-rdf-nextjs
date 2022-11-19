import ExportedImage from "next-image-export-optimizer"

type Props = {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center">
      <ExportedImage
        src={picture}
        className="mr-4 h-12 w-12 rounded-full"
        alt={name}
        width={100}
        height={100}
      />
      <div className="text-xl font-medium">{name}</div>
    </div>
  )
}
