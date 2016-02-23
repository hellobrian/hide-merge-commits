var commits = document.querySelectorAll('.commit-title a');

var hideMergeCommits = function(nodeList) {
  for (var i=0; i<nodeList.length; i++) {
    nodeList[i].text.split(' ').forEach(function(word){
      if (word === 'Merge') {
        console.log(nodeList[i].parentNode.parentNode.parentNode);
        nodeList[i].parentNode.parentNode.parentNode.style.display = "none";
      } else {
        console.log('else');
      }
    });
  }
}

hideMergeCommits(commits);
