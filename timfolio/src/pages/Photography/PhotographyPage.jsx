import PageLayout from "@/components/common/PageLayout";

const PhotographyPage = () => {
  return (
    <PageLayout isPhotographyPage={true}>
      <div className="absolute inset-0 top-[64px]"> {/* Assuming header height is 64px */}
        <iframe
          src="https://timothyfang.myportfolio.com/"
          title="Photography Portfolio"
          className="w-full h-[calc(100vh-64px)] border-none"
          loading="lazy"
        />
      </div>
    </PageLayout>
  );
};

export default PhotographyPage;
