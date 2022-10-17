import {updateObject} from './utility';
const isloggedin = (state, action) => {
  return updateObject(state, {isLoggedIn: action.value});
};
const AccessToken = (state, action) => {
  return updateObject(state, {AccessToken: action.value});
};
const Articles = (state, action) => {
  return updateObject(state, {Articles: action.value});
};
const moreArticles = (state, action) => {
  let Articles = [...state.Articles];
  let temp = action.value;
  for (let i = 0; i < temp.length; i++) {
    Articles.push(temp[i]);
  }

  return updateObject(state, {Articles: Articles});
};
const search = (state, action) => {
  let Articles = [...state.Articles];
  let SearchArticles = [];
  let temp = action.value;
  for (let i = 0; i < Articles.length; i++) {
    if (
      Articles[i].abstract.includes(temp) ||
      Articles[i].lead_paragraph.includes(temp)
    ) {
      SearchArticles.push(Articles[i]);
    } else {
      if (temp == '') {
        SearchArticles.push(Articles[i]);
      }
    }
  }

  return updateObject(state, {SearchArticles: SearchArticles});
};
export {isloggedin, AccessToken, Articles, moreArticles,search};
