import React from "react";
import defaultCourse from "../../../assets/images/default_course.jpg";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";
import ArticleIcon from "@mui/icons-material/Article";
import Button from "@mui/material/Button";

function TutorialCard(props) {
  return (
    <div className="tutorial-element">
      <div className="tutorial-img-div">
        {/* img */}
        {/* Conditional Code --- Ifv no image exeists then default image will load */}

        {props.item.img ? (
          <img
            src={props.item.img}
            alt="tutorial-img"
          />
        ) : (
          <img
            src={defaultCourse}
            alt="tutorial-img"
          />
        )}
      </div>
      <div className="title">
        {props.item.name}
        {/* PDF Title */}
      </div>
      <div className="tags-pdf">
        <p>Tags : </p>
        {/* {console.log(props.item.tags)} */}
        {props.item.tags.map((item) => (
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={item}
            className="chip"
          />
        ))}

        {/* Tags for the pdf */}

        {/* Alternate Card */}
      </div>
      <div className="button-tutorialCard">
        <a
          href={props.item.link}
          target="blank"
        >
          <Button
            variant="contained"
            endIcon={<ArticleIcon />}
          >
            View
          </Button>
        </a>
      </div>
    </div>
  );
}

export default TutorialCard;
