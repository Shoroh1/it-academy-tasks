/**
 * module Product
 */
export class Product {
    /**
     * @private
     * Пельменная в которой хранятся все ингредиенты
     * @type {[Ingredient]}
     */
    #vegetables = [];
    /**
     * @private
     * Пельменная в которой хранятся все специи
     * @type {[Props]}
     */
    #props = [];

    /**
     * Базовый конструктор, который создает объект типа продукт
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *  Получаем список всех овощей в салате
     * @returns {[Ingredient]}
     */
    getVegetables() {
        return this.#vegetables
    }

    /**
     * добавляем в салат овощ
     * @param {Ingredient} vegetable
     */
    addVegetable(vegetable) {
        this.#vegetables.push(vegetable)
    }

    /**
     * Добавляем в салат несколько ингредиентов сразу!
     * @param {[Ingredient]} vegetables
     */
    addVegetables(vegetables) {
        this.#vegetables.push(...vegetables)
    }

    /**
     * Считает сколько всего калорий в салате
     * @returns {int}
     */
    caloriesAll() {
        return this.#vegetables.reduce((a, b) => a + b.cal, 0)
    }

    /**
     * Ищем по ингредиент по названию либо по калориям
     * @param {Ingredient} vegetable
     * @returns {Ingredient|string}
     */
    searchVegetable(vegetable) {
        let result = this.#vegetables.find((x) => x.name === vegetable.name || x.cal === vegetable.cal)
        if (result !== undefined) return result
        else {
            return `404 - vegetable "${vegetable.name}" not found`
        }
    }

    /**
     * Добавляем специи в салат
     * @param {Props} flavoring
     */
    addProp(flavoring) {
        this.#props.push(flavoring)
    }

    /**
     * Получаем специи в салате
     * @returns {[Props]}
     */
    getProps() {
        return this.#props
    }

    /**
     *  Добавляем несколько специй в салат
     * @param {[Props]} flavorings
     */
    addProps(flavorings) {
        this.#props.push(...flavorings)
    }

    /**
     * Получаем состав салата
     * @returns {[...Ingredient, ...Props]}
     */
    getCompound() {
        return [...(this.#vegetables), ...(this.#props)]
    }

    sortByCal() {
      return this.#vegetables.sort((a, b) => a.cal - b.cal)
    }
}