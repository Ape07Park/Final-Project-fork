import React, { useState } from 'react';
import axios from 'axios';
import BackgroundRemoval from './BackgroundRemoval';

const ImageDownload = () => {
  const img1 = 'https://res.cloudinary.com/dm53zqqwf/image/upload/v1714099283/qqmv04gjsb8y9huxekej.jpg';
  const [downloadedImage, setDownloadedImage] = useState(null);

  const downloadImage = async () => {
    try {
      const response = await axios.get(img1, {
        responseType: 'blob' // 이진 데이터로 요청
      });
      const file = new File([response.data], 'image.jpg', { type: 'image/jpeg' }); // 파일 객체 생성
      setDownloadedImage(file);
      
    } catch (error) {
      console.error("이미지를 다운로드하는 중 오류가 발생했습니다:", error);
    }
  }

  return (
    <>
      <BackgroundRemoval imageFile={downloadedImage} />
      {/* {downloadedImage && <img src={URL.createObjectURL(downloadedImage)} alt="Downloaded" />}  */}
      <button onClick={downloadImage}>이미지 다운로드</button>
    </>
  );
}

export default ImageDownload;
