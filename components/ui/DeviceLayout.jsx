import React from "react";
import Layouts from "device-layouts";

const DeviceLayout = () => {
  const element = (
    <img
      src="https://c4.wallpaperflare.com/wallpaper/637/38/467/how-to-train-your-dragon-black-toothless-simple-background-wallpaper-preview.jpg"
      width={"100%"}
      height={"100%"}
    />
  );

  const { Iphone, Laptop } = Layouts({ element });

  return (
    <div>
      <Laptop />
      <Iphone />
    </div>
  );
};

export default DeviceLayout;
