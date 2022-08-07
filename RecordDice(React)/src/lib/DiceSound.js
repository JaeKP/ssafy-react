class DiceSound {
  #audio = null;
  #source = '';

  constructor(src) {
    this.#source = src;
    this.#audio = new Audio(src);
  }

  get source() {
    return this.#source;
  }

  set source(newSource) {
    this.#source = newSource;
    this.#audio.src = newSource;
  }

  play() {
    this.#audio.play();
  }

  stop() {
    this.#audio.pause();
    this.#audio.currentTime = 0;
  }
}

const diceSound = new DiceSound(
  `${import.meta.env.BASE_URL}rollingDiceSound.mp3`
);

export default diceSound;
