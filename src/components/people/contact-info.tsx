import { useState } from "react"
import IndexArrow from "../../icons/index-arrow"
import MailIcon from "../../icons/mail"
import PhoneIcon from "../../icons/phone"
import cn from "../../lib/class-names"
import BaseRow from "../base-row"
import BlackLink from "../link/black-link"
import BlueButtonLink from "../link/blue-button-link"
import BlueLink from "../link/blue-link"
import VCenterRow from "../v-center-row"

type ContactInfoProps = {
  person?: any
  showPhone?: boolean
  className?: string
}

export default function ContactInfo({
  person,
  className,
  showPhone = true,
}: ContactInfoProps) {
  const [hover, setHover] = useState(false)

  return (
    <>
      <ul className={cn("flex flex-col gap-y-2 lg:gap-x-4", className)}>
        {person.frontmatter.email !== "" && (
          <li>
            <VCenterRow className="gap-2">
              <BlueLink
                href={`mailto:${person.frontmatter.email}`}
                className="flex flex-row items-center"
                ariaLabel={`Email ${person.frontmatter.email}`}
              >
                <MailIcon className="w-4" />
              </BlueLink>

              <BlueLink
                href={`mailto:${person.frontmatter.email}`}
                ariaLabel={`Email ${person.frontmatter.email}`}
              >
                {person.frontmatter.email}
              </BlueLink>
            </VCenterRow>
          </li>
        )}
        {showPhone && person.frontmatter.phone !== "" && (
          <li>
            <VCenterRow className="gap-2">
              <BlackLink
                href={`tel:${person.frontmatter.phone}`}
                className="flex flex-row items-center"
                ariaLabel={`Call ${person.frontmatter.phone}`}
              >
                <PhoneIcon className="w-4" />
              </BlackLink>

              <BlackLink
                href={`tel:${person.frontmatter.phone}`}
                ariaLabel={`Call ${person.frontmatter.phone}`}
              >
                {person.frontmatter.phone}
              </BlackLink>
            </VCenterRow>
          </li>
        )}
      </ul>

      {person.frontmatter.profile && (
        <BaseRow>
          <BlueButtonLink
            href={person.frontmatter.profile}
            className="mt-2 text-sm font-medium"
            ariaLabel="View Columbia Profile"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Columbia Profile
            <IndexArrow
              className="w-4 stroke-white stroke-2"
              selected={hover}
            />
          </BlueButtonLink>
        </BaseRow>
      )}
    </>
  )
}
