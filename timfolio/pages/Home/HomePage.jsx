import PageLayout from "@/components/common/PageLayout";
import balcony from "../../assets/Home/balcony.jpg";
import cartImage from "../../assets/Home/cart.jpg";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="snap-y snap-mandatory">
        <div className="h-screen bg-[#FDF7EC] flex flex-col justify-center items-center">
          <h1 className="font-['Space_Grotesk'] text-[180px] font-bold tracking-widest text-[#4A4139] mb-2">
            TIMFOLIO
          </h1>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139]">
                PHOTOGRAPHY + SWE
              </p>
              <p className="font-['Cormorant'] text-xl text-[#4A4139]">
                Timothy Fang
              </p>
            </div>
            <p className="font-['Space_Grotesk'] text-xs tracking-widest text-[#4A4139]">
              DESIGNED + DEVELOPED 2024
            </p>
          </div>
        </div>
        <div className="h-screen snap-start relative">
          <img
            src={balcony}
            alt="Balcony view"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-x-0 top-[9%] text-center">
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
          </div>
        </div>
        <div className=" bg-[#FDF7EC]">
          <div className="grid grid-cols-12 pt-20 pb-20">
            <div className="col-span-6 h-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="relative center">
                  <div className="relative">
                    <span className="absolute top-4 left-5 bg-[#FDB50B]/60 inset-y-10">
                      <h2 className="font-['Cormorant_Garamond'] text-7xl font-medium italic invisible ">
                        TIMOTHY
                      </h2>
                    </span>
                    <h2 className="font-['Cormorant_Garamond'] text-[80px] font-light italic relative -mt-4">
                      TIMOTHY
                    </h2>
                  </div>
                  <h2 className="font-['Cormorant_Garamond'] text-[80px] font-medium-mt-4">
                    SHI-HONG
                  </h2>
                  <h2 className="font-['Cormorant_Garamond'] text-[80px] font-light italic -mt-2">
                    FANG
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="relative">
                <div className="absolute top-[-50px] right-[50px] bg-[#4A4139] aspect-square w-[70%]" />
                <img
                  src={cartImage}
                  alt="Person in shopping cart"
                  className="aspect-square w-[70%] object-cover ml-auto relative scale-x-[-1]" /* Added scale-x-[-1] for flip */
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
