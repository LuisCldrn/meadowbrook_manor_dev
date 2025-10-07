import LocationOptions from "@/components/LocationOptions";
import WhyMead from "@/components/WhyMead";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="Landing flex h-[70vh] flex-col justify-center gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="Welcome text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw]">
        Welcome to Meadowbrook Rehabilitation
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-extralight w-full sm:w-[90vw] md:w-[85vw] lg:w-[75vw]">At Meadowbrook, we combine expert clinical care with a warm, home-like atmosphere. Whether you're here for short-term recovery or long-term residency, you'll be treated with dignity, compassion, and respect. Our goal is to help every individual feel comfortable, supported, and empowered to live life to the fullest.</p>
      <a className="flex w-full sm:w-[20vw] md:w-[15vw] lg:w-[10vw] min-w-[120px] border-4 border-[#48a546] p-2 justify-center font-bold rounded-lg text-sm sm:text-base" href="">Learn More</a>
    </div>
    
    <LocationOptions />
    
    <div className="reviews bg-[#f0f0f0] flex flex-col justify-center items-center">
      <h3 className="testimonials pt-6 sm:pt-8 md:pt-10 text-base sm:text-lg text-black font-semibold">TESTIMONIALS</h3>
      <h2 className="text-black text-lg sm:text-xl md:text-2xl font-bold text-center px-4" >WHAT OUR PATIENTS ARE SAYING</h2>
      <div className="reviews_area flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6 md:gap-[3vw] h-auto sm:h-[50vh] m-2 sm:m-[3vh]">
        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[60px] sm:pt-[75px] p-4 sm:p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-pink-500 rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] text-5xl sm:text-7xl -top-12 sm:-top-15 ">M</div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center" >Melodi Biggane</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /></div>

          <p className="text-center text-sm sm:text-base" >Our family member has been in Meadowbrook LG for a few months with some challenging health issues. We were very pleased with Danielle W (case worker), Kim B (coordinated all transportations/appointments), the physicians, along with the many of the nurses, therapists and CNAs taking care of her, listening to the family requests/questions and timely communication.</p>
        </div>

        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[60px] sm:pt-[75px] p-4 sm:p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-emerald-700 rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] text-5xl sm:text-7xl -top-12 sm:-top-15 ">B</div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center" >Brian Konkoleski</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /></div>

          <p className="text-center text-sm sm:text-base" >I was a patient at Meadowbrook for 11 days for short term rehab for my back and left knee. I had never been to a rehab facility before. The entire staff at Meadowbrook were superb. The nurses and CNAs were fantastic. They were very friendly and were always checking in on me. The physical therapy workers were great...</p>
        </div>
{/* ffastea */}
        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[60px] sm:pt-[75px] p-4 sm:p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-blue-800 rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] text-5xl sm:text-7xl -top-12 sm:-top-15 ">C</div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center" >Cindy</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /><img src="/images/star_filled.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" /></div>

          <p className="text-center text-sm sm:text-base" >This place is amazing! Nursing and CNA care was amazing…I never had to worry about my mother because I knew she was being taken care of. This seriously is the first time I got to do that because I always feel I can't leave her alone in a healthcare setting. Not here…everybody that treated my mom treated her as she was their own family member!...</p>
        </div>
        
      </div>
    </div>
    <div className="why_mead flex flex-col justify-start items-center p-6 sm:p-10 md:p-15 pb-24 sm:pb-32 md:pb-48 gap-4 bg-[#2A462A]">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center px-4" >WHY MEADOWBROOK</h2>
      <p className="text-sm sm:text-base text-center px-4 max-w-4xl">With over 25 years of trusted care in the Chicagoland area, Meadowbrook Rehabilitation is dedicated to providing personalized, five-star post-hospital recovery and long-term care in a warm, healing environment. We focus on dignity, customized care, and quality of life—because every individual deserves to heal with respect and support.</p>
    </div>
    <div className="why_mead_cards p-4 sm:p-6 md:p-10 pt-0 pb-0 bg-white">
      <WhyMead/>
    </div>
    </>
    
  );
}
