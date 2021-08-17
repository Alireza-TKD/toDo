const date = new Date()
let dateIndex = date.getUTCDay();
switch(dateIndex){
  case 0 : dateIndex = 'sunday';
  break;
  case 1 : dateIndex = 'monday';
  break;
  case 2 : dateIndex = 'thusday';
  break;
  case 3 : dateIndex = 'wendsday';
  break;
  case 4 : dateIndex = 'thursday';
  break;
  case 5 : dateIndex = 'friday';
  break;
  case 6 : dateIndex = 'saturday';
  break;
}
var typed = new Typed('.head', {
    strings: [`today is ${dateIndex} , What is your plan for today?`],
    typeSpeed : 60,
    backSpeed : 60
  });
