import Ember from 'ember';

export default Ember.Component.extend({
    alapanyagok: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                nev: this.$('#nev').val(),
                mennyiseg: this.$('#mennyiseg').val(),
            });
        }
    },
    
    validate() {
        var nev = this.$('#nev').val();
        var mennyiseg = this.$('#mennyiseg').val();
        
        this.set('alapanyagok.nev', nev === '' ? 'Név kötelező' : '');
        this.set('alapanyagok.mennyiseg', mennyiseg === '' ? 'Mennyiség kötelező' : '');
        
        
        return this.get('alapanyagok.nev') === '' &&
               this.get('alapanyagok.mennyiseg') === '';
    }
});
