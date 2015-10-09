if(Meteor.isClient){
  FlowRouter.route('/', {
    action: ()=> FlowLayout.render('hello')
  });

  FlowRouter.route('/crash',{
    action:()=>{
      FlowRouter.setQueryParams({"crash":"true"});
      FlowLayout.render('crash');
    }
  })
}
