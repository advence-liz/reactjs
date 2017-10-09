class CodeBlock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
    componentDidMount() {
      var delay;
      var editor = CodeMirror.fromTextArea(this.textInput, {
        mode: 'text/html',
        tabMode: 'indent',
        theme:'monokai',
        lineNumbers: true
      });
      this.textInput.nextElementSibling.classList.add("col-md-6");
      var previewFrame = this.previewFrame;
      var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
      editor.on("change", function () {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
      });
  
      function updatePreview() {
        var doc =`<!DOCTYPE html>
        <html lang="en" style="height:100%;width:100%;">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            ${editor.getValue()}
        </body>
        </html>`
        preview.open();
        preview.write(doc);
        preview.close();
      }
      setTimeout(updatePreview, 300);
    }
    render() {
      const element = (
        <div className="row">
         
          <textarea value={this.state.value} onChange={this.handleChange}
            className="col-md-6"
            ref={(input) => { this.textInput = input; }}
          />
          <iframe frameBorder="0" className="col-md-6"
            style={{background:"aliceblue"}}
            ref={(previewFrame) => { this.previewFrame = previewFrame; }}
          />
        </div>
      );
      return element;
  
    }
  }
  export default CodeBlock;