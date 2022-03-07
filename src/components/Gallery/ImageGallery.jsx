import React from "react";

const ImageGallery = ({ data }) => {
  return (
    <div className="md:grid grid-cols-3 gap-5">
      {data.map((image) => (
        <div
          className="bg-cover bg-no-repeat"
          style={{
            margin: 5,
            width: 300,
            height: 300,
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
