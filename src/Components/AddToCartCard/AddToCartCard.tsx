import { RxCross2 } from "react-icons/rx";
import type { ITechnologyType } from "../../Type/Type";
import type { Dispatch, SetStateAction } from "react";

interface IAddToCartCard {
    stack: ITechnologyType;
    stacks: ITechnologyType[];
    setStacks: Dispatch<SetStateAction<ITechnologyType[]>>
}

const AddToCartCard = ({stack, stacks, setStacks}: IAddToCartCard) => {
    const {icon, name, category} = stack;

    const hendelRemove = (t:ITechnologyType)=>{
      const filteredData = stacks.filter(st => st.id !== t.id);
      setStacks(filteredData);
    }
    return (
        <div className="flex justify-between rounded-2xl border-2 border-slate-200 bg-white px-8 py-2">
          {/* Left Side */}
      <div className="flex items-center gap-2">
            {/* Svelte Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              <img src={icon} alt="" className="h-10 w-10 object-contain"/>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-[16px] font-semibold leading-tight text-slate-900">
                {name}
              </h2>

              <p className="mt-1 text-[12px] font-medium text-slate-400">
                {category}
              </p>
            </div>
      </div>



      {/* Close Button */}
      <button onClick={()=>hendelRemove(stack)}

        type="button"
        aria-label="Remove Svelte"
        className="flex h-10 w-10 items-center justify-center text-slate-400 transition hover:text-slate-600"
      >
        <RxCross2 />
      </button>
    </div>
    );
};

export default AddToCartCard;