var app = angular.module('App', []);

app.controller('mainCtrl', function($scope, $http) {
    $scope.res = [];
    
    $scope.hotStoriesAPI = "http://www.freecodecamp.com/news/hot";

    $http.get($scope.hotStoriesAPI)
    	.success(function(hotStories) {
        	hotStories.forEach(function(hotStory) {
	            // $scope.headline = hotStory.headline;
	            $scope.headline = hotStory.headline.substring(0,35) + 
	            "...";
	            $scope.storyLink = hotStory.link;
	            $scope.discussionLink = hotStory.storyLink;
	            $scope.authorPicture = hotStory.author.picture;
	            $scope.authorName = hotStory.author.username;
	            if ($scope.authorName === undefined) {
	                $scope.authorName = "unknown"
	            }
	            $scope.upVotes = hotStory.rank;

	            $scope.timePosted = new Date(hotStory.timePosted).toGMTString().slice(0, -13);
	            console.log($scope.timePosted);
	            $scope.res.push({
	                headline: $scope.headline,
	                storyLink: $scope.storyLink,
	                discussionLink: $scope.discussionLink,
	                authorPicture: hotStory.author.picture,
	                authorName: $scope.authorName,
	                upVotes: hotStory.rank,
	                timePosted: $scope.timePosted
	            })
        })
        // console.log($scope.res)
    })
})