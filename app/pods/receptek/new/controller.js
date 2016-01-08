import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecept(formData) {
            var recept = this.store.createRecord(
                'recept', 
                Object.assign(
                    formData
                )
            );
            recept.save();
            this.transitionToRoute('receptek.list');
        }
    }
});
