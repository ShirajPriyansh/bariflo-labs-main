import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { LinkedIn } from "@material-ui/icons";
import { Container, Grid } from "@material-ui/core";

function OurTeamCard(props) {
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  return (
    <>
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
      {/* front card */}

      {/* Bootstrap card */}
      <div className="card" id={props.id} style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="photo" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h5 className="card-title">{props.desc}</h5>
            <p className="card-text">
             {props.para}
            </p>
          </div>
          <div className="card-body">
            <a href={props.href} target="_blank" rel="noreferrer">
              <i
                className="fa fa-linkedin my_linkedin_logo"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

    

      {/* <div classNameName="our_team_card" id={props.id}>
          <div classNameName="our_team_content">
            <div classNameName="our_team_imgBx">
              <img src={props.image} alt="profile_picture" />
            </div>
            <div classNameName="our_team_contentBx">
              <h3>
                {props.name}
                <br /> <span>{props.desc}</span>
              </h3>
            </div>
          </div>
          <ul classNameName="sci"> */}
      {/* <li>
              <a href="https://www.facebook.com">
                <i classNameName="fa fa-facebook my_facebook_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* <li>
              <a href="https://www.twitter.com">
                <i classNameName="fa fa-twitter my_twitter_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* <li>
              <a href={props.href} target="_blank" rel="noreferrer">
                <i
                  classNameName="fa fa-linkedin my_linkedin_logo"
                  aria-hidden="true"
                />
              </a>
            </li> */}
      {/* <li>
              <a href="https://www.pinterest.com">
                <i classNameName="fa fa-pinterest my_pinterest_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* </ul> */}
      {/* <div classNameName="our_team_button_div">
            <button classNameName="our_team_button" onClick={handleClick}>
              Read More
            </button>
          </div> */}
      {/* </div> */}

      {/* back card */}
      {/* // <div classNameName="our_team_card">
        //   <div classNameName="our_team_content">
        //     <p classNameName="our_team_paragraph">{props.para}</p>
        //   </div>
        //   <div classNameName="our_team_button_div">
        //     <button classNameName="our_team_button_cancel" onClick={handleClick}>
        //       Cancel
        //     </button>
        //   </div>
        // </div> */}
      {/* // </ReactCardFlip> */}
    </>
  );
}

export default OurTeamCard;
