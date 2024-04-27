import { useState } from "react";
import sprite from "../../assets/sprite.svg";

const LoginPopUp = ({ setLoginModal }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <div className="absolute left-0 top-0 w-[100vw] h-[100vh] overflow-hidden bg-modalBgColor">
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2  w-[566px] h-[510px] bg-mainWhite rounded-[30px] p-16">
        <button
          type="button"
          onClick={() => {
            setLoginModal(false);
          }}
        >
          <svg
            width={32}
            height={32}
            className="stroke-current absolute right-[20px] top-[20px]"
          >
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <h2 className="mb-5 font-medium text-[40px] leading-snug tracking-tight text-mainBlack">
          Log In
        </h2>
        <p className="mb-10 text-left text-base leading-[125%] text-modalBgColor">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-[18px] p-4 rounded-2xl border border-borderColor text-mainBlack focus:outline-none"
          />
          <div className="relative">
            <input
              type={passwordVisible ? "password" : "text"}
              placeholder="Password"
              className="w-full h-[52px] mb-10 p-4 rounded-2xl border border-borderColor text-mainBlack focus:outline-none"
            />
            <button
              type="button"
              className="block absolute right-[14px] top-[10px]"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <svg width={32} height={32} className="bg-transparent">
                <use
                  xlinkHref={
                    passwordVisible
                      ? `${sprite}#icon-eye-off`
                      : `${sprite}#icon-eye`
                  }
                ></use>
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-mainOrange py-4 rounded-3xl text-mainWhite font-medium text-base leading-[125%] tracking-tighter transition-all duration-100 ease-in-out hover:bg-hoverOrange"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
