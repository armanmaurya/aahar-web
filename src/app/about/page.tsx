import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 space-y-16">
        
        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-800">About Aahar</h2>
          <p className="mt-4 text-gray-700">
            Aahar bridges homemakers with people seeking nutritious homemade
            meals, fostering a community-driven approach to healthy eating.
          </p>
        </section>
        {/* Section 1: Image and Basic Intro */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full">
            <div className="container mx-auto px-5 py-2">
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/maa-ka-khana1.jpg"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/maa-ka-khana2.jpg"
                        height={200}
                        width={200}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-800">Our Services</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Reliable Delivery",
              "Healthy Home-Cooked Meals",
              "Hassle-Free Process",
              "Empowering Homemakers",
              "Customization Options",
            ].map((service, index) => (
              <div key={index} className="p-6 bg-yellow-100 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-yellow-700">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Uniqueness */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-800">
            What Makes Us Unique?
          </h2>
          <p className="mt-4 text-gray-700">
            We bring warmth and care to food delivery, ensuring every meal feels
            like home.
          </p>
        </section>

        {/* Section 4: Advantages */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-800">
            Advantages of Choosing Aahar
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Emotional Connect",
              "Cost-Effective Meals",
              "Healthy & Hygienic Food",
              "Employment for Delivery Partners",
              "Fast & Reliable Delivery",
            ].map((advantage, index) => (
              <div key={index} className="p-6 bg-yellow-100 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-yellow-700">
                  {advantage}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Aaharpreneur with Us */}
        <section className="text-center bg-yellow-200 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-yellow-800">
            Become an Aaharpreneur
          </h2>
          <p className="mt-4 text-gray-700">
            Join us in empowering homemakers and making healthy food accessible
            to all.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
