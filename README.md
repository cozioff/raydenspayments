# Raydens Menu Payment Gateway
This was originally built to ensure that people could easily pay for their registration key which they could then enter into the launcher. It wasn't very good, but it's nice come share this so you guys can take a look at the code behind this. You can copy and paste it, I don't care. 

Just a little reminder, Sentinel (prior Raydens) no longer uses this code or anything at all from this system. So cracking through this is totally pointless and useless. Spend your time usefully on other things ;)

This system has a lot of flaws and I do not recommend you to actually use this system. Do not try to resell it either, because it is definitely not worth it. I think this system was written up in under an hour and then launched. This is also why it is no longer used today. 

## How do I install this?
Assuming you already have NODE.JS installed on your computer or server (VM) start your adventure by going to stripe.com and creating some API keys there. You then post these in the index file. To automatically install all the modules you need, first run the following command in a command prompt or terminal with elevated permissions.

```npm i install```

After you have done that you should see an additional folder. That probably means you did it right.

To actually run the payment gateway run the following command.

```node server.js```

Then the server will start up and can be found locally in your browser (or your server IP if you installed it on a VM) at localhost:3000. 

**NOTE:** The part where the key is created after the purchase came through is removed. You are on your own regarding that.


This should redirect you automatically. If this doesn't work check your /etc/hosts file for more information on this.

If there is anything else I can do for you I would love to hear back from you. You can find me on discord (Cozi#3870).
