import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <>
      <div className="featured-bg md:pb-24 md:pt-12 my-18 text-white">
        <div className="z-40 bg-transparent backdrop-opacity-0">
          <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"} />
        </div>
        <div className="md:flex justify-center items-center gap-10 px-36 bg-transparent backdrop-opacity-0">
          <div>
            <img
              className="bg-white/30 backdrop-invert backdrop-opacity-10"
              src={featured}
              alt="Featured Food"
            />
          </div>
          <div className="space-y-2">
            <h6 className="text-2xl">March 20, 2023</h6>
            <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
