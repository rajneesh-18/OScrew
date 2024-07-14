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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                eum esse dicta blanditiis debitis ullam laborum beatae a tenetur
                excepturi, voluptate saepe officia similique mollitia
                exercitationem nihil maxime assumenda rem!
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
            <span className="">#</span> What's OScrew..?
          </h3>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus reiciendis, fugiat at, dolorem aperiam, aliquam iure
            dolore nisi reprehenderit delectus fuga quibusdam corrupti nobis
            hic. Error accusamus sed, inventore molestias neque veniam molestiae
            laudantium iste, voluptatibus odio nam nisi ea optio quaerat iusto
            enim cupiditate aperiam quibusdam commodi facere illum ipsam eos
            quidem excepturi. Repellendus natus ad iusto dicta nam laudantium
            nemo.
          </p>
          <p className="mt-6 text-md text-gray-300 leading-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus reiciendis, fugiat at, dolorem aperiam, aliquam iure
            dolore nisi reprehenderit delectus fuga quibusdam corrupti nobis
            hic. Error accusamus sed, inventore molestias neque veniam molestiae
            laudantium iste, voluptatibus odio nam nisi ea optio quaerat iusto
            enim cupiditate aperiam quibusdam commodi facere illum ipsam eos
            quidem excepturi. Repellendus natus ad iusto dicta nam laudantium
            nemo.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia
          totam amet consectetur optio, suscipit adipisci. Explicabo rem nobis
          culpa?
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={femaleAvt2}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              Emily Smith
            </h4>
            <p className="truncate ...">Open Source Contributor</p>
            <p className="mt-3 text-justify text-gray-300">
              Lorem ipsum dolor sit amet ctetur adipisicing elit. Eius optio
              eligendi quod nisi...
            </p>
          </div>
          <div className="lg:w-1/3 rounded-2xl bg-gray-800 shadow-2xl border-2 border-olive px-8 py-6 flex flex-col items-center justify-center">
            <Image
              src={maleAvt}
              alt="girl with coffee"
              className="md:w-44 w-32"
            />
            <h4 className="font-semibold text-xl mt-3 text-sage-light">
              John Smith
            </h4>
            <p className="truncate ...">Open Source Contributor</p>
            <p className="mt-3 text-justify text-gray-300">
              Lorem ipsum dolor sit amet ctetur adipisicing elit. Eius optio
              eligendi quod nisi...
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia
          totam amet consectetur optio, suscipit adipisci. Explicabo rem nobis
          culpa?
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia
          totam amet consectetur optio.
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
