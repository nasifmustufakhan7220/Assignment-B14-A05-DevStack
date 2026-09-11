import { use } from "react";
import type { ITechnologyType } from "../../Type/Type";

interface IExploreTechnologiesProps{
    exploreTechnologyPromise: Promise<ITechnologyType[]>
}
const ExploreTechnologies = ({exploreTechnologyPromise}:IExploreTechnologiesProps) => {
    const technologies = use(exploreTechnologyPromise);
    console.log(technologies);
    return (
        <div className="max-w-350 mx-auto">
            
        </div>
    );
};

export default ExploreTechnologies;