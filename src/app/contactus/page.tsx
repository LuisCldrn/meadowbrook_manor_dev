'use client';
import { useState } from "react";

export default function Contactus() {

    const mapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY

    const [activeLocation, setActiveLocation] = useState<string | null>('Meadowbrook%20Manor-Naperville%2C%20Raymond%20Drive%2C%20Naperville%2C%20IL%2C%20USA');

    var locations = [
        {
            name: "MEADOWBROOK NAPERVILLE",
            location: '720 Raymond Drive Naperville, Illinois 60563',
            phone: '(630) 355-0220',
            fax: "(630) 305-6496",
            email: 'info@meadowbrookmanor.com',
            api: 'Meadowbrook%20Manor-Naperville%2C%20Raymond%20Drive%2C%20Naperville%2C%20IL%2C%20USA',
            background: 'Naperville_loc'
        }, 
        {
            name: "MEADOWBROOK LAGRANGE",
            location: '339 S. 9th Avenue La Grange, Illinois 60525',
            phone: '(708) 354-4660',
            fax: "(708) 354-0590",
            email: 'info@meadowbrookmanor.com',
            api: 'Meadowbrook%20LaGrange%2C%209th%20Avenue%2C%20La%20Grange%2C%20IL%2C%20USA',
            background: 'Lagrange_loc'
        },
        {
            name: "MEADOWBROOK BOLINGBROOK",
            location: '431 W. Remington Blvd. Bolingbrook, Illinois 60440',
            phone: '(630) 759-1112',
            fax: "(630) 759-6925",
            email: 'info@meadowbrookmanor.com',
            api: 'Meadowbrook%20Bolingbrook%2C%20Remington%20Boulevard%2C%20Bolingbrook%2C%20IL%2C%20USA',
            background: 'Bolingbrook_loc'
        }
    ]

    return (
        <div className="header_area bg-[#364635] ">
            <h2 className="p-3 text-2xl text-center justify-center font-bold" >CONTACT US</h2>
            <iframe className="w-full h-[50vh]" loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/search?q=${activeLocation}&key=${mapsApiKey}`}></iframe>
            <div className="locations flex justify-center items-center h-[70vh]">
                {locations.map((card, index) => (
                    <div className={`card contact-card flex text-lg w-full h-full flex-col justify-center items-start pl-[4vw] gap-4 text-left ${card.background}`} onClick={() => setActiveLocation(card.api)} >
                        <h3 className="flex flex-row text-2xl text-left pb-10">{card.name}</h3>
                        <p className="flex text-left w-[70%]"><img src="images\contact-us\location-pin.png" alt="" />{card.location}</p>
                        <p className="flex text-left"><img src="images\contact-us\phone-receiver-silhouette.png" alt="" />{card.phone}</p>
                        <p className='flex' ><img src="images\contact-us\fax.png" alt="" />{card.fax}</p>
                        <p className='flex' ><img src="images\contact-us\email.png" alt="" />{card.email}</p>
                    </div>
                ))}
            </div>
            <div className="contact_form">
                
            </div>
        </div>
        
    )
}