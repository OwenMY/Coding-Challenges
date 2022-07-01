const { calcDroneMinEnergy } = require('./../Pramp/DroneFlightPlanner.js');

describe('Drone Flight Planner', () => {
  test('Should return 0 when only one point is given', () => {
    let route1 = [[0,1,19]];

    expect(calcDroneMinEnergy(route1)).toBe(0);
  });

  test('Should return 0 when route has excess watts', () => {
    let route1 = [[0,2,10],[10,10,8]];

    expect(calcDroneMinEnergy(route1)).toBe(0);
  });

  test('Should return 14', () => {
    let route1 = [[0,2,6],[10,10,20]];

    expect(calcDroneMinEnergy(route1)).toBe(14);
  });

  test('Should return 36', () => {
    let route1 = [
      [0,2,2],
      [3,5,38],
      [9,20,6],
      [10,12,15],
      [10,10,8]
    ];

    expect(calcDroneMinEnergy(route1)).toBe(36);
  });

  test('Should return 0', () => {
    let route1 = [
      [0,2,10],
      [3,5,9],
      [9,20,6],
      [10,12,2],
      [10,10,10],
      [10,10,2]
    ];

    expect(calcDroneMinEnergy(route1)).toBe(0);
  });

  test('Should return 5', () => {
    let route1 = [
      [0,   2, 10],
      [3,   5,  0],
      [9,  20,  6],
      [10, 12, 15],
      [10, 10,  8]
    ];

    expect(calcDroneMinEnergy(route1)).toBe(5);
  });
});