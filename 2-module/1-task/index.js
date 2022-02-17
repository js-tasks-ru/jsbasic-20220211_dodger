function sumSalary(salaries) {
  return Object.values(salaries).reduce((sum, value) => {
    return ((typeof value !== 'number') || ([Infinity, -Infinity, NaN].includes(value))) ?
      sum :
      sum + value;
  }, 0);
}
