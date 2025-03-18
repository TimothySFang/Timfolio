import { useState, useEffect, useRef } from "react";
import PageLayout from "@/components/common/PageLayout";
import balcony from "../../assets/Home/balcony.jpg";
import cartImage from "../../assets/Home/cart.jpg";
import BasedInVancouver from "../../assets/Home/BasedInVancouver.png";
import BasedVanMob from "../../assets/Mobile/BasedVanMob.png";
import BalconyMob from "../../assets/Mobile/BalconyMob.png";
import AboutMe from "../../assets/Home/AboutMe.png";
import gridOne from "../../assets/Home/gridOne.jpg";
import gridTwo from "../../assets/Home/gridTwo.jpg";
import gridThree from "../../assets/Home/gridThree.jpg";
import gridFour from "../../assets/Home/gridFour.jpg";

const HomePage = () => {
  const [balconyInView, setBalconyInView] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const balconyRef = useRef(null);
  const contentRef = useRef(null);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setBalconyInView(true);
          // Once we've seen it, no need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (balconyRef.current) {
      observer.observe(balconyRef.current);
    }

    return () => {
      if (balconyRef.current) {
        observer.unobserve(balconyRef.current);
      }
    };
  }, []);

  // Start the loading animation sequence when balcony comes into view
  useEffect(() => {
    if (balconyInView) {
      // Lock scrolling when the balcony image is in view
      document.body.style.overflow = "hidden";

      // After animation completes, allow scrolling again
      const timer = setTimeout(() => {
        setLoadingComplete(true);
        document.body.style.overflow = "auto";

        // Scroll to the content below after animation
        if (contentRef.current) {
          setTimeout(() => {
            window.scrollTo({
              top: window.innerHeight * 2,
              behavior: "smooth"
            });
          }, 500);
        }
      }, 3000); // 3 seconds for the loading animation

      return () => clearTimeout(timer);
    }
  }, [balconyInView]);

  return (
    <PageLayout>
      <div className="snap-y snap-mandatory">
        <div style={{ height: '100vh' }} className="bg-[#FDF7EC] flex flex-col justify-center items-center px-4">
          <h1 className="font-['Space_Grotesk'] text-[50px] md:text-[180px] font-bold tracking-widest text-[#4A4139] mb-2 text-center">
            TIMFOLIO
          </h1>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139]">
                PHOTOGRAPHY + SWE
              </p>
              <p className="font-['Cormorant'] text-lg md:text-xl text-[#4A4139]">
                Timothy Fang
              </p>
            </div>
            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139]">
              DESIGNED + DEVELOPED 2024
            </p>
          </div>
        </div>
        <div
          ref={balconyRef}
          className="snap-start relative"
        >
          <img
            src={isMobile ? BalconyMob : balcony}
            alt="Balcony view"
            className="w-full object-cover object-top full-height"
          />
          {!isMobile && <div className="absolute inset-x-0 top-[7%] text-center">
            <div className="flex justify-center items-baseline gap-4">
              <p className="font-['Cormorant_Infant'] font-bold text-[#4A4139] text-[80px] relative">
                <span className="absolute top-[] right-[5px] z-2 inset-3 bg-[#FDB50B]/60 rounded-sm"></span>
                <span className="relative">"Creativity</span>
              </p>
              <p className="font-['Cormorant_Infant'] font-light text-[#4A4139] text-[80px]">
                is the
              </p>
            </div>
            <p className="font-['Cormorant_Infant'] font-light text-[#FDF7EC] text-[80px] -mt-4">
              Ultimate Sophistication"
            </p>
            <p className="font-['Cormorant_Infant'] font-light text-[#FDF7EC] text-[24px] mt-2 text-right mr-[20%]">
              - Leonardo Da Vinci
            </p>
          </div>}
        </div>

        <div ref={contentRef} className="bg-[#FDF7EC] full-height">
          <div className="flex flex-col md:grid md:grid-cols-12 h-full pt-20 md:pt-28 pb-12 md:pb-28 px-4 md:px-0">
            <div className="md:col-span-6 order-2 md:order-1 h-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="relative center">
                  <div className="relative">
                    <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                      <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible ">
                        TIMOTHY
                      </h2>
                    </span>
                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic relative">
                      TIMOTHY
                    </h2>
                  </div>
                  <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium mt-0">
                    SHI-HONG
                  </h2>
                  <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-light italic -mt-1">
                    FANG
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative flex justify-center">
                <div className="absolute top-[-20px] left-4 md:top-[-50px] md:left-[50px] bg-[#4A4139] aspect-square w-[70%]" />
                <img
                  src={cartImage}
                  alt="Person in shopping cart"
                  className="aspect-square w-[70%] object-cover relative scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Conditionally render different images based on screen size */}
        <img
          src={isMobile ? BasedVanMob : BasedInVancouver}
          alt="Based in Vancouver"
          className="w-full h-full object-cover object-top full-height"
        />
        <div className="flex flex-col md:grid md:grid-cols-12 pt-20 md:pt-28 pb-12 md:pb-28 bg-[#FDF7EC] px-10 md:-px-0">
          <div className="md:col-span-6 order-1 mb-8 md:mb-0">
            <div className="relative flex justify-center">
              <div className="absolute top-[-30px] left-4 md:top-[-50px] md:right-[50px] bg-[#4A4139] aspect-square w-[70%]" />
              <img
                src={AboutMe}
                alt="About me visual"
                className="aspect-square w-[70%] object-cover mx-auto md:ml-auto relative md:scale-x-[-1]"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-2 h-full flex items-start px-4 md:pl-20">
            <div className="flex flex-col items-start">
              <div className="relative">
                <div className="relative">
                  <span className="absolute top-2 md:top-4 left-5 bg-[#FDB50B]/60 md:inset-y-10 inset-y-6">
                    <h2 className="font-['Cormorant_Garamond'] text-[50px] md:text-[80px] font-medium italic invisible ">
                      ABOUT ME
                    </h2>
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] text-[40px] md:text-[80px] font-light italic relative -mt-4">
                    ABOUT ME
                  </h2>
                </div>
              </div>

              <div className="mt-5 max-w-xl">
                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base leading-relaxed mb-6">
                  Hi, I'm Timothy! I'm a software engineer passionate about building meaningful, user-focused solutions. My journey as a Chinese-Canadian immigrant has shaped my curiosity and resilience, which I bring into coding, exploring transformative ideas, and personal challenges. I thrive at the intersection of creativity and logic, with experience in full-stack development and a love for learning new technologies.
                </p>

                <p className="font-['Roboto'] font-extralight text-[12px] md:text-[14px] lg:text-base  leading-relaxed">
                  Beyond tech, I'm a triathlete-in-training, aiming to complete an Ironman. I enjoy experimenting with gaming setups, running marathons, and getting lost in Stardew Valley. I believe small steps create big change—whether it's shipping a feature, mastering a skill, or pushing through the last mile. Let's build something impactful together!
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-0 px-4 md:px-0 pb-12 md:pb-28 bg-[#FDF7EC]">
          {[gridOne, gridTwo, gridThree, gridFour].map((img, index) => (
            <div key={index} className="col-span-3">
              <img src={img} alt={`Grid ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
