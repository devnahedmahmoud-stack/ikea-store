import ContainerProvider from '@/components/Providers/ContainerProvider';

type StorePageProps = {
  params: {
    storename: string;
  };
};
const StorePage =async ({ params }: StorePageProps) => {
    const {storename}=await params;
console.log("store",storename)
  return (
    <ContainerProvider>
    <div>{storename} page</div>
    </ContainerProvider>
  )
}

export default StorePage