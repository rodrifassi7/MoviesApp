export const PagButton = ({ onClick, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Agrega la prop disabled
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
