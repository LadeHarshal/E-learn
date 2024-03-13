import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";
function Course_Element(props) {
  let navigate = useNavigate();
  console.log(props);
  let VideoList = props.course.videos;
  const handleViewVideo = () => {
    navigate("/VideoPlayer", { state: { myProp: { VideoList } } });
  };
  return (
    <div className="container">
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={props.course.image || props.course.img}
              srcSet={props.course.image || props.course.img}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">Free Course</Typography>
          <Link
            href="#product-card"
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
          >
            {props.course.title || props.course.name}
          </Link>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <>
                {props.course.tags.map((chip, index) => (
                  <Chip
                    key={index}
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                    sx={{ mr: 1 }} // Add margin between chips if needed
                  >
                    {chip}
                  </Chip>
                ))}
              </>
            }
          ></Typography>
          <Typography level="body-sm">{props.course.description}</Typography>
        </CardContent>
        <CardOverflow>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            onClick={handleViewVideo}
          >
            {props.ActionText || "Loading"}
          </Button>
        </CardOverflow>
      </Card>
    </div>
  );
}

export default Course_Element;
