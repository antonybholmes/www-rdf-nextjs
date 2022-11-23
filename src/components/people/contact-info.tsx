import MailIcon from "../../icons/mail"
import PhoneIcon from "../../icons/phone"
import cn from "../../lib/class-names"
import BaseRow from "../base-row"
import BaseLink from "../link/base-link"
import BlackLink from "../link/black-link"
import BlueButtonArrowLink from "../link/blue-button-arrow-link"
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
                underline={true}
              >
                <MailIcon className="w-4" />
              </BlueLink>

              <BlueLink
                href={`mailto:${person.frontmatter.email}`}
                ariaLabel={`Email ${person.frontmatter.email}`}
                underline={true}
              >
                {person.frontmatter.email}
              </BlueLink>
            </VCenterRow>
          </li>
        )}
        {showPhone && person.frontmatter.phone !== "" && (
          <li>
            <VCenterRow className="gap-2">
              <BaseLink
                href={`tel:${person.frontmatter.phone}`}
                className="flex flex-row items-center"
                ariaLabel={`Call ${person.frontmatter.phone}`}
              >
                <PhoneIcon className="w-4" />
              </BaseLink>

              <BlackLink
                href={`tel:${person.frontmatter.phone}`}
                ariaLabel={`Call ${person.frontmatter.phone}`}
                underline={true}
              >
                {person.frontmatter.phone}
              </BlackLink>
            </VCenterRow>
          </li>
        )}
      </ul>

      {person.frontmatter.profile && (
        <BaseRow>
          <BlueButtonArrowLink
            href={person.frontmatter.profile}
            className="mt-2"
            ariaLabel="View Columbia Profile"
          >
            Columbia Profile
          </BlueButtonArrowLink>
        </BaseRow>
      )}
    </>
  )
}
