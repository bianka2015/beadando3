import DS from 'ember-data';

const AlapanyagModel = DS.Model.extend({
  nev: DS.attr('string'),
  mennyiseg: DS.attr('string'),
  recept: DS.belongsTo('recept', { async: true })
});

export default AlapanyagModel;