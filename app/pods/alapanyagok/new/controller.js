import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newAlapanyag(formData) {
            var this2 = this;
            var alapanyag = this.store.createRecord(
                'alapanyag', 
                {
                    nev: formData.nev,
                    mennyiseg: formData.mennyiseg
                }
            );

            this2.store.queryRecord('recept', {filter: {nev: formData.recept}}).then(function(found){
                alapanyag.set('recept', found[0]);
                alapanyag.save();
                this2.transitionToRoute('alapanyagok.list');
            });
        }
    }
});
