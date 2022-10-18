var arr = [1, 2, 3, 4, 5, 6,7,8]//массив чисел
var arr2 = []
var buttons = document.querySelectorAll('.button')
var nulle = document.querySelector('.buttonNull')
var b0 = document.querySelector('#b0')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var b4 = document.querySelector('#b4')
var b5 = document.querySelector('#b5')
var b6 = document.querySelector('#b6')
var b7 = document.querySelector('#b7')
var b8 = document.querySelector('#b8')

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
   nulle.textContent = ''
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
    if(b0.innerHTML == 1 && b1.innerHTML == 2 && b2.innerHTML == 3 && b3.innerHTML == 4 && b4.innerHTML == 5 && b5.innerHTML == 6 && b6.innerHTML == 7 && b7.innerHTML == 8)
    {
       alert ("Вы выйграли")
    }
    }
