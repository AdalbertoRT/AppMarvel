export const duplicatedRemove = arr => {
  try {
    const dataSort = arr.sort((a, b) => {
      a = new Date(a.modified);
      b = new Date(b.modified);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    const data = [];
    dataSort.forEach(item => {
      let duplicated =
        data.findIndex(el => {
          return item.id == el.id;
        }) > -1;

      if (!duplicated) {
        data.push(item);
      }
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
