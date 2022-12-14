import ContentDiv from "../content-div"
import BaseLink from "../link/base-link"
import HeaderLinks from "./header-links"

import IChildrenProps from "../../interfaces/children-props"

interface IProps extends IChildrenProps {
  title: string
  tab?: string
}

export default function LargeHeader({ title, tab, children }: IProps) {
  return (
    <nav className="hidden lg:block">
      <ContentDiv>
        <></>

        <div className="flex h-16 flex-row  items-center gap-x-8 xl:gap-x-16">
          <div className="grow-0">
            <BaseLink href="/" ariaLabel="Goto Homepage">
              <img
                src="/assets/svg/logo.svg"
                alt="Dalla Favera Lab logo"
                width="236"
                height="30"
                className="min-w-52 w-52"
              />
            </BaseLink>
          </div>
          <div>
            <HeaderLinks title={title} tab={tab} />
          </div>
          <div className="grow">{children && children}</div>
        </div>
        {/* <span className="h-6 border-l-2 border-gray-900" /> */}

        {/* {children && <span className="h-6 border-l-2 border-gray-900" />} */}

        <></>
      </ContentDiv>
    </nav>
  )
}
