import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyAlapanyag(formData) {
            let alapanyag = this.get('model');
            alapanyag.setProperties(formData);
            return alapanyag.save().then(() => {
                this.transitionToRoute('alapanyagok.list');
            });
        }
    }
});
