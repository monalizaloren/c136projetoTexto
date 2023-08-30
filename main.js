

difference = 0;
rightWristX = 0;
leftWristX = 0;


//Crie a função 'setup'
???
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

//Crie a função 'modeloLoaded'
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}
// Crie a função 'draw'
???
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference +"px";
//Utilize 'textSize'para alterar o tamanho do texto
???(difference);
fill('#FFE787');
//Coloque o nome que aparacerá dentro do canvas
text('???', 50, 400);
}
