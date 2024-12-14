"use strict";
// Numerice ENum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
// Custom Enum
var Status;
(function (Status) {
    Status[Status["active"] = 1] = "active";
    Status[Status["inactive"] = 0] = "inactive";
})(Status || (Status = {}));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
// Enum with function
function getPermissions(role) {
    switch (role) {
        case Role.Admin:
            return "Full access";
        case Role.User:
            return "Limited access";
        case Role.Guest:
            return "Read-only access";
    }
}
console.log(getPermissions(Role.User));
console.log(Direction);
console.log(Status.active);
