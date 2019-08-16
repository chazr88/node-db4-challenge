
exports.seed = function(knex) {
      return knex('recipe_steps').insert([
        {recipe_id: 1, step_id: 1},
        {recipe_id: 1, step_id: 2},
        {recipe_id: 1, step_id: 3}
      ]);
};
