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
                recept: this.$('#recept').val(),
            });
        }
    },
    
    validate() {
        var nev = this.$('#nev').val();
        var mennyiseg = this.$('#mennyiseg').val();
        var recept = this.$('#recept').val();
        
        this.set('alapanyagok.nev', nev === '' ? 'Név kötelező' : '');
        this.set('alapanyagok.mennyiseg', mennyiseg === '' ? 'Mennyiség kötelező' : '');
        this.set('alapanyagok.recept', recept === '' ? 'Recept kötelező' : '');
        
        
        return this.get('alapanyagok.nev') === '' &&
               this.get('alapanyagok.mennyiseg') === '' &&
               this.get('alapanyagok.recept') === '';
    }
});
