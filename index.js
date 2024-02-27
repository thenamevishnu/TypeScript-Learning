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
var userDetails = {
    name: "VishnuMK",
    age: 20
};
var adminDetails = {
    name: "VishnuMK",
    age: 22
};
var usersInfo = {
    name: "VishnuMK",
    age: 22
};
var userInfo2 = {
    name: "VishnuMK",
    age: 20
};
var userInfo3 = {
    name: "VishnuMK",
    age: "20"
};
// Function
var getUserName = function (userInfo) {
    return userInfo.name;
};
var getUserName2 = function (userInfo) {
    return {
        name: userInfo.name,
        age: userInfo.age
    };
};
var currentStatus = "pending";
function add(num1, num2) {
    return num1 + num2;
}
add(10, 10);
add("10", "10");
// Generics
function getAge(age) {
    return age;
}
getAge(22);
getAge("22");
// enum
var StatusTypes;
(function (StatusTypes) {
    StatusTypes[StatusTypes["PENDING"] = 100] = "PENDING";
    StatusTypes[StatusTypes["COMPLETED"] = 101] = "COMPLETED";
    StatusTypes[StatusTypes["REJECTED"] = 102] = "REJECTED";
})(StatusTypes || (StatusTypes = {}));
function getStatus(id, status) {
    console.log(id + "==" + status);
}
getStatus(1000, StatusTypes.PENDING);
// as const
var myName = "VishnuMK";
//keyof typeof
var StatusTypeObj = {
    PENDING: "Pending",
    COMPLETED: "Completed",
    REJECTED: "Rejected"
};
function getOrderStatus(id, status) {
    console.log(id + "==" + StatusTypeObj[status]);
}
getOrderStatus(10, "COMPLETED");
