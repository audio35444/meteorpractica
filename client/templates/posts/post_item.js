Template.postItem.helpers({
  //para que no puedan editar los post aquellos que no lo hayan creado
  ownPost:function(){
    return this.userId === Meteor.userId();
  },
  domain(){
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;//el return es para mostrar lo que sale entre {} del emmber
  }
});
