import React, { useState } from "react";
import axios from "axios";
import "./CourseForm.css";
function CourseForm() {
  // Handling Form Data
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    tags: [""],
    videos: [],
    description: "",
    ratings: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = "http://localhost:8080/register/Courses";

    try {
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
        }),
      });

      if (response.ok) {
        console.log("Course created successfully");
        // Optionally, you can redirect to another page or show a success message to the user
      } else {
        console.error("Failed to create user");
        // Optionally, handle the error case
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
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
        value={formData.tags}
        onChange={handleChange}
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
