const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="mx-auto w-5/12 text-center my-8">
      <p className="text-yellow-600 italic text-xl mb-2">--- {subheading} ---</p>
      <h2 className="text-[40px] border-y-3 border-gray-300 py-2">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
