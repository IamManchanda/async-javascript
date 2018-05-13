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

getIds()
  .then((ids) => {
    console.log(ids);
    return getRecipe(ids[2]);
  })
  .then(({ recipeDetails, recipeId, recipePublisher }) => {
    console.log(recipeDetails);
    return getRelated(recipeId, recipePublisher);
  })
  .then((relatedRecipeDetails) => {
    console.log(relatedRecipeDetails);
  })
  .catch((error) => {
    console.error(error);
  });
