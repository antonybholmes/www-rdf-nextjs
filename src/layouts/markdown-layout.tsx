import MarkdownBody from "../components/markdown-body"
import PageTitle from "../components/page-title"
import ILayoutProps from "../interfaces/layout-props"
import SideLayout from "./side-layout"

interface IProps extends ILayoutProps {
  title: string
  html: string
}

export default function MarkdownLayout({
  title,
  supertitle,
  html,
  tab,
}: IProps) {
  if (!tab) {
    tab = title
  }

  return (
    <SideLayout
      title={title}
      supertitle={supertitle}
      tab={tab}
      crumbs={[[tab, `/${tab.toLowerCase()}`]]}
    >
      <>
        <PageTitle
          title={title}
          subtitle={supertitle}
          supertitle={supertitle}
          className="mb-8"
        />
        <MarkdownBody html={html} className="text-justify" />
      </>
      <></>
    </SideLayout>
  )
}
