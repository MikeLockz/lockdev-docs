# btdu and unraid
log in to unraid via terminal
```
ssh root@192.168.0.10
```

get the url for a compiled binary from github: https://github.com/CyberShadow/btdu/releases
- right click and copy link address

Back in the terminal, get the binary

```
wget https://github.com/CyberShadow/btdu/releases/download/v0.4.1/btdu-static-x86_64
```

Change the permissions on the file to execute
```
chmod 775 btdu-static-x86_64
```

Run the program against the broken cache drive
```
./btdu-static-x86_64 /mnt/cache
```

Get some result like:
```
btdu v0.4.1
Usage: btdu [OPTION]... PATH

 btdu v0.4.1 @ /mnt/cache
--- / --------------------------------------------------------------------------
  ~247.0 GiB [##########] /<SINGLE>

--- Details: -------------------------------------------------------------------
- Full path: /mnt/cache/
- Average query duration: 0.0002407 seconds
- Represented size: ~247.0 GiB (9819118 samples),   0.000   B
- Logical offsets: ..., 369338963183, 404251128283, 497733952294

--- Explanation:
Welcome to btdu. You are in the hierarchy root; results will be arranged
according to their block group and profile, and then by path.

Use the arrow keys to navigate, press ? for help.

```

Use the arrow keys to navigate between directories to find missing space.
