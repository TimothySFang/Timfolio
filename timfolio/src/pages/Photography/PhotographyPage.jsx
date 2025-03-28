import PageLayout from "@/components/common/PageLayout";

const PhotographyPage = () => {
  // Using the exact header height of 68px
  const headerHeight = 68;

  return (
    <PageLayout isPhotographyPage={true}>
      <div 
        className="fixed left-0 right-0 bottom-0 w-full"
        style={{ top: `${headerHeight}px` }}
      >
        <iframe
          src="https://timothyfang.myportfolio.com/"
          title="Photography Portfolio"
          className="w-full h-full border-none"
          loading="lazy"
        />
      </div>
    </PageLayout>
  );
};

export default PhotographyPage;
