const groupByProperty = (arr: any, property: any) =>
  arr.reduce((groupArr: any, item: any) => {
    let key = item[property];
    if (!groupArr[key]) groupArr[key] = [];
    groupArr[key].push(item);
    return groupArr;
  }, {});

export { groupByProperty };
