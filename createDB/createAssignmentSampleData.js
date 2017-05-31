db = db.getSiblingDB('ssDB')
db.createCollection('assignments')
assignmentCollection = db.getCollection("assignments")
assignmentCollection.remove({})
assignmentCollection.insert(
{	  name: "Assignment 4",
	  description: "Grocery List for home.",
	  assignId: 4,
	  created: "04-27-2015",
	  instructor: "benw"
})
assignmentCollection.insert(
{
	  name: "Assignment 3",
	  description: "Grocery List for home.",
	  assignId: 3,
	  created: "04-27-2015",
	  instructor: "benw"
}
)
assignmentCollection.insert(
{
	  name: "Assignment 2",
	  description: "Grocery List for home.",
	  assignId: 2,
	  created: "04-27-2015",
	  instructor: "benw"
}
)
assignmentCollection.insert(
{
	  name: "Assignment 1",
	  description: "Grocery List for home.",
	  created: "04-27-2015",
	  instructor: "benw"
}
)
