
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.decimal('vin').notNullable();
    tbl.text('titleStatus', 128)
    tbl.text('titleType', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('cars');
};


// required
//VIN, make, model, and mileage

//not required
//type and status of the title