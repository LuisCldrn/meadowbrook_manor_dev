import LocationOptions from "@/components/LocationOptions";
import WhyMead from "@/components/WhyMead";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="Landing flex h-[70vh] flex-col justify-center gap-4 p-10">
      <h1 className="Welcome text-5xl font-bold w-[70vw]">
        Welcome to Meadowbok Rehabilitation
      </h1>
      <p className="text-lg font-extralight w-[75vw]">At Meadowbrook, we combine expert clinical care with a warm, home-like atmosphere. Whether you're here for short-term recovery or long-term residency, you’ll be treated with dignity, compassion, and respect. Our goal is to help every individual feel comfortable, supported, and empowered to live life to the fullest.</p>
      <a className="flex w-[10vw] border-4 border-[#48a546] p-2 justify-center font-bold rounded-lg" href="">Learn More</a>
    </div>
    
    <LocationOptions />
    
    <div className="reviews bg-[#f0f0f0] flex flex-col justify-center items-center">
      <h3 className="testimonials pt-10 text-lg text-black font-semibold">TESTIMONIALS</h3>
      <h2 className="text-black text-2xl font-bold" >WHAT OUR PATIENTS ARE SAYING</h2>
      <div className="reviews_area flex p-10 gap-[3vw] h-[50vh] m-[3vh]">
        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[75px] p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-pink-500 rounded-full w-[150px] h-[150px] text-7xl -top-15 ">M</div>

          <h3 className="text-2xl font-bold" >Melodi Biggane</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /></div>

          <p className="text-center" >Our family member has been in Meadowbrook LG for a few months with some challenging health issues. We were very pleased with Danielle W (case worker), Kim B (coordinated all transportations/appointments), the physicians, along with the many of the nurses, therapists and CNAs taking care of her, listening to the family requests/questions and timely communication.</p>
        </div>

        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[75px] p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-emerald-700 rounded-full w-[150px] h-[150px] text-7xl -top-15 ">B</div>

          <h3 className="text-2xl font-bold" >Brian Konkoleski</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /></div>

          <p className="text-center" >I was a patient at Meadowbrook for 11 days for short term rehab for my back and left knee. I had never been to a rehab facility before. The entire staff at Meadowbrook were superb. The nurses and CNAs were fantastic. They were very friendly and were always checking in on me. The physical therapy workers were great...</p>
        </div>

        <div className="card_rev w-full relative rounded-4xl flex flex-col bg-[#4A6049] items-center justify-center gap-3 pt-[75px] p-5">

          <div className="rev_icon absolute img_area flex items-center justify-center justify-self-start bg-blue-800 rounded-full w-[150px] h-[150px] text-7xl -top-15 ">C</div>

          <h3 className="text-2xl font-bold" >Cindy</h3>

          <div className="stars flex"><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /><img src="/images/star_filled.png" alt="" /></div>

          <p className="text-center" >This place is amazing! Nursing and CNA care was amazing…I never had to worry about my mother because I knew she was being taken care of. This seriously is the first time I got to do that because I always feel I can’t leave her alone in a healthcare setting. Not here…everybody that treated my mom treated her as she was their own family member!...</p>
        </div>
        
      </div>
    </div>
    <div className="why_mead flex flex-col justify-start items-center p-15 pb-48 gap-4 bg-[#2A462A]">
      <h2 className="font-bold text-4xl" >WHY MEADOWBROOK</h2>
      <p>With over 25 years of trusted care in the Chicagoland area, Meadowbrook Rehabilitation is dedicated to providing personalized, five-star post-hospital recovery and long-term care in a warm, healing environment. We focus on dignity, customized care, and quality of life—because every individual deserves to heal with respect and support.</p>
    </div>
    <div className="why_mead_cards p-10 pt-0 pb-0 bg-white">
      <WhyMead/>
    </div>
    </>
    
  );
}
