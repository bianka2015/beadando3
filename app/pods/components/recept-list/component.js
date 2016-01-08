import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteRecept(recept) {
            //recept.deleteRecord();
            recept.save();
        }
    }
});
