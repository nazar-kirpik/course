function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
Player.prototype.gainXp = function(num) {
    if (num >= 1 && num <= 10){
        this.points+=num;
        if (this.points >= 10) {
            this.lvl++;
            this.points-=10;
        }
    }
}

Player.prototype.describe = function() {
    console.log(`${this.name} is level ${this.lvl} with ${this.points} experience points`)
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

let p = new Player('Bob');
p.gainXp(5);
p.describe();
p.gainXp(8);
p.describe();