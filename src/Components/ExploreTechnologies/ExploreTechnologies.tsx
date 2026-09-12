import { use, useState } from "react";
import type { ITechnologyType } from "../../Type/Type";
import ExploreTechnologyCard from "../ExploreTechnologyCard/ExploreTechnologyCard";
import AddToCartCard from "../AddToCartCard/AddToCartCard";
import { Bounce, toast } from "react-toastify";

interface IExploreTechnologiesProps{
    exploreTechnologyPromise: Promise<ITechnologyType[]>
}
const ExploreTechnologies = ({exploreTechnologyPromise}:IExploreTechnologiesProps) => {
    const technologies = use(exploreTechnologyPromise);

    const [stacks, setStacks] = useState<ITechnologyType[]>([]);

    const handelStack = (t:ITechnologyType):void=>{

        const newStack = [...stacks, t];
        setStacks(newStack);
        toast.success(`${t.name} added to the stack`, {
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
    }

    const hendelRemoveAll = ()=>{
        setStacks([]);
        toast.error('All cleared', {
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
    }
    return (
        <div className="max-w-340 mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* 70% */}
            <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {
                    technologies.map(technology => <ExploreTechnologyCard key={technology.id} technology={technology} handelStack={handelStack} stacks={stacks}/>)
                }
            </div>
            {/* 30% */}
            <div className="col-span-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">


                    {/* Title */}
                    <h2 className="text-[16px] font-semibold text-gray-900">
                        Your Stack
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-1 text-[13px] text-gray-400">
                        {
                            stacks.length > 0 ? `${stacks.length} Technology Selected`: `No technologies selected yet.`
                        }
                    </p>

                    {/* Empty Stack Box */}
                    <div className={`mt-4 flex ${stacks.length > 0 ? "" : "h-16.25"} items-center justify-center rounded-xl border border-dashed border-gray-200 px-2 py-6`}>
                        {
                            stacks.length > 0 ? <div className="flex w-full flex-col gap-2">
                            {
                                stacks.map(stack => <AddToCartCard key={stack.id} stack={stack} stacks={stacks} setStacks={setStacks} />)
                            
                        
                            }
                            
                        </div> : <p className="text-[13px] text-gray-400">
                        Your stack is empty.
                        </p>
                        }
                         
                    </div>
                    {
                            stacks.length > 0 ? <button onClick={hendelRemoveAll} className="mt-5 btn btn-block border-2 border-[#ff6b35] text-[#ff6b35]  font bold rounded-1xl hover:bg-[#ff6b35] hover:text-white">Remove All</button> : ``
                    }
                </div>
               
            </div>
        </div>
    );
};

export default ExploreTechnologies;