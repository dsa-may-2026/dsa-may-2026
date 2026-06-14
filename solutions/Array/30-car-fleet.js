var carFleet = function(target, position, speed) {
    let cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push({
            position: position[i],
            speed: speed[i]
        });
    }

    cars.sort((a, b) => a.position - b.position);

    let fleetCount = 0;
    let lastFleetArrivalTime = 0;

    for (let i = cars.length - 1; i >= 0; i--) {
        const car = cars[i];
        const arrivalTime = (target - car.position) / car.speed;

        if (arrivalTime > lastFleetArrivalTime) {
            fleetCount++;
            lastFleetArrivalTime = arrivalTime;
        }
    }

    return fleetCount;
};