var ForagerBee = function(color, food) {
  Bee.call(this, color, food);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Grub);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.eat = Grub.prototype.eat;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};