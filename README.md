# transforming-hit-and-run-millennials

### Running a local web server

* Open a Terminal (e.g. by opening Spotlight and searching for "Terminal")

* Navigate to the folder that contains your copy of this Git repository

  By default, the terminal starts in your home directory. Use `cd` to change directories, `pwd` to show the current directory (path) and `ls` to show the content of the current directory.
  
* Once you're in the right directory, start a local webserver by running `python -m SimpleHTTPServer`

  This server will run as long as you keep the Terminal window open. You can also quit the server process by pressing `Ctrl+C`.

* Now, point your browser to [http://localhost:8000/](http://localhost:8000/). (8000 is the custom port the server runs on.)

### Testing on Mobile Devices

* Make sure the device is on the same WiFi network as your laptop (that's necessary even if the two are connected by cable)

* Find out your laptop's IP address, e.g. by going into *Settings*, *Network*, selecting the Wi-Fi adapter on the left, and looking at the IP address in the status on the right.

* Start your local web server on the laptop (see above)

* Point browser on the mobile device to the IP address of your laptop  - e.g. http://192.168.1.1:8000/, but with your IP address instead of the "192.168.1.1".
