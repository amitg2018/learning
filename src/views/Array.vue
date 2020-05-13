<template>
  <div class="right-container">
    <div class="header">
      <div class="title">Javascript</div>
      <div class="right-nav">
        <!-- <router-link to="git">Git</router-link>
        <router-link to="github">Github</router-link> -->
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        https://javascript.info/js ( Good And Best for me this website.)
        https://medium.com/@shahaparan2014/master-of-javascript-basic-to-advanced-2019-2d357c21c43
        https://codeburst.io/ ( dont know )

        <h1>Arrow Function</h1>
        <p>
          An arrow function expression is a syntactically compact alternative to
          a regular function expression, although without its own bindings to
          the this, arguments, super, or new.target keywords. Arrow function
          expressions are ill suited as methods, and they cannot be used as
          constructors.
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
          <br />
          2. https://javascript.info/array
          <br />
          3. https://codeburst.io/javascript-essentials-arrays-2d275b9598c5
        </p>
        <table width="100%" border="0" cellspacing="10" cellpadding="10">
          <tr>
            <th width="50%" align="left">Regular Function</th>
            <th width="50%" align="left">Arrow Function</th>
          </tr>
          <tr>
            <td valign="top">
              function funcName(params) { return params + 2;} funcName(2); // 4
            </td>
            <td valign="top">
              var funcName = (params) => params + 2 funcName(2); // 4
              <br /><br />
              <strong>(parameters) => { statements }</strong> <br /><br />
              If we have no parameters, we express an arrow function like this:
              <br />
              <strong>() => { statements }</strong> <br /><br />
              When you only have one parameter, the opening parenthesis are
              optional: <br />
              <strong>parameters => { statements }</strong>
              <br /><br />
              <strong>parameters => expression</strong> <br />
              // is equivalent to: <br />
              function (parameters){ return expression; }
              <br /><br />
              Notes: <strong>No binding of this</strong> keyword
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              const materials = [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
              ]; <br />console.log(materials.map(material => material.length));
              <br />// expected output: Array [8, 6, 7, 9] <br /><br />

              <strong>Basic syntax</strong><br />
              (param1, param2, …, paramN) => { statements } <br />
              (param1, param2, …, paramN) => expression<br />
              // equivalent to: => { return expression; }<br />
              <br /><br />
              // Parentheses are optional when there's only one parameter
              name:<br />
              (singleParam) => { statements }<br />
              singleParam => { statements }<br /><br />

              // The parameter list for a function with no parameters should be
              written with a pair of parentheses.<br />
              () => { statements }
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <strong>Advanced syntax</strong><br />
              // Parenthesize the body of a function to return an object literal
              expression:<br />
              params => ({foo: bar})
              <br /><br />
              // Rest parameters and default parameters are supported<br />
              (param1, param2, ...rest) => { statements }<br />
              (param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
              statements }
              <br /><br />
              // Destructuring within the parameter list is also supported var f
              = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <strong>Shorter functions</strong><br />
              var elements = [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium' ];
              <br />
              // This statement returns the array: [8, 6, 7, 9]<br />
              elements.map(function(element) { return element.length; });
              <br /><br />
              // The regular function above can be written as the arrow function
              below<br />
              elements.map((element) => { return element.length; }); // [8, 6,
              7, 9]
              <br /><br />
              // When there is only one parameter, we can remove the surrounding
              parentheses<br />
              elements.map(element => { return element.length; }); // [8, 6, 7,
              9]
              <br /><br />
              // When the only statement in an arrow function is `return`, we
              can remove `return` and remove<br />
              // the surrounding curly brackets<br />
              elements.map(element => element.length); // [8, 6, 7, 9]
              <br /><br />
              // In this case, because we only need the length property, we can
              use destructuring parameter:
              <br />
              // Notice that the `length` corresponds to the property we want to
              get whereas the
              <br />
              // obviously non-special `lengthFooBArX` is just the name of a
              variable which can be changed
              <br />
              // to any valid variable name you want
              <br />
              elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8,
              6, 7, 9]
              <br /><br />
              // This destructuring parameter assignment can also be written as
              seen below. However, note that in
              <br />// this example we are not assigning `length` value to the
              made up property. Instead, the literal name <br />// itself of the
              variable `length` is used as the property we want to retrieve from
              the object. elements.map(({ length }) => length); // [8, 6, 7, 9]
            </td>
          </tr>
        </table>

        <h1>Ternary Operator</h1>
        <p>
          https://codeburst.io/javascript-what-is-the-ternary-operator-c819af8a7f6c
        </p>
        <table width="100%" border="0" cellspacing="10" cellpadding="10">
          <tr>
            <th width="50%" align="left">Normal</th>
            <th width="50%" align="left">Ternary Oprators</th>
          </tr>
          <tr>
            <td valign="top">
              let age = 20; <br />let driver;<br />
              if (age >= 16) { driver = true; } else { driver = false; }
            </td>
            <td valign="top">
              let age = 20; let driver = age >= 16 ? true : false;
            </td>
          </tr>
          <tr>
            <td valign="top">
              // typical if statement <br />if ( condition ) { value if true; }
              else { value if false; }
            </td>
            <td valign="top">
              // ternary operator<br />
              condition ? value if true : value if false
              <br /><br />
              1. Our condition is what we’re actually testing. This where your
              ===, <lessthen=, greaterThen>=, etc. conditionals would go.
              <br /><br />2. A ? separates our conditional from our true value.
              Anything between the ? and the : is what is executed if the
              condition evaluates to true. <br /><br />3. Finally a : colon. If
              your condition evaluates to false, anything after the colon is
              executed. <br /><br />
              <strong>Exp:</strong> we’re programming for a movie theater that
              has discounted tickets for students. If you’re a student, the
              ticket price is $8, else it’s $10:<br />
              let isStudent = true;<br />
              let price = isStudent ? '$8.00' : '$10.00'<br />
              console.log(price);<br />
              // '$8.00'
              <br /><br />
              <strong>Exp:</strong> What if our movie theater gives student
              discounts and senior discounts? We can nest ternary operators to
              test multiple conditions. <br /><br />In this scenario the regular
              ticket price is $10. Students pay $8. Senior Citizens pay $6.
              <br /><br />
              Here’s what the code for a Senior would look like:
              <br />
              let isStudent = false;
              <br />
              let isSenior = true;
              <br />
              let price = isStudent ? '$8.00' : isSenior ? '$6.00' : '$10.00'
              <br />
              console.log(price); // '$6.00'
              <br />
              That’s a lot of question marks and colons — lets break it down.
              <br />
              1. First we test isStudent — since that is false, the code after
              the : is executed. After the : we have a new condition:
              <br />2. Our second condition tests isSenior — since this is true,
              the code after the ? but before the : is run.
              <br />
              3. price is assigned the value of '$6.00' which is then logged to
              the screen.
            </td>
          </tr>
        </table>

        <ul>
          <li></li>
        </ul>
        <h1>Arrays</h1>
        <ul>
          <li>
            <p>
              Special data structure named Array, to store ordered collections.
              <strong>link: </strong><br />
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
              <br /><br />
              <el-button type="text" @click="commonOperations = true">
                Common operations
              </el-button>
              <el-button type="text" @click="increaseLength = true">
                Increase Length
              </el-button>
              <el-button type="text" @click="arrayTypes = true">
                Array Constructor and Literal
              </el-button>
            </p>
            <pre>
<strong>Declaration</strong>
There are two syntaxes for creating an empty array:
let arr = new Array();
let arr = [];

Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

<strong>Create an Array</strong>
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length) // 3

<strong>Access (index into) an Array item</strong>
Array elements are numbered, starting with zero.
We can get an element by its number in square brackets:
let first = fruits[0]
// Apple

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

let last = fruits[fruits.length - 1]
// Banana

<strong>We can replace an element:</strong>
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

<strong>…Or add a new one to the array:</strong>
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

let fruits = []; // make an array
fruits[99999] = 5; // assign a property with the index far greater than its length
fruits.age = 25; // create a property with an arbitrary name


<strong>The total count of the elements in the array is its length:</strong>
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3

<strong>We can also use alert to show the whole array.</strong>
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum

<strong>Loop over an Array</strong>
let names = ['Amit', 'Sumit', 'Delip', 'Ganga', 'yamuna', 'Siri', 'Farhaad'];

<strong>normal Function</strong>
names.forEach(function (item, index, array){
  console.log(index, item);
});

<strong>Arrow Function</strong>
names.forEach((item, index, array) => console.log(index, item));


<strong>An array can store elements of any type.
For instance:
</strong>
  // mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

<strong>The ways to misuse an array:</strong>
Add a non-numeric property like arr.test = 5.
Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
Fill the array in the reverse order, like arr[1000], arr[999] and so on.

<strong>Loops</strong>
<img src="../assets/images/javascript/loops.png" style="max-width: 50%;" />
<strong>Length</strong>
<img src="../assets/images/javascript/length.png" style="max-width: 50%;" />

<strong>Multidimensional arrays</strong>
Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[1][1] ); // 5, the central element
</pre>
          </li>
        </ul>
        <h1>Array Methods</h1>
        <ul>
          <li>
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/
            <!-- <pre></pre> -->
          </li>
          <li>
            https://javascript.info/array-methods
          </li>
        </ul>
      </div>
    </div>
    <!-- Array Constructor and Literal -->
    <el-dialog
      title="Array Constructor and Literal"
      :visible.sync="arrayTypes"
      width="60%"
    >
      <span>
        <pre>
<strong>Array literal notation</strong>
Arrays can be created using the literal notation:

let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"

<strong>Array constructor with a single parameter</strong>
Arrays can be created using a constructor with 
a single number parameter. An array with its length property 
set to that number and the array elements are empty slots.

let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined

<strong>Array constructor with multiple parameters</strong>
If more than one argument is passed to the constructor,
a new Array with the given elements is created.

let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
        </pre>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="arrayTypes = false">Cancel</el-button>
      </span></el-dialog
    >
    <!-- Increase Length -->
    <el-dialog
      title="Increasing Array length"
      :visible.sync="increaseLength"
      width="60%"
    >
      <span>
        <pre>
When setting a property on a JavaScript array when the property 
is a valid array index and that index is outside the current 
bounds of the array, the engine will update the array's 
length property accordingly:

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
Increasing the length.

fruits.length = 10
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
Decreasing the length property does, however, delete elements.

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
This is explained further on the Array.length page.
                  </pre
        >
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="increaseLength = false">Cancel</el-button>
      </span></el-dialog
    >
    <!-- Common Operations Modal -->
    <el-dialog
      title="Common operations"
      :visible.sync="commonOperations"
      width="60%"
    >
      <span>
        <pre>
<strong>Create an Array</strong>
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2

<strong>Access (index into) an Array item</strong>
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

<strong>Loop over an Array</strong>
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

Fruits.forEach((item, index, array) => console.log(item, index)); // Arrow Function

<strong>Add to the end of an Array</strong>
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

<strong>Remove from the end of an Array</strong>
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

<strong>Remove from the front of an Array</strong>
let first = fruits.shift() // remove Apple from the front
// ["Banana"]

<strong>Add to the front of an Array</strong>
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

<strong>Find the index of an item in the Array</strong>
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1

<strong>Remove an item by index position</strong>
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

<strong>Remove items from an index position</strong>
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

<strong> Copy an Array</strong>
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
                  </pre>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="commonOperations = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commonOperations: false,
      increaseLength: false,
      arrayTypes: false
    };
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this dialog?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
  }
};
</script>
