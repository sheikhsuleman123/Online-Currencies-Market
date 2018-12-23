/** 
@param {object} response

*/
export const handleResponce = (response) => {

    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
}