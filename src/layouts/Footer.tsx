"use client";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";

export default function Footer() {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [visible, setVisible] = useState<boolean>(false);
  const footerContent = (
    <div>
      <Button
        label="İptal Et"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Oluştur"
        icon="pi pi-check"
        type="submit"
        onClick={handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  );
  return (
    <footer>
      <div className="grid align-items-center justify-content-between">
        <div className="col-fixed ml-3">
          <div>HELLO</div>
        </div>
        <div className="pl-8 flex justify-content-center">
          <Button
            label="Etkinlik Ekle"
            severity="success"
            onClick={() => setVisible(true)}
          />
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
      <Dialog
        header="Etkinlik Bilgileri"
        visible={visible}
        style={{ width: "25vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        footer={footerContent}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-content-center">
            <InputText
              type="text"
              placeholder="Etkinlik Adı"
              {...register("Etkinlik Adı", {})}
            />
          </div>
          <div className="flex justify-content-center mt-3">
            <InputText
              type="datetime-local"
              placeholder="Etkinlik Zamanı"
              {...register("Etkinlik Zamanı", {})}
            />
          </div>
          <div className="flex justify-content-center mt-3">

            <InputText type="text" placeholder="Etkinlik Açıklaması" {...register("Etkinlik Açıklaması", {})} />
          </div>
        </form>
      </Dialog>
    </footer>
  );
}
