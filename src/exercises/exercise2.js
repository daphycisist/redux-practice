const recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };

const newObj = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"],
};

newObj.ingredients.replace(/egg/g, "egg white")

const filtered = newObj.ingredients.filter((ingredient) => ingredient != "egg");
