
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_name: 'step one boil water'},
        {step_name: 'step two put noodles in water'},
        {step_name: 'step three add seasoning'}
      ]);
};
