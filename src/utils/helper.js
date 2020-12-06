const handleDate = (datetime) => {
  let d = new Date(datetime);
  return d
    .toString()
    .split(' ')
    .splice(0, 5)
    .join(' ')
    .split(':')
    .splice(0, 2)
    .join(':');
};
export {handleDate};
