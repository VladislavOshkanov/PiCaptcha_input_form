const url = 'http://18.217.255.16:8080';




export function getWord () {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return fetch(url + "/picture/random_word", {headers: headers})
        // .then(result => JSON.parse(result));
        .then(result => console.log(result));
}