function randomReview(lastNum) {
    let random = Math.floor(Math.random() * 4);
    //
    while(random === lastNum){
        random = Math.floor(Math.random() * 4);
    };
    return random;
};

module.exports = randomReview;