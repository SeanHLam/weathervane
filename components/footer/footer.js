import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  const position = [49.28594, -123.11129];
  return (
    <div className=" flex-wrap justify-evenly w-full bg-raisin flex  p-4">
      <div className="flex flex-col m-3">
        <h3 className="  font-Heebo text-snow">
          About the Project
        </h3>
        <p className=" text-xl font-DMSans text-snow">
         A simple web app that gives you the current <br></br>
          weather  for any location you search for.

        </p>
      </div>

      <div className="flex flex-col m-3">
        <h3 className=" text-4xl font-Heebo text-snow">Resources</h3>
        <a
          rel="noreferrer"
          href="https://openweathermap.org/"
          target="_blank"
          className="font-DMSans text-snow  hover:underline"
        >
         OpenWeather API
        </a>
       
      </div>

      <div className="flex flex-col m-3">
        <h3 className="  text-4xl font-Heebo text-snow">Socials</h3>
        <div className="flex justify-center">
            <SocialIcon rel="noreferrer" target="_blank" bgColor='#47BCFF' className='mr-2 scale-90 hover:scale-95 transition-all' url="https://github.com/SeanHLam" />
            <SocialIcon rel="noreferrer" target="_blank" bgColor='#47BCFF' className=' mr-2 scale-90 hover:scale-95 transition-all' url="https://www.instagram.com/seanhlam/?hl=en" />
            <SocialIcon rel="noreferrer" target="_blank" bgColor='#47BCFF' className=' mr-2 scale-90 hover:scale-95 transition-all' url="https://www.linkedin.com/in/sean-lam-a72656192/" />
        </div>
      </div>    

      <div></div>
    </div>
  );
}