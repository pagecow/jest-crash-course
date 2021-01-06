import { add, subtract, isNull, checkValue, createUser, createNumber, load1, load2, load3, load4, usernames, getUser } from './functions';
import "core-js/stable";
import "regenerator-runtime/runtime";

// toBe 
test('Add function 2, 2 params returns 4.', () => {
    expect(add(2, 2)).toBe(4);
});

test('Subtract function 2, 2 params returns 0.', () => {
    expect(subtract(2, 2)).toBe(0);
});

// not
test('Add function 2, 2 params NOT returns 5.', () => {
    expect(add(2, 2)).not.toBe(5);
});

// toBe null
test('isNull should be null.', () => {
    expect(isNull()).toBe(null);
});

// falsy or truthy
test('Should be falsy.', () => {
    expect(checkValue(null)).toBeFalsy();
});

test('Should be truthy.', () => {
    expect(checkValue(1)).toBeTruthy();
});

// equals
test('User should be TJ McCarty object.', () => {
    expect(createUser()).toStrictEqual({ firstName: "TJ", lastName: "McCarty" });
});

test('User should be TJ McCarty object.', () => {
    expect(createNumber(5, 5)).toEqual(10);
});

// less than or equal to
test('Should be less than 1600.', () => {
    expect(load1 + load2).toBeLessThan(1600);
});

test('Should be less than or equal to 1600.', () => {
    expect(load3 + load4).toBeLessThanOrEqual(1600);
});

// toMatch
test('There is no I in team.', () => {
    expect('team').not.toMatch(/I/);
});

test('But there is an i in pie.', () => {
    expect('pie').toMatch(/I/i);
});

// Arrays
test('NotGoingToTryToSpellTheLastName should be in username array.', () => {
    expect(usernames).toContain('NotGoingToTryToSpellTheLastName');
});

test('Mary should NOT be in username array.', () => {
    expect(usernames).not.toContain('Mary');
});

// Working with async data
test('getUser name should be Leanne Graham.', () => {
    expect.assertions(1);
    return getUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

test('getUser name should be Leanne Graham.', async () => {
    expect.assertions(1);
    const data = await getUser();
    expect(data.name).toEqual('Leanne Graham');
});