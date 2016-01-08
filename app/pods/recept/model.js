import DS from 'ember-data';

export default DS.Model.extend({
    nev: DS.attr('string'),
    ido: DS.attr('string'),
    leiras: DS.attr('string'),
    alapanyagok: DS.hasMany('alapanyag', { async: true })
});
