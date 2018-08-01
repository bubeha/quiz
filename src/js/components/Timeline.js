import _ from "lodash";

class Timeline {

  constructor() {
    this.init();

    this.numbers = [];
    this.activeClass = 'quiz-timeline__current';
  }

  init() {
    this.timeline = document.createElement('div');
    this.timeline.classList.add('quiz-timeline');
  }

  createNumber(text, id) {
    const number = document.createElement('span');
    number.classList.add('quiz-timeline__number');
    number.innerText = text;
    number.dataset.id = id;

    this.timeline.appendChild(number);
    return number;
  }

  render(numbers) {
    _.forEach(numbers, (value, key) => {
      this.numbers.push(this.createNumber(key + 1, value.id));
    });

    return this.timeline;
  }

  changeCurrentNumber(currentNumber) {
    _.forEach(this.numbers, (element) => {
      if (element.classList.contains(this.activeClass)) {
        element.classList.remove(this.activeClass);
      }
    });

    this.numbers[currentNumber].classList.add(this.activeClass);
  }

}

export default Timeline;