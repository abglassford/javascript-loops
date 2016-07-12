function loops(){
  for(var i = 0; i <= 25; i++){
    if(i === 0){
      console.log('ZERO!');
    }else if(i % 2 !== 0){
      console.log(i + '-odd');
    }else if(i % 2 === 0){
      console.log(i + '-even');
    }
  }
}
loops()

function fizzbuzz(){
  for(var i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 ===0){
      console.log('FizzBuzz');
    }else if(i % 3 === 0){
      console.log('Fizz')
    }else if(i % 5 === 0){
      console.log('Buzz');
    }else{
      console.log(i);
    }
  }
}
fizzbuzz()

function sum(){
  var sum = 0
  for(var i = 0; i <= 1000; i++){
  if((i % 3 === 0) || (i % 5 === 0)){
      sum += i
    }
  }
  console.log(sum);
}
sum()

function triangle(){
  var hash = '#'
  for(i = 0; i < 7; i++){
    console.log(hash);
    hash = hash + '#'
  }
}
triangle()
