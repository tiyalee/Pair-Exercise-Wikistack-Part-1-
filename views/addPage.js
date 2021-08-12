const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <div class="form-group">
  <form method="POST" action="/wiki/">
 <label for="name" class="col-sm-2 control-label">AUTHOR:</label>
  </div>
  <div class="form-group">
  <div><input id ="name" name="name" type="text">
  </div>
  </div>
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">EMAIL:</label>
    <div><input ID = "email" name="email" type="text"></div>
    </div>


    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>


    <div >
    <label for="textarea" class="col-sm-2 control-label">CONTENT:</label>
    <textarea id="textarea" name="content" rows="4" cols="50">
    </textarea>

    </div>


    <label for="status" class="col-sm-2 control-label">STATUS:</label>
    <div><input id = "status" name="status" type="text"></div>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);
