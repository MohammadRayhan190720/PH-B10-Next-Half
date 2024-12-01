const Banner = () => {
  return (
    <div className="bg-banner min-h-screen  bg-center font-fontRailway">
      <div className="flex justify-center  flex-col min-h-screen text-white px-10 lg:px-16 space-y-3">
        <h3 className="text-4xl lg:text-5xl font-bold w-1/2">Would you like a Cup of Delicious Coffee?</h3>
        <p className="text-xl font-semibold w-1/2">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
       <button className="px-5 py-3 bg-red-300 w-fit">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;