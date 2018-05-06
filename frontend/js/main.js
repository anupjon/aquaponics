var socket = io();

socket.on('monitor_data', function(data){
  var sensorData = data.data;

  $('#tempValue').text(sensorData.temp);
  $('#humValue').text(sensorData.humidity);
});

socket.on('pump_data', function(data){
  var pumpData = data.data;

  $('#pumpStatus').text(pumpData.pump_status);
  $('#valveStatus').text(pumpData.valve_status);
  $('#growbedStatus').text(pumpData.growbed_status)
});
