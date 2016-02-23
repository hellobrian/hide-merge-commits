var commits = document.querySelectorAll('.commit-title .message');

var hideMergeCommits = function(nodeList) {
  for (var i=0; i<nodeList.length; i++) {

    var text = nodeList[i].text.split(' ').shift().toLowerCase();
    var parent = nodeList[i].parentNode.parentNode.parentNode;

    parent.style.transition = '200ms ease-in-out';

    if (text === 'merge') {
      // parent.style.opacity = '.3';
      parent.style.display = 'none';
    }

    else if (text === 'bump') {
      parent.style.backgroundColor = 'rgba(39, 174, 96, 0.5)';
    }

    else {
      parent.style.backgroundColor = 'rgba(241, 196, 15, 0.25)';
    }



    // else {
    //   parent.style.opacity = '.05';
    //   parent.style.background = 'white !important';
    // }


  }
}

hideMergeCommits(commits);
