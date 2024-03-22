"use client";
import { useEffect, useState } from "react";
import styles from "./reviews.module.css";
import Image from "next/image";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {

    const response = await fetch("http://localhost:3000/api/reviews");
    const data = await response.json();

    setReviews(data);
  };

  useEffect(() => {

    getReviews();

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { name, file } = e.target.elements;

    if (!name.value || !file.files[0]) {

      console.log("Du mangler at tilføje en fil eller titel!");
      return;

    }

    const formData = new FormData();

    console.log(file.files[0]);
    formData.append("name", name.value);
    formData.append("file", file.files[0]);

    console.log(formData);

    let response = await fetch("http://localhost:3000/api/review", {
      method: "POST",
      body: formData,
    });

    let data = await response.json();

    getReviews();
  };

  const handleDelete = async (e, id) => {

    e.preventDefault();

    let response = await fetch("http://localhost:3000/api/review?id=" + id, {
      method: "DELETE",
    });

    let data = await response.json();

    getReviews();
  };

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>

      {reviews.map((review, index) => {
        return (
          <span key={index}>
            <Image
              src={review.imagePath}
              alt={review.name}
              width={100}
              height={100}
            />
            <button onClick={(e) => handleDelete(e, review._id)}>Delete</button>
          </span>
        );
      })}

      <h3>Add New Review</h3>

      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Review title
          <input
            type="name"
            name="name"
            placeholder="Review name"
            defaultValue={"New Partner in Food"}
          />
        </label>
        <label>
          {" "}
          Choose File
          <input type="file" name="file" placeholder="Select File" />
        </label>
        <button>Upload</button>
      </form>
    </div>
  );
};
export default Reviews;
