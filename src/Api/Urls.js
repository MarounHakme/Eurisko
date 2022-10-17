const baseurl = 'http://34.245.213.76:3000';
const LoginUrl = () => `${baseurl}/auth/signin`; // Post Request
const getArticles = `${baseurl}/articles?page=1` //Get Request

const getArticlesPage = (e)=> `${baseurl}/articles?page=${e}`
export {baseurl, LoginUrl,getArticles,getArticlesPage};
