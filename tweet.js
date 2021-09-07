const tweetform=document.querySelector("#tweetform");
const ul=document.querySelector('#ul');
tweetform.addEventListener('submit',function (e) {
    e.preventDefault();
    const username = tweetform.elements.username.value;
    const tweet=tweetform.elements.tweet.value;
    addTweet(username,tweet);
    tweetform.elements.username.value="";
    tweetform.elements.tweet.value="";

   
});
const addTweet=(username,tweet)=>{
    const newTweet=document.createElement('li');
    const btag=document.createElement('b');
    btag.append(username);
    newTweet.append(btag);
    newTweet.append(`- ${tweet}`);
    console.log(newTweet);
    ul.append(newTweet);


}