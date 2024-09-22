const Home = () => {
  return (
    <div>
      <header
        className="h-screen text-white flex items-center justify-center"
        style={{
          background:'linear-gradient(to bottom, #9933ff 0%, #33ccff 100%)'
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            INSPIRATION THROUGH INNOVATION
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mb-10">
            Empowering Growth, Inspiring Success: Your Partner in Progress.
          </p>
          <button className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-3 px-8 text-lg rounded-lg">
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
