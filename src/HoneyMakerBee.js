var HoneyMakerBee = function(food, color) {

  Bee.call(this, food, color);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Grub);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.eat = Grub.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot ++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot --;
};