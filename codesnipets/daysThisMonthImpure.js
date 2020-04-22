const daysThisMonth = () => {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth(),
    start = new Date(y, m),
    end = new Date(y, m + 1, 1)

  return (end - start) / (1000 * 60 * 60 * 24)
}
