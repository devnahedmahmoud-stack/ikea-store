import { useAuthUserStore } from "@/stores/authuser.stores";


const ProfileUserName = () => {
    const { currentUser,logout } = useAuthUserStore();
  return (
    <h1 className="text-3xl font-bold lg:text-start text-center">{`Hi ${currentUser?.firstName}`}</h1>      
  )
}

export default ProfileUserName