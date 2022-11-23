/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { range } from "lodash"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import BasePublication from "./base-publication"

interface PublicationListProps extends IClassProps {
  publications: any[]
  showAbstract?: boolean
  showCount?: boolean
  pageBreak?: number
}

// Space is only added to intermediate elements of the list so that
// wasted space at the bottom is removed

function BasePublicationList({
  publications,
  showAbstract = false,
  showCount = false,
  pageBreak = -1,
  className,
}: PublicationListProps) {
  if (pageBreak == -1) {
    pageBreak = publications.length
  }

  // divide into pages
  const pages = range(
    0,
    Math.floor((publications.length - 1) / pageBreak) + 1
  ).map(p => {
    const s = p * pageBreak

    const elems = []

    if (p > 0) {
      elems.push(
        <li
          key={`divider-${p}`}
          className="my-4 flex flex-row items-center gap-x-4 text-xs text-gray-500"
        >
          <hr className="grow text-gray-100" />
          <span>Page {p + 1}</span>
          <hr className="grow text-gray-100" />
        </li>
      )
    }

    elems.push(
      ...publications.slice(s, s + pageBreak).map((publication, index) => {
        const i = s + index
        return (
          <li key={i}>
            <BasePublication
              index={i}
              showCount={showCount}
              publication={publication}
              showAbstract={showAbstract}
            />
          </li>
        )
      })
    )

    return elems
  })

  return (
    <ul className={cn("flex flex-col gap-y-2", className)}>
      {pages.map((page, index) => {
        return page
      })}
    </ul>
  )
}

export default BasePublicationList
