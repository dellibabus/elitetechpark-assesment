import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 flex-col bg-gray-100">
      <motion.div
        className="w-16 h-16 border-4 border-green-600 border-t-primary-500 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}

      />
      <p className="text-green-700">Loading Please Wait....</p>
    </div>
  );
};

export default Loading;
