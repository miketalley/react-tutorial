var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
        Hello this is MyCommentBox!
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));