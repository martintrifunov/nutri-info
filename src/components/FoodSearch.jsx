import { useState, React } from "react";
import { FaSearch } from "react-icons/fa";

//styles
import "../styles/FoodSearch.css";

//components
import NutritionBox from "./NutritionBox.jsx";

const FoodSearch = () => {
  const [input, setInput] = useState("");
  const [isVisible, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [saturatedFat, setSaturatedFat] = useState(0);
  const [transFat, setTransFat] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(0);
  const [dietaryFiber, setDietaryFiber] = useState(0);
  const [totalSugars, setTotalSugars] = useState(0);
  const [protein, setTotalProtein] = useState(0);
  const [vitaminD, setVitaminD] = useState(0);
  const [calcium, setCalcium] = useState(0);
  const [iron, setIron] = useState(0);
  const [potassium, setPotassium] = useState(0);

  const fetchFacts = (value) => {
    const options = {
      method: "GET",
      headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
        "APP-ID": process.env.REACT_APP_ID,
      },
    };

    fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&nutrition-type=logging&ingr=${value}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setName(data.ingredients[0].text);
        setCalories(Math.floor(data.calories));
        setTotalFat(parseFloat(data.totalNutrients.FAT.quantity).toFixed(2));
        setSaturatedFat(
          parseFloat(data.totalNutrients.FASAT.quantity).toFixed(2)
        );
        setTransFat(
          parseFloat(
            data.totalNutrients.FAMS.quantity +
              data.totalNutrients.FAPU.quantity
          ).toFixed(2)
        );
        setCholesterol(
          parseFloat(data.totalNutrients.CHOLE.quantity).toFixed(2)
        );
        setSodium(parseFloat(data.totalNutrients.NA.quantity).toFixed(2));
        setTotalCarbohydrate(
          parseFloat(data.totalNutrients["CHOCDF.net"].quantity).toFixed(2)
        );
        setDietaryFiber(
          parseFloat(data.totalNutrients.FIBTG.quantity).toFixed(2)
        );
        setTotalSugars(
          parseFloat(data.totalNutrients.SUGAR.quantity).toFixed(2)
        );
        setTotalProtein(
          parseFloat(data.totalNutrients.PROCNT.quantity).toFixed(2)
        );
        setVitaminD(parseFloat(data.totalNutrients.VITD.quantity).toFixed(2));
        setCalcium(parseFloat(data.totalNutrients.CA.quantity).toFixed(2));
        setIron(parseFloat(data.totalNutrients.FE.quantity).toFixed(2));
        setPotassium(parseFloat(data.totalNutrients.K.quantity).toFixed(2));

        setVisibility(true);
      })
      .catch((err) => console.error(err));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") fetchFacts(input);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <div className="search-button" onClick={() => fetchFacts(input)}>
          <FaSearch id="search-icon" />
        </div>
      </div>

      {isVisible && (
        <NutritionBox
          name={name}
          calories={calories}
          totalFat={totalFat}
          saturatedFat={saturatedFat}
          transFat={transFat === null ? 0 : transFat}
          cholesterol={cholesterol}
          sodium={sodium}
          totalCarbohydrate={totalCarbohydrate}
          dietaryFiber={dietaryFiber}
          totalSugars={totalSugars}
          protein={protein}
          vitaminD={vitaminD}
          calcium={calcium}
          iron={iron}
          potassium={potassium}
        />
      )}
    </div>
  );
};

export default FoodSearch;
