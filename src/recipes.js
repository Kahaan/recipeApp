
import React from 'react'

const Recipes = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map((el) => {
          return(
            <div className="col-md-4" key={el.title} style={{marginBottom:"2rem"}}>
              <div className="recipes__box">
                <img className="recipe__box-img" src={el.image_url} alt={el.title} />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {el.title.legth > 20 ? `${el.title}` : `${el.title.substring(0,25)}...`}
                  </h5>
                  <p className="recipes__subtitle">Publisher: <span>
                    {el.publisher}
                  </span></p>
                </div>
                <button className="recipe_buttons">View recipes</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recipes
