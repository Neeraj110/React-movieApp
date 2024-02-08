import { useEffect, useState } from "react";
 import "./banner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const [backgroud, setBackgroud] = useState("");
  const [qurey, setQurey] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroud(bg);
  }, [data]);

  const searchQurey = (e) => {
    if (e.key === "Enter" && qurey.length > 0) {
      navigate(`/search/${qurey}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={backgroud} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              value={qurey}
              onChange={(e) => setQurey(e.target.value)}
              onKeyUp={searchQurey}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
