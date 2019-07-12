var BattleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new BattleLayer();
        this.addChild(layer);
        layer.init();
    }
});

var BattleLayer = cc.Layer.extend({
    init: function () {
        var size = cc.director.getWinSize();
        var middle = cc.p(size.width/2, size.height/2);

        pd.createSprite(res.bg, middle, this, -1);

        this.skill_1 = pd.createSprite("cura1.png", cc.p(100,100), this, 1);
        this.skill_2 = pd.createSprite("cura2.png", cc.p(200,100), this, 1);
        this.skill_3 = pd.createSprite("cura3.png", cc.p(300,100), this, 1);


        // gb.addMouseEvent(this.skill_2);
        // gb.addMouseEvent(this.skill_3);

        this.skill_2.mouse = function (e) {
            cc.log("funciona, está vivo", e);
        };

        cc.log(projectSUS.input.addEventListener("onMouseDown", "mouse", this.skill_2, 1));

        // gameInput.addEventListener("onMouseDown", "mouse", this.skill_2, 1);
    },
});