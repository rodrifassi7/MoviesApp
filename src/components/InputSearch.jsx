export const InputSearch = () => {
  return (
    <div>
      <label className=" mb-2 text-sm font-medium text-gray-900 "></label>
      <input
        type="text"
        className=" w-36   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs  focus:border-blue-500 focus:w-52"
        placeholder="Buscar..."
      />
    </div>
  );
};
