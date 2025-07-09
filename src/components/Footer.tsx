'use client';

const Footer = () => {
    return (
        <div className="footer p-10 pb-2 flex flex-col gap-5">
            <div className="top-footer justify-center items-center flex gap-5">
                <div className="links w-full flex justify-center items-center gap-10">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">WHY MEADOWBROOK</a></li>
                        <li><a href="">CARE SERVICES</a></li>
                        <li><a href="">SUCCESS STORIES</a></li>
                    </ul>
                    <ul>
                        <li><a href="">JOIN OUR FAMILY</a></li>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">PRIVACY POLICY</a></li>
                    </ul>
                </div>
                <div className="badges flex gap-10 w-full">
                    <img src="/images/Meadowbrookbadge_1.png" alt="" />
                    <img src="/images/Meadowbrookbadge_2.png" alt="" />
                    <img src="/images/Meadowbrookbadge_3.png" alt="" />
                </div>
            </div>
            <div className="copyright flex justify-center items-center">
                <p>Copyright © 2025 MEADOWBROOK - <a href="">Designed by JLC WebDev</a></p>
            </div>
        </div>
    )
}

export default Footer