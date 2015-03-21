var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var PowerStar = (function (_super) {
        __extends(PowerStar, _super);
        // CONSTRUCTOR
        function PowerStar() {
            _super.call(this, "powerStar");
            this.sound = "yay";
            this._dx = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        PowerStar.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        PowerStar.prototype.reset = function () {
            this.x = 1000 + this.width;
            this.y = Math.floor(Math.random() * 430);
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            */
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        PowerStar.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width - 5000)) {
                this.reset();
            }
            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        };
        return PowerStar;
    })(objects.GameObject);
    objects.PowerStar = PowerStar;
})(objects || (objects = {}));
//# sourceMappingURL=powerStar.js.map