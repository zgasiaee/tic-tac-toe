// $(document).ready(function () {
  var count = 0

  $('.btn').click(function () {
    count = count + 1

    var icon1 = $('<i></i>').addClass('fa fa-times red')
    var icon2 = $('<i></i>').addClass('fa fa-circle-notch blue')

    if (!$(this).children('i').hasClass('fa')) {
      if (count % 2 == 0) {
        $(this).append(icon1)
      } else {
        $(this).append(icon2)
      }
    }

    var answer = check()

    if (answer == true) {
      $('#myModal').modal('show')
    }
  })

  function check() {
    var b1 = $('#1').children('i')
    var b2 = $('#2').children('i')
    var b3 = $('#3').children('i')
    var b4 = $('#4').children('i')
    var b5 = $('#5').children('i')
    var b6 = $('#6').children('i')
    var b7 = $('#7').children('i')
    var b8 = $('#8').children('i')
    var b9 = $('#9').children('i')

    var win = [
      [b1, b2, b3],
      [b4, b5, b6],
      [b7, b8, b9],
      [b1, b4, b7],
      [b2, b5, b8],
      [b3, b6, b9],
      [b1, b5, b9],
      [b3, b5, b7],
    ]

    for (var row = 0; row < win.length; row++) {
      var RedItem1 = win[row][0].hasClass('red')
      var RedItem2 = win[row][1].hasClass('red')
      var RedItem3 = win[row][2].hasClass('red')
      var BlueItem1 = win[row][0].hasClass('blue')
      var BlueItem2 = win[row][1].hasClass('blue')
      var BlueItem3 = win[row][2].hasClass('blue')

      if (RedItem1 && RedItem2 && RedItem3) {
        alert('Congratulation! X won')
        return true
      } else if (BlueItem1 && BlueItem2 && BlueItem3) {
        alert('Congratulation! O won')
        return true
      }
    }
  }
// })
