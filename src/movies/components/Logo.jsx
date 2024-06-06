export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a onClick={scrollToTop} className="cursor-pointer">
        <div className=" relative hover:scale-125 transition-all inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:text-velde">
          RF
        </div>
      </a>
    </>
  );
};
