// Numerice ENum
enum Direction {
    up,
    down,
    left,right
}

// Custom Enum
enum Status {
    active = 1,
    inactive = 0
}

enum Role {
    Admin,
    User,
    Guest
}
// Enum with function
function getPermissions(role: Role) {
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

