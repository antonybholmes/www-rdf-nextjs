import IClassProps from "../interfaces/class-props"
import IPageTitleProps from "../interfaces/page-title-props"
import cn from "../lib/class-names"
import VCenterRow from "./v-center-row"

interface IProps extends IPageTitleProps, IClassProps {}

export default function PageTitle({
  title,
  supertitle,
  subtitle,
  className,
}: IProps) {
  return (
    <header className={cn("flex flex-col gap-y-2", className)}>
      {supertitle && <h3 className="text-base font-normal">{supertitle}</h3>}

      {/* <VCenterRow className="gap-x-4">
        <img
          src="/assets/svg/heading-arrow.svg"
          className="w-6"
          width="100"
          height="200"
        />

        <h1 className="text-3xl font-semibold capitalize lg:text-4xl">
          {title}
        </h1>
      </VCenterRow> */}

      <h1 className="text-3xl capitalize lg:text-4xl">{title}</h1>

      {subtitle && <h2 className="text-xl">{subtitle}</h2>}
    </header>
  )
}
