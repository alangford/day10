/**
 * Created by beebe on 3/1/2017.
 */
/*function teamCreator(teamName){
    var players = [] ;
    return function(player){
        players.push(player);
        console.log(teamName + " " + players)
    }
}
var jazz = teamCreator("jazz");
jazz("Kobe Bryiant");
jazz("Dwane Wade")*/


/*function add(num){
    return function(num2) {
        return num + num2;
    }
}
add(2)(7); // bad
var addTwo = add(2);//
addTwo(7); //good^< */
/*
function find(str){
   var arr = str.split("");
    for(var i=0;i<str.length;i++){
    arr.filter(function(a){
        return a !== str.indexOf(i) !== -1;
    });
        }
    return str;
}
console.log(find("aabbccddeff"));*/


/*
function calculator(start){
    var total = start;
    return {
        add: function(numToAdd){
           return total += numToAdd
        },
        subtract: function(numToSub){
            return total -= numToSub;
        },
        multiply: function(numToMultiply){
            return total *= numToMultiply;
        },
        divide: function (numToDevide) {
            return total /= numToDevide

        },
        root:function(){
            return total = Math.sqrt(total)
        },
        power:function (pow) {
            return total = Math.pow(total, pow)
        },
        enter:function(){
            console.log(total)
        },
        clear:function(){
            return total = 0;
        }

    }
}

var myCal = calculator(0);
myCal.add(10);
myCal.enter();
myCal.multiply(20);
myCal.enter();
myCal.subtract(4);
myCal.enter();
myCal.divide(2);
myCal.enter();
myCal.clear();
myCal.enter();
myCal.add(100);
myCal.root();
myCal.enter();
myCal.power(4);
myCal.enter();*/