import logo2 from "../assets/logo2.svg";
import upwork from "../assets/upwork.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#292929]">
      <div className="py-[80px] flex flex-col justify-center items-center text-[white]">
        <img src={logo2} />
        <span className="font-[700] text-[16px] mt-[30px]">
          Contact Information:
        </span>
        <span className="font-[400] text-[16px] mt-[20px]">
          alishahzaib02@gmail.com
        </span>
        <span className="font-[400] text-[16px] mt-[10px]">+92305 1506242</span>
        <span className="font-[700] text-[16px] mt-[30px]">
          Follow me on Socials:
        </span>
        <div className="flex gap-[10px] mt-[20px]">
          <a href="https://www.linkedin.com/in/shahzaibali778/" target="_blank">
            <img src={linkedin} />
          </a>
          <a href="https://www.instagram.com/_______shahzaib/" target="_blank">
            <img src={insta} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/shahzaibali94"
            target="_blank"
          >
            <img src={upwork} />
          </a>
        </div>
      </div>
      <hr />
      <div className="flex justify-center text-[white] pt-[20px] pb-[40px] text-[16px] font-[400]">
        Copyright © 2025 Shahzaib Ali
      </div>
    </div>
  );
};

export default Footer;
