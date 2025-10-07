

export default function CareServices() {


    const therapyCards = [
        {
            id: 1,
            icon: '/images/care-services/exercise.png',
            title: 'PHYSICAL THERAPY',
            desc: "Focuses on endurance, improving strength, helps regain or improve balance mobility and ambulation.",
        },
        {
            id: 2,
            icon: '/images/care-services/speak.png',
            title: 'SPEECH THERAPY',
            desc: "Restores activities of daily life and includes feeding, dressing and bathing.",
        },
        {
            id: 3,
            icon: '/images/care-services/occupationalTherapy.png',
            title: 'OCCUPATIONAL THERAPY',
            desc: "Emphasis on regaining ability to swallow and speak while focusing on cognitive and communication skills.",
        }
    ]

    const careImages = [
        {
            id: 1,
            img: '/images/care-services/longTermCare.png',
            title: 'LONG TERM CARE',
            desc: 'At all our locations, long-term care is tailored to each resident through a comprehensive assessment by our interdisciplinary team—including nursing, therapy, nutrition, activities, and social services—resulting in a personalized care plan to enhance quality of life.'
        },
        {
            id: 2,
            img: '/images/care-services/memoryCare.png',
            title: 'MEMORY CARE',
            desc: 'Meadowbrook offers a safe and secure environment for individuals with Alzheimer’s or Dementia. Our unit boasts a variety of activities, specially-trained staff, and a sense of comfort you will grow to rely on.'
        },
        {
            id: 3,
            img: '/images/care-services/respiteCare.png',
            title: 'RESPITE CARE',
            desc: "As a caregiver, you may need a short break. Meadowbrook Rehabilitation’s Respite Care offers personalized support for your loved one—whether you're away for a weekend or on vacation—so you can rest knowing they’re in good hands."
        }
    ]



    return (
        <div>
            {/* Hero Section */}
            <div className="lg:relative flex flex-col lg:flex-row items-center justify-center w-max-screen bg-white">
                <div className="  md:relative z-10 w-full  ">
                    <img className="lg:ml-30  " src="/images/care-services/hero.png" alt="Care Services" />
                </div>

                <div className="flex flex-col justify-center items-center bg-[#4A6049] py-16 gap-8 w-full relative z-0">
                    <h4 className="text-3xl text-white text-center">POST-HOSPITAL REHABILITATION</h4>
                    <p className="text-white px-6 2xl:px-70 text-center">
                        We provide specialized, on-site therapy up to 7 days a week, allowing patients to work consistently with the same therapists for better outcomes. Our goal is to help patients recover quickly and return to independent living through personalized care plans developed by our interdisciplinary team of nurses, therapists, and physicians.
                    </p>
                </div>
            </div>
            {/* 3 THERAPY card section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-32 py-12 bg-white">
                {therapyCards.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <div className="flex flex-col items-center justify-center bg-[#4A6049] w-72 h-60 lg:w-60 xl:w-72 rounded-[2rem] gap-4 text-white text-center p-4">
                            <img src={item.icon} alt={`${item.title} icon`} className="h-12 w-12" />
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <p className="text-xs">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tab section */}
            <div className="h-128">
                Tab section
            </div>




            {/* ABILITY REHAB */}
            <div className="bg-white text-black" >
                <div className="flex bg-[#4A6049] text-white h-28 text-3xl text-center justify-center items-center" >
                    <h4 className="font-bold" >Chicagoland's Premier Therapy Provider</h4>
                </div>
                <div className="relative flex flex-col md:flex-row items-center bg-white px-12">
                    <div className="flex flex-col justify-center items-center py-16 gap-8 w-full" >
                        <h4 className="text-3xl ">ABILITY REHAB</h4>
                        <p className="px-0 md:px-6 2xl:px-56 text-center">Post-Hospital Rehabilitation patients will receive on site, specialized therapy offered by our contracted therapy provider, Ability Rehab. Ability Rehab is Chicagoland’s premier contracted provider of Physical, Occupational and Speech-Language rehabilitation. Ability therapists are available up to 7 days/week and have the ability to work with the same patients during their rehabilitation stay to ensure powerful therapy solutions and optimal patient outcomes.</p>
                    </div>
                    <div className="md:mr-20">
                        <img src="/images/care-services/ability.png" />
                    </div>
                </div>
            </div>



            {/* 3 images care section */}
            <div className='grid grid-cols-1 md:grid-cols-3 w-max-screen bg-white' >
                {careImages.map((item) => (
                    <div key={item.id} className='flex flex-col '>
                        <div className='flex flex-col justify-end items-center bg-[#4A6049] w-full h-150 gap-12 text-white' style={{
                            backgroundImage: `linear-gradient(#00000085, #00000085), url(${item.img})`, backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} >
                            <h4 className="text-white font-bold flex justify-center items-center h-24 text-4xl text-center">{item.title}</h4>
                            <p className='text-lg text-center px-12 md:px-20  h-50' >{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>



    )
}




