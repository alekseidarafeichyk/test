const url = 'https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json';

function getData() {
    return axios.get(url)
        .then(response => {
            return response.data.data;
        });
}