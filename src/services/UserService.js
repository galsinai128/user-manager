const NUM_OF_AVATARS = 4
var defultUsers =
    [
        {
            "id": "01234",
            "firstName": "Carina",
            "lastName": "Smith",
            "birthDate": 457694903479,
            "profileImage": "./profile-image01.png"
        },
        {
            "id": "12345",
            "firstName": "Destiny",
            "lastName": "Leal",
            "birthDate": 773224103479,
            "profileImage": "./profile-image02.png"
        },
        {
            "id": "21345",
            "firstName": "Agatha",
            "lastName": "Sheppard",
            "birthDate": 675937703479,
            "profileImage": "./profile-image03.png"
        },
        {
            "id": "12435",
            "firstName": "Kester",
            "lastName": "Cruz",
            "birthDate": 365506103479,
            "profileImage": "./profile-image04.png"
        },
        {
            "id": "12356",
            "firstName": "Roisin",
            "lastName": "Hobbs",
            "birthDate": 1142501303479,
            "profileImage": "./profile-image01.png"
        }
    ]




//Load users from storage
var users = loadFromStorage() || defultUsers;

//CRUD
function getUsers() {
    return users;
}

function getUserById(id) {
    const user = users.find(user => user.id === id)
    if (user) return user;
}

function addUser(user) {
    var date = new Date(user.birthDate)
    user.birthDate = date.getTime()
    user.id = idGen()
    user.profileImage = imgGen()
    users.unshift(user);
    saveToStorage(users)
    return user;
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users.splice(index, 1)
        saveToStorage(users)
    }
}

function sortBy(key){
    return users.sort(function(a, b){
        var aVal = a[key].toLowerCase()
        var bVal = b[key].toLowerCase()
        if(aVal < bVal) return -1;
        if(aVal > bVal) return 1;
        return 0;
    })
}



function formatted_date(t)
{
    var a = new Date(t);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}



export default {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    formatted_date,
    sortBy
}


function saveToStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function loadFromStorage() {
    return JSON.parse(localStorage.getItem("users"));
}

function idGen() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function imgGen() {
    switch (getRandomInt(1, NUM_OF_AVATARS + 1)) {
        case 1:
            return './profile-image01.png'
        case 2:
            return './profile-image02.png'
        case 3:
            return './profile-image03.png'
        case 4:
            return './profile-image04.png'
    }
}

