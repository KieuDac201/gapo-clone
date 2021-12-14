import likeReact from "./like-reaction.png";
import hahaReact from "./haha-reaction.png";
import angryReact from "./angry-reaction.png";
import loveReact from "./love-reaction.png";
import sadReact from "./sad-reaction.png";
import wowReact from "./wow-reaction.png";

import likeIcon from "./like-circle.svg";
import hahaIcon from "./haha-reaction.svg";
import angryIcon from "./angry-reaction.svg";
import wowIcon from "./wow-reaction.svg";
import loveIcon from "./heart-reaction.svg";
import sadIcon from "./sad-reaction.svg";

import settingIcon from "./icon-setting.svg";
import userEditIcon from "./icon-edit-profile.svg";
import starIcon from "./icon-favorite.svg";
import flagIcon from "./icon-fanpage.svg";
import logOutIcon from "./icon-logout.svg";

export const objectReactIcon = {
  haha: hahaIcon,
  wow: wowIcon,
  like: likeIcon,
  sad: sadIcon,
  love: loveIcon,
  angry: angryIcon,
};

export const userOptionList = [
  {
    text: "Cài đặt",
    img: settingIcon,
  },
  {
    text: "Chỉnh sửa thông tin",
    img: userEditIcon,
  },
  {
    text: "Chủ đề yêu thích",
    img: starIcon,
  },
  {
    text: "Trang của bạn",
    img: flagIcon,
  },
];
export {
  likeReact,
  hahaReact,
  angryReact,
  loveReact,
  sadReact,
  wowReact,
  logOutIcon,
};
