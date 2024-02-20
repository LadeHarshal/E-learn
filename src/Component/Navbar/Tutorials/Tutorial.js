import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Tutorial.css";
import TutorialCard from "./TutorialCard";

function Tutorial() {
  const [tutorials, setTutorials] = useState([]); //Created state for loading tutorials
  /// Fetching Data about pdfs (Tutorial lists , link and image to display)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/trial");
        setTutorials(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Tutorials</h3>
      <div className="display-pane">
        {tutorials.map(
          (item) => (
            // img
            // name
            // tag-array
            console.log(item._id),
            (
              <TutorialCard
                key={item._id}
                item={item}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default Tutorial;
