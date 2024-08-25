import React from 'react'

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
    <option value="all">All Categories</option>
    <option value="nutrient-boosters">Nutrient Boosters</option>
    <option value="sprouted-flour">Sprouted Flour</option>
    <option value="meal-moments">Meal Moments</option>
    <option value="healthy-bites">Healthy Bites</option>
    <option value="pure-extracts">Pure Extracts</option>
    <option value="activated-millet-flour">Activated Millet/Flour</option>
                            
</select>
  )
}

export default SelectCategory