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

// Function

const getUserName = (userInfo: Detail): string => {
    return userInfo.name
}

type GetUserData = {
    name: string;
    age: number | string;
}

const getUserName2 = (userInfo: Detail): GetUserData => {
    return {
        name: userInfo.name,
        age: userInfo.age
    }
}

// Named Types

type StatusType = "pending" | "completed" | "rejected"

const currentStatus: StatusType = "pending"

// Function Overloading

function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

function add(num1: any, num2: any) {
    return num1 + num2
}

add(10, 10)
add("10", "10")

// Generics

function getAge<T>(age: T): T {
    return age
}

getAge<number>(22)
getAge<string>("22")

// enum

enum StatusTypes {
    PENDING = 100,
    COMPLETED,
    REJECTED
}

function getStatus(id: number, status: StatusTypes) {
    console.log(id + "==" + status);
}

getStatus(1000, StatusTypes.PENDING)

// as const

let myName = "VishnuMK" as const

//keyof typeof

const StatusTypeObj = {
    PENDING: "Pending",
    COMPLETED: "Completed",
    REJECTED: "Rejected"
} as const

function getOrderStatus(id: number, status: keyof typeof StatusTypeObj) {
    console.log(id + "==" + StatusTypeObj[status])
}

getOrderStatus(10, "COMPLETED")

// Utility Types

type Users = {
    name: string;
    age: number;
    salary: number;
}

type UsersReadOnlyName = {
    readonly name: string;
    age: number;
}

const userSample: UsersReadOnlyName = {
    name: "hey",
    age: 20
}

// userSample.name = "20" => Cannot assign to 'name' because it is a read-only property.

const userInfo1: Readonly<Users> = {
    name: "Vishnu",
    age: 22,
    salary: 1000
} // All fields are readonly

const usersInfo1: Partial<Users> = {
    name: "vishnu"
} // All fields are optional

const usersInfo2: Required<Users> = {
    name: "vishnu",
    age: 20,
    salary: 2000
} // All fields are required

const usersInfo3: Pick<Users, "name" | "age"> = {
    name: "vishnu",
    age: 22
}

const usersInfo4: Omit<Users, "salary"> = {
    name: "vishnu",
    age: 22
}

const statusCheck: Exclude<StatusType, "pending"> = "completed"

type Food = Record<string, any>

const food: Food = {
    name: "Chicken",
    price: 230
}