class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
      }
    
      guess() {
        this.assumption = Math.round((this.max + this.min) / 2);
        return this.assumption;
      }
    
      lower() {
        return this.max = this.guess();
      }
    
      greater() {
        return this.min = this.guess();
      }
    
}

module.exports = GuessingGame;
