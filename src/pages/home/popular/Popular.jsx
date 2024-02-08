import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

function Popular() {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/popular`);
  const onTabChanges = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTitle">What's Popular</div>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChanges={onTabChanges} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
}
export default Popular