const getRecipe = () => {
  setTimeout(() => {
    const recipeID = [523, 883, 432, 974];
    console.log(recipeID);
    
    setTimeout((id) => {
      const recipe = {
        title: 'Fresh Tomato Pasta',
        publisher: 'Harry Manchanda',
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout((publisher) => {
        const recipe2 = {
          title: 'Italian Pizza',
          publisher: 'Harry Manchanda',
        };
        console.log(recipe);
      }, 1500, recipe.publisher);
    }, 1500, recipeID[2]);
  }, 1500);
};

getRecipe();
