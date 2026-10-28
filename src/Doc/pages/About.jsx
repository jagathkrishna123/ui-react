function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-4">
          Welcome to MyWebsite! We are passionate about learning,
          building, and creating amazing web experiences using React.
        </p>

        <p className="text-gray-600 leading-7">
          Our goal is to make web development simple and help
          beginners develop their skills through practical projects.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;