export const API = {
    fetchBotAdmin: function () {
        return fetch(window.location.origin + "/portal/genericProxyRequest/?page=0&size=5&target_url=getBotDetails")
            .then(res => res.json())
            .then(
                (result) => result.response_obj.responseObject.content[0],
                (error) => errorHandlingService(error)
            )
    },
    unsplashAPI: function (pageNo) {
        return fetch(`https://api.unsplash.com/photos/?page=${pageNo}&per_page=20&client_id=cFm3As2nrxSQYJXB_eyFpFoYHTDBW0Bhjzj5_KnEnwY`)
            .then(res => res.json())
            .then(
                (result) => result,
                (error) => errorHandlingService(error)
            )
    }
};

function errorHandlingService(error) {
    console.log("error log", error)
}

