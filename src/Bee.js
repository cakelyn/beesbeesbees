var Bee = function(food) {

  Grub.call(this, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};


Bee.prototype = Object.create(Grub);

Bee.prototype.constructor = Bee;

Bee.prototype.eat = Grub.prototype.eat;