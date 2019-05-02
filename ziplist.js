function zipList(list1, list2) {
  const newList = [];
  let j = 0;
  for (let i = 0; i < (2 * list1.length); i++) {
    if (i % 2 === 0) {
      newList[i] = list1[j];
    } else {
      newList[i] = list2[j];
      j++;
    }
  }
  return newList;
}

// console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(list1, list2) {
  let newList = [];
  newList = _.zip(list1, list2);
  return _.flatten(newList);
}

// console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
