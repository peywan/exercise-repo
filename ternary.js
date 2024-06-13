// Step 1: Declare a variable 'age' and assign it a number value
let age = 25;
// Step 2: Declare a variable 'isMember' and assign it a boolean value
let isMember = false
// Step 3: Declare a variable 'userType'

let userType
// Step 4: Use ternary operators to determine the 'userType'

userType = (age < 18 )
    ? (isMember ? "minor member" : "minor non member")
    : (isMember ? "adult member" : "adult non member")

// If age is under 18 and not a member, 'userType' should be "Minor Non-Member"
// If age is under 18 and is a member, 'userType' should be "Minor Member"
// If age is 18 or older and not a member, 'userType' should be "Adult Non-Member"
// If age is 18 or older and is a member, 'userType' should be "Adult Member"

// Step 5: Use console.log to display the 'userType'

console.log(userType)
