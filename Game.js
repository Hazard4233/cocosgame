
window.onload = function() {
    cc.game.onStart = function(){
        //load resources
        // cc.LoaderScene.preload(["HelloWorld.png"], function () {
        //     cc.director.runScene(new moveByScene());
        // }, this);

        cc.LoaderScene.preload(["HelloWorld.png"], function () { 
            cc.director.runScene(new bezierScene())    
        })
        
    }
    cc.game.run("gameCanvas");
};




var moveByScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create("HelloWorld.png");
        sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            // anchorX: 0.5, 
            // anchorY: 0.5, 
            rotation: 0, 
            scaleX: 1, 
            scaleY: 1, 
            visible: true, 
            flippedX: false, 
            flippedY: false, 
            skewX: 0, 
            skewY: 0, 
            opacity: 200,
            time: 6,
            moveX: 500,
            moveY: 100
        })

        sprite.runAction(new cc.MoveBy(sprite.time, cc.p(sprite.moveX, sprite.moveY)));

        this.addChild(sprite, 0);

        var label = cc.LabelTTF.create("Eden Hazard", "Arial", 70);
        label.attr({
            x: size.width / 2,
            y: size.height / 2,
            time: 3,
            moveX: 500,
            moveY: 100
        })
        label.runAction(new cc.MoveBy(label.time, cc.p(label.moveX, label.moveY)))
        this.addChild(label, 1);
    }
});

// bezier action
var bezierLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();

        var size = cc.winSize;

        var sprite = new cc.Sprite.create("coin.png");
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);

        var bezier = [cc.p(0, size.height / 2), cc.p(100, -size.height / 4), cc.p(100, 100)];
        var sprite_action = cc.BezierTo.create(3, bezier);
        sprite.runAction(sprite_action)
        return true;
    }
})

var bezierScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new bezierLayer();
        this.addChild(layer)
    }
})

// jumpTo action
var jumpToLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();
        var size = cc.winSize;
        var sprite = new cc.Sprite.create("coin.png");
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size))
    }
})