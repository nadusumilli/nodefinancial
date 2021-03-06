/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,

  attributes: {
  	name: {
      type: 'string',
      required: true
  },
    email:{
      type: 'string',
      email: true
    },
    street_address: {
      type: 'string'
    },
    city:{
      type: 'string'
    },
    state:{
      type: 'string'
     },
    zip: {
      type: 'string'
    },
    home_phone: {
      type: 'string'
    },
    cell_phone:{
      type: 'string'
    },
    
    stocks: {
      collection: 'stock',
      via: 'owner'
    },

    investments: {
      collection: 'investment',
      via: 'investor'
    }

  }
};

