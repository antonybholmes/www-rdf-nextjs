import { useRouter } from "next/router"
import ChevronRightIcon from "../icons/chevron-right"
import HomeIcon from "../icons/home"
import IClassProps from "../interfaces/class-props"
import ICrumb from "../interfaces/crumb"
import ICrumbProps from "../interfaces/crumb-props"
import cn from "../lib/class-names"
import { toUpperCase } from "../lib/text"
import BlueLink from "./link/blue-link"
import ToBlackLink from "./link/to-black-link"
import VCenterRow from "./v-center-row"

const EXCLUDE = ["Tag", "Section", "Page"]

function getCrumbLink(crumb: ICrumb) {
  return (
    <ToBlackLink href={crumb[1]} ariaLabel={`Visit ${crumb[0]}`}>
      {crumb[0]}
    </ToBlackLink>
  )
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

interface BreadcrumbProps extends IClassProps, ICrumbProps {}

export default function Breadcrumb({
  crumbs,
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
      <ToBlackLink href="/" ariaLabel="Home">
        <HomeIcon className="w-4" />
      </ToBlackLink>
      {/* <ToBlueLink href="/" ariaLabel="Home">
        Home
      </ToBlueLink> */}
    </li>
  )

  // ret.push(<li key={`crumb-${ret.length}`}>{getCrumbLink(["Home", "/"], mode)}</li>)

  for (let i = 0; i < crumbs.length; ++i) {
    const crumb = crumbs[i]

    ret.push(
      <li key={`divider-${i}`}>
        <ChevronRightIcon className="w-3 stroke-gray-400/70 stroke-2" />
      </li>
    )

    ret.push(<li key={`crumb-${ret.length}`}>{getCrumbLink(crumb)}</li>)
  }

  return (
    <VCenterRow>
      <ul
        className={cn(
          "color-ani -ml-4 flex flex-row flex-nowrap items-center gap-x-2 rounded-full border border-transparent stroke-gray-500 px-4 py-2 text-sm font-medium text-gray-400/80 hover:border-gray-200",
          className
        )}
      >
        {ret}
      </ul>
    </VCenterRow>
  )
}
