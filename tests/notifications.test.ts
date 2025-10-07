import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
import fetch from "node-fetch";
import * as notification from "../src/utils/notifications";

jest.mock("node-fetch", () => jest.fn());
jest.useFakeTimers({ now: new Date("2023-01-01T00:00:00Z").getTime() });
describe('notifyUser', () => {
    it("calls fetch with correct URL", async() =>{
        const message = "Hello World";
        const fetchSpy = jest.mocked(fetch);
        fetchSpy.mockResolvedValue({ok: true} as any);
        await notification.notifyUser(message);
        expect(fetchSpy).toHaveBeenCalledWith(`https://example.com/api/notify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                message: message,
             timestamp: new Date().toISOString()})
        });
        expect(fetchSpy).toHaveBeenCalledTimes(1);

        
    })
    
});
