import React from "react";

export const Tourist = (props) => {
  const { name, message, image } = props;
  return (
    <div className="flex flex-row m-2 max-w-md">
      <div className="m-3">
        <img
          className="rounded-full inline-block overflow-auto w-32 h-32 object-cover"
          src={image}
          alt="No content"
        />
        <p className="text-center font-bold">{name}</p>
        <p className="text-center">Turista</p>
      </div>
      <div className="bg-gray-300 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl p-3 flex flex-1">
        <p className="">{message}</p>
      </div>
    </div>
  );
};
