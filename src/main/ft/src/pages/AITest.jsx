import React, { useState } from "react";
import axios from "axios";

export default function AITest() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImage] = useState("");

  const createImg = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const response = await axios.post("/ft/create", {
      prompt,
    });
    setImage(response.data);
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="form">
        <h1>당신의 예술 작품을 만드세요!</h1>
        {imageURL && <img src={imageURL} alt="prompt" />}
        <form onSubmit={createImg}> {/* Use form for submitting data */}
          <input
            type="text"
            value={prompt}
            onChange={handleChange}
            placeholder="이미지 설명을 입력하세요"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}



