import React from "react";
import LandingCarousal from "../components/landing/carousal";
import Layout from "../components/generic/layout";
import Marquee from "../components/landing/marquee";
import EventsView from "../components/landing/eventsView";
import NoticeView from "../components/landing/noticeView";

const Landing = () => {
  return (
    <Layout>
      <Marquee />
      <LandingCarousal
        items={[
          {
            // title: "Institute of Information and Communication Technology",
            src: "/4bbac434ba242211dd3d411a79074a74.jpeg",
            // desc: "This is where SWE Society was started",
          },
          {
            // title: "A place to chill",
            src: "/ML.png",
            desc: "",
          },
          {
            // title: "Central Library",
            src: "/2c0aa3ba77d654d78309671bf75138d8.jpeg",
            desc: "",
          },
        ]}
      />
      {/* <EventsView /> */}
      {/* <NoticeView /> */}
    </Layout>
  );
};

export default Landing;
