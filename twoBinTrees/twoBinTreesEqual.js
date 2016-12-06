let areEqual = (one, two) => {
    // BASE CASE
    // if they are both null
    if (!one && !two) {
      return true;
    } else if (one.data !== two.data) {
      return false;
    // recursive case
    } else {
      // return areEqual(one.left, one.right) && areEqual(two.left, two.right)
      return areEqual(one.left, two.left) && areEqual(one.right, two.right);
    }
    return false;
}

areEqual();


// Bin Trees have :
// 1.) VAL
// 2.) Left child
// 3.) Right child

// need to:
// 1.) verify values match
// 2.) has same num children
// 3.) Recurse