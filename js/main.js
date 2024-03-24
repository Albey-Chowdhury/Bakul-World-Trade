function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// couter timing part start

const counters = [
    { id: 'counter1', countValue: 0, targetValue: 705, animationSpeed: 5 },
    { id: 'counter2', countValue: 0, targetValue: 928, animationSpeed: 5 },
    { id: 'counter3', countValue: 0, targetValue: 1005, animationSpeed: 5 }
  ];
  
  counters.forEach(counter => {
    const counterElement = document.getElementById(counter.id);
  
    function countUp() {
      if (counter.countValue < counter.targetValue) {
        counter.countValue++;
        counterElement.textContent = counter.countValue;
      } else {
        clearInterval(interval);
      }
    }
  
    let interval = setInterval(countUp, counter.animationSpeed);
  });

// couter timing part end




