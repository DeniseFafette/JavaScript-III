/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. (global binding) called in the global points to the window
* 2. (implicit binding) this points to the object before the dot when a function is called by a preceeding dot - 
* 3. (new binding) constructor function is used points this to the object - that is created and returned by that constructor function
* 4. (explicit binding) call () apply() methods are explicitly defined and set what this points to
*
* write out a code example of each explanation above
*/

// Principle 1 -  code example for Window Binding

function celebrate(){
    console.log(this.pretzel);
}
    
let pretzel = '🥨';
    
    celebrate();


// Principle 2 -  code example for Implicit Binding

let mySoul = {
      country: 'France',
      city: 'Paris',
      site: '🎠'
      travel: function(){
        console.log(this.site);
      }
    }

    mySoul.travel();


// Principle 3 - code example for New Binding

function Role(cohort){
    this.role = cohort;
  }
  
  let buildWeekRoles = new Role('UX Engineer');
  
  console.log(`My role is ${buildWeekRoles.role}`);

// Principle 4 - code example for Explicit Binding

function buildWeek(){
    console.log(`${this.name} is the ${this.role} for the ${this.product} project!`);
  }
  
  const teamate ={
    name: 'Denise',
    role: 'Founder',
    project: 'Firefly'
  }
  
  buildWeek.call(teamate);