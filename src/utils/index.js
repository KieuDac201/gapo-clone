export function timeSince(date) {
  let milisecondsSum = Date.now() - date;

  let seconds = 1000;
  let minutes = 1000 * 60;
  let hours = 1000 * 60 * 60;
  let days = 1000 * 60 * 60 * 24;
  let months = 1000 * 60 * 60 * 24 * 30;
  let years = 1000 * 60 * 60 * 24 * 30 * 12;

  if (milisecondsSum < minutes) {
    return Math.floor(milisecondsSum / seconds) + " giây";
  } else if (milisecondsSum < hours) {
    return Math.floor(milisecondsSum / minutes) + " phút";
  } else if (milisecondsSum < days) {
    return Math.floor(milisecondsSum / hours) + " giờ";
  } else if (milisecondsSum < months) {
    return Math.floor(milisecondsSum / days) + " ngày";
  } else if (milisecondsSum < years) {
    return Math.floor(milisecondsSum / months) + " tháng";
  } else {
    return Math.floor(milisecondsSum / years) + " năm";
  }
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
