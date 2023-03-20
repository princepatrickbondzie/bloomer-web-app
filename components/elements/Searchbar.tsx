import React, { useEffect } from "react";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import Geocode from "react-geocode";

export default function Searchbar() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position: any) {
      // if (position.coords) {
      //   Geocode.fromLatLng(
      //     position.coords.latitude,
      //     position.coords.longitude
      //   ).then(
      //     (response: any) => {
      //       const address = response.results[0].formatted_address;
      //       console.log("Address", address);
      //     },
      //     (error: any) => {
      //       console.error(error);
      //     }
      //   );
      // }
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });

  return (
    <div className="my-4">
      <div className="flex xl:justify-center lg:justify-center md:justify-center justify-evenly xl:h-14 lg:h-14 md:h-10 h-40 bg-white xl:rounded-full lg:rounded-full md:rounded-full py-1 px-4 mt-8 items-center lg:flex-row xl:flex-row md:flex-row flex-col w-full">
        <div className="xl:h-full lg:h-full md:h-10 h-10 flex xl:w-[50%] lg:w-[50%] md:w-[50%] w-full">
          <SearchOutlined />
          <input
            placeholder="Any services or product"
            list="category"
            name="category"
            className="xl:h-full lg:h-full md:h-10 h-10 w-full xl:border-none lg:border-none md:border-none border-none rounded px-3 outline-none"
          />
          <datalist id="category">
            <option value="Chrome" />
            <option value="Firefox" />
            <option value="Internet Explorer" />
            <option value="Opera" />
            <option value="Safari" />
            <option value="Microsoft Edge" />
          </datalist>
        </div>
        <hr className="hidden xl:block lg:block md:block w-7 border-none bg-gray-300 h-[2px] rotate-90 " />
        <div className="xl:h-full lg:h-full md:h-10 h-10 flex xl:w-[50%] lg:w-[50%] md:w-[50%] w-full">
          <EnvironmentOutlined />
          <input
            placeholder="Current location"
            list="location"
            name="location"
            className="xl:h-full lg:h-full md:h-10 h-10 w-full xl:border-none lg:border-none md:border-none border-none rounded px-3 outline-none"
          />
          <datalist id="location">
            <option value="Chrome" />
            <option value="Firefox" />
            <option value="Internet Explorer" />
            <option value="Opera" />
            <option value="Safari" />
            <option value="Microsoft Edge" />
          </datalist>
        </div>

        <Button size="large"
          type="primary"
          className="rounded-full hover:bg-black bg-black xl:w-auto lg:w-auto md:w-auto w-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
