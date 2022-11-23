/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import IClassProps from "../../interfaces/class-props"
import BasePublication from "./base-publication"

interface PublicationListProps extends IClassProps {
  publications: any[]
  showAbstract?: boolean
  showCount?: boolean
}

// Space is only added to intermediate elements of the list so that
// wasted space at the bottom is removed

function BasePublicationList({
  publications,
  showAbstract = false,
  showCount = false,
  className,
}: PublicationListProps) {
  return (
    <ul className={className}>
      {publications.map((publication: any, index: number) => (
        <li
          className={`${index < publications.length - 1 ? "mb-4" : ""}`}
          key={index}
        >
          {/* <FlatCard autoHide={false}> */}
          <BasePublication
            index={index}
            showCount={showCount}
            publication={publication}
            showAbstract={showAbstract}
          />
          {/* </FlatCard> */}
        </li>
      ))}
    </ul>
  )
}

export default BasePublicationList
