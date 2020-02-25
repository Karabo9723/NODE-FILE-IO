let fs = require('fs')

class Visitor {
   constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant){
       
     this.fullName = fullName;
     this.age = age;
     this.dateOfVisit = dateOfVisit;
     this.timeOfVisit = timeOfVisit;
     this.comments = comments;
     this.nameOfAssistant = nameOfAssistant; 

   }
   save(){
    let nameWithUnderscore = this.fullName.replace(" ", "_")
    fs.writeFile("visitor_" + nameWithUnderscore + ".json", JSON.stringify(this,null,4),
        function(error) {
            if (error) {
                throw error
            }
        })
}

load() {
    let nameWithUnderscore = this.fullName.replace(" ", "_")
    fs.readFile("visitor_" + nameWithUnderscore + ".json", "UTF8", 
    function(error, data) {
        if (error) {
            throw error;
        } else {
            console.log(data)
        }
    })
}
}

let neo = new Visitor("neo mantse", 10, "20 March 2009", "20:00", "The place is cute", "Karabo")
neo.save();
neo.load();

module.exports = Visitor;
