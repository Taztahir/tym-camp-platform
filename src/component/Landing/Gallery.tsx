import { motion } from "framer-motion";
import Image1 from "../../assets/Image-1.jpg";
import Image2 from "../../assets/Image-2.jpg";
import Image3 from "../../assets/Image-3.jpg";
import Image4 from "../../assets/Image-4.jpg";
import Image5 from "../../assets/Image-5.jpg";

interface ImageItem {
  id: number;
  src: string;
  title: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    src: Image1,
    title: "",
  },
  {
    id: 2,
    src: Image2,
    title: "",
  },
  {
    id: 3,
    src: Image3,
    title: "",
  },
  {
    id: 4,
    src: Image4,
    title: "",
  },
  {
    id: 5,
    src: Image5,
    title: "",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg- text-white flex flex-col items-center justify-center px-6 py-12">

      <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <p className="font-semibold text-lg tracking-wider uppercase">
                {img.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
