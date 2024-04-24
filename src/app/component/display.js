import React from 'react';
import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";


const Display = ({ tipAmount, totalPerPerson, handleReset }) => {
    const handleTipReset = () => {
        handleReset();
    }

    return (
        <div className='flex flex-col mt-8 bg-[hsl(183,100%,15%)] p-4 py-6 rounded-xl'>
            <div className='flex items-center justify-between mb-6 md:mb-10'>
                <div >
                    <p className='text-white text-xl'>Tip Amount</p>
                    <p className='text-slate-400'>/ person</p>
                </div>
                <div>
                    <p className='text-[hsl(172,67%,45%)] text-3xl flex flex-row items-center'><BsCurrencyDollar className='text-xl' />{tipAmount}</p>
                </div>
            </div>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <p className='text-white text-xl'>Total</p>
                    <p className='text-slate-400'>/ person</p>
                </div>
                <div>
                    <p className='text-[hsl(172,67%,45%)] text-3xl flex flex-row items-center'><BsCurrencyDollar className='text-xl' />{totalPerPerson}</p>
                </div>
            </div>
            <button onClick={handleTipReset} className='py-4 rounded-xl text-xl bg-[hsl(172,67%,45%)] font-medium md:mt-20' id='reset'>RESET</button>
        </div>
    );
};

export default Display;