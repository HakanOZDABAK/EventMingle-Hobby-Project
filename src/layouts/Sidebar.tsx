'use client'
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function Sidebar() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Filtrele',
            items: [
                {
                    label: 'Düğün',

                },
                {
                    label: 'Kına',

                }
                ,
                {
                    label: 'Konser',

                }
                ,
                {
                    label: 'Parti',

                }
            ]
        },
        {
            label: 'Mesaj',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        