let x = 10; // it will match with the first one gives result no error
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}

//It will allow you to have the duplicate case with first as the usage.