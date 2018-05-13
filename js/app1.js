const second = () => {
  console.log('The Second');
  setTimeout(() => {
    console.log('Asynchronous JavaScript');
  }, 2000);
};

const first = () => {
  console.log('Hey there');
  second();
  console.log('Synchronous way!');
};

first();
