import BlueLink from "../components/link/blue-link"
import ContentLayout from "../layouts/content-layout"
import { FOOTER_LINKS, INFO_LINKS } from "../menus"

export default function Page() {
  return (
    <ContentLayout title="Site Map" crumbs={[["Site Map", "/sitemap"]]}>
      <></>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="font-semibold">Resources</h2>
          {FOOTER_LINKS.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink
                  ariaLabel={`Goto ${link.name}`}
                  href={link.url}
                  underline={true}
                >
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </section>

        <section>
          <h2 className="font-semibold">About</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {INFO_LINKS.map(
              (link: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <BlueLink
                    href={link.url}
                    ariaLabel={`View ${link.name}`}
                    underline={true}
                  >
                    {link.name}
                  </BlueLink>
                </li>
              )
            )}

            <li>
              <BlueLink href="/help" ariaLabel={`View help`} underline={true}>
                Help
              </BlueLink>
            </li>
          </ul>
        </section>

        {/* <section>
          <h2 className="mt-4 font-medium">Departments</h2>
          {FOOTER_LINKS_2.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink ariaLabel={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </section> */}
      </div>
    </ContentLayout>
  )
}
