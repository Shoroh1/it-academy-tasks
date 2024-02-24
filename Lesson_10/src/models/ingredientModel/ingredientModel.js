/**
 * module Ingredient
 */
export class Ingredient {
    /**
     * Базовый конструктор - ингредиенты
     * @param {string} name
     * @param {int} cal
     */
    constructor(name, cal) {
        this.name = name;
        this.cal = cal;
    }

    /**
     * Печатаем ингредиент
     */
    info() {
        console.log(`Name vegetable: ${this.name}. This cal: ${this.cal}`)

    }
}