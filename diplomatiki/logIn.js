function onSubmit(event){
    console.log("oleeeeeee");

  var dat = new XMLHttpRequest();
  // Setup our listener to process completed requests
  dat.onreadystatechange = function () {
    // Only run if the request is complete
    if (dat.readyState !== 4) return;
    // Process our return data
    if (dat.status >= 200 && dat.status < 300) {
      const t = JSON.parse(dat.responseText);
      console.log(t)
    //   let num = t["address"].length;
    //   let count=1;
    //   console.log(num);
    //   let i=0;
    //   for ( i = num-1; i >= 0; i--) {
      
    //     document.getElementById("add" + (count)).textContent = t["address"][i];
    //     document.getElementById("reg" + (count)).textContent = t["region"][i];
    //     document.getElementById("c" + (count)).textContent = t["city"][i];
    //     let dt = t["timestamp"][i];

    //     dt = new Date(dt * 1000);
    //     let dt_hours = dt.getHours();
    //     let dt_minutes = dt.getMinutes();
    //     if (dt_minutes < 10) {
    //       dt_minutes = "0" + dt_minutes.toString();
    //     }
    //     if (dt_hours < 10) {
    //       dt_hours = "0" + dt_hours.toString();
    //     }
    //     document.getElementById("t" + (count)).textContent = dt_hours + ":" + dt_minutes;
    //     if(count===5){
    //       break;
    //     }
    //     count++;
    //   }
      
    } else {
      console.log('error', dat);
    }
  };

  dat.open('GET', 'ole.php');
  dat.send();
}