class Variant {
  constructor(text, value) {
    this.text = text;
    this.value = value;

    this.init()
  }

  init() {
    this.item = document.createElement('li');
    this.item.classList.add('quiz-question__variant');

    this.item.appendChild(this.createLabel());
  }

  createLabel() {
    const label = document.createElement('label');
    label.classList.add('quiz-question__label');
    label.appendChild(this.createInput());
    label.appendChild(this.createText());

    return label;
  }

  createInput() {
    const input = document.createElement('input');
    input.classList.add('quiz-question__input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = this.value;

    return input;
  }

  createText() {
    const span = document.createElement('span');
    span.classList.add('quiz-question__input-text');
    span.innerText = this.text;

    return span;
  }

  render() {
    return this.item;
  }


}

export default Variant;