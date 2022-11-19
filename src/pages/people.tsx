import PeopleGrid from "../components/people/people-grid"
import TableOfContents from "../components/toc/toc"

import IPerson from "../interfaces/person"
import ContentLayout from "../layouts/content-layout"
import ThreeQuarterLayout from "../layouts/three-quarter-layout"
import { getAllPeople } from "../lib/api"
import getGroupMap from "../lib/group-map"

interface IProps {
  allPeople: IPerson[]
}

export default function Page({ allPeople }: IProps) {
  const groupMap = getGroupMap(allPeople)

  return (
    <ContentLayout title="People" showTitle={false}>
      <></>
      <ThreeQuarterLayout isRight={false} className="main-content">
        <div className="flex w-full flex-col gap-y-8">
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

          <section>
            <h1 id="faculty" className="mb-4 scroll-mt-16 text-3xl">
              Faculty
            </h1>
            <PeopleGrid
              people={
                // @ts-ignore
                groupMap["Director"].concat(groupMap["Faculty"])
              }
              showUrl={true}
            />
          </section>

          <section className="mt-8">
            <h1 id="research-staff" className="mb-4 scroll-mt-16 text-3xl">
              Research Staff
            </h1>
            <PeopleGrid
              people={
                // @ts-ignore
                groupMap["Research Staff"]
              }
            />
          </section>

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

          <section className="mt-8">
            <h1
              id="administrative-staff"
              className="mb-4 scroll-mt-16 text-3xl"
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
        </div>

        <TableOfContents className="text-sm" />
      </ThreeQuarterLayout>
    </ContentLayout>
  )
}

export const getStaticProps = async () => {
  const allPeople = getAllPeople()

  return {
    props: { allPeople },
  }
}
