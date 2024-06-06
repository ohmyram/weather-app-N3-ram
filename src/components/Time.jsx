import { TempTime } from "./TempTime";
import { WeekTime } from "./WeekTime";

export const Time = () => {
    return (
        <>
            <div className='grow flex justify-center'>
                <div className="w-full md:w-11/12 lg:3/4 flex flex-col p-6  justify-around gap-6 items-center">

                    <WeekTime />
                    <TempTime />

                </div>
            </div>
        </>
    )

};
