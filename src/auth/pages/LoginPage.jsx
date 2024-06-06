import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogIn = () => {
    navigate("/movies");
  };

  return (
    <div className="bg-gray-50 font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
          <h2 className="text-center text-3xl font-extrabold">
            Inicia sesion en tu cuenta
          </h2>
          <form className="mt-10 space-y-4">
            <div>
              <input
                name="email"
                type="email"
                required
                className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-3 block text-sm">Recordarme</label>
              </div>
              <div>
                <a
                  href="jajvascript:void(0);"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button
                type="button"
                className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onClick={onLogIn}
              >
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
