const NavItem = () => {
    const items = ['LeaderBoard','Historical Trading','Historical Chart','Scanners','Alerts','Basic Backtest','Advanced Backtest','Pricing','My Earnings']
  return (
        <nav className=' py-3'>
            <div className=" mx-20">
            <ul className=' flex text-[14px] font-semibold gap-2 justify-around px-2'>
                {
                    items.map((item, index)=>(<li key={index} className=" text-gray-700"><a href="">{item}</a></li>)
                    )
                }
            </ul>
            </div>
        </nav>
  )
}

export default NavItem