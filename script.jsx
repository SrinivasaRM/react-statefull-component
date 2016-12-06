class TextInput extends React.Component{
  render(){
        return React.createElement(
         "div",
         { className: "demo" },
         React.createElement(
           "label",
           null,
           this.props.header,
           ":"
         ),
         React.createElement("input", { type: "text" })
        );
    }
}


class EmailInput extends React.Component{
  render(){
      return React.createElement(
        "div",
        { className: "demo" },
        React.createElement(
          "label",
          null,
          "Email:"
        ),
        React.createElement("input", { type: "email" })
      );
    }
}


const ContactForm = React.createClass({
  render(){
      return React.createElement(
       "form",
       { className: "demo" },
       React.createElement(TextInput, { header: "First Name" }),
       React.createElement(TextInput, { header: "Last Name" }),
       React.createElement(TextInput, { header: "Middle Name" }),
       React.createElement(EmailInput, null),
       React.createElement(TextInput, { header: "Phone Number" }),
       React.createElement(TextInput, { header: "Address" }),
       React.createElement(TextInput, { header: "State" }),
       React.createElement(TextInput, { header: "Country" })
      );
    }
});


ReactDOM.render(React.createElement(ContactForm, null), document.getElementById("root"));
