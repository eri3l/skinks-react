import myData from './data.json';

export const model = myData;

export function filter(query) {
  var res = [];
  model.records.forEach(item => {
    if (
      (query.site === '' || item.Site === query.site) &&
      (query.cover === '' || item.Cover === query.cover) &&
      (item.SVL >= query.svl[0] && item.SVL <= query.svl[1]) &&
      (item.VTL >= query.vtl[0] && item.VTL <= query.vtl[1]) &&
      (item.Weight >= query.weight[0] && item.Weight <= query.weight[1])
    ) {
      item.imageCount = 3;
      res.push(item);
    }
  });
  return res;
};