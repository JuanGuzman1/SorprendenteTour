import React from "react";

const ImageGallery = ({ data }) => {
  return (
    <div className="md:grid grid-cols-3 gap-5">
      {data.map((image) => {
        let ext = image.split(".")[1];

        if (ext === "mp4") {
          return (
            <video
              key={image}
              width="300"
              style={{
                margin: 5,
                width: 300,
                height: 300,
              }}
              controls
            >
              <source src={image} type="video/mp4" />
            </video>
          );
        } else {
          return (
            <div
              key={image}
              className="bg-cover bg-no-repeat"
              style={{
                margin: 5,
                width: 300,
                height: 300,
                backgroundImage: `url(${image})`,
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default ImageGallery;
