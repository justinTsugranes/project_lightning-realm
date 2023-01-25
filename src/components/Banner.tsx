function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl drop-shadow-md">
          Total{' '}
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
            Music
          </span>{' '}
          Marketing
        </h1>
        <h2 className="mt-3 md:mt-1">
          Welcome to <span className="underline decoration-cyan-500 decoration-4">THE Source</span>{' '}
          for marketing in the Musosphere
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-gray-400 drop-shadow-md md:mt-2">
        Thrive in the New Music Business | Weekly seminars & more!
      </p>
    </div>
  )
}

export default Banner
