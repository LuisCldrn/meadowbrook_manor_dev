'use client';

var all_cards = [
    {   
        icon: 'images/medical-care.png',
        title: "Personalize, Person-Centered Care", 
        description: "We tailor every care plan around each individual's needs, preferences, and lifestyle—with patients and families directly involved in decision-making.",
        color: '#D5D7D4',
        fontcolor: '#000000'
    },
    {   
        icon: 'images/stethoscope.png',
        title: "Expert Staff You Can Trust", 
        description: "Our team of experienced professionals, many with 20+ years at Meadowbrook, provide consistent, compassionate care 24/7.",
        color: '#4A6049',
        fontcolor: '#FFFFFF'
    },
    {   
        icon: 'images/calendar.png',
        title: "In-House Therapy, 7 Days a Weeke", 
        description: "Our dedicated therapy team offers seamless, specialized rehabilitation with continuity and better outcomes.",
        color: '#D5D7D4',
        fontcolor: '#000000'
    },
    {   
        icon: 'images/star_filled.png',
        title: "5-Star Amenities in a Healing Environment", 
        description: "From fine dining and spa services to peaceful patios and a welcoming bistro, we go beyond medical care to support overall well-being.",
        color: '#4A6049',
        fontcolor: '#FFFFFF'
    },
]

const WhyMead = () => {
    return (
        <div className="cards flex gap-4 bg-white">
            {all_cards.map((card, index) => (
                <div
                    key={index}
                    className="card card_rev p-6 rounded-2xl shadow-md w-full flex flex-col justify-center items-center text-center gap-2 relative -top-30"
                    style={{ backgroundColor: card.color, color: card.fontcolor }}
                >
                    <img src={card.icon} alt={card.title} className="icon w-16 h-16 mb-4" />
                    <h3 className="name text-xl font-bold mb-2">{card.title}</h3>
                    <p className="description text-base">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default WhyMead;