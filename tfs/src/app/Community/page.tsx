import AnimatedText from "@/components/Animation";

const Community: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-red-900 py-12 text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          <AnimatedText text="OUR COMMUNITY" />
        </h1>
      </div>

      {/* Responsive Video Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <video
          controls
          className="w-full h-auto max-h-[500px] rounded-lg shadow-lg"
        >
          <source src="/videos/vid.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Community;
