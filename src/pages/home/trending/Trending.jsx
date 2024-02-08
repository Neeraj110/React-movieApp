import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

function Trending() {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const onTabChanges = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTitle">Trending</div>
        <SwitchTabs data={["Day", "Week"]} onTabChanges={onTabChanges} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
