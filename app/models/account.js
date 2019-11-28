import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  balance: attr('string'),
  name: attr('string'),

  balanceFrom:  hasMany('transaction'),
  balanceTo:  hasMany('transaction')
});
