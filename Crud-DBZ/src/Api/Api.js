export const Api = {

  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

  authorization: 'inunes@blueedtech.com.br',

  createUrl: () => Api.baseUrl + '/',

  deleteAllUrl: () => Api.baseUrl + '/',

  //FAZER UM POST PARA CADASTRAR DADOS
  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: 'POST',

      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json'
      }),
      
      body: JSON.stringify(body)
    })
  },

  //FAZER UM DELETE PARA APAGAR TODOS OS DADOS
  buildApiDeleteRequest: url => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers ({
        Authorization: Api.authorization
      })
    })
  }
}