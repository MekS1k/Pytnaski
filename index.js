var arr = [1, 2, 3, 4, 5, 6,7,8]//массив чисел
var arr2 = []
var buttons = document.querySelectorAll('.button')

function getrandom() //функция для получения рандомного числа
{
  while (true)// бесконечный цикл
  {
    var num = Math.floor(Math.random() * arr.length) // делаем случайное число
    if (!arr2.includes(num))//условие если массив не содержит выпавшее число
    {
      arr2.push(num)//если не содержит, то записываем его туда
      return num//возвращаем число
    }
  }
}

function pushrand() //записываем число в кнопку
{
  buttons.forEach(element => //перебираем все кнопки
  {
    let random = getrandom() // присваиваем переменной рандомные числа
    element.innerHTML = arr[random] // присваиваем тексту кнопки рандомный выпавший индекс
  })
  arr2 = [];
}

 function swap(index) // функция для перемещения кнопок
{
    switch(index)
    {
      case 0:
        var b0 = document.getElementById("b0")
        var b1 = document.getElementById("b1")
        var b3 = document.getElementById("b3")
        if(b1.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b1.innerHTML = b0.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b0.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b3.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b3.innerHTML = b0.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b0.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        
          break
      case 1:
        var b0 = document.getElementById("b0")
        var b1 = document.getElementById("b1")
        var b2 = document.getElementById("b2")
        var b4 = document.getElementById("b4")
        if(b0.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b0.innerHTML = b1.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b1.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b2.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b2.innerHTML = b1.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b1.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b4.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b4.innerHTML = b1.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b1.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        break
        case 2:
        var b2 = document.getElementById("b2")
        var b1 = document.getElementById("b1")
        var b5 = document.getElementById("b5")
        if(b1.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b1.innerHTML = b2.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b2.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b5.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b5.innerHTML = b2.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b2.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        
          break
          case 3:
        var b0 = document.getElementById("b0")
        var b6 = document.getElementById("b6")
        var b3 = document.getElementById("b3")
        var b4 = document.getElementById("b4")
        if(b0.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b0.innerHTML = b3.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b3.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b6.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b6.innerHTML = b3.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b3.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b4.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b4.innerHTML = b3.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b3.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        break
        case 4:
        var b1 = document.getElementById("b1")
        var b3 = document.getElementById("b3")
        var b5 = document.getElementById("b5")
        var b4 = document.getElementById("b4")
        var b7 = document.getElementById("b7")
        if(b1.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b1.innerHTML = b4.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b4.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b3.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b3.innerHTML = b4.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b4.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b5.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b5.innerHTML = b4.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b4.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b7.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b7.innerHTML = b4.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b4.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        break
        case 5:
      var b2 = document.getElementById("b2")
      var b8 = document.getElementById("b8")
      var b5 = document.getElementById("b5")
      var b4 = document.getElementById("b4")
      if(b2.innerHTML == '')//проверяем является ли ячейка пустой
      {
         b2.innerHTML = b5.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
         b5.innerHTML = '' // присваем кнопке под индексом 0 пустоту
      }
      if(b8.innerHTML == '')//проверяем является ли ячейка пустой
      {
         b8.innerHTML = b5.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
         b5.innerHTML = '' // присваем кнопке под индексом 0 пустоту
      }
      if(b4.innerHTML == '')//проверяем является ли ячейка пустой
      {
         b4.innerHTML = b5.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
         b5.innerHTML = '' // присваем кнопке под индексом 0 пустоту
      }
      break
      case 6:
        var b6 = document.getElementById("b6")
        var b7 = document.getElementById("b7")
        var b3 = document.getElementById("b3")
        if(b7.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b7.innerHTML = b6.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b6.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b3.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b3.innerHTML = b6.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b6.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        
          break
      case 7:
        var b6 = document.getElementById("b6")
        var b8 = document.getElementById("b8")
        var b7 = document.getElementById("b7")
        var b4 = document.getElementById("b4")
        if(b6.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b6.innerHTML = b7.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b7.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b8.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b8.innerHTML = b7.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b7.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b4.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b4.innerHTML = b7.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b7.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        break
        case 8:
        var b7 = document.getElementById("b7")
        var b8 = document.getElementById("b8")
        var b5 = document.getElementById("b5")
        if(b7.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b7.innerHTML = b8.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b8.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
        if(b5.innerHTML == '')//проверяем является ли ячейка пустой
        {
           b5.innerHTML = b8.innerHTML // меняем кнопку под индексом 1 на кнопку под индексом 0
           b8.innerHTML = '' // присваем кнопке под индексом 0 пустоту
        }
          break
    }
}