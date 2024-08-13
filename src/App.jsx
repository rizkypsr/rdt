import backgroundImage from "./assets/back.png";
import xLogo from "./assets/x.png";
import teleLogo from "./assets/tele.png";
import trump from "./assets/trump.png";
import one from "./assets/1.jpg";
import two from "./assets/22.png";
import three from "./assets/33.png";

const AnimatedButton = ({ text, href, bgType, bgValue, textColor }) => {
  const isImageBackground = bgType === "image";

  const backgroundStyle = isImageBackground
    ? {
        backgroundImage: `url(${bgValue})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#FFFFFF", // Default background color for image
        padding: "20px", // Add padding for image background
      }
    : { backgroundColor: bgValue };

  return (
    <a
      href={href}
      target="_blank"
      className={`font-bold rounded shadow-solid focus:outline-none transform active:translate-x-1 active:translate-y-1 transition-transform duration-100 ${
        isImageBackground ? "text-transparent" : "py-2 px-4"
      }`}
      style={{ ...backgroundStyle, color: textColor }}
    >
      {!isImageBackground && text}
    </a>
  );
};

const StaticButton = ({ text, bgValue, textColor }) => {
  const backgroundStyle = { backgroundColor: bgValue };

  return (
    <div
      className={`font-extrabold text-sm md:text-2xl rounded shadow-solid focus:outline-none transform active:translate-x-1 active:translate-y-1 transition-transform duration-100 py-2 px-4 inline-block`}
      style={{ ...backgroundStyle, color: textColor }}
    >
      {text}
    </div>
  );
};

function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className="flex flex-col md:flex-row justify-between px-8 md:px-24 py-6 md:py-12">
        <h1 className="font-bold text-center text-2xl md:text-3xl text-white">
          @realDonaldTrump
        </h1>
        <div className="flex items-center justify-center space-x-3 mt-4 md:mt-0">
          <AnimatedButton
            href="https://x.com/realDonaldTrump"
            bgType="image" // Use 'image' for background image
            bgValue={xLogo} // Example background image URL
            textColor="#FFFFFF" // Text color (won't be visible when bgType is 'image')
          />
          <AnimatedButton
            href="https://t.me/rdtportal"
            bgType="image" // Use 'image' for background image
            bgValue={teleLogo} // Example background image URL
            textColor="#FFFFFF" // Text color (won't be visible when bgType is 'image')
          />
          <AnimatedButton
            text="BUY $RDT"
            href="https://pump.fun/4drdawrzjEhfEtuH8CT8mSVsyMZvGm87vghpCFffpump"
            bgType="color" // Use 'color' for background color
            bgValue="#AE0300" // Example background color
            textColor="#FFFFFF" // Example text color
          />
        </div>
      </nav>

      <div className="px-8 md:px-24 py-12 text-white font-extrabold flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-4xl mb-3">
            Discover a new era of crypto
            <span className="block leading-loose">
              inspired by Donald Trump’s iconic return
            </span>
          </h1>

          <StaticButton
            text="4drdawrzjEhfEtuH8CT8mSVsyMZvGm87vghpCFffpump"
            bgType="color" // Use 'color' for background color
            bgValue="#FFFFFF" // Example background color
            textColor="#000000" // Example text color
          />

          <div className="mt-10 flex items-center justify-center md:justify-start space-x-3">
            <AnimatedButton
              href="https://x.com/realDonaldTrump"
              bgType="image" // Use 'image' for background image
              bgValue={xLogo} // Example background image URL
              textColor="#FFFFFF" // Text color (won't be visible when bgType is 'image')
            />
            <AnimatedButton
              href="https://t.me/rdtportal"
              bgType="image" // Use 'image' for background image
              bgValue={teleLogo} // Example background image URL
              textColor="#FFFFFF" // Text color (won't be visible when bgType is 'image')
            />
            <AnimatedButton
              text="BUY $RDT"
              href="https://pump.fun/4drdawrzjEhfEtuH8CT8mSVsyMZvGm87vghpCFffpump"
              bgType="color" // Use 'color' for background color
              bgValue="#AE0300" // Example background color
              textColor="#FFFFFF" // Example text color
            />
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img src={trump} alt="" className="w-full md:w-auto" />
        </div>
      </div>

      <div className="px-8 md:px-24 py-12 text-white font-extrabold mt-16 md:mt-32 text-center">
        <StaticButton
          text="What We've Accomplished"
          bgType="color" // Use 'color' for background color
          bgValue="#FFFFFF" // Example background color
          textColor="#000000" // Example text color
        />

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
          <img
            src={one}
            alt=""
            className="w-full md:w-1/3 h-64 md:h-96 border-2 border-white rounded object-fill"
          />
          <img
            src={two}
            alt=""
            className="w-full md:w-1/3 h-64 md:h-96 border-2 border-white rounded object-fill"
          />
          <img
            src={three}
            alt=""
            className="w-full md:w-1/3 h-64 md:h-96 border-2 border-white rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
