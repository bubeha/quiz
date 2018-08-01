import _ from 'lodash';
import Timeline from './components/Timeline';
import Variant from './components/Variant';
import Loader from './helpers/Loader'

class App {
  constructor() {
    this.init();
  }

  init() {
    this.quiz = document.getElementById('quiz');
    this.quiz.classList.add('quiz');
    this.questions = Loader.load();
    this.currentQuestion = -1;

    this.createTimeline();
    this.createQuestionBlock();

    this.nextQuestion();
  }

  createTimeline() {
    this.timeline = new Timeline();
    this.quiz.appendChild(this.timeline.render(this.questions));
  }

  createQuestionBlock() {
    this.questionBlock = document.createElement('div');
    this.questionBlock.classList.add('quiz-question');

    this.questionBodyBlock = document.createElement('div');
    this.questionBodyBlock.classList.add('quiz-question__body');

    this.submitBtn = document.createElement('button');
    this.submitBtn.classList.add('quiz-question__submit');
    this.submitBtn.innerText = 'Продолжить';

    this.questionBlock.appendChild(this.questionBodyBlock);
    this.questionBlock.appendChild(this.submitBtn);
    this.quiz.appendChild(this.questionBlock);
    this.submitBtn.addEventListener('click', this.proccess.bind(this));
  }

  proccess(event) {
    event.preventDefault();
    this.nextQuestion();

    return false;
  }

  nextQuestion() {
    ++this.currentQuestion;

    const current = this.questions[this.currentQuestion];
    this.timeline.changeCurrentNumber(this.currentQuestion);

    this.questionBodyBlock.innerHTML = current.body;

    const ul = document.createElement('ul');
    ul.classList.add('quiz-question__variants');

    _.forEach(current.variants, (item) => {
      const variant = new Variant(item.name, item.value).render();
      variant.addEventListener('change', this.selectVariant.bind(this));
      ul.appendChild(variant);
    });

    this.submitBtn.disabled = true;
    this.questionBodyBlock.appendChild(ul);
  }

  selectVariant() {
    this.submitBtn.disabled = false;
  }
}

export default App;