import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top essential Trends in 2021",
      author: "SaberAli",
      date: "21 August, 2021",
      description:
        "Innovative Designs for Today's World",
      image: "/blog3.png",
    },
    {
      id: 2,
      title: "Top essential Trends in 2022",
      author: "Surfauxion",
      date: "21 August, 2021",
      description:
        "Innovative Designs for Today's World",
      image: "/blog2.png",
    },
    {
      id: 3,
      title: "Top essential Trends in 2023",
      author: "SaberAli",
      date: "21 August, 2021",
      description:
        "Innovative Designs for Today's World",
      image: "/blog1.png",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-dark-blue mb-8 hover:text-pink-500">
          Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              {/* Blog Content */}
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 hover:text-pink-500 mb-2">
                  <span className="mr-4">
                    <i className="fas fa-user text-pink-500 mr-1"></i>
                    {blog.author}
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-yellow-500 mr-1"></i>
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-dark-blue mb-2 hover:text-pink-500">
                  {blog.title}
                </h3>
                <p className="text-gray-600 hover:text-pink-500 mb-4">{blog.description}</p>
                <a
                  href="#"
                  className="text-pink-500 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
