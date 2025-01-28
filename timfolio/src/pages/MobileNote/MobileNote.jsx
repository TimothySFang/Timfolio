const MobileNotice = () => {
    return (
      <div className="h-screen w-screen fixed inset-0 bg-[#FDF7EC] z-50 flex flex-col items-center justify-center px-8 text-center">
        <h1 className="font-['Cormorant_Infant'] text-4xl font-medium text-[#4A4139] mb-4">
          Mobile is coming soon!
        </h1>
        <p className="font-['Space_Grotesk'] font-light text-sm text-[#4A4139] max-w-[300px] mb-6">
          In the meantime, currently this portfolio is designed only for desktop viewing. Please visit on a larger screen (horizontal on ipad works) for the best experience.  Thank you for your patience. 
        </p>
        <div className="font-['Space_Grotesk'] font-light text-sm text-[#4A4139]">
          - Timothy Fang :)
        </div>
      </div>
    );
  };
  
  export default MobileNotice;