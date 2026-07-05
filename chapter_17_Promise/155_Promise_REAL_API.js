let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })
});

apiCall.then(function (response) {   // .then is an alternate name of resolve.
    console.log(response.status);


})

//  .then runs only when the promise resolves successfully.