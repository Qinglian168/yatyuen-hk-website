const fs = require('fs');

// Read products.js
let content = fs.readFileSync('js/products.js', 'utf-8');

// Product IDs in order
const productIds = [
  'hp-01','hp-02','hp-03','hp-04','hp-05','hp-06','hp-07','hp-08','hp-09','hp-10',
  'dell-01','dell-02','dell-03','dell-04','dell-05','dell-06','dell-07','dell-08','dell-09','dell-10',
  'huawei-01','huawei-02','huawei-03','huawei-04','huawei-05','huawei-06','huawei-07','huawei-08','huawei-09','huawei-10',
  'tplink-01','tplink-02','tplink-03','tplink-04','tplink-05','tplink-06','tplink-07','tplink-08','tplink-09','tplink-10',
  'aruba-01','aruba-02','aruba-03','aruba-04','aruba-05','aruba-06','aruba-07','aruba-08','aruba-09','aruba-10',
  'juniper-01','juniper-02','juniper-03','juniper-04','juniper-05','juniper-06','juniper-07','juniper-08','juniper-09','juniper-10',
  'h3c-01','h3c-02','h3c-03','h3c-04','h3c-05','h3c-06','h3c-07','h3c-08','h3c-09','h3c-10'
];

let i = 0;
content = content.replace(/id: '([^']+)'/g, (match) => {
  if (i < productIds.length) {
    const imagePath = 'assets/products/' + productIds[i] + '.png';
    const replacement = match + ',\n        image: \'' + imagePath + '\'';
    i++;
    return replacement;
  }
  return match;
});

fs.writeFileSync('js/products.js', content, 'utf-8');
console.log('Done! Added image paths to all', i, 'products');
