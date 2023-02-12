class GuessingGame {
    constructor(min, max, mid) {
        this.min = min;
        this.max = max;
        this.mid = mid;
    }
    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() { 
        this.mid = Math.ceil((this.min + this.max) / 2)       
        return this.mid
    }

    lower() {
        this.max = this.mid
    }

    greater() {
        this.min = this.mid
    }
}

module.exports = GuessingGame;
