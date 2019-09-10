
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 1000, make: 'Dodge', model: 'Charger', mileage: 30000, titleStatus: 'Clean', titleType: 'Original'},
        {vin: 2000, make: 'Ford', model: 'Mustang', mileage: 40000, titleStatus: 'Salvaged', titleType: 'Original'},
        {vin: 3000, make: 'Chevrolet', model: 'Camaro', mileage: 50000, titleStatus: 'Clean', titleType: 'Original'}
      ]);
    });
};




// required
//VIN, make, model, and mileage

//not required
//type and status of the title