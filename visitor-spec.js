let Visitor = require("../src/visitor")



describe("Testing the save() function", function(){
let fs = require("fs")
let neo = new Visitor("neo mantse", 10, "20 March 2009", "20:00", "The place is cute", "Karabo")

    // neo.save()
        it("checks if the save() function is defined", function(){
            expect(neo.save).toBeDefined();
        })
        it("checks if save() has comments", function(){
            expect(neo.comments).toBe("The place is cute");
        })
        it("checks the value of age for neo", function() {
            expect(neo.age).toBe(10);
        })
})
