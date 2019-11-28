import DS from 'ember-data';
const { attr, belongsTo, Model } = DS;

export default Model.extend({
  amount: attr('string'),
  notes: attr('string'),

  accountTo: belongsTo('account'),
  accountFrom: belongsTo('account')
});
