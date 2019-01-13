import dataCollection from "./dataCollection"

const registrationForm = {
  createAndAppendForm () {

    // 1. Build HTML form...like a boss!
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Welcome to Nutshell!"
    let emailField = document.createElement("fieldset")
    let emailLabel = document.createElement("label")
    emailLabel.textContent = "Email"
    emailLabel.setAttribute("for", "email")
    let emailInput = document.createElement("input")
    emailInput.setAttribute("id", "email")
    emailInput.setAttribute("name", "email")

    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    let userField = document.createElement("fieldset")
    let userLabel = document.createElement("label")
    userLabel.textContent = "Username"
    userLabel.setAttribute("for", "user")
    let userInput = document.createElement("input")
    userInput.setAttribute("id", "user")
    userInput.setAttribute("name", "user")

    userField.appendChild(userLabel)
    userField.appendChild(userInput)

    let newAcctBtn = document.createElement("button")
    newAcctBtn.textContent = "New Account"
    newAcctBtn.setAttribute("class", "new__acct")

    let loginBtn = document.createElement("button")
    loginBtn.textContent = "New Account"
    loginBtn.setAttribute("class", "new__acct")

    newAcctBtn.addEventListener("click", this.handleAddNewUser)
    loginBtn.addEventListener("click", this.handleAddNewUser)
    
    //Refer to div on index with id "regForm"
    // 2. Create an empty frag and build it up
    let registrationFormFrag = document.createDocumentFragment()
    registrationFormFrag.appendChild(formHeader)
    registrationFormFrag.appendChild(emailField)
    registrationFormFrag.appendChild(userField)
    registrationFormFrag.appendChild(newAcctBtn)

    // 3. Target the div
    let registrationArticle = document.querySelector("#regForm")

    // 4. Append frag to div
    registrationArticle.appendChild(registrationFormFrag)
  },
  handleAddNewUser (NewAcct) {
    // Add an if and forEach in here to see if user already exists or not. Do something depending on their status.
    dataCollection.yayNewPal(NewAcct)
      let userInputEmail = document.querySelector("#email").value
      let userInputUsername = document.querySelector("#user").value

      let newUser = {
        username: userInputEmail,
        email: userInputUsername
      }
      dataCollection.yayNewPal(newUser)
  }
}
export default registrationForm