import { useState } from 'react'
import './App.css'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const tipCalculator = () =>{
    const tip = billAmount * (tipPercentage / 100)
    const total = tip + billAmount
    setTipAmount(tip.toFixed(2))
    setTotalAmount(total.toFixed(2))
  }

  return (
    <>
      <div className='flex flex-col max-w-[550px] rounded-[10px] p-[30px] mt-[250px] bg-[#FFEBCD] font-[Arial,_sans-serif] shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
        <h1 className='text-[35px] text-center mb-[20px] font-bold'>Tip Calculator</h1>

        <label htmlFor="" className='text-[24px] text-center mb-[10px]'>Bill Amount in (RS) :</label>
        <input type="number" value={billAmount} onChange={(e) => setBillAmount(parseFloat(e.target.value))} className='border border-solid border-[blanchedalmond] w-[400px] p-[5px] rounded-[5px] outline-none mb-[20px]'/>

        <label htmlFor="" className='text-[24px] text-center mb-[10px]'>Tip Percentage (%) :</label>
        <input type="number" value={tipPercentage} onChange={(e) => setTipPercentage(parseFloat(e.target.value))} className='border border-solid border-[blanchedalmond] w-[400px] p-[5px] rounded-[5px] outline-none mb-[20px] '/>

        <button onClick={tipCalculator} className='py-[10px] px=[20px] bg-[green] text-white font-bold rounded-[5px] mb-[10px] cursor-pointer hover:bg[#85EF85]'>CALCULATE</button>
        <div className='text-[18px] pt-[20px] mt-[25px] border-t-[black] border-t border-solid]'>
          <p className='mb-[15px] '>Tip Amount : <span className='font-bold'>RS {tipAmount}</span></p>
          <p className='mb-[15px] '>Total Amount : <span className='font-bold'>RS {totalAmount}</span></p>
        </div>
      </div>
    </>
  )
}

export default App
