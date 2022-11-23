import IPerson from "../../interfaces/person"
import ContentLayout from "../../layouts/content-layout"
import ThreeQuarterLayout from "../../layouts/three-quarter-layout"
import getGroupMap from "../../lib/group-map"
import TableOfContents from "../toc/toc"
import PeopleGrid from "./people-grid"

interface IProps {
  title: string
  allPeople: IPerson[]
}

export default function Page({ title, allPeople }: IProps) {
  const groupMap = getGroupMap(allPeople)

  return (
    <ContentLayout title={title} crumbs={[]}>
      <></>
      <ThreeQuarterLayout isRight={false} className="main-content">
        <div className="flex w-full flex-col gap-y-16">
          {/* <section>
            <h1 className="mb-4 text-2xl">Director</h1>
  
            <PeopleGrid
              people={
                // @ts-ignore
                groupMap["Director"]
              }
              imageMap={imageMap}
              showUrl={true}
            />
          </section> */}

          {"Faculty" in groupMap && (
            <section>
              <h1 id="faculty" className="mb-8 scroll-mt-16 text-3xl">
                Faculty
              </h1>
              <PeopleGrid
                people={
                  // @ts-ignore
                  groupMap["Director"].concat(groupMap["Faculty"])
                }
                showUrl={true}
                loading={"eager"}
              />
            </section>
          )}

          {"Research Staff" in groupMap && (
            <section>
              <h1 id="research-staff" className="mb-8 scroll-mt-16 text-3xl">
                Research Staff
              </h1>
              <PeopleGrid
                people={
                  // @ts-ignore
                  groupMap["Research Staff"]
                }
              />
            </section>
          )}

          {/* <section className="mt-8">
              <h1 id="technicians" className="mb-4 text-3xl">
                Technicians
              </h1>
              <PeopleGrid
                people={
                  // @ts-ignore
                  groupMap["Technicians"]
                }
                imageMap={imageMap}
              />
            </section> */}

          {"Administrative Staff" in groupMap && (
            <section>
              <h1
                id="administrative-staff"
                className="mb-8 scroll-mt-16 text-3xl"
              >
                Administrative Staff
              </h1>
              <PeopleGrid
                people={
                  // @ts-ignore
                  groupMap["Administrative Staff"]
                }
              />
            </section>
          )}
        </div>

        <TableOfContents className="text-sm" />
      </ThreeQuarterLayout>
    </ContentLayout>
  )
}
