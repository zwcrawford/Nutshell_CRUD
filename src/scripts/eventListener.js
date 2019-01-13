
import registrationForm from "./registration"

const eventListener = {
  onload () {
    window.onload = function () {
      // Hide all divs on page load:
      
      // This will override any other scripts that may have been assigned to .onload
      //registrationForm.createAndAppendForm()
    };
  }
}

export default eventListener