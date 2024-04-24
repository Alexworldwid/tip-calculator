"use client";

import Image from "next/image";
import Display from "./component/display";
import Input from "./component/input";
import Logo from "../../public/images/logo.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [billAmount, setBillAmount] = useState('');
    const [customTip, setCustomTip] = useState("");
    const [numOfPeople, setNumOfPeople] = useState('');
    const [tipAmount, setTipAmount] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const calculateTip = (tipPercentage) => {
      // Log input values
      console.log('Bill Amount:', billAmount);
      console.log('Number of People:', numOfPeople);
      console.log('Tip Percentage:', tipPercentage);
      console.log('Custom Tip:', customTip);

      // first convert input values to numbers
      const bill = parseFloat(billAmount);
      const people = parseInt(numOfPeople);

      // check if the value is valid
      if (!isNaN(bill) && !isNaN(people) && bill > 0 && people > 0) {
        let tipPercent = parseFloat(tipPercentage);
        if (isNaN(tipPercent)) {
          // if custom tip is empty use 0
          tipPercent = 0;
        }
        
        // tip per person
        const tipPerPerson = (bill * (tipPercent / 100)) / people;

        // total tip 
        const total = bill * (tipPercent / 100);

        // update state 
        setTipAmount(tipPerPerson.toFixed(2));
        setTotalPerPerson(total.toFixed(2));
      } else {
        // clear tip amout if input values is invalid
        setTipAmount(0);
        setTotalPerPerson(0);
      }
    };

    // reset function
    const handleReset = () => {
      setBillAmount('');
      setNumOfPeople('');
      calculateTip(0);
      setCustomTip('');
    }

    useEffect(() => {

    })

  return (
    <main className="w-full h-screen flex flex-col items-center pt-7 bg-[hsl(184,14%,56%)]">
      <div className="mb-10 max-w-[1400px] ">
        <Image src={Logo} width={80} height={50} quality={100} alt="logo-img" />
      </div>

      <div className="bg-white flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 p-6 w-full rounded-2xl max-w-[1400px]">
        <Input
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          numOfPeople={numOfPeople}
          setNumOfPeople={setNumOfPeople}
          calculateTip={calculateTip}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <Display
          tipAmount={tipAmount}
          totalPerPerson={totalPerPerson}
          handleReset={handleReset}
        />
      </div>
    </main>
  );
}
