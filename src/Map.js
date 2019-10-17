projSUS.MapScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.layer = new projSUS.MapLayer();
        this.addChild(this.layer);
        this.layer.init();
    }
});

projSUS.MapLayer = cc.Layer.extend({
    init: function () {
        this.is_paused = false;
        this.spell_book = null;
        this.options = null;

        this.bg = pd.createSprite("map_bg.png", cc.p(320,180), this);

        this.btn_opt = pd.createSprite("btn_opt.png",cc.p(600,320), this);
        this.btn_spell = pd.createSprite("btn120x40_n.png",cc.p(70,320), this);
        this.spell_txt = pd.label(this.btn_spell, "Spell Book",1,1);
        this.spell_txt.setFontSize(20);
        this.spell_txt.setDimensions(this.btn_spell.width,this.btn_spell.height);
        this.spell_txt.setPosition(0,this.btn_spell.height/1.5);

        projSUS.input.addEventListener("onMouseDown", "onMouseDown", this);
    },

    onMouseDown: function (e) {
        if (this.is_paused) return;

        if (cc.rectContainsPoint(this.btn_spell.getBoundingBox(), e.getLocation())) {
            this.is_paused = true;
            this.spell_book = new projSUS.SpellBookLayer(this);
        }
        else if (cc.rectContainsPoint(this.btn_opt.getBoundingBox(), e.getLocation())) {
            this.pauseControl();
            this.options = new projSUS.OptionsLayer(this);
        }
    },

    pauseControl: function () {
        this.is_paused = true;
    },

    resumeControl: function () {
        this.is_paused = false;
    }

});