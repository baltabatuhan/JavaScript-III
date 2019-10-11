/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding 
----value will be window object.
* 2.Implicit Binding 
----when we use with dot value will be our object.
* 3. New Binding
----value will be assigned element.
* 4. Explicit Binding(call or apply)
----value will be assigned (switch).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this); (its like all language.)

// Principle 2

// code example for Implicit Binding

const adver = {
  intr: "Im using",
  speak: function() {
    return `${this.intr} Apple.`;
  }
};

console.log(adver.speak());

// Principle 3

// code example for New Binding
function PhoneModel(greeter) {
  this.using = "Im using ";
  this.greeter = greeter;
  this.model = function() {
    console.log(this.using + this.greeter);
    console.log(this);
  };
}

const xr = new PhoneModel("xr");
const xs = new PhoneModel("xs");

xr.model();
xs.model();

// Invoke Methods on our objects

// Principle 4

xr.model.call(xs);
xs.model.apply(xr);

// code example for Explicit Binding
