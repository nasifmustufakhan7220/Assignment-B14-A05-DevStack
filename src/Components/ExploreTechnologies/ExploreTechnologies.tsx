import { use, useState } from "react";
import type { ITechnologyType } from "../../Type/Type";
import ExploreTechnologyCard from "../ExploreTechnologyCard/ExploreTechnologyCard";

interface IExploreTechnologiesProps{
    exploreTechnologyPromise: Promise<ITechnologyType[]>
}
const ExploreTechnologies = ({exploreTechnologyPromise}:IExploreTechnologiesProps) => {
    const technologies = use(exploreTechnologyPromise);

    const [stack, setStack] = useState<ITechnologyType[]>([]);

    const handelStack = (t:ITechnologyType):void=>{
        const newStack = [...stack, t];
        setStack(newStack);
    }
    return (
        <div className="max-w-330 mx-auto grid grid-cols-12 gap-4">
            {/* 70% */}
            <div className="col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    technologies.map(technology => <ExploreTechnologyCard key={technology.id} technology={technology} handelStack={handelStack} />)
                }
            </div>
            {/* 30% */}
            <div className="col-span-3 ">
                <div className="grid grid-cols-1 w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">


                    {/* Title */}
                    <h2 className="text-[16px] font-semibold text-gray-900">
                        Your Stack
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-1 text-[13px] text-gray-400">
                        No technologies selected yet.
                    </p>

                    {/* Empty Stack Box */}
                    <div className="mt-4 flex h-16.25 items-center justify-center rounded-xl border border-dashed border-gray-200">
                        <p className="text-[13px] text-gray-400">
                        Your stack is empty.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreTechnologies;