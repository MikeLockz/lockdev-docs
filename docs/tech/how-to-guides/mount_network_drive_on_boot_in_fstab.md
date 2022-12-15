# mount network drive on boot in fstab

```bash
nano /etc/fstab
```

Spacing really matters:
```bash
//192.168.0.15/media  /mnt/media  cifs  username=guest,password=,iocharset=utf8  0  0
```

This doesn't work:
```bash
#//192.168.0.15/media  /mnt/media  cifs username=guest,password=,iocharset=utf8  0  0
```