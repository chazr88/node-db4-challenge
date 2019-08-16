
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.varchar('recipe_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.varchar('ingredient_name', 128)
            .notNullable();
        tbl.float('quantity', 128)
            .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');
        tbl.integer('ingredent_id')
            .unsigned()
            .notNullable()
            .references('ingredents.id');
        tbl.primary(['recipe_id', 'ingredent_id']);
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.varchar('step_name', 128)
            .notNullable()
    })
    .createTable('recipe_steps', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('steps.id');
        tbl.primary(['recipe_id', 'step_id']);
    })
    )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredents')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};