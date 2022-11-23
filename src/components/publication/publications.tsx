/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { ReactNode, useState } from "react"
//import Button from "../../components/button"
//import PublicationYears from "./publicationyears"
import { TEXT_SHOW_MORE } from "../../constants"
import IChildrenProps from "../../interfaces/children-props"
import HCenterRow from "../h-center-row"
import BlueButton from "../link/blue-button"
import OutlinePillButton from "../link/outline-pill-button"
import OutlineRoundedButton from "../link/outline-rounded-button"
import SecondaryButton from "../link/secondary-button"
import VCenterRow from "../v-center-row"
import BasePublicationList from "./base-publication-list"

const RECORDS_PER_PAGE = 25

interface IProps extends IChildrenProps {
  publications: any[]
  showAbstract?: boolean
  showCount?: boolean
  showMoreButton?: boolean
  onShowMoreClick?: any
}

function Publications({
  publications,
  showAbstract,
  showCount,
  showMoreButton,
  onShowMoreClick,
  className,
}: IProps) {
  return (
    <>
      {/* {publications.length > 0 && showCount && (
        <HCenterRow className="mb-8 justify-between">
          <div>

            {`${publications.length} ${
              publications.length !== 1 ? "results" : "result"
            }`}
          </div>
        </HCenterRow>
      )} */}

      {publications.length > 0 && (
        <BasePublicationList
          publications={publications}
          showAbstract={showAbstract}
          showCount={showCount}
          className={className}
        />
      )}

      {showMoreButton && (
        <HCenterRow className="mt-8">
          <div>
            <BlueButton
              ariaLabel={TEXT_SHOW_MORE}
              onClick={onShowMoreClick}
              className="text-sm"
            >
              {TEXT_SHOW_MORE}
            </BlueButton>
          </div>
        </HCenterRow>
      )}
    </>
  )
}

export default Publications
