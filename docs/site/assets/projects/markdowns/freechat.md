Freechat project is a chatroom Android app that I developed in a group of four students. We developed both the Android app and the servers servicing the client requests.


I used Android's worker and UI threads (i.e. AsyncTask and HandlerThread Android APIs) to concurrently update the UI and communicate with the server. We implemented the server by utilizing the Ricart and Agrawala’s algorithm.


Our server-client distributed system uses TCP protocol to transmit and receive packages between Android app and the server.
