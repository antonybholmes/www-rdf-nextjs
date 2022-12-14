import { ICG_URL } from "../../constants"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import getCopyright from "../../lib/copyright"
import { FOOTER_LINKS, FOOTER_LINKS_2, INFO_LINKS } from "../../menus"
import ContentDiv from "../content-div"
import HCenterRow from "../h-center-row"
import BaseLink from "../link/base-link"
import BlackLink from "../link/black-link"

export default function Footer({ className }: IClassProps) {
  return (
    <footer className={cn("mt-32", className)}>
      <ContentDiv className="bg-neutral-100">
        <></>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-16 text-sm xl:grid-cols-4 ">
          <div>{getCopyright()}</div>
          <div className="col-span-2 flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h2 className="font-semibold">Resources</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {FOOTER_LINKS.map(
                  (link: { name: string; url: string }, index: number) => (
                    <li key={index}>
                      <BlackLink
                        href={link.url}
                        ariaLabel={`View ${link.name}`}
                      >
                        {link.name}
                      </BlackLink>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">About</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {INFO_LINKS.map(
                  (link: { name: string; url: string }, index: number) => (
                    <li key={index}>
                      <BlackLink
                        href={link.url}
                        ariaLabel={`View ${link.name}`}
                      >
                        {link.name}
                      </BlackLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold">Departments</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {FOOTER_LINKS_2.map(
                  (link: { name: string; url: string }, index: number) => (
                    <li key={index}>
                      <BlackLink
                        href={link.url}
                        ariaLabel={`View ${link.name}`}
                      >
                        {link.name}
                      </BlackLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <></>
      </ContentDiv>

      <HCenterRow className="my-8">
        <BaseLink href={ICG_URL} ariaLabel="Visit ICG website">
          <img
            src="/assets/svg/icg.svg"
            alt="Institute for Cancer Genetics logo"
            width="360"
            height="60"
            className="w-80"
          />
        </BaseLink>
      </HCenterRow>
    </footer>
  )
}
