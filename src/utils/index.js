export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút";
  }
  return Math.floor(seconds) + " giây";
}

export function handleSumReacts(reacts) {
  let sum = 0;
  for (let react in reacts) {
    sum += reacts[react].length;
  }
  return sum;
}

export function handleReactsList(reacts) {
  // {
  //   id: "1",
  //   uid: "asdsadasdad",
  //   nameAuthor: "dac",
  //   imgAuthor:
  //     "https://cdnmedia.thethaovanhoa.vn/Upload/PQgc44ci4D5b7WtAo06jg/files/ld00.jpg",
  //   react: "like",
  // },
  var obj = {};
  // for (let react in reacts) {
  //   if (reacts[react].length != 0) {
  //     sortable.push([react, reacts[react].length]);
  //   }
  // }
  reacts.forEach((react) => {
    if (react.react) {
      obj[react.react] = obj[react.react] ? obj[react.react] + 1 : 1;
    }
  });
  const sortable = Object.entries(obj);

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable.slice(0, 3);
}
