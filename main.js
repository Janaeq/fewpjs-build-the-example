// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.className = "hidden"
modal.hidden = true

const likes = Array.prototype.slice.call(document.getElementsByClassName('like-glyph'))

likes.forEach(heart => {
  heart.addEventListener('click', (e) => {
    mimicServerCall()
      .then(like => {
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart")
          heart.innerText = EMPTY_HEART
        }
        else {
          heart.className = "activated-heart"
          heart.innerText = FULL_HEART
        }
      })
      .catch(error => {
        modal.hidden = false
        setTimeout(e => {
          modal.hidden = true
        }, 4000)
      })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
