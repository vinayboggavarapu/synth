import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"
const Request = () => {

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };


    return (
        <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
            <div className="items-center flex flex-col pb-10">

                <div className="text-center text-zinc-300 text-[32px] font-bold">Request A Collection</div>
                <div className="self-stretch h-16 flex flex-col justify-start items-start gap-2 inline-flex pb-14 pt-14">
                    <div className="w-auto h-5 text-center text-zinc-300 text-base font-semibold tracking-wide pl-4 pb-8">Name</div>
                    <div className="self-stretch h-12 p-6 rounded-[30px] border border-blue-700 justify-start items-center gap-2.5 inline-flex">
                        <div className="text-center text-zinc-400 text-sm font-light font-['Space Grotesk'] tracking-wide">
                            Type the name of your Desired Collection.</div>
                    </div>
                    <div className="w-auto h-[19px] text-center text-zinc-300 text-base font-semibold tracking-wide pt-12 pl-4 pb-8">Description</div>
                    <div className="self-stretch h-[50px] p-[18px] rounded-[30px] border border-blue-700 justify-start items-center gap-2.5 inline-flex">
                        <div className="text-center text-zinc-400 text-sm font-light font-['Space Grotesk'] tracking-wide">
                            Add a little Description</div>
                    </div>

                    <div className="w-auto h-[19px] text-center text-zinc-300 text-base font-semibold tracking-wide pt-12 pl-4 pb-8">Select Campaign Date</div>
                    <div className="w-full h-12 p-6 rounded-[30px] border border-blue-700 justify-start items-center gap-2.5 inline-flex">
                        <Datepicker value={{ startDate: value.startDate, endDate: new Date(value.endDate) }} onChange={handleValueChange} />
                    </div>



                </div>


            </div>


        </div>
    );
};

export default Request;