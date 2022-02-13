function factorial(n) {
  if ([0, 1].includes(n)) {
    return 1;
  }

  let result = n--;

  while (n) { result *= n--; }

  return result;
}
