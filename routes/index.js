// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;



// // var  count = 0
// //  myAge = 200
//  myName = 'Np'
// console.log(myName)
// document.getElementById("count").innerText = 5

// let countEl =  document.getElementById("count-el")
// console.log(countEl)
//let saveEl = document.getElementById("save-el")
//let countEl = document.getElementById("count-el")
//const likeCount = document.getElementById('like-count')
//let shareParagrah = document.getElementById("shared")

// let count = 0

// function Share() {
// //  count += 1
// //  likeCount.innerText = count
//  shareParagrah.textContent = "Do you Want To Share The IMG?"
// }

// function Comments() {
//   let countStr = count + " - "
//   saveEl.textContent = CommentBox
 
// }
{/* <form action="/" method="post">
<div>
<textarea name=" " id=" " style="font-family:sans-serif;font-size:1.2em;">
Hey... say something!
</textarea>
</div>
<input type="submit" value="Submit"></input>
</form> */}

// function Like() {
//   count += 1
//   likeCount.innerText = count
// }



// let name = "NP"
// let greeting = "Hi my name is"

// let myGreeting = greeting + "," + name + "!"

// console.log(myGreeting)









let num1 = 0
let num2 = 0
//document.getElementById("sum-el").textContent = num1
//document.getElementById("sum-el").textContent = num2


function add() {
  let results = num1 + num2
  let sumEl = document.getElementById("sum-el")
  sumEl.textContent = 'sum:' + results
}

function subtract() {
  let results = num1 - num2
  let sumEl = document.getElementById("sum-el")
  sumEl.textContent = 'sum:' + results
}

function divide() {
  let results = num1 / num2
  let sumEl = document.getElementById("sum-el")
  sumEl.textContent = 'sum:' + results
}

function multiply() {
  let results = num1 * num2
  let sumEl = document.getElementById("sum-el")
  sumEl.textContent = 'sum:' + results
}

function clearFields() {
  let num2 = document.getElementById('num2')
  num2.value = ""
  let num1 = document.getElementById('num1')
  num1.value = ""
  // document.getElementById("clearFields").reset() 
  // document.getElementById("clearFields").textContent =  document.getElementById('num2').textContent
   
}
function one() {
  // console.log(document.getElementById('one-btn').textContent)
  document.getElementById('num1').textContent = document.getElementById('one-btn').textContent
  num1 = document.getElementById('one-btn').textContent
  
}

function two() {
  // console.log(document.getElementById('two-btn').textContent)
  document.getElementById('num2').textContent = document.getElementById('two-btn').textContent
  num2 = document.getElementById('two-btn').textContent
}

function Three() {

document.getElementById('num2').textContent = document.getElementById('Three-btn').textContent
  num2 = document.getElementById('Three-btn').textContent
}

function Four() {

  document.getElementById('num2').textContent = document.getElementById('Four-btn').textContent
    num2 = document.getElementById('Four-btn').textContent
  }

  function Five() {

    document.getElementById('num2').textContent = document.getElementById('Five-btn').textContent
      num2 = document.getElementById('Five-btn').textContent
    }

    function Six() {

      document.getElementById('num2').textContent = document.getElementById('Six-btn').textContent
        num2 = document.getElementById('Six-btn').textContent
      }

      function Seven() {

        document.getElementById('num2').textContent = document.getElementById('Seven-btn').textContent
          num2 = document.getElementById('Seven-btn').textContent
        }

        function Eight() {

          document.getElementById('num2').textContent = document.getElementById('Eight-btn').textContent
            num2 = document.getElementById('Eight-btn').textContent
          }

          function Nine() {

            document.getElementById('num2').textContent = document.getElementById('Nine-btn').textContent
              num2 = document.getElementById('Nine-btn').textContent
            }

            function Zero() {

              document.getElementById('num2').textContent = document.getElementById('Zero-btn').textContent
                num2 = document.getElementById('Zero-btn').textContent
              }