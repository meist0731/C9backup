// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment   = require("./models/comment");

// var data = [
// 	{name:"Cloud's Rest",
// 	 image:"https://images.pexels.com/photos/1414059/pexels-photo-1414059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
// 	description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
// 	},
// 	{name:"Desert Mesa",
// 	 image:"https://images.pexels.com/photos/2419278/pexels-photo-2419278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
// 	description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
// 	},
// 	{name:"Puppy home",
// 	 image:"https://images.pexels.com/photos/1839753/pexels-photo-1839753.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
// 	description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
// 	}
	
// ]
// function seedDB(){
//    //Remove all campgrounds
//    Campground.deleteMany({}, function(err){
//         if (err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.deleteMany({}, function(err) {
//             if (err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//             //add a few campgrounds
//             data.forEach(function(seed){
//                 Campground.create(seed, function(err, campground){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This place is great, but I wish there was internet",
//                                 author:{
//                                     id : "588c2e092403d111454fff76",
//                                     username: "Jack"
//                                 }
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     campground.comments.push(comment);
//                                     campground.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         })
//     }); 
//     //add a few comments
// }
 
// module.exports = seedDB;