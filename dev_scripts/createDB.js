conn = new Mongo();
db = conn.getDB("to-do");
db.Tasks.drop();
db.createCollection("Tasks");
db.Tasks.save({ _id: "5bd4c986a3849d23f887aecb", desc: "Do the dishes", checked: true, createdAt: (new Date(2018, 9, 25, 10, 33, 30)), lastModifiedAt: (new Date(2018, 9, 25, 10, 35, 47)) });