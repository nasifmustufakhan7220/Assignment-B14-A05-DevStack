import { RxCross2 } from "react-icons/rx";
import type { ITechnologyType } from "../../Type/Type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface IAddToCartCard {
  stack: ITechnologyType;
  stacks: ITechnologyType[];
  setStacks: Dispatch<SetStateAction<ITechnologyType[]>>;
}

const AddToCartCard = ({
  stack,
  stacks,
  setStacks,
}: IAddToCartCard) => {

  const { icon, name, category } = stack;

  const hendelRemove = (t: ITechnologyType) => {
    const filteredData = stacks.filter(
      (st) => st.id !== t.id
    );

    setStacks(filteredData);

    toast.warn(`${t.name} removed from the stack`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex w-full items-center justify-between rounded-2xl border-2 border-slate-200 bg-white px-4 py-3">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="h-10 w-10 object-contain"
          />
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
      <button
        onClick={() => hendelRemove(stack)}
        type="button"
        aria-label={`Remove ${name}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center text-xl text-slate-400 transition hover:text-slate-600"
      >
        <RxCross2 />
      </button>

    </div>
  );
};

export default AddToCartCard;