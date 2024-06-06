import { TempTime } from "./TempTime";
import { WeekTime } from "./WeekTime";

export const Time = () => {
    return (
        <>
            <div className="w-full md:w-3/4 p-4 flex flex-col h-screen">
                <WeekTime />
                <TempTime />
            </div>
        </>
    )

};
