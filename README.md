# google-placeId-for-googleSheet

This is a simple script that can be used to infer the google **Place Id** from an address( you can also specify a latitude,longitude string)
You must first create a Google developer account to get a valid API KEY and then you must copy it in the function where declared.

On Google Sheet open **Tools > Script Editor**
Once you select the google sheet cell where you want to show the **Place Id**, you can type the following code to call the function as a default Google Sheet function

```
 =get_placeId(address,latLong)
```

n.b. I needed just  the **place_id** value but you can get more Place information ( see https://developers.google.com/places/web-service/search ) 

