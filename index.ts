// infer types (Implicit Types)

let userName = "VishnuMK"
// userName = 10 => Type 'number' is not assignable to type 'string'.

// Defining Types (Explicit Types)

let usersName: string = "VishnuMK"
let followers: number = 10_000
// followers = "VishnuMK" => Type 'string' is not assignable to type 'number'.
let isFollower: boolean = true
let followersList: string[] = ["user1", "user2", "user3"]
// let followingList: string[] = ["user1", 10, "user3"] => Type 'number' is not assignable to type 'string'.
let userInfo: { name: string, age: number, isActive: boolean, isPremium?: boolean } = {
    name: "Vishnu",
    age: 20,
    isActive: true
} // isPremium is optional

// Interface

interface Details {
    name: string;
    age: number;
}

let userDetails: Details = {
    name: "VishnuMK",
    age: 20
}

let adminDetails: Details = {
    name: "VishnuMK",
    age: 22
}

// Type

type Info = {
    name: string;
    age: number;
}

let usersInfo: Info = {
    name: "VishnuMK",
    age: 22
}

// Union

interface Detail {
    name: string;
    age: number | string;
}

let userInfo2: Detail = {
    name: "VishnuMK",
    age: 20
}

let userInfo3: Detail = {
    name: "VishnuMK",
    age: "20"
}

