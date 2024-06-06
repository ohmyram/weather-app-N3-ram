import { TempTime } from "./TempTime";
import { WeekTime } from "./WeekTime";

export const Time = () => {
    return (
        <>
            <div style={{
                width: "84%",
                padding: "3rem",
                justifyContent: "space-around",
                gap: "6rem"
            }}
                className=" md:w-3/4 flex flex-col h-screen ">

                <WeekTime />
                <TempTime />

            </div>
        </>
    )
    
};
