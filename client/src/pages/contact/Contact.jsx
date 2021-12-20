
import "./contact.css"
export default function Contact() {
return (
  <div className="contact">
      <span className="contactTitle">Contact</span>
      <form className="contactForm">
        <label>Username</label>
        <input className="contactInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="contactInput" type="text" placeholder="Enter your email..." />
        <label>Phone</label>
        <input className="contactInput" type="text" placeholder="Enter your phone number..." />
        <label>Description</label>
        <input className="contactInput" type="text" placeholder="Enter your Concern..." />
        <button className="submitButton">Submit</button>
      </form>
        
    </div>
)
}