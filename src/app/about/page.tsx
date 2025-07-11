//import Image from 'next/image'

export default function About() {

  const patientCareCards = [
    {
      id: 1,
      icon: '/images/about/patient 1.png',
      title: 'Patient-Centered Approach',
      desc: "Care is tailored to each patient's values, lifestyle, and personal needs.",
    },
    {
      id: 2,
      icon: '/images/about/parental-control 1.png',
      title: 'Family Collaboration',
      desc: "Families are actively involved in care planning and decision-making.",
    },
    {
      id: 3,
      icon: '/images/about/arrows 1.png',
      title: 'Flexible Routines',
      desc: "Daily schedules are adapted to support comfort and individual preferences.",
    },
    {
      id: 4,
      icon: '/images/about/compassion 1.png',
      title: 'Compassionate Care Philosophy',
      desc: "Meadowbrook prioritizes dignity, respect, and personalized healing.",
    }
  ]

  const servicesCards = [
    {
      id: 1,
      img: '/images/about/spa.jpg',
      title: 'Spa Services Meadowbrook',
      desc: 'Rehabilitation offers professional salon and spa services during your stay, adding that extra touch to provide the healthy, happy lifestyle you want.'
    },
    {
      id: 2,
      img: '/images/about/cafe.jpg',
      title: 'Café and Bistro',
      desc: 'Visit with family or relax after a successful day of therapy. Our Café and Bistro is open throughout the day and offers a wide selection of coffee, ice cream, and snacks for all to enjoy.'
    },
    {
      id: 3,
      img: '/images/about/restaurant.jpg',
      title: 'Five-Star Dining Experience',
      desc: 'Our restaurant-style dining allows for our patients to experience fine dining in an environment that caters to culture and nutrition. Our wide array of options is sure to meet everyone needs.'
    },
    {
      id: 4,
      img: '/images/about/serene.jpg',
      title: 'Serene Services',
      desc: 'Our goal at Meadowbrook is to provide 5-star quality service in a healing environment. Our staff is fully trained to deliver the utmost quality care while focusing on your healing and well-being.'
    }
  ]



  return (
    <div className="max-w-screen" >
      {/* banner section */}
      <div className=' h-72 md:h-96 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url('/images/about/banner.jpg')` }}>
        <h1 className="flex items-center justify-center py-12 text-6xl ">About Us</h1>
        <p className="flex justify-center text-center text-sm md:text-xl px-12 ">Providing state-of-the-art post-hospital rehabilitation and customized care services to the Chicagoland area for over 25 years</p>
      </div>

      {/* mission secion */}
      <div className="bg-white text-black w-full" >
        <h2 className="flex justify-center py-12 text-4xl">
          Our Mission
        </h2>
        <div className="w-full flex justify-center items-center">
          <p className="flex justify-center w-156 px-12 pb-12 text-center">
            Human dignity and personal pride do not diminish with age or illness, but continue throughout the life cycle. Recognition of this, in each individual, is the priority of Butterfield Health Care Group. Our goal – the creation of a supportive environment in which each person is motivated to regain and/or retain the maximum level of function, both physically and mentally, with continuing concern for the quality of life underscores all our efforts.
          </p>
        </div>

        {/* Patient Care secion */}
        <h2 className="flex justify-center items-center p-12 text-4xl text-[#2A462A]">
          Patient Centered Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-12">
          {patientCareCards.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center bg-[#4A6049] w-72 h-60 lg:w-60 xl:w-72 rounded-[2rem] gap-4 text-white text-center p-4">
                <img src={item.icon} alt={`${item.title} icon`} className="h-12 w-12" />
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* Images secion */}
      <div className='grid grid-cols-1 md:grid-cols-2 w-max-screen pb-12 bg-white' >
        {servicesCards.map((item) => (
          <div key={item.id} className='flex flex-col '>
            <div className='flex flex-col justify-center items-center bg-[#4A6049] w-full h-full gap-12 text-white' style={{
              backgroundImage: `linear-gradient(#00000085, #00000085), url(${item.img})`, backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} >
              <h4 className="text-[#99CF97] flex justify-center items-center h-24 text-4xl text-center">{item.title}</h4>
              <p className='text-lg text-center w-72 h-72 font-bold ' >{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* bottom two cards secion */}
      <div className='flex flex-col lg:flex-row items-center gap-12 w-max-screen md:justify-evenly pb-12 bg-white' >
        <div className='flex flex-col justify-center items-center bg-[#4A6049] w-96 lg:w-108 h-96 rounded-4xl gap-4 text-white' >
          <img src="/images/about/employee 1.png"></img>
          <h4 className="text-lg">Dedicated, Experienced Staff</h4>
          <p className='text-sm text-center w-92  ' >At Meadowbrook Manor, many of our loyal healthcare professionals have been with us for over 20 years. Our experienced team—including board-certified Medical Directors, nurses, therapists, and directors—works together to provide consistent, personalized care 24/7, meeting all physical, emotional, and social needs.</p>
        </div>

        <div className='flex flex-col justify-center items-center bg-[#4A6049] pb-6 w-96 lg:w-108 h-96 rounded-4xl gap-2 text-white' >
          <img className="h-3/4" src="/images/about/therapy.png"></img>
          <h4 className="text-lg">In-House Therapy, 7 Days a Week</h4>
          <p className='text-xs text-center w-80' >Unlike most rehab programs, our in-house therapists provide consistent care throughout the patient’s stay—up to 7 days a week—to ensure continuity and better outcomes.</p>
        </div>
      </div>






    </div>
  )
}