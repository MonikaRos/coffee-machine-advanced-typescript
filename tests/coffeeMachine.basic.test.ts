import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {
    const drink: Drink = { name: 'Coffee', size: 'small', basePrice: 2.0, milk: false, sugar: 1 };
    const coffeeMachine = new CoffeeMachine();
    const result = coffeeMachine.serve(drink, 2.0, false, 10);
    expect(result).toBe('Serving Coffee (small)');
  });

  it('serves tea and returns change', () => {
    const drink: Drink = { name: 'Tea', size: 'small', basePrice: 1.5, milk: false, sugar: 0 };
    const coffeeMachine = new CoffeeMachine();
    const result = coffeeMachine.serve(drink, 2.0, false, 10);
    expect(result).toBe('Serving Tea (small) with change 0.50');
  });

  it('applies milk surcharge', () => {
    const drink: Drink = { name: 'Coffee', size: 'small', basePrice: 2.0, milk: true, sugar: 1 };
    const coffeeMachine = new CoffeeMachine();
    const result = coffeeMachine.serve(drink, 2.5, false, 10);
    expect(result).toBe('Serving Coffee (small) with change 0.30');
  });

  it('applies sugar surcharge above 2 cubes', () => {
    const drink: Drink = { name: 'Tea', size: 'small', basePrice: 1.5, milk: false, sugar: 4 };
    const coffeeMachine = new CoffeeMachine();
    const result = coffeeMachine.serve(drink, 2.0, false, 10);
    expect(result).toBe('Serving Tea (small) with change 0.30');
  });



});


