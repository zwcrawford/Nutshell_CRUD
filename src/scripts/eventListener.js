
import registrationForm from "./registration"

const eventListener = {
  onload () {
    window.onload = function () {
      // Load reg form when the page has loaded
      // This will override any other scripts that may have been assigned to .onload
      //registrationForm.createAndAppendForm()
    };
  }
}

export default eventListener