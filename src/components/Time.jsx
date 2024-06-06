import { TempTime } from "./TempTime";
import { WeekTime } from "./WeekTime";

export const Time = () => {
    return (
        <>
            <div 
            className="w-full md:w-3/4 flex flex-col h-screen p-6 md:p-12 justify-around gap-6">

                <WeekTime />
                <TempTime />

            </div>
        </>
    )
    
};
