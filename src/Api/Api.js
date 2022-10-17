/**
 * Get Function
 * @param URL
 */
 const get = async (url,token) => {
    try {
      const response = await fetch(url,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      const json = await response.json();
      return {
        error: false,
        message: json,
      };
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  };
  
  /**
   * Post Funcion
   * @param URL
   * @param body
   */
  const post = async (url, body) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      return {
        error: false,
        message: json,
      };
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  };
  
  export {get, post};
  