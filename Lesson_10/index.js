import * as veg from "./src/models/ingredientModel/ingredientModel.js";
import * as props from "./src/models/propsModel/propsModel.js";
import * as sal from "./src/models/productModel/productModel.js";

let tomato = new veg.Ingredient("tomato", 20)
let cucumber = new veg.Ingredient("cucumber", 30)
let carrot = new veg.Ingredient("carrot", 15)

let vegetablesSalad = new sal.Product("Vegetables Salad")
vegetablesSalad.addVegetables([tomato, cucumber, carrot])
vegetablesSalad.addProps([new props.Props("salt"), new props.Props("pepper")])
console.log(vegetablesSalad.sortByCal())
console.log(vegetablesSalad.getCompound())
