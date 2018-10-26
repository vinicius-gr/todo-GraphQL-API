conn = new Mongo();
db = conn.getDB("to-do");
db.Tasks.drop();
db.createCollection("Tasks");
db.Tasks.save({ desc: "Do the dishes", checked: true, createdAt: (new Date(2018, 9, 25, 10, 33, 30)), lastModifiedAt: (new Date(2018, 9, 25, 10, 35, 47)) });