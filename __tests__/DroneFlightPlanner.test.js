import calcDroneMinEnergy from './../Pramp/DroneFlightPlanner.js';

describe('Drone Flight Planner', () => {
  test('Should return 5', () => {
    let route = [
      [0,   2, 10],
      [3,   5,  0],
      [9,  20,  6],
      [10, 12, 15],
      [10, 10,  8]
    ];

    expect(calcDroneMinEnergy(route)).toBe(5);
  });
});