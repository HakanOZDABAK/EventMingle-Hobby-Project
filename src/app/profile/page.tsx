import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";

import React from "react";

export default function Profile() {
  const profileMenu: MenuItem[] = [
    { label: "Genel", icon: "pi pi-home" },
    { label: "Etkinlikler", icon: "pi pi-chart-line" },
    { label: "Ayarlar", icon: "pi pi-list" },
  ];

  return (
    <div>
      <div className="grid">
        <div className="col">
          <TabMenu
            className="flex justify-content-center"
            model={profileMenu}
          />
        </div>
      </div>
      <div className="grid">
        <div className="col">

        </div>
      </div>
    </div>
  );
}
