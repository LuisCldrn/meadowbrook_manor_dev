import LocationOptions from "@/components/LocationOptions";
import Image from "next/image";

export default function Home() {
  return (
    <><div className="Landing flex h-[70vh] flex-col justify-center gap-4 p-10">
      <h1 className="Welcome text-5xl font-bold w-[70vw]">
        Welcome to Meadowbok Rehabilitation
      </h1>
      <p className="text-lg font-extralight w-[75vw]">At Meadowbrook, we combine expert clinical care with a warm, home-like atmosphere. Whether you're here for short-term recovery or long-term residency, you’ll be treated with dignity, compassion, and respect. Our goal is to help every individual feel comfortable, supported, and empowered to live life to the fullest.</p>
      <a className="flex w-[10vw] border-4 border-[#48a546] p-2 justify-center font-bold rounded-lg" href="">Learn More</a>
    </div><LocationOptions />
    <div className="reviews">
      <h3 className="testimonials">TESTIMONIALS</h3>
      <h2>WHAT OUR PATIENTS ARE SAYING</h2>
    </div>
    </>
    
  );
}
