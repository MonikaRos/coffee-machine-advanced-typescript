import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
import * as notification from "../src/utils/notifications";
 
describe('CoffeeMachine notifications (mocks)', () => {
        const notify_spy = jest.spyOn(notification, "notifyUser").mockImplementation(jest.fn());
 
        beforeEach(() => {
            notify_spy.mockClear();
        })
        beforeEach(()=> {
            jest.resetAllMocks
        })
 
    it("notifies user about serving drinks", async () => {
        const coffee_machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 2, "small");
 
        const notify_spy = jest.spyOn(notification, "notifyUser").mockImplementation(jest.fn());
 
        let result = coffee_machine.serve(drink, 2, false, 12);
 
        expect(notify_spy).toHaveBeenCalledWith("Serving Coffee (small)");
    });
 
    it("notifies user about serving drinks", async () => {
        const coffee_machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 2, "small");
 

        let result = coffee_machine.serve(drink, 2, false, 12);
 
        expect(notify_spy).toHaveBeenCalledWith("Serving Coffee (small)");
    
    });
});
 