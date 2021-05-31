document.addEventListener( "DOMContentLoaded", () => 
    updateTheDOM()
  )
  
  updateTheDOM = () =>
    document.getElementById( "text" )
      .textContent = "This is really cool!"
  

