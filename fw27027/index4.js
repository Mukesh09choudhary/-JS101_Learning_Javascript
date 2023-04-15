// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration
let card = "REPORT CARD";
let studentName="Mukesh";
let school="SVAVM"
let grade="B";
let section="A";
let rollNo=60;
let mathsMarks=80;
let scienceMarks=90;
let englishMarks=80;
let totalMarks= mathsMarks+scienceMarks+englishMarks;
console.log('                                  ');
console.log('|----------'+card+'----------|');
console.log('|-------------------------------|');
console.log('| School : '+school+'  | Section : '+section+' |');
console.log('|-------------------------------|');
console.log('| Name   : '+studentName+' | Grade : '+grade+'   |');
console.log('|-------------------------------|');
console.log('| Roll no. :    '+rollNo+'              |');
console.log('|-------------------------------|');
console.log('| Subjects    |      Marks      |');
console.log('|-------------------------------|');
console.log('| Maths       |       '+mathsMarks+'        |');
console.log('| Science     |       '+scienceMarks+'        |');
console.log('| English     |       '+englishMarks+'        |');
console.log('|-------------------------------|');
console.log('| Total Marks |   '+totalMarks+'           |');
console.log('|-------------------------------|');
console.log('                                  ');