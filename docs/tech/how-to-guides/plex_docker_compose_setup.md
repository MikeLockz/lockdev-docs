# Plex docker compose setup

Not obvious from README, Plex Libraries cannot be setup and configured from external access to the service, probably for security reasons. So to trigger the built-in Plex setup, you need to forward traffic from the docker host to the local machine before accessing Plex in the browser to setup.

```
ssh -L 32400:localhost:32400 root@192.168.0.33
```

Then in browser, can access remote as localhost `http://localhost:32400/web`