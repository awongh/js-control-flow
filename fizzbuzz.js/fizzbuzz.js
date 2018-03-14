var add = function(a,b){
  return a * b;
};

var announce = function() {
  console.log('Ding!');
}

var threeSecondTimeout = setTimeout(announce, 3000);