import time, requests

pump_data = {'pump_status':None, 'valve_status':None, 'growbed_status':None}

while True:
    pump_data['pump_status'] = 'On'
    pump_data['valve_status'] = 'Off'
    pump_data['growbed_status'] = 'Filling'
    r = requests.post('http://localhost:4000/pumpstatus', json=pump_data, headers = {"Content-Type": "application/json"})
    time.sleep(10)
    pump_data['pump_status'] = 'Off'
    pump_data['valve_status'] = 'Off'
    pump_data['growbed_status'] = 'Filled'
    r = requests.post('http://localhost:4000/pumpstatus', json=pump_data, headers = {"Content-Type": "application/json"})
    time.sleep(10)
    pump_data['pump_status'] = 'Off'
    pump_data['valve_status'] = 'On'
    pump_data['growbed_status'] = 'Draining'
    r = requests.post('http://localhost:4000/pumpstatus', json=pump_data, headers = {"Content-Type": "application/json"})
    time.sleep(10)
    pump_data['pump_status'] = 'Off'
    pump_data['valve_status'] = 'Off'
    pump_data['growbed_status'] = 'Drained'
    r = requests.post('http://localhost:4000/pumpstatus', json=pump_data, headers = {"Content-Type": "application/json"})
    time.sleep(10)
