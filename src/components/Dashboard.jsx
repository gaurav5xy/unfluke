import Table from "./Table"

const Dashboard = () => {
  return (
    <div className=' mx-16'>
        <div className=' bg-[#f8f8fb] p-5 rounded-md font-semibold text-3xl mt-5 shadow-slate-200 shadow-sm text-gray-800'>LeaderBoard</div>
        <div className='  mt-5 rounded-md border'>
            <div className=' flex justify-between p-2 text-gray-800 bg-[#f8f8fb]'>
                <span className="text-2xl px-3">Basic Backtest</span>
                <div className=' border rounded-sm flex'>
                    <span className=' p-2 bg-white'>Slippage</span>
                    <span className=' py-2 px-3'>0% </span>
                </div>
            </div>
            <div className=" w-full h-px bg-gray-300"></div>
            <Table/>
        </div>
    </div>
  )
}

export default Dashboard