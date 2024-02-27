// infer types (Implicit Types)
var userName = "VishnuMK";
// userName = 10 => Type 'number' is not assignable to type 'string'.
// Defining Types (Explicit Types)
var usersName = "VishnuMK";
var followers = 10000;
// followers = "VishnuMK" => Type 'string' is not assignable to type 'number'.
var isFollower = true;
var followersList = ["user1", "user2", "user3"];
// let followingList: string[] = ["user1", 10, "user3"] => Type 'number' is not assignable to type 'string'.
var userInfo = {
    name: "Vishnu",
    age: 20,
    isActive: true
}; // isPremium is optional
var userData = {
    name: "VishnuMK",
    age: 20,
    getName: function () {
        console.log(this);
    }
};
var adminData = {
    name: "VishnuMK",
    age: 22
};
