'use client';

const Footer = () => {
  return (
    <div className="footer px-6 py-10 flex flex-col gap-8 text-sm">
      {/* Top Footer */}
      <div className="top-footer flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-8">
        {/* Links */}
        <div className="links flex flex-col sm:flex-row justify-center items-center gap-10 text-center">
          <ul className="space-y-2">
            <li><a href="">HOME</a></li>
            <li><a href="">WHY MEADOWBROOK</a></li>
            <li><a href="">CARE SERVICES</a></li>
            <li><a href="">SUCCESS STORIES</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="">JOIN OUR FAMILY</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><a href="">PRIVACY POLICY</a></li>
          </ul>
        </div>

        {/* Badges */}
        <div className="badges flex flex-wrap justify-center items-center gap-6">
          <img src="/images/Meadowbrookbadge_1.png" alt="Badge 1" className="h-12 md:h-24" />
          <img src="/images/Meadowbrookbadge_2.png" alt="Badge 2" className="h-12 md:h-24" />
          <img src="/images/Meadowbrookbadge_3.png" alt="Badge 3" className="h-12 md:h-24"  />
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright text-center text-xs border-t pt-4">
        <p>
          Copyright © 2025 MEADOWBROOK —{' '}
          <a href="" className="underline hover:text-gray-600">Designed by JLC WebDev</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
