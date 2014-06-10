Posts = new Meteor.Collection('posts');

////////////////////////
// CLIENT
////////////////////////

if (Meteor.isClient) {
  Template.chatClient.lines = function () {  
    return [{username: 'testuser1', chatContent:"testing line one."},
            {username: 'testuser2', chatContent:"testing line two"}, 
            {username: 'testuser1', chatContent:'testing line 3'}];
  };
  
  function getCurrentUser () 
  {
    //return 'Alice'; 
  }
  
  function insertChatMessage()
  {
      var currentUser =  getCurrentUser(); 
      var currentChatContentObject = $('#userChatTextarea');
      var currentChatContent = currentChatContentObject.val();
      
      if (true)
      { 
        //TODO        
      }
  }

  Template.chatClient.events({
    'click #sendChat': function () {            
      //TODO
    },
    
    'keydown #userChatTextarea': function(keypressed)
    {
      //TODO     
    }    
  });
}


////////////////////////
// Server
////////////////////////


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Posts.find().count() == 0)
    {
      Posts.insert({'chatContent':'hello', 'username':'Alice', timestamp: 0})
      Posts.insert({'chatContent':'hello', 'username':'Bob', timestamp:1})
    }
  });
}
