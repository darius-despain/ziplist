function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(list1, list2) {
  let newlist = [];
  newlist = _.zip(list1, list2);
  return _.flatten(newlist);
}

console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
