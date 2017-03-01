/**
 * Created by beebe on 3/1/2017.
 */
/*Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
    Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
    Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
Note: You can expect all of the inputs to be the same length.*/
function abc(str1, str2, str3){
    var result = "";
    for(var i=0;i<str1.length;i++){
        result += str1[i] + str2[i] + str3[i];
    }
    return result;
}
console.log(abc("aaa", "bbb", "ccc"));