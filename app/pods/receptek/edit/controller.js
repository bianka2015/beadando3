import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRecept(formData) {
            let recept = this.get('model');
            recept.setProperties(formData);
            return recept.save().then(() => {
                this.transitionToRoute('receptek.list');
            });
        }
    }
});
