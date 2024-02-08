import React from "react";
import "./style.scss";
import useFetch from "../../hooks/UseFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import Videos from "./vid-section/Videos";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recommendation";
import { useParams } from "react-router-dom";

function Details() {
  const {  mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Videos data={data} loading={loading} />
      <Similar mediaType={mediaType}  id={id}/>
      <Recommendation mediaType={mediaType}  id={id}/>
    </div>
  );
}

export default Details;
