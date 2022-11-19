import { ICG_URL } from "../../constants"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import getCopyright from "../../lib/copyright"
import { FOOTER_LINKS, FOOTER_LINKS_2, INFO_LINKS } from "../../menus"
import ArticleDiv from "../article-div"
import HCenterRow from "../h-center-row"
import BaseLink from "../link/base-link"
import BlackLink from "../link/black-link"

export default function Footer({ className }: IClassProps) {
  return (
    <footer className={cn("mt-32", className)}>
      <ArticleDiv>
        <></>

        <>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-8 text-sm lg:pt-16 xl:grid-cols-4">
            <div>{getCopyright()}</div>
            <div className="col-span-3 grid grow grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <div>
                <h2 className="font-semibold">Learn more</h2>
                <ul className="mt-2 flex flex-col gap-2">
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
                <ul className="mt-2 flex flex-col gap-2">
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
                <ul className="mt-2 flex flex-col gap-2">
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

          <HCenterRow className="my-16">
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
        </>
        <></>
      </ArticleDiv>
    </footer>
  )
}
