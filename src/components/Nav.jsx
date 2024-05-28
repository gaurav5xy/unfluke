import Logo from "/logo.png";
import Notification from "/notification.png";
import Coin from "/coin.jpeg";
import User from "/user.jpg";

const Nav = () => {
  return (
      <nav className=" py-2 border-b">
        <div className=" mx-16 h-14 flex justify-between items-center">
          <a href="/" className=" p-1">
            <img src={Logo} alt="logo" className=" w-[120px]"/>
          </a>
          <div>
            <ul className=" flex gap-5 items-center">
              <li>
                <a href="/" className=" p-2">
                  <img src={Notification} alt="Notification" className=" w-6" />
                </a>
              </li>
              <li>
                <a href="/" className=" p-2">
                  <img src={Coin} alt="Coin" className=" w-7"/>
                </a>
              </li>
              <li>
                <a href="/" className=" p-2">
                  <img src={User} alt="User" className=" w-8"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
