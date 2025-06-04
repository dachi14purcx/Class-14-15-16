import { CgProfile } from "react-icons/cg";
import Favorite from "./Favorite";
const Card = ({ setPeople, profile }) => {
    function toggleFavoriteChange(id){
        setPeople(prev => prev.map(el => el.id == id ? {...el, isFavorite: !el.isFavorite} : el))
    }
    const {id, name, email, phone, isFavorite, description} = profile;
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 items-center p-10 mb-10 m-8 drop-shadow-2xl text-3xl">
        <CgProfile size={200} className="text-center"/>
        <Favorite id={id} isFavorite={isFavorite} toggleFavoriteChange={toggleFavoriteChange} />
        <p className="font-bold text-5xl">{name}</p>
        <p>{description}</p>
        <p className="opacity-60">{phone}</p>
        <p className="opacity-60">{email}</p>
    </div>
  )
}

export default Card