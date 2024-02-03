const test = new UnitTester("Vec Initialization", "",
  () => {
    UnitTester.assert_deep_equal(new Vec(3), { "list": [0, 0, 0] });
    UnitTester.assert_deep_equal(Vec.mono(1, 2), { "list": [1, 1] });
    const list = [1, 2, 3];
    UnitTester.assert_deep_equal(Vec.fromList(list), { "list": list });
  },
  [
    new UnitTester("Single Vec Operations", "",
      () => {
        const vec_length = 3;
        const vec = new Vec(vec_length);
        const vec_copy = vec.copy();
      
        // Test the ind & setInd methods
        UnitTester.assert_strict_equal(vec.ind(0), 0);
        vec.setInd(0, 3);
        UnitTester.assert_strict_equal(vec.ind(0), 3);
      
        // Test whether or not copy works and creates a separate instance that doesn't get modified
        UnitTester.assert_deep_equal(vec_copy, { "list": [0, 0, 0] });
      
        // Test the length method
        UnitTester.assert_strict_equal(vec.length(), vec_length);
        
        // Test the forEach method
        vec.forEach((l, v, i) => v == 3 ? 3.7 : -2.2);
        UnitTester.assert_deep_equal(vec, { "list": [3.7, -2.2, -2.2] });
      
        // Test the abs method
        vec.abs();
        UnitTester.assert_deep_equal(vec, { "list": [3.7, 2.2, 2.2] });
        
        // Test the floor, ceil, and round methods
        UnitTester.assert_deep_equal(vec.copy().floor(), { "list": [3, 2, 2] });
        UnitTester.assert_deep_equal(vec.copy().ceil(), { "list": [4, 3, 3] });
        vec.round();
        UnitTester.assert_deep_equal(vec, { "list": [4, 2, 2] });
      
        // Test the flip and inv methods
        vec.flip()
        UnitTester.assert_deep_equal(vec, { "list": [-4, -2, -2] });
        vec.inv();
        UnitTester.assert_deep_equal(vec, { "list": [-1 / 4, -1 / 2, -1 / 2] });
      
        // Test the slice and miniVec methods
        UnitTester.assert_deep_equal(vec.slice(0, 2), { "list": [-1 / 4, -1 / 2] });
        UnitTester.assert_deep_equal(vec.miniVec(1, 2), { "list": [-1 / 2, -1 / 2] });
      }
    ),
    new UnitTester("Vec Scalar Operations", "",
      () => {
        const vec = Vec.fromList([1, 2, 3]);
      
        // Check the addNum, subNum, numSub, mulNum, divNum, numDiv, powNum, and numPow funtions
        vec.addNum(2);  
        UnitTester.assert_deep_equal(vec, { "list": [3, 4, 5] });
        vec.subNum(2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 2, 3] });
        vec.numSub(4);
        UnitTester.assert_deep_equal(vec, { "list": [3, 2, 1] });
        vec.mulNum(2);
        UnitTester.assert_deep_equal(vec, { "list": [6, 4, 2] });
        vec.divNum(2);
        UnitTester.assert_deep_equal(vec, { "list": [3, 2, 1] });
        vec.numDiv(3);
        UnitTester.assert_deep_equal(vec, { "list": [1, 3 / 2, 3] });
        vec.powNum(2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 9 / 4, 9] });
        vec.numPow(2);
        UnitTester.assert_deep_equal(vec, { "list": [2 ** 1, 2 ** (9 / 4), 2 ** 9] });
      }
    ),
    new UnitTester("Vec Vec Operations", "",
      () => {
        const vec = Vec.fromList([1, 2, 3]);
        const vec2 = Vec.fromList([1, 2, 3]);
      
        // Check the addVec, subVec, mulVec, divVec, powVec, and equ functions
        vec.addVec(vec2);
        UnitTester.assert_deep_equal(vec, { "list": [2, 4, 6] });
        vec.subVec(vec2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 2, 3] });
        vec.mulVec(vec2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 4, 9] });
        vec.divVec(vec2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 2, 3] });
        vec.powVec(vec2);
        UnitTester.assert_deep_equal(vec, { "list": [1, 2 ** 2, 3 ** 3] });
        UnitTester.assert(!vec.equ(vec2));
        // Here we also make sure that vec2 remains unmodified
        UnitTester.assert(vec2.equ(Vec.fromList([1, 2, 3])));
      }
    ),
  ]
).test();

if (test.failed_sub_tests.length == 0)
  console.log("Everything was completely successfully!");
else {
  console.log("Failed Tests:");
  console.log(tests.failed_sub_tests);
}