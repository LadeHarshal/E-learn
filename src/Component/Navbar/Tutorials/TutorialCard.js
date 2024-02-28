import React from "react";
import defaultCourse from "../../../assets/images/default_course.jpg";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
import Chip from "@mui/material/Chip";

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
        {console.log(props.item.tags)}
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
    </div>
  );
}

export default TutorialCard;
