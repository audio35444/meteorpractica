Template.postEdit.events({
  'submit form':function(e){
    e.preventDefault();//para que el navegador no intente enviar el formulario si volvemos atras o hacemos hacia delante

    var currentPostId = this._id;
    var postProperties ={
      url:$(e.target).find('[name=url]').val(),
      title:$(e.target).find('[name=title]').val()
    };
    Posts.update(currentPostId,{$set:postProperties},function(err){
      if(err)alert(err.reason);
      else Router.go('postPage',{_id:currentPostId});
    });
  },
  'click .delete':function(e){
    e.preventDefault();
    //modificar, por si las dudas se modifica el titulo sin apretar el boton
    if(confirm('Delete this post? (title: '+$(e.target).find('[name=title]').val()+')')){
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});
