import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

function TopRated() {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  const onTabChanges = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTitle">Top Rated</div>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChanges={onTabChanges} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
}

export default TopRated;
