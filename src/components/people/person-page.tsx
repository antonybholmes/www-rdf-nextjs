import axios from "axios"
import { join } from "path"
import { useEffect, useState } from "react"
import BaseCol from "../base-col"
import BaseRow from "../base-row"
import SecondaryButton from "../link/secondary-button"
import MarkdownBody from "../markdown-body"
import ContactInfo from "./contact-info"
import PersonHeaderHoz from "./person-header-hoz"
import PersonHeaderImage from "./person-header-image"
import Publications from "../publication/publications"
import PubMedLink from "../publication/pubmed-link"
import VCenterCol from "../v-center-col"
import VCenterRow from "../v-center-row"
import QuoteStart from "../../icons/quote-start"
import IPerson from "../../interfaces/person"
import ContentLayout from "../../layouts/content-layout"
import SeventyLayout from "../../layouts/seventy-layout"
import { getAllPeople, getPersonBySlug, PEOPLE_DIR } from "../../lib/api"
import getContextName from "../../lib/context-name"
import markdownToHtml from "../../lib/markdownToHtml"
import sortPublications from "../../lib/sort-publications"

const BASE_URL = "/api/publications/selected"

interface IProps {
  person: IPerson
}

export default function PersonPage({ person }: IProps) {
  const [hover, setHover] = useState(false)
  const [publications, setPublications] = useState<any[]>([])
  const [showAbstract, setShowAbstract] = useState(false)

  function fetchData(person: IPerson) {
    axios
      .get(`${BASE_URL}/${person.frontmatter.personId}.json`)
      .then(res => {
        setPublications(sortPublications(res.data))
      })
      .catch(err => {
        //Do nothing console.log(err)
      })
  }

  useEffect(() => {
    fetchData(person)
  }, [])

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  const title = getContextName(person.titleMap).split(";")[0]

  //Request pub data
  //useEffect(() => {
  // axios
  //   .get(`/data/${person.frontmatter.personId}-selected-publications.json`)
  //   .then(res {
  //     // Since gatsby always seems to return an empty object, test if data is array
  //     if (Array.isArray(res.data)) {
  //       setPublications(sortPublications(res.data))
  //     } else {
  //       // try loading all pubs
  //       axios
  //         .get(`/data/${person.frontmatter.personId}-publications.json`)
  //         .then(res {
  //           if (Array.isArray(res.data)) {
  //             setPublications(sortPublications(res.data))
  //           }
  //         })
  //     }
  //   })
  //   .catch(err {
  //     axios
  //       .get(`/data/${person.frontmatter.personId}-publications.json`)
  //       .then(res {
  //         if (Array.isArray(res.data)) {
  //           setPublications(sortPublications(res.data))
  //         }
  //       })
  //   })

  // gsap.from("#header", {
  //   opacity: 0.5,
  //   duration: 1,
  //   scrollTrigger: { trigger: "#header" },
  // })

  // gsap.to("#headshot", {
  //   opacity: 1,
  //   duration: 5,
  //   scrollTrigger: { trigger: "#headshot" },
  // })
  //}, [])

  return (
    <ContentLayout title={person.frontmatter.name} tab="People" crumbs={[]}>
      <></>
      <VCenterCol className="gap-y-16">
        <SeventyLayout className="gap-y-8 2xl:gap-x-24" isRight={true}>
          <PersonHeaderHoz person={person} />
          <></>
        </SeventyLayout>
        <SeventyLayout className="gap-y-8 2xl:gap-x-24" isRight={true}>
          <VCenterCol className="gap-y-8 md:gap-y-12">
            <BaseCol className="gap-y-4 rounded-2xl border border-gray-200 p-6 2xl:hidden">
              {/* <h1 className="text-xl">Get In Touch</h1> */}

              <ContactInfo person={person} />
            </BaseCol>

            <PersonHeaderImage person={person} />

            {person.html && (
              <BaseCol className="gap-y-4 rounded-2xl bg-apple-gray p-4 md:gap-y-8 md:p-8">
                {/* <h1 className="text-3xl font-medium">Research</h1> */}

                <QuoteStart className="w-8 fill-gray-900/20 lg:w-12" />
                <MarkdownBody html={person.html} />
                <BaseRow className="w-full justify-end">
                  <QuoteStart className="w-8 rotate-180 fill-gray-900/20 lg:w-12" />
                </BaseRow>
              </BaseCol>
            )}

            {!person.frontmatter.groups.lab.includes("Admin") && (
              <div>
                {publications.length > 0 && (
                  <>
                    <VCenterRow className="justify-between">
                      <h1 className="text-3xl">Selected Publications</h1>
                      <SecondaryButton
                        onClick={() => setShowAbstract(!showAbstract)}
                        ariaLabel={"Show Abstracts"}
                      >
                        {showAbstract ? "Hide" : "Show"} Abstracts
                      </SecondaryButton>
                    </VCenterRow>

                    <Publications
                      publications={publications.slice(0, 15)}
                      showAbstract={showAbstract}
                      showMoreButton={false}
                      showCount={true}
                      className="mt-4"
                    />
                  </>
                )}

                <VCenterRow className="mt-8 justify-center gap-x-4">
                  <span>
                    {publications.length > 0
                      ? "See more on"
                      : "See publications on"}
                  </span>
                  <PubMedLink person={person} />
                </VCenterRow>
              </div>
            )}
          </VCenterCol>
          <VCenterCol className="gap-y-4">
            <h1 className="text-2xl">Get In Touch</h1>

            <ContactInfo person={person} />
          </VCenterCol>
        </SeventyLayout>
      </VCenterCol>
    </ContentLayout>
  )
}
