import Login from "./Components/Login";

function App() {
  return (
    <>
    <div className="flex-col p-8 text-center">
      <div className="flex flex-col items-center mb-11">
        <img
          src="src\assets\image (4).svg"
          alt="logo"
          width={381}
          height={79}
        />
        <div className="text-white">Tagline</div>
      </div>
      <div className="flex">
        <div className=" p-4 flex-grow"></div>
        <div
    className="inline-block h-auto w-0.5 self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>
        <div className="ml-20">
          <Login />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
