// Normally comes from API
const timer = 1500;
const getIds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([523, 883, 432, 974]);
    }, timer);
  });
};
const getRecipe = (getRecipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout((setRecipeId) => {
      const recipe = {
        title: 'Fresh Tomato Pasta',
        publisher: 'Harry Manchanda',
      };
      resolve({
        recipeDetails: `${setRecipeId}: ${recipe.title} by ${recipe.publisher}`, 
        recipeId: setRecipeId,
        recipePublisher: recipe.publisher,
      });
    }, timer, getRecipeId);
  });
};
const getRelated = (getId, getPublisher) => {
  return new Promise((resolve, reject) => {
    setTimeout((setId, setPublisher) => {
      const recipeTitle = 'Italian Pizza';
      resolve(`${setId}: ${recipeTitle} by ${setPublisher}`);
    }, timer, getId, getPublisher);
  });
};

// Async Await for the consumption
(async () => {
  const ids = await getIds();
  console.log(ids); 
  // (After 1500 seconds) => (4) [523, 883, 432, 974]
  
  const { recipeDetails, recipeId, recipePublisher } = await getRecipe(ids[2]);
  console.log(recipeDetails); 
  // (After 3000 seconds) => 432: Fresh Tomato Pasta by Harry Manchanda

  const relatedRecipeDetails = await getRelated(recipeId, recipePublisher);
  console.log(relatedRecipeDetails); 
  // (After 4500 seconds) => 432: Italian Pizza by Harry Manchanda

  return recipeDetails;
})()
  .then((bestRecipeDetails) => {
    console.log(`${bestRecipeDetails} is the best!`);
    // (After Async Await get consumed) => 432: Fresh Tomato Pasta by Harry Manchanda is the best!
  });
