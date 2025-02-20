import ChefRecommendsCard from "../../../components/ChefRecommendsCard/ChefRecommendsCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <section className="mb-10">
      <SectionTitle subheading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChefRecommendsCard />
        <ChefRecommendsCard />
        <ChefRecommendsCard />
      </div>
    </section>
  );
};

export default ChefRecommends;
