import { use, useState } from "react";
import type { ITechnologyType } from "../../Type/Type";
import ExploreTechnologyCard from "../ExploreTechnologyCard/ExploreTechnologyCard";
import AddToCartCard from "../AddToCartCard/AddToCartCard";

interface IExploreTechnologiesProps{
    exploreTechnologyPromise: Promise<ITechnologyType[]>
}
const ExploreTechnologies = ({exploreTechnologyPromise}:IExploreTechnologiesProps) => {
    const technologies = use(exploreTechnologyPromise);

    const [stacks, setStacks] = useState<ITechnologyType[]>([]);

    const handelStack = (t:ITechnologyType):void=>{
        const newStack = [...stacks, t];
        setStacks(newStack);
    }
    return (
        <div className="max-w-340 mx-auto p-8 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* 70% */}
            <div className="col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    technologies.map(technology => <ExploreTechnologyCard key={technology.id} technology={technology} handelStack={handelStack} />)
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
                        No technologies selected yet.
                    </p>

                    {/* Empty Stack Box */}
                    <div className={`mt-4 flex ${stacks.length > 0 ? "" : "h-16.25"} items-center justify-center rounded-xl border border-dashed border-gray-200 px-2 py-6`}>
                        {
                            stacks.length > 0 ? <div className="grid grid-cols-1 gap-2">
                            {
                                stacks.map(stack => <AddToCartCard key={stack.id} stack={stack} />)
                            }
                        </div> : <p className="text-[13px] text-gray-400">
                        Your stack is empty.
                        </p>
                        }

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreTechnologies;