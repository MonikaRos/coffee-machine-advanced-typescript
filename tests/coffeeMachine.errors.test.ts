import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
 
describe('CoffeeMachine errors', () => {
    it("drink has invalid price (less than 0)", () => {
        const coffee_machine = new CoffeeMachine();
        const drink = new Drink("Coffee", -1, false, 2, "small");
 
        let wrapper = () => coffee_machine.serve(drink, 2, false, 12);
 
        expect(wrapper).toThrow(new Error("Invalid price"));
    });
 
    it("not enough money to pay", () => {
        const coffee_machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 2, "small");
 
        let wrapper = () =>  coffee_machine.serve(drink, 0, false, 12);
 
        expect(wrapper).toThrow(new Error("Not enough money"));
    });
 
    it("too much sugar you added", () => {
        const coffee_machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 6, "small");
 
        try {
            coffee_machine.serve(drink, 2, false, 12);
        }
        catch (error) {
            expect(error).toEqual(new Error("Too much sugar"))
        }
    });
});
 
 