import PageLayout from "@/components/common/PageLayout";

const PhotographyPage = () => {
  return (
    <PageLayout isPhotographyPage={true}>
      <div className="absolute inset-0">
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
