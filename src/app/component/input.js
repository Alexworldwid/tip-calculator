"use client"
import Image from "next/image";
import dollarIcon from "/public/images/icon-dollar.svg";
import personIcon from "/public/images/icon-person.svg";
import { useEffect } from "react";

const Inputs = ({ billAmount, setBillAmount, numOfPeople, customTip, setCustomTip, setNumOfPeople, calculateTip }) => {
        const handleTipClick = (tipPercentage) => {
            calculateTip(tipPercentage);
            // Log input values
            console.log('Bill Amount:', billAmount);
            console.log('Number of People:', numOfPeople);
            console.log('Custom Tip:', customTip);
        }  

        const handleCustomTipChange = (value) => {
            console.log('Custom Tip Change:', value);

            setCustomTip(value);
            calculateTip(value);
        }


        return (
        <div className="flex flex-col gap-y-4">
            <div className="relative mb-4">
                <label className="text-[hsl(183,100%,15%)] font-medium" htmlFor="bill">Bill</label>
                <Image className="absolute top-9 left-5" id="img" src={dollarIcon} alt="dollar-Icon" width={14} height={20} quality={100} />
                <input className="appearance-none bg-[hsl(180,18%,93%)] w-full text-xl px-6 py-[10px] rounded-lg text-right" type="number" value={billAmount} placeholder="Enter Amount" id="bill" name="bill" required onChange={(e) => setBillAmount(e.target.value)} />
            </div>

            <div>
                <p className="mb-3 text-[hsl(183,100%,15%)] font-medium">Select Tip %</p>
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-[hsl(183,100%,15%)] py-3 rounded-xl transition-all duration-300 ease-in-out text-white text-2xl hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"  onClick={() => handleTipClick(5)}>5%</button>
                    <button className="bg-[hsl(183,100%,15%)] py-3 rounded-xl transition-all duration-300 ease-in-out text-white text-2xl hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"  onClick={() => handleTipClick(10)}>10%</button>
                    <button className="bg-[hsl(183,100%,15%)] py-3 rounded-xl transition-all duration-300 ease-in-out text-white text-2xl hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"  onClick={() => handleTipClick(15)}>15%</button>
                    <button className="bg-[hsl(183,100%,15%)] py-3 rounded-xl transition-all duration-300 ease-in-out text-white text-2xl hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"  onClick={() => handleTipClick(25)}>25%</button>
                    <button className="bg-[hsl(183,100%,15%)] py-3 rounded-xl transition-all duration-300 ease-in-out text-white text-2xl hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"  onClick={() => handleTipClick(50)}>50%</button>
                    <input className="appearance-none bg-[hsl(180,18%,93%)] w-full text-xl px-6 py-[10px] rounded-lg text-center placeholder:font-semibold placeholder:text-[hsl(183,100%,15%)]" type='number' placeholder='Custom' onChange={(e) => handleCustomTipChange(e.target.value)} value={customTip} />
                </div>
            </div>

            <div className="mt-4 relative">
                <label htmlFor="num-of-people">Number of people</label>
                <Image className="absolute top-8 left-6" src={personIcon} alt="person-icon" width={24} height={20} quality={100} />
                <input value={numOfPeople} className="appearance-none bg-[hsl(180,18%,93%)] w-full text-xl px-6 py-[10px] rounded-lg text-right" type="number" id="num-of-people" placeholder="0" name="num-of-people" onChange={(e) => setNumOfPeople(e.target.value)} />
            </div>
        </div>
    );
};

export default Inputs;