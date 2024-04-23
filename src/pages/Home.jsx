import React, { useState } from "react";
import heroImg from "../assets/hero_img.jpg";
import sprite from "../assets/sprite.svg";

const Home = () => {
  const [loginModal, setLoginModal] = useState(true);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <section className="pt-[78px] pb-[100px]">
      <div className="flex gap-[125px]">
        <div>
          <h1 className="font-semibold text-8xl tracking-tight leading-none text-mainBlack w-[602px] mb-5">
            The road to the <span className="text-mainOrange">depths</span> of
            the human soul
          </h1>
          <p className="w-[510px] mb-10 font-medium text-lg leading-6 tracking-tight">
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <button
            type="button"
            className="flex justify-center align-middle gap-[18px] font-medium text-xl leading-4 tracking-tight text-mainWhite bg-mainOrange py-[18px] px-[50px] rounded-full transition-all duration-100 ease-in-out hover:bg-hoverOrange"
          >
            Get started
            <svg width={15} height={17}>
              <use xlinkHref={`${sprite}#icon-arrow`}></use>
            </svg>
          </button>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="woman"
            width="464"
            height="526"
            className="max-w-full max-h-full rounded-xl"
          />
          <div className="flex justify-center items-center size-[40px] bg-yellow-300 rounded-xl absolute top-[38px] right-[-35px] rotate-[15deg]">
            <svg width={20} height={20} className="rotate-[-15deg]">
              <use xlinkHref={`${sprite}#icon-users`}></use>
            </svg>
          </div>
          <div className="flex justify-center items-center size-[40px] bg-green-500 rounded-xl absolute top-[185px] left-[-35px] rotate-[-15deg]">
            <svg width={15} height={17} className="rotate-[15deg]">
              <use xlinkHref={`${sprite}#icon-vector`}></use>
            </svg>
          </div>
          <div className="absolute bottom-[75px] left-[-101px] flex gap-4 bg-mainOrange p-8 w-[318px] rounded-[20px]">
            <div className="flex justify-center items-center size-[54px] rounded-[13px] bg-mainWhite ">
              <svg width={30} height={30}>
                <use xlinkHref={`${sprite}#icon-check`}></use>
              </svg>
            </div>
            <div>
              <p className="font-normal text-sm text-white mb-2">
                Experienced psychologists
              </p>
              <p className="font-bold text-2xl text-mainWhite">15,000</p>
            </div>
          </div>
        </div>
      </div>
      {loginModal && (
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
              Welcome back! Please enter your credentials to access your account
              and continue your search for a psychologist.
            </p>
            <form>
              <input
                type="email"
                className="w-full mb-[18px] p-4 rounded-2xl border border-borderColor text-mainBlack focus:outline-none"
              />
              <input
                type="password"
                className="w-full mb-10 p-4 rounded-2xl border border-borderColor text-mainBlack focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-mainOrange py-4 rounded-3xl text-mainWhite font-medium text-base leading-[125%] tracking-tighter transition-all duration-100 ease-in-out hover:bg-hoverOrange"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
