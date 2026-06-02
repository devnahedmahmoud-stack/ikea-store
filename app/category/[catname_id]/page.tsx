import NewCollection from "@/components/category/NewCollection";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { NewCollectionsItems } from "@/data/data";

export default async function NewCollectionsPage({
  params,
}: {
  params: Promise<{ catname_id: string }>;
}) {
  const { catname_id } = await params;
  const catParams: string[] = catname_id.split("-");
  const products = NewCollectionsItems.find(
    (item) => item.id === parseInt(catParams[catParams.length - 1]),
  )?.products;
  console.log(catParams, products);
  if(!products){
    return <div>Products not found</div>
  }
  return (
    <ContainerProvider>      
<NewCollection items={products} />
    </ContainerProvider>
    
  );
}
