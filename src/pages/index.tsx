import ContentDiv from "../components/content-div"
import BaseLayout from "../layouts/base-layout"

//import axios from "axios"
import BaseImage from "../components/base-image"
import BaseRow from "../components/base-row"
import HCenterRow from "../components/h-center-row"
import IndexPublications from "../components/publication/index-publications"
import BaseLink from "../components/link/base-link"
import BlueButtonLink from "../components/link/blue-button-link"
import VCenterCol from "../components/v-center-col"

export default function Page() {
  return (
    <BaseLayout title="Home" showTitle={false}>
      <div className="mb-32 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden flex-col items-center justify-center bg-apple-gray lg:flex">
          <h1 className="py-8 text-7xl font-semibold">Welcome.</h1>
        </div>

        <BaseImage
          src="/assets/images/lab.webp"
          alt="Hands performing bench work."
          className="h-full w-full lg:-ml-16 lg:mt-16 lg:rounded-3xl lg:shadow-2xl"
          size={[1024, 512]}
          loading={"eager"}
          style={{ objectFit: "cover" }}
        />
      </div>

      <h1 className="text-center text-7xl font-semibold lg:hidden">Welcome.</h1>

      {/* <div className="grid">
        <div
          className="z-0 h-120 w-full overflow-hidden"
          style={{
            gridArea: "1/1",
          }}
        >
          <BaseImage
            image={data.labImage}
            alt="Header Image"
            loading="eager"
            className="h-full w-full"
          />
        </div>
        <div
          className="z-20 h-full w-full bg-black/10 backdrop-blur-sm"
          style={{
            gridArea: "1/1",
          }}
        ></div>
        <VCenterCol
          className="z-30 h-full w-full items-center"
          style={{
            gridArea: "1/1",
          }}
        >
          <h1 className="text-7xl font-medium text-white">Welcome.</h1>
        </VCenterCol>
      </div> */}

      <ContentDiv className="my-32 lg:my-64">
        <></>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-5">
          <div className="col-span-3 overflow-hidden p-8 lg:rounded-3xl lg:shadow-2xl">
            <BaseLink
              href="https://pubmed.ncbi.nlm.nih.gov/25712152/"
              ariaLabel="View original article"
            >
              <BaseImage
                src="/assets/images/bcell.webp"
                alt="Diagram of a B-cell."
                className="h-full w-full"
                style={{ objectFit: "contain" }}
                size={[1024, 512]}
              />
            </BaseLink>
          </div>
          <VCenterCol className="col-span-2">
            <p>
              The research program in the Dalla-Favera laboratory is aimed at
              the identification of the molecular pathogenesis of human B cell
              malignancies. Functional and structural genomic approaches are
              used toward the identification of the genetic lesions leading to
              the transformation of B lymphocytes. The genomic landscape of the
              tumors is then recapitulated in genetically modified mice in order
              to construct models for pre-clinical testing of science-based new
              therapeutic modalities.
            </p>

            <BaseRow>
              <BlueButtonLink
                href="/people"
                className="mt-8"
                ariaLabel="Meet the team"
              >
                Meet The Team
              </BlueButtonLink>
            </BaseRow>
          </VCenterCol>
        </div>
        <></>
      </ContentDiv>

      <ContentDiv className="bg-gradient-to-b from-apple-gray">
        <></>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 ">
          <HCenterRow>
            <BaseLink
              href="https://pubmed.ncbi.nlm.nih.gov/32603407"
              ariaLabel="View article"
            >
              <BaseImage
                src="/assets/images/umap_bbbb.webp"
                size={[512, 512]}
                alt="UMAP"
                className="rounded-3xl bg-white p-4 shadow-2xl lg:p-8"
              />
            </BaseLink>
          </HCenterRow>

          <HCenterRow>
            <BaseLink
              href="https://pubmed.ncbi.nlm.nih.gov/32603407"
              ariaLabel="View article"
            >
              <BaseImage
                src="/assets/images/umap_pseudotime.webp"
                size={[512, 512]}
                alt="UMAP"
                className="rounded-3xl bg-white p-4 shadow-2xl lg:p-8"
              />
            </BaseLink>
          </HCenterRow>
        </div>
        <></>
      </ContentDiv>

      {/* <ContentDiv className="mt-32">
        <></>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="">
            <h1 className="text-4xl font-medium">Lorem ipsum dolor</h1>
            <p className="mt-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <BaseImage
              image={data.headerImage}
              imgClassName="overflow-hidden rounded-lg"
              className="h-96 w-full overflow-hidden rounded-lg shadow-lg"
              alt="Header image"
            />
          </div>
        </div>
        <></>
      </ContentDiv> */}

      <IndexPublications />
    </BaseLayout>
  )
}

// export async function getStaticProps() {
//   const file = join(PUBLICATIONS_DIR, `lab.json`)

//   let allPublications = []

//   if (existsSync(file)) {
//     allPublications = readJsonSync(file)
//   }

//   allPublications = sortPublications(allPublications)

//   return {
//     props: {
//       allPublications: allPublications.slice(10),
//     },
//   }
// }
