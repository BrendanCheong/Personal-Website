const FancyButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="relative block w-full m-10 text-center cursor-pointer">
        {/** <!-- background shadow --> */}
        <div className="absolute inset-x-0 border rounded-lg bg-neutral-100 border-neutral-500 bottom-1" />
        {/* <!-- text --> */}
        <div className="relative px-10 py-4 text-xl font-thin leading-none tracking-wider transition duration-200 ease-in-out transform bg-gray-100 border border-gray-500 rounded-lg bottom-1 hover:translate-y-1 active:translate-y-4">
          Click Me!
        </div>
      </button>
    </div>
  );
};

export default FancyButton;
