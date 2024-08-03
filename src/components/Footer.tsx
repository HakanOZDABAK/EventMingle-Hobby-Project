"use client";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useState } from "react";

const Footer = () => {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <footer>
      <div className="grid">
        <div className=" ml-3 col-2">
          <div >HELLO</div>
        </div>
        <div className="col-3"></div>
        <div className="col">
          <Button label="Etkinlik Ekle" severity="success" />
        </div>
        <div className="col-4"></div>
        <div className="col">
          <Dropdown
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Şehir Seç"
            className="w-full md:w-10rem"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
