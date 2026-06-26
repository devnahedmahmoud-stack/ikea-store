import Categories from "@/components/category/Categories";
import ContainerProvider from "@/components/Providers/ContainerProvider";

type CategoryPageProps = {
  params: { categories: string };
};

const CategoriesPage = async ({ params }: CategoryPageProps) => {
  const { categories } =await  params;

  const catParams: string[] = categories.split("-");
  console.log(catParams)
  return (
    <ContainerProvider>      
      <Categories catParams={catParams} />
    </ContainerProvider>
  );
};

export default CategoriesPage;
