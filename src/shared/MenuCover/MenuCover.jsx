const MenuCover = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-7xl w-[700px] bg-black/40 pt-20 pb-10 px-16 rounded uppercase">
          <h1 className="mb-5 text-7xl font-bold tracking-wide">{title}</h1>
          <p className="mb-5 text-xe">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCover;
