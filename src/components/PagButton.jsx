export const PagButton = ({ onClick, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} 
      className={`inline-flex border items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg hover:bg-velde hover:text-black hover:border-black ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
