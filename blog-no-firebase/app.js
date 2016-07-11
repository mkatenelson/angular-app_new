var app = angular.module('blogApp', ['ngRoute']);


// ROUTES
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/posts-index.html',
      controller: 'PostsIndexCtrl'
    })
    .when('/posts/:id', {
      templateUrl: '/templates/posts-show.html',
      controller: 'PostsShowCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})


// CONTROLLERS

app.controller('PostsIndexCtrl',function($scope, BlogService) {
  console.log("Post Index");
  $scope.posts = BlogService.query();
});

app.controller('PostsShowCtrl', function($scope, BlogService, $routeParams) {
  console.log("Post Show", $routeParams.id);
  $scope.post = BlogService.get($routeParams.id);
});

  //.controller('PostCtrl', PostCtrl);
  // PostCtrl.$inject = ['$http'];
  //
  //  function PostCtrl($http){
  //   var self = this;
  //   self.all = [];
  //   self.addPost = addPost;
  //   self.newPost = {};
  // self.getPosts = getPosts;
  // self.deletePost = deletePost;
  //
  // getPosts();
  // function getPosts(){
  //   $http
  //     .get('http://localhost:3000/posts')
  //     .then(function(response){
  //       self.all = response.data.posts;
  //   });
  // };

  // function addPost(){
  //   $http
  //     .post('http://localhost:3000/posts', self.newPost)
  //     .then(function(response){
  //       getPosts();
  //   });
  //   self.newPost = {};
  // };
  //
  // function deletePost(post){
  //   $http
  //     .delete("http://localhost:3000/posts/" + post._id)
  //     .then(function(response){
  //       var index = self.all.indexOf(post);
  //       self.all.splice(index, 1);
  //     });
  //   }
  // }

// MODELS

app.factory('BlogService', function(){

  var BlogService = {};

  BlogService.query = function(){
    return ALL_POSTS;
  }

  BlogService.get = function(id){
    var id = parseInt(id);
    return ALL_POSTS.find(function(post){
      return post.id == id;
    });
  }

  return BlogService;

})




/*Temporary JSON*/

ALL_POSTS = [
    {
        "id": 1,
        "title": "Blog Post 1",
        "author": "Kate",
        "content": "The domestic cat[1][5] (Latin: Felis catus) or the feral cat[5][3] (Latin: Felis silvestris catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.[6] Cats are often valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds; different associations proclaim different numbers according to their standards.",
        "picture": "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg"
    },
    {
        "id": 2,
        "title": "Blog Post 2",
        "author": "Drake",
        "content": "Cats are similar in anatomy to the other felids, with a strong, flexible body, quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. They can see in near darkness. Like most other mammals, cats have poorer color vision and a better sense of smell than humans. Cats, despite being solitary hunters, are a social species and cat communication includes the use of a variety of vocalizations (mewing, purring, trilling, hissing, growling, and grunting), as well as cat pheromones and types of cat-specific body language.",
        "picture": "http://i2.cdn.turner.com/cnnnext/dam/assets/150324154025-14-internet-cats-restricted-super-169.jpeg"
    }
];
