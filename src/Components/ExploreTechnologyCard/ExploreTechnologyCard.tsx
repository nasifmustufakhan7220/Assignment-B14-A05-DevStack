import { FaStar } from "react-icons/fa";
import type { ITechnologyType } from "../../Type/Type";

interface ITechnologyProps{
    technology: ITechnologyType;
    handelStack: (t:ITechnologyType) => void;
    stacks: ITechnologyType[];
}

const ExploreTechnologyCard = ({technology, handelStack, stacks}:ITechnologyProps) => {
    const {badge, category, description, difficulty, icon, name, rating} = technology;

    let color = "";

    if(badge === "Fast"){
      color="bg-orange-50 text-orange-600 font-bold"
    }else if(badge === "Popular" || badge === "Containers"){
      color="bg-blue-50 text-blue-600 font-bold"
    }else{
      color = "bg-green-50 text-green-600 font-bold"
    }
    
    const exited = stacks.some(s=> s.id === technology.id);
    
    const handelAddToCart = (t:ITechnologyType)=>{
      if(exited){
        console.log(exited);
        return;
      }
      handelStack(t);
      
    }
    return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col">

      <div className="flex items-center justify-between">
        
        <img src={icon} alt={name} className="w-12 h-12"/>
        

        <span className={`rounded-full bg-blue-50 px-3 py-1 text-xs ${color}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-5 text-gray-500">
        {description}
      </p>

      <div className="my-4 border-t border-gray-100"></div>

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

      <button onClick={()=>handelAddToCart(technology)} disabled={exited}
        className="mt-4 w-full rounded-lg bg-gray-950 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50">
          {exited ? `✓ Added to Stack` : `Add to Stack`}
      </button>

    </div>
  );
};

export default ExploreTechnologyCard;