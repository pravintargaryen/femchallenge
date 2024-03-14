import omlette from "./assets/image-omelette.jpeg";

export default function App() {
  return (
    <div className="bg-white rounded-md p-[22px] w-[50%] text-[#6a6663] mx-auto my-[200px]">
      <img src={omlette} alt="omlette" height={200} className="rounded-md" />
      <h1 className="font-custom text-[40px] text-black">
        Simple Omlette Recipe
      </h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="bg-[#fff7f7] rounded-md my-[20px] p-[20px]">
        <h2 className="text-[#985f77] font-bold ">Preparation time</h2>
        <ul className="list-disc px-[20px]">
          <li>
            <span className="font-bold">Total:</span> Approximately 10 minutes
          </li>
          <li>
            <span className="font-bold">Preparation:</span> 5 minutes{" "}
          </li>
          <li>
            <span className="font-bold">Cooking:</span> 5 minutes{" "}
          </li>
        </ul>
      </div>
      <h2 className="text-[24px] text-[#794b3f] font-bold">Ingredients</h2>
      <ul className="list-disc mb-[20px] px-[20px]">
        <li>2-3 large eggs</li>
        <li> Salt, to taste</li>
        <li>Pepper, to taste </li>
        <li>1 tablespoon of butter or oil Optional</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
      <hr />
      <h2 className="text-[24px] mt-[20px] text-[#794b3f] font-bold">
        Instructions
      </h2>
      <ol className="list-decimal mb-[20px] px-[20px] ">
        <li>
          <span className="font-bold">Beat the eggs:</span> In a bowl, beat the
          eggs with a pinch of salt and pepper until they are well mixed. You
          can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li>
          <span className="font-bold">Heat the pan: </span> Place a non-stick
          frying pan over medium heat and add butter or oil.
        </li>
        <li>
          <span className="font-bold">Cook the omelette:</span> Once the butter
          is melted and bubbling, pour in the eggs. Tilt the pan to ensure the
          eggs evenly coat the surface.
        </li>
        <li>
          <span className="font-bold">Add fillings (optional):</span> When the
          eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li>
          <span className="font-bold">Fold and serve:</span> As the omelette
          continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>
        <li>
          <span className="font-bold">Enjoy:</span> Serve hot, with additional
          salt and pepper if needed.
        </li>
      </ol>
      <hr />
      <h2 className="text-[24px] mt-[20px] text-[#794b3f] font-bold">
        Nutrition
      </h2>
      <p>
        The table below shows nutritional value per serving without the
        additional fillings.
      </p>
      <table className="w-full">
        <tr className=" border-b-2 ">
          <td>Calories</td>
          <td className="text-[#794b3f] font-bold"> 277kcal</td>
        </tr>

        <tr className=" border-b-2 ">
          <td>Carbs</td>
          <td className="text-[#794b3f] font-bold">0g</td>
        </tr>
        <tr className=" border-b-2 ">
          <td>Protein</td>
          <td className="text-[#794b3f] font-bold">20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td className="text-[#794b3f] font-bold">22g</td>
        </tr>
      </table>
    </div>
  );
}
