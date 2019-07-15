projectSUS.Shield = projectSUS.Spell.extend({
    ctor: function () {
        this._super();

        this.code = "SPS2";
        this.name = "Bolha Protetora";
        this.sprite_name = "cura5.png";

        this.base_heal = 3;
        this.base_mana = 5;
        this.base_cast = 1;
        this.base_cd   = 0.8;
        this.base_tick = 0.8;
        this.base_duration = 3;

        this.init();
    },

    leveUP: function () {

    },

    setDescription: function () {
        this.description = "Lança uma bolha protetora sobre o aliado, ignorando o dano.";
    }

});