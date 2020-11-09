const color = 'td';

switch(color){
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is not Red and Blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        console.log('Saturday');
        break;

    case 1:
        console.log('Sunday');
        break;

    case 2:
        console.log('Monday');
        break;

    case 3:
        console.log('Tuesday');
        break;

    case 4:
        console.log('Wednesday');
        break;

    case 5:
        console.log('Thursday');
        break;

    case 6:
        console.log('Friday');
        break;
}

console.log(`Today is $(VUGF)`);