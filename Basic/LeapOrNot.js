let month=2
let year=2000
switch(month){
    case 1:
    case 3:
    case 5:
        case 7:
            case 8:
                case 10:
                    case 12:
                        console.log('Month has 31 days');
                        break
    
        case 4:
            case 6:
                case 9:
                    case 11:
                        console.log('Month has 30 days');
                        break;

        case 2:
            if(year%400==0 ||(year%4==0 )&& (year%100!=0)){
              console.log(`month has 29 days and the year ${year} is leap year`);
            }
            else{
                console.log(`month has 28 days and the year ${year} is not a leap year`);
            }
            break;
            default:
                console.log('provide valid month and year');
}