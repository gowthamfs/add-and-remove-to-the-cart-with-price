var totalPrice = 0;

function moveRow(button, price) {
    var row = button.parentNode.parentNode;
  
    if (button.innerHTML === "Add to Cart") {
      document.getElementById("table2").getElementsByTagName("tbody")[0].appendChild(row);
      button.innerHTML = "Remove";
      totalPrice += price;
      document.getElementById("total").innerText = totalPrice.toFixed(2);
      
    }

    else if (button.innerHTML === "Remove") {
      document.getElementById("table1").getElementsByTagName("tbody")[0].appendChild(row);
      button.innerHTML = "Add to Cart";
      totalPrice -= price;
      document.getElementById("total").innerText = totalPrice.toFixed(2);
    }
  }

  