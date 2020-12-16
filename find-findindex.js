function findUserByUsername(usersArray, username) {
  return usersArray.find((objUser) => {
    return objUser.username === username;
  });
};

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  });
  if(foundIndex === -1) return;
    return usersArray.splice(foundIndex,1)[0];
};
