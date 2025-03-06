import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useUserAxios from "../../../../hooks/useUserAxios";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import toast from "react-hot-toast";

const imgBB_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const imagBB_hoisting_url = `https://api.imgbb.com/1/upload?key=${imgBB_api_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useUserAxios();
  const axiosSecure = useSecureAxios();

  const onSubmit = async (data) => {
    console.log(data);
    // upload img to imgBB then get image url from imgBB
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imagBB_hoisting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with imageurl
      const menuItem = {
        name: data.name,
        image: res.data.data.display_url,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
      };
      const { data: menuRes } = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes);
      if (menuRes.insertedId) {
        reset();
        //show success alert
        toast.success(`Your ${menuRes.name} item add to database.`);
      }
    }
    console.log(res.data.data);
  };
  return (
    <div>
      <SectionTitle subheading="What's new?" heading="add an item" />
      <div className="bg-white px-20 py-8 w-[850px] mx-auto rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* recipe name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name*</legend>
            <input
              {...register("name")}
              type="text"
              className="input w-full"
              placeholder="Recipe Name"
              required
            />
          </fieldset>

          <div className="flex gap-6 my-5">
            {/* category */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category")}
                defaultValue="Select Category"
                className="select"
                required
              >
                <option disabled={true}>Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </fieldset>
            {/* price */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Price*</legend>
              <input
                {...register("price")}
                type="number"
                className="input w-full"
                placeholder="Price"
                required
              />
            </fieldset>
          </div>
          {/* recipe details */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Recipe Details*</legend>
              <textarea
                {...register("recipe")}
                className="textarea h-28 w-full"
                placeholder="Recipe Details"
                required
              ></textarea>
            </fieldset>
          </div>
          {/* choose file */}
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost mt-4"
              required
            />
          </div>
          <button className="btn bg-orange-300 text-white mt-4">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
