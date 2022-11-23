import SideLayout from "../layouts/side-layout"

export default function Page() {
  return (
    <SideLayout title="Contact Us" crumbs={[]} sideClassName="gap-16">
      <>
        {/* <iframe
          className="mt-8 h-96 w-full lg:h-160"
          frameBorder="0"
          scrolling="no"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-73.94145637750627%2C40.83886277492682%2C-73.93727481365205%2C40.84073572750533&amp;layer=mapnik&amp;marker=40.839800272431916%2C-73.93936425447464"
        ></iframe> */}

        <iframe
          className="mb-16 h-96 w-full overflow-hidden rounded-2xl shadow-2xl lg:h-160"
          frameBorder="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.231629192999!2d-73.94063554169362!3d40.83975179482953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f69cf9446ff1%3A0x523dcfdc4ca47584!2s1130%20St%20Nicholas%20Ave%2C%20New%20York%2C%20NY%2010032!5e0!3m2!1sen!2sus!4v1662856169364!5m2!1sen!2sus"
          width="800"
          height="600"
          loading="lazy"
        ></iframe>

        {/* <BaseRow className="mt-4">
          <BlueButtonLink
            className="mb-32 block"
            ariaLabel="View Larger Map"
            href="https://www.openstreetmap.org/?mlat=40.83980&amp;mlon=-73.93936#map=19/40.83980/-73.93937&amp;layers=N"
          >
            View Larger Map
          </BlueButtonLink>
        </BaseRow> */}
      </>
      <div className="w-full overflow-hidden rounded-2xl bg-apple-gray p-8 text-sm">
        <p className="font-medium">Institute for Cancer Generics</p>
        <p>Herbert Irving Cancer Center</p>
        <p>Columbia University</p>
        <p>1130 St Nicholas Ave</p>
        <p>New York, NY 10032, USA</p>
      </div>
    </SideLayout>
  )
}
