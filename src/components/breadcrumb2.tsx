import { useRouter } from "next/router"
import HomeIcon from "../icons/home"
import IClassProps from "../interfaces/class-props"
import ICrumb from "../interfaces/crumb"
import ICrumbProps from "../interfaces/crumb-props"
import cn from "../lib/class-names"
import { toUpperCase } from "../lib/text"
import BlackLink from "./link/black-link"
import BlueLink from "./link/blue-link"
import ToBlackLink from "./link/to-black-link"
import WhiteLink from "./link/white-link"

const EXCLUDE = ["Tag", "Section", "Page"]

function getCrumbLink(crumb: ICrumb, mode = "light") {
  if (mode === "dark") {
    return (
      <WhiteLink
        href={crumb[1]}
        underline={true}
        ariaLabel={`Visit ${crumb[0]}`}
      >
        {crumb[0]}
      </WhiteLink>
    )
  } else {
    return (
      <ToBlackLink href={crumb[1]} ariaLabel={`Visit ${crumb[0]}`}>
        {crumb[0]}
      </ToBlackLink>
    )
  }
}

function createCrumbs(url: string): ICrumb[] {
  const segments = url.split("/").filter(s => s.length > 0)

  const crumbs: ICrumb[] = []

  for (let i = 0; i < segments.length; ++i) {
    const name = toUpperCase(
      segments[i].replace(/^\d{4}-\d{2}-\d{2}-/, "")
    ).replace("Faq", "FAQ")
    const path = `/${segments.slice(0, i + 1).join("/")}`
    if (!EXCLUDE.includes(name) && name.search(/^\d+$/) === -1) {
      crumbs.push([name, path])
    }
  }

  return crumbs
}

interface BreadcrumbProps extends IClassProps, ICrumbProps {
  mode?: string
}

export default function Breadcrumb({
  crumbs,
  mode = "light",
  className = "",
}: BreadcrumbProps) {
  if (!crumbs) {
    return <></>
  }

  if (crumbs.length === 0) {
    const router = useRouter()
    crumbs = createCrumbs(router.asPath)
  }

  const ret: any[] = []

  ret.push(
    <li key="home">
      <BlueLink href="/" ariaLabel="Home">
        <HomeIcon className="w-4" />
      </BlueLink>
      {/* <ToBlueLink href="/" ariaLabel="Home">
        Home
      </ToBlueLink> */}
    </li>
  )

  // ret.push(<li key={`crumb-${ret.length}`}>{getCrumbLink(["Home", "/"], mode)}</li>)

  for (let i = 0; i < crumbs.length; ++i) {
    const crumb = crumbs[i]

    ret.push(<li key={`divider-${i}`}>/</li>)

    ret.push(<li key={`crumb-${ret.length}`}>{getCrumbLink(crumb, mode)}</li>)
  }

  return (
    <ul
      className={cn(
        "flex flex-row flex-nowrap items-center gap-x-3 stroke-gray-500 text-base font-medium text-gray-400/80",
        [mode === "dark", "text-gray-50"],
        className
      )}
    >
      {ret}
    </ul>
  )
}
