import React, { useState } from "react";
import axios from "axios";
import "./CourseForm.css";
function CourseForm(props) {
  // Generating Random ID
  function generateObjectId() {
    return Math.random().toString(36).substring(2, 10);
  }
  // Handling Form Data
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    tags: [],
    videos: [],
    description: "",
    ratings: "",
    CID: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = "http://localhost:8080/register/Courses";
    try {
      // Generate an object ID (CID)

      formData.CID = generateObjectId();
      console.log(formData.CID);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          image: formData.image,
          tags: formData.tags,
          videos: formData.videos,
          description: formData.description,
          ratings: formData.ratings,
          CID: formData.CID,
        }),
      });
      let useremail = props.email;
      let courseID = formData.CID;
      // Function to update teacher's data
      const updateTeacher = async (useremail, courseID) => {
        const apiUrlTeacher = `http://localhost:8080/register/teacher/${useremail}`;
        try {
          // Send POST request to update teacher's course
          await axios.post(apiUrlTeacher, { course: courseID });
          console.log("Teacher data updated successfully");
        } catch (error) {
          console.error("Error updating teacher data:", error);
        }
      };

      if (response.ok) {
        console.log("Course added successfully");
        await updateTeacher(useremail, courseID);
      } else {
        console.error("Failed to create Entry");
        // Optionally, handle the error case
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle tag changes
  const handleTagsChange = (event) => {
    if (event && event.target) {
      const newTags = event.target.value.split(",").map((tag) => tag.trim());
      setFormData((prevData) => ({
        ...prevData,
        tags: newTags,
      }));
    }
  };
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVideosChange = (e, index) => {
    const { name, value } = e.target;
    const updatedVideos = [...formData.videos];
    updatedVideos[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      videos: updatedVideos,
    }));
  };

  const addVideoField = () => {
    setFormData((prevData) => ({
      ...prevData,
      videos: [...prevData.videos, { title: "", url: "", duration: "" }],
    }));
  };

  const removeVideoField = (index) => {
    const updatedVideos = [...formData.videos];
    updatedVideos.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      videos: updatedVideos,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/api/courses",
  //       formData
  //     );
  //     console.log("New entry created:", response.data);
  //     // Reset form fields after successful submission
  //     setFormData({
  //       title: "",
  //       image: "",
  //       tags: "",
  //       videos: [],
  //       description: "",
  //       ratings: "",
  //     });
  //   } catch (error) {
  //     console.error("Error creating new entry:", error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <label htmlFor="tags">Tags (comma-separated):</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={formData.tags?.join(", ") || ""} // Display comma-separated string
        onChange={handleTagsChange}
      />

      <label htmlFor="videos">Videos:</label>
      {formData.videos.map((video, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Video Title"
            value={video.title}
            onChange={(e) => handleVideosChange(e, index)}
            name="title"
          />
          <input
            type="text"
            placeholder="Video URL"
            value={video.url}
            onChange={(e) => handleVideosChange(e, index)}
            name="url"
          />
          <input
            type="text"
            placeholder="Video Duration"
            value={video.duration}
            onChange={(e) => handleVideosChange(e, index)}
            name="duration"
          />
          <button
            type="button"
            onClick={() => removeVideoField(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addVideoField}
      >
        Add Video
      </button>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="ratings">Ratings:</label>
      <input
        type="text"
        id="ratings"
        name="ratings"
        value={formData.ratings}
        onChange={handleChange}
      />

      <button type="submit">Create Entry</button>
    </form>
  );
}

export default CourseForm;
