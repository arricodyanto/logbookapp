import ReachedItem from "../../molecules/ReachedItem"

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
              <ReachedItem headReached="290M+" descr="Players Top Up" />
              <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
              <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
              <ReachedItem headReached="12.500" descr="Games Available" />
              <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
              <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
              <ReachedItem headReached="99,9%" descr="Happy Players" />
              <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
              <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
              <ReachedItem headReached="4.7" descr="Rating Worldwide" />
          </div>
      </div>
  </section>
  )
}
