const DonateGallery: React.FC = () => {
  const images = [
    { src: "/images/program1.jpg", title: "Youth Workshop", desc: "Support our monthly workshops." },
    { src: "/images/program2.jpg", title: "Community Service", desc: "Help fund local community initiatives." },
    { src: "/images/program3.jpg", title: "Educational Program", desc: "Support learning programs for youth." },
    { src: "/images/program4.jpg", title: "Fundraising Event", desc: "Be part of our annual fundraising." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#6A0DAD] mb-10">
        Donate & Support TYM Programs
      </h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
        {images.map((img) => (
          <div key={img.title} className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
              <h3 className="text-xl font-bold mb-2">{img.title}</h3>
              <p className="text-sm mb-4">{img.desc}</p>
              <button className="bg-[#6A0DAD] hover:bg-[#5b0797] px-4 py-2 rounded-full font-semibold transition-all duration-300">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonateGallery;
