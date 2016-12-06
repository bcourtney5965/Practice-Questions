let areEqual = (one, two) => {
    // BASE CASES
    // Nodes are both null
    if (!one && !two) {
      return true;
    // Values aren't equal
    } else if (one === null || two === null) {
      return false;
    } else if (one.data !== two.data) {
      return false;
    // RECURSIVE CASE
    } else {
      return areEqual(one.left, two.left) && areEqual(one.right, two.right);
    }
    return false;
}
