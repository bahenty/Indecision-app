console.log('App.js is running!');

const app = {
  title: 'some title',
  subTitle: 'this is the subtitle',
  options: ['Item one', 'Item two', 'Item three']
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app
      .options
      .push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options && app.options.length > 0
          ? 'Here are your options'
          : 'No options'}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Text: {option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove All</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();