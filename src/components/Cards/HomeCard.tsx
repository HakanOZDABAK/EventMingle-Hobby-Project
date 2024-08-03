
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function HomeCard(props:any) {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png"/>
    );
    const footer = (
        <div className='grid'>
          <div className='col-5'><Button label="Geleceğim" icon="pi pi-check" /></div>
            
            <div className='col-2'> <Button label="Gelemeyeceğim" severity="warning" icon="pi pi-times" style={{ marginLeft: '0.5em' }} /></div>
           
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Davet Kartı" subTitle="DAVET EDEN" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
LOL
                </p>
            </Card>
        </div>
    )
}
        