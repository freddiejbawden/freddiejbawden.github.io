document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred#
    document.getElementById("gogogo").addEventListener("click", function(){
      var x = document.getElementById("marks").querySelectorAll("#score");
      let score = 0;
      for (var i = 0; i < x.length; i++) {
        score += x[i].value ? parseInt(x[i].value) : 0
        console.log(score)
      }
      var finalMark = document.getElementById("final-mark").innerHTML = score
      window.scrollTo(0,document.body.scrollHeight);
    });
  })
