var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
const prompt = require("prompt");

prompt.start();
console.log("CRUD on clothes database using NodeJS and MongoDB\n");
console.log("1.Insert\n2.Update\n3.Delete\n4.View\n5.Exit\n");
prompt.get(["choice"], (err, result) => {
  if (err) {
    return onErr(err);
  }
  switch (result.choice) {
    case "1":
      console.log("INSERT");
      prompt.get(["RegNo", "name", "phn", "dept"], (err, result) => {
        if (err) {
          return onErr(err);
        }
        console.log("Data from user: \n");
        console.log("Reg No- " + result.RegNo);
        console.log("Name - " + result.name);
        console.log("phone no - " + result.phn);
        console.log("Department - " + result.dept);
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("Data");
          var obj = {
            RegNo: result.RegNo,
            name: result.name,
            phn: result.phn,
            dept: result.dept,
          };
          dbo.collection("table").insertOne(obj, (err, res) => {
            if (err) throw err;
            console.log("Inserted 1 document !! ");
            db.close();
          });
        });
      });
      break;
    case "2":
      console.log("UPDATE");
      prompt.get(["RegNo", "name", "phn", "dept"], (err, result) => {
        if (err) {
          return onErr(err);
        }
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("RegNo");
          var query = { RegNo: result.RegNo };
          var upd_val = {
            $set: {
              RegNo: result.RegNod,
              name: result.name,
              phn: result.phn,
              dept: result.dept,
            },
          };
          dbo.collection("RegNo").updateOne(query, upd_val, (err, res) => {
            if (err) throw err;
            if (res.matchedCount)
              console.log(res.modifiedCount + " RegNo document Updated!! ");
            else console.log("Key not Found !! ");
            db.close();
          });
        });
      });
      break;
    case "3":
      console.log("DELETE");
      prompt.get(["RegNo"], (err, result) => {
        if (err) return onErr(err);
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("Data");
          var query = { cloth_id: result.cloth_id };
          dbo.collection("table").deleteOne(query, (err, res) => {
            if (err) throw err;
            if (res.deletedCount)
              console.log(res.deletedCount + " RegNo document Deleted!! ");
            else console.log("Key not Found !! ");
            db.close();
          });
        });
      });
      break;
      case "4":
        console.log("VIEW of the Collection\n");
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
          if (err) throw err;
          var dbo = db.db("Data");
          dbo
            .collection("table")
            .find({})
            .toArray((err, res) => {
              if (err) throw err;
              console.log(res);
              db.close();
            });
        });
        break;
    default:
      console.log("EXIT");
  }
});

function onErr(err) {
  console.log(err);
  return 1;
}