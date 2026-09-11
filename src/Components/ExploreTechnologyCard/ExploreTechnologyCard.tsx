import { FaStar } from "react-icons/fa";
import type { ITechnologyType } from "../../Type/Type";

interface ITechnologyProps{
    technology: ITechnologyType;
    handelStack: (t:ITechnologyType) => void
}

const ExploreTechnologyCard = ({technology, handelStack}:ITechnologyProps) => {
    const {badge, category, description, difficulty, icon, name, rating} = technology;

    const handelAddToCart = ()=>{
        handelStack(technology);
    }
    return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Icon + Popular */}
      <div className="flex items-center justify-between">
        
        <img src={icon} alt={name} className="w-12 h-12"/>
        

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-5 text-gray-500">
        {description}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100"></div>

      {/* Tags + Rating */}
      <div className="flex items-center justify-between">

        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {category}
        </span>

        <span className="text-xs text-gray-500">
          {difficulty}
        </span>

        <div className="flex items-center gap-1">
          <FaStar className="text-xs text-yellow-400" />
          <span className="text-sm font-medium text-gray-600">
            {rating}
          </span>
        </div>

      </div>

      {/* Add to Stack Button */}
      <button onClick={handelAddToCart}
        className="mt-4 w-full rounded-lg bg-gray-950 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
        Add to Stack
      </button>

    </div>
  );
};

export default ExploreTechnologyCard;