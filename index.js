// code your solution here
// function superbowlWin(record) 
//  - returns a year the Denver Broncos won the superbowl
//  - returns undefined if the record has no win objects

function superbowlWin(record) {
    const found = record.find(o => o.result == "W")
    if (found) {
        return found.year
    } else {
        return found
    }
}

