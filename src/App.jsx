import Login from "./Components/Login";

function App() {
  return (
    <>
    <div className="flex-col p-8 text-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src="src\assets\image (4).svg"
          alt="logo"
          width={381}
          height={79}
        />
        <div className="text-white">Tagline</div>
      </div>
      <div className="flex">
        <div className="border-2 rounded-xl p-4 flex-grow mr-5">hello</div>
        <div>
          <Login />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
