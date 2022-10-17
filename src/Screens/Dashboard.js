import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  AppState,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {get} from '../Api/Api';
import {getArticles, getArticlesPage} from '../Api/Urls';
import Article from '../Components/Article';
import {Loading} from '../Components/Loading';
import Navbar from '../Components/Navbar';
import {colors} from '../Library/Colors';
import {toast} from '../Library/Function';
import {
  close,
  icon,
  logo,
  namelogo,
  placeholder,
  search,
} from '../Library/Icons';
import {sizeFont} from '../Library/Styles';
import {titleLanguages} from '../Library/Variables';
import {ARTICLES, ISLOGGEDIN, LOADMOREARTICLES} from '../Redux/actionTypes';
function Dashboard() {
  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.AccessToken);
  const Articles = useSelector(state => state.Articles);
  const SearchArticles = useSelector(state => state.SearchArticles);
  const [loaded, setLoded] = useState(false);
  const [Footer, setFooter] = useState('flex');
  const [LoadMorePage, setLoadMorePage] = useState(1);
  const [input,setInput]=useState('')
  let first = 'https://static01.nyt.com/';
  useEffect(() => {
    AppState.addEventListener('change', nextAppState => {
      dispatch({type: ARTICLES, value: []});
      dispatch({type: ISLOGGEDIN, value: false});
    });
    fetchData();
  }, [Articles]);
  const fetchData = async () => {
    if (Articles.length == 0) {
      let resp2 = await get(getArticles, accessToken);
      dispatch({type: ARTICLES, value: resp2.message.response.docs});
    }
    setLoded(true);
  };

  const LoadMoreArticles = () => {
    setLoadMorePage(LoadMorePage + 1);
  };

  useEffect(() => {
    if (LoadMorePage > 1) {
      async function fetchData() {
        const resp = await get(getArticlesPage(LoadMorePage), accessToken);
        if (resp.error == true) {
          toast(titleLanguages.en.Login.CheckInternet);
          if(LoadMorePage ==2 ){
            setLoadMorePage(1);
          }
          
        } else {
          let arr = resp.message.response.docs;
          if(LoadMorePage ==2 && input.length >0){
            setLoadMorePage(1);
            setFooter('none')
          }else
          {
            if (arr.length == 0 ) {
              console.log(LoadMorePage)
              console.log('empty array')
              setFooter('none');
            } else {
              dispatch({type: LOADMOREARTICLES, value: arr});
            }
          }

        }
      }
      fetchData();
    }
  }, [LoadMorePage]);


  const changeInput = (value) =>{
    setInput(value)
  }
  useEffect(()=>{
  },[input])
  return (
    <>
      <View style={styles.maincontainer}>
        <Navbar inputSearch={changeInput} />
        {loaded ? (
          <FlatList
            style={styles.flatList}
            onEndReached={LoadMoreArticles}
            data={SearchArticles.length ==0?Articles:SearchArticles}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <Article
                  image={
                    item.multimedia[0] == undefined
                      ? item.multimedia[0]
                      : first.concat(item.multimedia[0].url)
                  }
                  content={item.lead_paragraph}
                  title={item.abstract}
                />
              );
            }}
            ListFooterComponent={
              <View style={[styles.Footer, {display: Footer}]}>
                <Loading
                  activityColor={colors.secondary_color}
                  title={titleLanguages.en.HomeScreen.LoadMore}
                  size="small"
                  Swidth="100%"
                  Sheight="100%"
                  bgColor="none"
                />
              </View>
            }
          />
        ) : (
          <Loading
            activityColor={colors.primary_color}
            size="large"
            Swidth="100%"
            Sheight="100%"
            bgColor="none"
          />
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    backgroundColor: colors.white,
    height: '100%',
  },

  flatList: {
    width: '100%',
    paddingHorizontal: '6%',
  },
  Footer: {
    width: '20%',
    height: 50,
    alignSelf: 'center',
  },
});
export default Dashboard;
