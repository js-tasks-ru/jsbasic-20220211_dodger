function showSalary(users, age) {
  let result = '';

  users
    .filter(user => user.age <= age)
    .forEach((user, index, array) => {
      result += `${user.name}, ${user.balance}`;

      if (index !== array.length - 1) {
        result += '\n';
      }
    });

  return result;
}
