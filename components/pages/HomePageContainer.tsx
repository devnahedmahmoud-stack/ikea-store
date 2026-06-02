import ContainerProvider from "../Providers/ContainerProvider";
import MainSections from "../home/MainSections";
import HeaderSection from "../home/HeaderSection";
import { Button } from "../ui/button";
import OffersSection from "../home/OffersSection";
import CategoryTab from "../home/CategoryTab";
import NewCollections from "../home/NewCollections";
import { NewCollectionsItems } from "@/data/data";
import NoworNever from "../home/NoworNever";
import DesignSpace from "../home/DesignSpace";


const HomePageContainer = () => {
  return (
    <>
      
      <ContainerProvider>        
        <MainSections />
        <HeaderSection
          title="Welcome to IKEA Egypt"
          subtitle="Kitchen offer"
          desc="Upgrade your kitchen and  save 15% on all kitchens "
          more={
            <Button
              variant={"outline"}
              className="bg-white font-semibold text-sm border border-black px-6 py-5 cursor-pointer hover:border-2 hover:bg-white"
            >
              See more
            </Button>
          }
        />
        <OffersSection/>  
        <CategoryTab/>
        <NewCollections newCollectionsData={NewCollectionsItems}/>
        <NoworNever/>
        <DesignSpace/>
      </ContainerProvider>
      
    </>
  );
};

export default HomePageContainer;
