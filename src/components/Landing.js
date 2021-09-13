import React from "react";
import "../css/Landing.css";
import Explore from "./Explore";
import Card from "./Card";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { createSlides } from "./CreateSlides";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "99%",
  },
  paper: {
    height: 240,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Landing = (props) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-left">
          <div className="left-header">
            <h1>
              Write Some Letters and Do <span>Some Work!</span>
            </h1>
            <h2>Are you looking for Content Writers?</h2>
            <button type="button" className="btn-stringify">
              Stringify With Writers
            </button>
          </div>
        </div>
        <div className="landing-right">
          <img className="content-img" src="./images/right-bg-content.svg" />
        </div>
      </div>
      <div className="landing-partners">
        <div className="trusting-header">
          <h1>Trusted by:</h1>
        </div>
        <div className="landing-trusters">
          <img className="fb-trusted" src="./images/fb-trusted.png" />
        </div>
        <div className="landing-trusters">
          <img className="google-trusted" src="./images/google-trusted.png" />
        </div>
        <div className="landing-trusters">
          <img className="paypal-trusted" src="./images/paypal-trusted.png" />
        </div>
        <div className="landing-trusters">
          <img className="amazon-trusted" src="./images/amazon-trusted.png" />
        </div>
      </div>
      {/* <div className="home-popular">
        <div className="popular-heading">
          <h1>Popular professional services</h1>
        </div>
      </div> */}
      <div className="rows">
        <div className="row-header">
          <h1>Explore the marketplace</h1>
        </div>
        <div className="home-row">
          <Explore title="Graphic & Design" image="./images/graphics.png" />
        </div>
        <div className="home-row">
          <Explore title="Podcast Writing" image="./images/podcast.png" />
          <Explore title="Cover Letter" image="./images/letter.png" />
        </div>
        <div className="home-row">
          <Explore title="Case Study" image="./images/case-study.png" />
          <Explore title="Article Writing" image="./images/writing.png" />
          <Explore title="Resume Writing" image="./images/resume.png" />
        </div>
        <div className="home-row">
          <Explore title="Transcriptions" image="./images/transcription.png" />
          <Explore title="Research Analysis" image="./images/documents.png" />
        </div>
        <div className="home-row">
          <Explore title="Translation" image="./images/translate.png" />
        </div>
      </div>
      <div className="details">
        <div className="left-grid">
          <h1>A whole world of content writers in front of you</h1>

          <h2>
            <span>
              <CheckCircleOutlineIcon />
            </span>{" "}
            The best for every budget
          </h2>
          <h2>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </h2>

          <h2>
            <span>
              <CheckCircleOutlineIcon />
            </span>{" "}
            Quality work done quickly
          </h2>
          <h2>
            Find the right freelancer to begin working on your project within
            minutes.
          </h2>

          <h2>
            <span>
              <CheckCircleOutlineIcon />
            </span>{" "}
            Protected payments, every time
          </h2>
          <h2>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </h2>

          <h2>
            <span>
              <CheckCircleOutlineIcon />
            </span>{" "}
            24/7 support
          </h2>
          <h2>
            Questions? Our round-the-clock support team is available to help
            anytime, anywhere.
          </h2>
        </div>
        <div className="right-grid">
          <h1>There will be a Video</h1>
        </div>
      </div>
      <div className="top-sellers">
        <div className="top-heading">
          <h1>Our Top Rated Sellers</h1>
        </div>
        <div className="top-cards">
          <Card
            title="Paul Rudd"
            rating="5.0 (919)"
            typography="I can write Applications, Letters or Cover Letters for you..."
            avatar="./images/paul.jpg"
            image="./images/typing.jpg"
          />
          <Card
            title="Wilson Clark"
            rating="4.9 (253)"
            typography="I can write Essays or Articals that mathers to you!"
            avatar="./images/Wilson.jpg"
            image="./images/mac.jpg"
          />
          <Card
            title="Ken Adams"
            rating="4.9 (564)"
            typography="I can write Amazing Stories with fine script"
            avatar="./images/ken.jpg"
            image="./images/stories.jpg"
          />
          <Card
            title="James Stark"
            rating="5.0 (754)"
            typography="I can write research papers on your discovery..."
            avatar="./images/james.jpg"
            image="./images/desk.jpg"
          />
          <Card
            title="John Rogers"
            rating="4.9 (946)"
            typography="I can write and draw logos or ads for your company!"
            avatar="./images/john.jpg"
            image="./images/working.jpg"
          />
          <Card
            title="Mathew Schiwimmers"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="./images/mathew.jpg"
            image="./images/note.jpg"
          />
        </div>
        <div className="btn-showMore">
          <button type="button">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
