var RetiredForagerBee = function(food) {
  ForagerBee.call(this, food);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(Grub);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.eat = Grub.prototype.eat;

RetiredForagerBee.prototype.forage = function () {

  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};