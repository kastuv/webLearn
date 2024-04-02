const parkingLots = [
    {
        name: "Lot 1",
        hourlyRate: 2.50,
        feesCollected: 0,
        parkedCars: []
    },
    {
        name: "Lot 2",
        hourlyRate: 2.00,
        feesCollected: 0,
        parkedCars: []
    }
];

const purchaseParking = (customerLicensePlate, requestedParkingLotName, numberOfHours) => {
    let parkingLotFound = false;

    for (const lot of parkingLots) {
        if (lot.name == requestedParkingLotName) {
            parkingLotFound = true;
            let existingCar = false; 
            // = lot.parkedCars.find(car => car.licensePlate === customerLicensePlate);
            for (const car of lot.parkedCars){
                if(car.licensePlate == customerLicensePlate){
                    existingCar = true;
                    break
                }
            }
            if (existingCar) {
                console.log(`ERROR: Cannot add ${customerLicensePlate}. ${customerLicensePlate} is already parked in ${requestedParkingLotName} Parking`);
                return;
            }
            const amountPaid = numberOfHours * lot.hourlyRate;
            lot.parkedCars[lot.parkedCars.length] = {
                licensePlate: customerLicensePlate,
                hoursParked: numberOfHours,
                amountPaid: amountPaid
            };
            lot.feesCollected += amountPaid;
            console.log(`SUCCESS: License Plate ${customerLicensePlate} is parked in ${requestedParkingLotName} for ${numberOfHours} hours.`);
            break;
        }
    }

    if (!parkingLotFound) {
        console.log(`ERROR: Cannot park ${customerLicensePlate}. ${requestedParkingLotName} Parking Lot does not exist.`);
    }
};

const printSummary = () => {
    for (const lot of parkingLots) {
        console.log(`---- REPORT FOR ${lot.name} -----`);
        console.log(`Number of parked cars: ${lot.parkedCars.length}`);
        console.log(`Hourly Rate: $${lot.hourlyRate.toFixed(2)}`);
        console.log(`Total Fees Collected: $${lot.feesCollected.toFixed(2)}`);
        console.log("Parked Cars List:");
        for (const car of lot.parkedCars) {
            console.log(`License Plate: ${car.licensePlate}, Hours Purchased: ${car.hoursParked}`);
        }
    }
};

purchaseParking("ABC123", "Lot 1", 3);
purchaseParking("ABC456", "Lot 1", 3);
purchaseParking("XYZ789", "Lot 2", 2);
purchaseParking("ABC123", "Lot 1", 2);
purchaseParking("DEF456", "Lot 3", 2);

printSummary();
