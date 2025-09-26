'use client';
import React from "react";
import { useState } from "react";

export default function Contactus() {

    const mapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY
    // Put these near the top of your component
    const serviceOptions = [
        { value: "short_term", label: "Short-Term/Post-Hospital Rehabilitation" },
        { value: "long_term",  label: "Long-Term Care" },
        { value: "memory",     label: "Memory Care" },
        { value: "respite",    label: "Respite Stay" },
        { value: "other",      label: "Other" },
    ];
    
    const timeOptions = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ];
    
    const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
    
    const toggleService = (value: string) => {
        setSelectedServices((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
    
        // Gather services from state (checkbox list)
        const servicesChosen = selectedServices.map((v) => {
        const f = serviceOptions.find(s => s.value === v);
        return f?.label ?? v;
        });
    
        const payload = {
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        services: servicesChosen,
        otherDetail: (fd.get("otherDetail") as string) || "",
        facility: fd.get("facility") as string,
        date: fd.get("date") as string,
        timePref: fd.get("timePref") as string,
        message: (fd.get("message") as string) || "",
        };
    
        // TODO: replace with your submit flow
        // Example: EmailJS
        // emailjs.send('SERVICE_ID','TEMPLATE_ID', payload, 'PUBLIC_KEY')
    
        // Example: your API route (Next.js /api/contact)
        // await fetch('/api/contact', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    
        console.log("Contact form payload:", payload);
        alert("Thanks! We’ll reach out to confirm your tour.");
        e.currentTarget.reset();
        setSelectedServices([]);
    };
    
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
                    <div className={`contact-card flex text-lg w-full h-full flex-col justify-center items-start pl-[4vw] gap-4 text-left ${card.background}`} onClick={() => setActiveLocation(card.api)} >
                        <h3 className="flex flex-row text-2xl text-left pb-10">{card.name}</h3>
                        <p className="flex text-left w-[70%]"><img src="images\contact-us\location-pin.png" alt="" />{card.location}</p>
                        <p className="flex text-left"><img src="images\contact-us\phone-receiver-silhouette.png" alt="" />{card.phone}</p>
                        <p className='flex' ><img src="images\contact-us\fax.png" alt="" />{card.fax}</p>
                        <p className='flex' ><img src="images\contact-us\email.png" alt="" />{card.email}</p>
                    </div>
                ))}
            </div>
            {/* Contact Form */}
            <div className="contact_form flex justify-center py-12 bg-white">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-gray-100 p-8 rounded-2xl shadow-lg"
            >
                <h3 className="text-2xl font-bold mb-6 text-center text-[#364635]">
                Schedule a Visit / Contact Us
                </h3>

                {/* Name */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name:
                </label>
                <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#364635]"
                placeholder="Your full name"
                />

                {/* Email */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email:
                </label>
                <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#364635]"
                placeholder="you@example.com"
                />

                {/* Care services */}
                <p className="block text-gray-700 font-medium mb-2">
                What care services are you interested in?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                {serviceOptions.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="services"
                        value={opt.label}
                        checked={selectedServices.includes(opt.value)}
                        onChange={() => toggleService(opt.value)}
                        className="h-4 w-4"
                    />
                    <span className="text-gray-800">{opt.label}</span>
                    </label>
                ))}
                </div>

                {/* If Other, describe */}
                {selectedServices.includes("other") && (
                <>
                    <label className="block text-gray-700 font-medium mt-2 mb-2" htmlFor="otherDetail">
                    If other, please describe here:
                    </label>
                    <textarea
                    id="otherDetail"
                    name="otherDetail"
                    rows={3}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#364635]"
                    placeholder="Tell us more about what you’re looking for"
                    />
                </>
                )}

                {/* Facility select */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="facility">
                Which facility would you like to tour?
                </label>
                <select
                id="facility"
                name="facility"
                required
                className="w-full mb-4 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#364635]"
                defaultValue=""
                >
                <option value="" disabled>---Click here to choose---</option>
                <option>Meadowbrook Bolingbrook</option>
                <option>Meadowbrook LaGrange</option>
                <option>Meadowbrook Naperville</option>
                </select>

                {/* Date */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                What day would you prefer to visit?
                </label>
                <input
                id="date"
                name="date"
                type="date"
                required
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#364635]"
                placeholder="mm/dd/yyyy"
                />

                {/* Time */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="timePref">
                What time would you prefer to visit?
                </label>
                <select
                id="timePref"
                name="timePref"
                required
                className="w-full mb-4 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#364635]"
                defaultValue=""
                >
                <option value="" disabled>--Click here to choose--</option>
                {timeOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
                </select>

                {/* Message (optional) */}
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message (optional):
                </label>
                <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#364635]"
                placeholder="Anything else you'd like us to know?"
                />

                <button
                type="submit"
                className="w-full bg-[#364635] text-white py-3 px-4 rounded-lg hover:bg-[#4A6049] transition-colors font-medium"
                >
                Send Request
                </button>
            </form>
            </div>

        </div>
        
    )
}