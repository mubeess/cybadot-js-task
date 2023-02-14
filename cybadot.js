const Users = [
  {
    name: "Mubarak Ibrahim",
    age: 28,
    job: "Frontend developer",
    country: "Nigeria",
    hobby: "Footbal",
  },
  {
    name: "Damilola Oguniyi",
    age: 25,
    job: "Backend developer",
    country: "Nigeria",
    hobby: "Music",
  },
  {
    name: "Emmanuel Prince",
    age: 23,
    job: "Backend developer",
    country: "Nigeria",
    hobby: "Traveling",
  },
  {
    name: "Musa Isa",
    age: 26,
    job: "Frontend developer",
    country: "Nigeria",
    hobby: "Dancing",
  },
  {
    name: "Isaac Ajayi",
    age: 22,
    job: "Devops engineer",
    country: "Cameroon",
    hobby: "Footbal",
  },
];

function findAgesBetween22And25() {
  const filteredUsers = Users.filter(
    (user) => user.age >= 22 && user.age <= 25
  );
  return filteredUsers;
}

function findBackendDevelopers(users) {
  const filteredUsers = users.filter((user) => user.job == "Backend developer");
  return filteredUsers
}

const users=findAgesBetween22And25()
const backendDevelopers=findBackendDevelopers(users)

console.log(backendDevelopers,users)
