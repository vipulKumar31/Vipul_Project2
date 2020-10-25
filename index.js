var serverArr = [];   //Array of server
var taskCount = 0;    //to count no. of task
var taskArr = [];     //Array of task

/*Add Server*/
document.getElementById("AddServer").addEventListener('click', function (){
addServer(serverArr);
})  

function addServer(serverArr){
/*console.log("jwgdh");*/
  var randomId= Math.floor(Math.random()*100);         // to generate random Id
   var serverName="Server" + randomId.toString();     // to make servernam unique by concatinating random Id
   serverArr.push(serverName);                        //push serverName in serverArr
}

/*Remove Server*/
document.getElementById("RemoveServer").addEventListener('click', function (){
removeServer(serverArr);
})  

function removeServer(serverArr){
   serverArr.pop();                   //delete last index from serverArr
}

/*AddTask*/
document.getElementById("AddTask").addEventListener('click', function (){
addTask();
})



function addTask(){
taskCount++;                                          // to count no. of task
document.getElementById("myText").value=taskCount;
  var randomId= Math.floor(Math.random()*100);       //to generate randomId
   var TaskName="Task" + randomId.toString();       // to make servernam unique by concatinating random Id
  var taskObj={}                                    //object creation;
  taskObj.name=TaskName;
  
  
  if(serverArr.length > 0){                      //checking length of server Array to add task for execution
  taskObj.state='Executing';
  taskArr.push(taskObj);                           // push task object in task Array
  var idiv=document.createElement('div');
  idiv.id=taskCount;                               //setting Id to the progress bar
  document.getElementById('myProgress').appendChild(idiv);
  /*console.log("E");*/
  move(taskCount);
  serverArr.pop();
  }
  else{                                         //add task as status waiting
  taskObj.state='Waiting';
  taskArr.push(taskObj);
  console.log("W");
  var idiv=document.createElement('div');
  idiv.id=taskCount;
  document.getElementById('myProgress').appendChild(idiv);
 	document.getElementById(taskCount).innerHTML = 'Waiting...';
  var btn = document.createElement("BUTTON");          
  btn.innerHTML = "Delete";
  document.getElementById(taskCount).appendChild(btn);
  btn.onclick = function(){
    var removeobj = document.getElementById(taskCount);
		removeobj.remove();                    //to delete waiting task
  };
  }
  
  
}

/*for Progress Bar*/
var i=0;
function move(divId) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(divId);
    document.getElementById(divId).style.background = '#7d63b4';
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

