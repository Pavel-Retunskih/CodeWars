/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''*/

let names = ([{name: 'Bart'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Lisa'}, {name: 'Maggie'}]);

function list(arr) {
    let out = ''
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {

            if (arr.length === 1) {
                out += arr[i].name                
            }else  out += '& ' + arr[i].name

        }else if (i === arr.length - 2){
            out += arr[i].name + " "
        }else out += arr[i].name + ", "
    }
    return out
};

console.log(list(names));