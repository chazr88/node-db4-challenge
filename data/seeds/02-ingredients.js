
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'noodles', quantity: 1},
        {ingredient_name: 'cup of water', quantity: 2},
        {ingredient_name: 'seasoning', quantity: 1}
      ]);
};
