import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteAlapanyag(alapanyag) {
            alapanyag.deleteRecord();
            alapanyag.save();
        }
    }
});
