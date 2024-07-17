import Image from "next/image";
import aboutSvg from "../../../public/about_svg.svg";
import contact from "../../../public/contact.svg";
import girlCoffee from "../../../public/girl_coffee.svg";
import maleAvt from "../../../public/male_avatar.svg";
import femaleAvt from "../../../public/female_avatar.svg";
import maleAvt2 from "../../../public/male_avatar2.svg";
import femaleAvt2 from "../../../public/female_avatar2.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Header />

      <div className="md:min-h-screen lg:mt-7 px-6">
        {/* <div className="absolute opacity-25 h-64 w-3/5 hidden sm:block ">
          <Image src={discussion} alt="discussion" className="" />
        </div> */}
        <div className="backdrop-blur flex flex-col justify-start items-center">
          <div className="text-center my-auto min-h-fit md:w-3/4 pb-8">
            <div className="md:w-3/4 mx-auto flex flex-col gap-3">
              <p className="text-sage md:text-3xl text-lg">
                Open Space, Open Stories
              </p>
              <h1 className="md:text-6xl text-2xl font-bold text-wrap text-gray-300">
                Learn from others and grow yourself in a healthy environment with{" "}
                <span className="text-sage">OScrew!</span>
              </h1>
            </div>
            <div className="lg:mx-auto mt-4 md:w-3/4 mx-auto">
              {" "}
              <p className="text-lg text-sage">
              Join our vibrant community of open source enthusiasts, developers, and maintainers. OScrew is a platform where you can collaborate on projects, learn from industry experts, and share your own experiences. Whether you're just starting out or you're a seasoned pro, there's a place for you here. Engage in meaningful discussions, contribute to exciting projects, and become a part of a supportive network dedicated to open source excellence.
              </p>
            </div>

            <button className="rounded px-6 py-2 bg-olive text-gray-800 font-semibold mt-8 shadow-2xl shadow-olive-shadow">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-800 flex justify-between items-center lg:p-24 py-12 px-8 text-white">
        <div className="text-left lg:w-1/2">
          <h3 className="md:text-4xl text-3xl font-bold text-sage md:text-left text-center">
            <span className="">#</span> What&apos;s OScrew..?
          </h3>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
          OScrew is a dynamic platform designed to foster collaboration and learning within the open source community. 
          Our mission is to create a space where developers, maintainers, and enthusiasts can come together to share knowledge, contribute to projects, and grow collectively.
          </p>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
          At OScrew, you have the opportunity to connect with top Open Source maintainers and GitHub stars who are eager to share their insights and experiences. 
          Engage in discussions, ask questions, and learn directly from those who have made significant contributions to the field. 
          This direct access to experts provides invaluable learning experiences and helps you stay updated with the latest trends and best practices in technology.
          Collaboration is at the heart of OScrew. 
          </p>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
          Join exciting Open Source projects, contribute your unique skills, and witness your work making a real impact. 
          By working on diverse projects, you not only enhance your coding skills but also learn the importance of teamwork, problem-solving, and community engagement.
          OScrew is also a treasure trove of resources. Whether you’re looking for tutorials, articles, or discussions, our platform offers a wealth of information to help you improve your skills and broaden your knowledge. 
          </p>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
          Our community members regularly share their stories, challenges, and successes, creating a rich tapestry of experiences that can inspire and guide newcomers.
          In essence, OScrew offers a supportive environment where learning and growth are paramount. No matter where you are in your Open Source journey, you’ll find a welcoming community ready to help you succeed. 
          Join OScrew today and be part of a movement dedicated to Open Source excellence.
          </p>
        </div>
        <div className="w-1/3 min-h-60 lg:block hidden">
          <Image src={aboutSvg} alt="About svg" />
        </div>
      </div>

      <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 flex flex-col justify-between items-center lg:p-24 py-12 px-8 mt-28 text-white leading-7">
        <h3 className="md:text-4xl text-3xl font-bold text-sage text-center w-full">
          <span className="">#</span> Top Profiles
        </h3>
        <p className="md:w-2/3 text-center mt-4 mb-12 text-gray-300">
        Meet the top contributors in the open source community. 
        These profiles highlight individuals who have significantly impacted through their contributions, mentorship, and leadership. 
        Explore their stories, learn from their experiences, and get inspired to enhance your own open source journey.
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={maleAvt}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              Rajneesh Dojo
            </h4>
            <p className="truncate ...">Open Source DevRel</p>
            <p className="mt-3 text-justify text-gray-300">
            Open source enthusiast & DevRel. Building communities & fostering developer love for OScrew & LinksHub.
            </p>
          </div>
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={femaleAvt}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              Rupali Haldiya
            </h4>
            <p className="truncate ...">Open Source Maintainer</p>
            <p className="mt-3 text-justify text-gray-300">
            Full-stack JavaScript Developer | Building LinksHub & OScrew
            </p>
          </div>
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={femaleAvt}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              Erica Smith
            </h4>
            <p className="truncate ...">Open Source Contributor</p>
            <p className="mt-3 text-justify text-gray-300">
              Lorem ipsum dolor sit amet ctetur adipisicing elit. Eius optio
              eligendi quod nisi...
            </p>
          </div>
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={maleAvt2}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              Jason Smith
            </h4>
            <p className="truncate ...">Open Source Contributor</p>
            <p className="w-full text-wrap mt-3 text-justify text-gray-300 truncate ...">
              Lorem ipsum dolor sit amet ctetur adipisicing elit. Eius optio
              eligendi quod nisi...
            </p>
          </div>
        </div>
        <button className="rounded px-4 py-2 bg-olive text-gray-800 font-semibold mt-8 shadow-2xl">
          View all Profiles
        </button>
      </div>

      <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 flex flex-col justify-center items-center lg:p-24 py-12 px-8 mt-28 text-white leading-7">
        <h3 className="md:text-4xl text-3xl font-bold text-sage text-center w-full">
          <span className="">#</span> Team OScrew
        </h3>
        <p className="md:w-2/3 text-center mt-4 mb-12 text-gray-300">
        Meet the dedicated team behind OScrew. 
        Our members are passionate about open source and work tirelessly to create a platform that fosters collaboration and learning. 
        Together, we aim to build a thriving community where everyone can share knowledge and grow.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-5">
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-sage text-center w-full mt-12">
          <span className="">#</span> Contributors
        </h3>
        <p className="md:w-2/3 text-center mt-2 mb-12 text-gray-300">
        Our contributors are the heart of OScrew. 
        These individuals bring diverse skills and perspectives, driving the success of our open source projects. 
        Explore their profiles to learn about their contributions and get inspired by their commitment to the open source community.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-5">
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
          <div className="w-20 h-20 rounded-full border">
            <Image src={girlCoffee} alt="girl with coffee" className="" />
          </div>
        </div>
        <button className="rounded px-4 py-2 bg-olive text-gray-800 font-semibold mt-8 shadow-2xl">
          View all Contributors
        </button>
      </div>

      <div className="bg-gradient-to-b from-gray-800 flex lg:flex-row flex-col justify-between items-center lg:p-24 py-12 px-8 text-white">
        <h3 className="md:text-4xl text-3xl font-bold text-sage md:hidden mb-8">
          <span className="">#</span> Contact Us
        </h3>
        <div className="md:w-1/4 w-3/4 min-h-60">
          <Image src={contact} alt="contact svg" />
        </div>
        <div className="text-left text-justify lg:w-3/5">
          <h3 className="md:text-4xl text-3xl font-bold text-sage md:block hidden">
            <span className="">#</span> Contact Us
          </h3>

          <form className="mt-8">
            <div className="flex gap-4 w-full mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-1/2 bg-transparent border border-[rgba(255,255,255,0.4)] rounded-lg px-5 py-2 hover:bg-[rgba(0,0,0,0.2)] focus:outline-none focus:bg-[rgba(0,0,0,0.2)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-1/2 bg-transparent border border-[rgba(255,255,255,0.4)] rounded-lg px-5 py-2 hover:bg-[rgba(0,0,0,0.2)] focus:outline-none focus:bg-[rgba(0,0,0,0.2)]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="h-24 w-full bg-transparent border border-[rgba(255,255,255,0.4)] rounded-lg px-5 py-2 hover:bg-[rgba(0,0,0,0.2)] focus:outline-none focus:bg-[rgba(0,0,0,0.2)]"
            ></textarea>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
