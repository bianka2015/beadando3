import Ember from 'ember';

export default Ember.Component.extend({
    receptek: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                nev: this.$('#nev').val(),
                ido: this.$('#ido').val(),
                leiras: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var nev = this.$('#nev').val();
        var ido = this.$('#ido').val();
        var leiras = this.$('#leiras').val();
        
        this.set('receptek.nev', nev === '' ? 'Név kötelező' : '');
        this.set('receptek.ido', ido === '' ? 'Elkészítési idő kötelező' : '');
        this.set('receptek.leiras', leiras === '' ? 'Leírás kötelező' : '');
        
        
        return this.get('receptek.nev') === '' &&
               this.get('receptek.ido') === '' &&
               this.get('receptek.leiras') === '';
    }
});
