import { FaStar } from "react-icons/fa";

const Favorite = ({ id, isFavorite, toggleFavoriteChange }) => {
  return (
    <FaStar onClick={() => toggleFavoriteChange(id)} size={55} className={`${isFavorite && "text-amber-400"} duration-300 origin-center`} />
  )
}

export default Favorite