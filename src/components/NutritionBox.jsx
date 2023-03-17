import React from "react";

//styles
import "../styles/NutritionBox.css";

const NutritionBox = (props) => {
  return (
    <div className="label">
      <header>
        <h1 className="bold">Nutrition Facts</h1>
        <div className="divider"></div>
        <p className="bold">
          Serving size <span>1 serving</span>
        </p>
      </header>
      <div className="divider large"></div>
      <div className="calories-info">
        <div className="left-container">
          <h2 className="bold small-text">Amount per serving</h2>
          <p>Calories</p>
        </div>
        <span>{props.calories}</span>
      </div>
      <div className="divider medium"></div>
      <div className="daily-value small-text">
        <p className="bold right no-divider">% Daily Value *</p>
        <div className="divider"></div>
        <p>
          <span>
            <span className="bold">Total Fat</span> {props.totalFat}g
          </span>{" "}
          <span className="bold">
            {Math.ceil((props.totalFat / 65) * 100)}%
          </span>
        </p>
        <p className="indent no-divider">
          Saturated Fat {props.saturatedFat}g{" "}
          <span className="bold">
            {Math.ceil((props.saturatedFat / 20) * 100)}%
          </span>
        </p>
        <div className="divider"></div>
        <p className="indent no-divider">
          <span>
            <i>Trans</i> Fat {props.transFat}g
          </span>
        </p>
        <div className="divider"></div>
        <p>
          <span>
            <span className="bold">Cholesterol</span> {props.cholesterol}mg
          </span>{" "}
          <span className="bold">
            {Math.ceil((props.cholesterol / 300) * 100)}%
          </span>
        </p>
        <p>
          <span>
            <span className="bold">Sodium</span> {props.sodium}mg
          </span>{" "}
          <span className="bold">
            {Math.ceil((props.sodium / 2400) * 100)}%
          </span>
        </p>
        <p>
          <span>
            <span className="bold">Total Carbohydrate</span>{" "}
            {props.totalCarbohydrate}g
          </span>{" "}
          <span className="bold">
            {Math.ceil((props.totalCarbohydrate / 300) * 100)}%
          </span>
        </p>
        <p className="indent no-divider">Dietary Fiber {props.dietaryFiber}g</p>
        <div className="divider"></div>
        <p className="indent no-divider">Total Sugars {props.totalSugars}g</p>
        <div className="divider double-indent"></div>
        <p className="double-indent no-divider">
          Includes 0g Added Sugars <span className="bold">0%</span>
        </p>
        <div className="divider"></div>
        <p className="no-divider">
          <span className="bold">Protein</span> {props.protein}g
        </p>
        <div className="divider large"></div>
        <p>
          Vitamin D {props.vitaminD}mcg{" "}
          <span>{Math.ceil((props.vitaminD / 15) * 100)}%</span>
        </p>
        <p>
          Calcium {props.calcium}mg{" "}
          <span>{Math.ceil((props.calcium / 1100) * 100)}%</span>
        </p>
        <p>
          Iron {props.iron}mg <span>{Math.ceil((props.iron / 14) * 100)}%</span>
        </p>
        <p className="no-divider">
          Potassium {props.potassium}mg{" "}
          <span>{Math.ceil((props.potassium / 4700) * 100)}%</span>
        </p>
      </div>
      <div className="divider medium"></div>
      <p className="note">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of
        food contributes to a daily diet. 2,000 calories a day is used for
        general nutrition advice.
      </p>
    </div>
  );
};

export default NutritionBox;
