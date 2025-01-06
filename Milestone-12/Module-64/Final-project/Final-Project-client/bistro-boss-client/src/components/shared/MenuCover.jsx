import { Parallax } from "react-parallax";

const MenuCover = ({ coverImage, title, subTitle }) => {
  return (
    <div className="">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImage}
        bgImageAlt="the Menu"
        strength={-200}
      >
        <div
          className="hero h-[500px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MenuCover;
