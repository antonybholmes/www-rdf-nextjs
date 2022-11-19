import BaseLink from "../link/base-link"
import MenuOpenButton from "./menu-button-open"
//import Search from '../search/search'
import IHeaderProps from "../../interfaces/header-props"
import IMenuProps from "../../interfaces/menu-props"
import HCenterRow from "../h-center-row"
import ArticleDiv from "../article-div"

interface IProps extends IMenuProps, IHeaderProps {}

function SmallHeader({ title, tab, showMenu, onClick, children }: IProps) {
  //const isFirstRun = useRef(true)

  // useEffect(() => {
  //   // @ts-ignore
  //   t1.current = gsap.timeline({ paused: true }).fromTo(
  //     ref.current,
  //     {
  //       height: "4rem",
  //     },
  //     {
  //       duration: 0.3,
  //       height: "20rem",
  //     },
  //     0
  //   )
  // }, [])

  // useEffect(() => {
  //   if (!isFirstRun.current) {
  //     if (showMenu) {
  //       // @ts-ignore
  //       t1.current.restart()
  //     } else {
  //       // @ts-ignore
  //       t1.current.reverse()
  //     }
  //   }

  //   isFirstRun.current = false
  // }, [showMenu])

  return (
    <nav className="w-full lg:hidden">
      <div className="grid h-16 w-full grid-cols-5 items-center">
        <div>
          <MenuOpenButton onClick={onClick} showMenu={showMenu} />
        </div>

        <HCenterRow className="col-span-3 items-center">
          <BaseLink href="/" ariaLabel="Goto Homepage">
            <img
              src="/assets/svg/logo.svg"
              alt="Dalla Favera Lab logo"
              width="236"
              height="30"
              className="w-52"
            />
          </BaseLink>
        </HCenterRow>
        <div></div>
      </div>
      {children && (
        <ArticleDiv>
          <></>
          <div className="mb-4">{children}</div>
          <></>
        </ArticleDiv>
      )}
    </nav>
  )
}

export default SmallHeader
