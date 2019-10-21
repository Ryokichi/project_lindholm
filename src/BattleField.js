projSUS.BattleField = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.layer = new projSUS.BattleFieldLayer();
        this.addChild(this.layer);
        this.layer.init();
    }
});

projSUS.BattleFieldLayer = cc.Layer.extend({
    init: function () {
        this.bg = pd.createSprite("bg.png", cc.p(320,180), this);
        this.spell_interface = new projSUS.GameInterface(this);

        this.player = new projSUS.Hero(this);
        this.player.setPosition(200,200);


        projSUS.input.addEventListener("onKeyPressed", "onKeyDown", this);
        projSUS.input.addEventListener("onKeyReleased", "onKeyUp", this);
        this.scheduleUpdate();
    },

    update: function (dt) {

    },

    onKeyDown: function (key, e) {
        if (projSUS.gameConfig.spell_btn_a0 == key || projSUS.gameConfig.spell_btn_b0 == key) {
            cc.log("spell_0");
        }else if (projSUS.gameConfig.spell_btn_a1 == key|| projSUS.gameConfig.spell_btn_b1 == key) {
            cc.log("spell_1");
        }
        else if (projSUS.gameConfig.spell_btn_a2 == key || projSUS.gameConfig.spell_btn_b2 == key) {
            cc.log("spell_2");
        }
        else if (projSUS.gameConfig.spell_btn_a3 == key|| projSUS.gameConfig.spell_btn_b3 == key) {
            cc.log("spell_3");
        }
        else if (projSUS.gameConfig.spell_btn_a4 == key || projSUS.gameConfig.spell_btn_b4 == key) {
            cc.log("spell_4");
        }

        if (projSUS.gameConfig.btn_a_left  == key|| projSUS.gameConfig.btn_b_left == key) {
            cc.log("go left");
        }
        else if (projSUS.gameConfig.btn_a_up  == key|| projSUS.gameConfig.btn_b_up == key) {
            cc.log("go up");
        }
        else if (projSUS.gameConfig.btn_a_right  == key|| projSUS.gameConfig.btn_b_right == key) {
            cc.log("go right");
        }
        else if (projSUS.gameConfig.btn_a_down == key || projSUS.gameConfig.btn_b_down == key) {
            cc.log("go down");
        }
    },

    onKeyUp: function (key, e) {

    }
});