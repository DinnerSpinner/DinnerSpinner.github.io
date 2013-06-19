function Recipe(title,prep,cook,total,ingredients,instructions, image) {
    this.title = title;
    this.prep = prep;
    this.cook = cook;
    this.total = total;
    this.ingredients = ingredients;
    this.instructions = instructions;
}

var recipeHolder = new Array();
	recipeHolder[0] = new Recipe("Ginger Chicken",10,15,25,"blah","yada", "");
    recipeHolder[1] = new Recipe("Southwest Turkey Sliders over Spicy Avacado Slaw",10,15,25,"blah","yada", "southwest-turkey-sliders.jpg");
    recipeHolder[2] = new Recipe("Jambalaya",10,15,25,"blah","yada", "");
    recipeHolder[3] = new Recipe("Barbacoa",10,15,25,"blah","yada", "");
    recipeHolder[4] = new Recipe("Balsamic Winter Throw Together Bake",10,15,25,"blah","yada", "");
    recipeHolder[5] = new Recipe("Stuffed Chicken w/ Roasted Broccoli and Potatoes",10,15,25,"blah","yada", "");
    recipeHolder[6] = new Recipe("Trout w/ Wild Rice, Radicchio, and Oranges",10,15,25,"blah","yada", "");
    recipeHolder[7] = new Recipe("Skrirt Steak w/ Shallots and Sauteed Watercress",10,15,25,"blah","yada", "");
    recipeHolder[8] = new Recipe("Barley and Lentil Salad w/ Goat Cheese",10,15,25,"blah","yada", "");
    recipeHolder[9] = new Recipe("Risotto w/ Shrimp and Watercress",10,15,25,"blah","yada", "");
    recipeHolder[10] = new Recipe("Cottage Pie",10,15,25,"blah","yada", "");
    recipeHolder[11] = new Recipe("Eggplant Parmesan Rollatini",10,15,25,"blah","yada", "");
    recipeHolder[12] = new Recipe("Sausage, Cauliflower, and Kale Pot Pie",10,15,25,"blah","yada", "");
    
var blahHolder = ['ok'];
    
var ingredientHolder = [];
	ingredientHolder[0] = "";
	ingredientHolder[1] = ["For the burgers<br>", "1 lb ground turkey<br>", "1/4 red onion, minced<br>", "1/4 red onion, thinly sliced<br>", "1/2 pablano pepper, diced<br>", "1/2 red bell pepper, diced<br>", "1 teaspoon ground cumin<br>", "1/2 teaspoon ground red pepper<br>", "salt and pepper, to taste<br>", "1 tablespoon oil<br>", "For the slaw", "1 small head of cabbage<br>", "2 avacados<br>", "1 tablespoon olive oil<br>", "1 teaspoon lime juice<br>", "1/2 teaspoon crushed red pepper<br>", "salt and pepper, to taste"];
	ingredientHolder[2] = ["2 andoullie sausage, sliced<br>", "2 chicken breasts, cubed<br>", "2 garlic cloves, minced<br>", "1 yeallow onion, diced<br>", "1 green bell pepper, diced<br>", "1 head cauliflower, riced<br>", "1 (6oz) can tomatoe paste<br>", "1 (14oz) can diced tomatoes, undrained<br>", "1 cup chicken broth<br>", "2 tablespoons olive oil<br>", "1 teaspoon dried oregano<br>", "1/2 teaspoon dried thyme<br>", "1/2 teaspoon dried parsley<br>", "1/2 teaspoon cayenne pepper<br>", "salt and pepper, to taste"];
	ingredientHolder[3] = "";
	ingredientHolder[4] = "";
	ingredientHolder[5] = "";
	ingredientHolder[6] = "";
	ingredientHolder[7] = "";
	ingredientHolder[8] = "";
	ingredientHolder[9] = ["1 chopped onion<br>","1/2 cup dry white wine<br>","3 cups chicken broth<br>","1 cup arborio rice<br>", "1 lb chopped<br>", "peeled, deveined medium shrimp<br>", "1 bunch torn watercress<br>", "salt<br>", "pepper<br>", "unsalted butter"];
	ingredientHolder[10] = "";
	ingredientHolder[11] = "";
	ingredientHolder[12] = "";
	
var instructionHolder = [];
	instructionHolder[0] = "";
	instructionHolder[1] = "Add all ingredients for the burgers to one large bowl.  Shape small burger patties.  Heat up a large skillet under medium heat.  Add 1 teaspoon oil.  Add burger and flip after 3-5 minutes or until cooked through.  Add all slaw ingredients (less cabbage) to a processor and pulse until smooth.  Pour the mixture over the cabbage and toss.  Serve and top with turkey sliders.";
	instructionHolder[2] = "Dice all veggies. Rice the cauliflower in a food processor.  Heat a large pot over medium-high heat.  Add olive oil. Add garlic and saute until fragrant.  Add onion and green bell pepper.  Once the onion is translucent, add cauliflower, broth, chicken, and sausage.  Mix together.  Cover and let cook for about 5 minutes.  Add tomatoes, tomato paste, and spices.  Stir.  Cover and let cook for 5-8 minutes or until cauliflower is tender and meat is cooked through.  Let sit for about 5 minutes to cool.";
	instructionHolder[3] = "";
	instructionHolder[4] = "";
	instructionHolder[5] = "";
	instructionHolder[6] = "";
	instructionHolder[7] = "";
	instructionHolder[8] = "";
	instructionHolder[9] = "Cook 1 chopped onion, salt, add pepper and unsalted butter in a Dutch oven until tender. Add 1/2 cup dry white wine; cook until syrupy. Add 3 cups chicken broth and 1 cup Arborio rice. Bake, covered, in a 425 degree F oven until the rice is almost tender, 15 to 20 minutes. Add 1 pound chopped, peeled, and deveined medium shrimp and cook until opaque.  Fold in 1 bunch torn watercress.";
	instructionHolder[10] = "";
	instructionHolder[11] = "";
	instructionHolder[12] = "";
	
	
var spin = function () {
	var monday = Math.floor(Math.random()*11+1);
	var tuesday = Math.floor(Math.random()*11+1);
	var wednesday = Math.floor(Math.random()*11+1);
	var thursday = Math.floor(Math.random()*11+1);
	var friday = Math.floor(Math.random()*11+1);

	document.getElementById('monday').innerHTML = recipeHolder[monday].title;
   	document.getElementById('tuesday').innerHTML = recipeHolder[tuesday].title;
	document.getElementById('wednesday').innerHTML = recipeHolder[wednesday].title;
	document.getElementById('thursday').innerHTML = recipeHolder[thursday].title;
	document.getElementById('friday').innerHTML = recipeHolder[friday].title;
	document.getElementById('pics').innerHTML = recipeHolder[monday].image;

	document.getElementById('bottomMonday').innerHTML = 'Monday';
   	document.getElementById('bottomTuesday').innerHTML = 'Tuesday';
	document.getElementById('bottomWednesday').innerHTML = 'Wednesday';
	document.getElementById('bottomThursday').innerHTML = 'Thursday';
	document.getElementById('bottomFriday').innerHTML = 'Friday';
	
	document.getElementById('ingredientsMonday').innerHTML = ingredientHolder[monday];
   	document.getElementById('ingredientsTuesday').innerHTML = ingredientHolder[tuesday];
	document.getElementById('ingredientsWednesday').innerHTML = ingredientHolder[wednesday];
	document.getElementById('ingredientsThursday').innerHTML = ingredientHolder[thursday];
	document.getElementById('ingredientsFriday').innerHTML = ingredientHolder[friday];
	
	document.getElementById('instructionsMonday').innerHTML = instructionHolder[monday];
   	document.getElementById('instructionsTuesday').innerHTML = instructionHolder[tuesday];
	document.getElementById('instructionsWednesday').innerHTML = instructionHolder[wednesday];
	document.getElementById('instructionsThursday').innerHTML = instructionHolder[thursday];
	document.getElementById('instructionsFriday').innerHTML = instructionHolder[friday];
};

var add = function (title,prep,cook,total,ingredients,instructions) {
    var newRecipe = {
        title: title,
        prep: prep,
        cook: cook,
        total: total,
        ingredients: ingredients,
        instructions: instructions
    };
    recipeHolder[recipeHolder.length-1] = newRecipe;
};