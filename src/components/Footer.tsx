"use client";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function Footer() {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

  return (
    <footer >
      <div className="grid align-items-center justify-content-between">
        <div className="col-fixed ml-3">
          <div>HELLO</div>
        </div>
        <div className="pl-8 flex justify-content-center">
          <Button label="Etkinlik Ekle" severity="success" />
        </div>
        <div className="col-fixed mr-3">
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
}
